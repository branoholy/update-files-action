import { Octokit } from '@octokit/rest';
import btoa from 'btoa';
import { readFileSync } from 'fs';

import { dp } from './utils/js-utils';

interface CreateCommitArgs {
  readonly branchSha: string;
  readonly treeSha: string;
  readonly message?: string;
  readonly token?: string;
  readonly amend: boolean;
}

export interface CommitFilesArgs {
  readonly paths: string[];
  readonly message?: string;
  readonly branchName: string;
  readonly token?: string;
  readonly amend?: boolean;
}

export interface CreatePullRequestArgs {
  readonly branchName: string;
  readonly baseBranchName?: string;
  readonly title?: string;
  readonly body?: string;
  readonly labels?: string[];
  readonly assignees?: string[];
  readonly reviewers?: string[];
  readonly teamReviewers?: string[];
  readonly milestone?: number;
  readonly draft?: boolean;
}

export class RepoKit {
  private octokit: Octokit;

  constructor(private owner: string, private repositoryName: string, token: string) {
    this.octokit = new Octokit({ auth: token });
  }

  getRepositoryInfo() {
    return {
      owner: this.owner,
      repo: this.repositoryName
    };
  }

  async hasBranch(name: string) {
    try {
      await this.getBranch(name);

      return true;
    } catch (error) {
      return false;
    }
  }

  async getBranch(name: string) {
    const { data } = await this.octokit.git.getRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${name}`
    });

    return {
      ...data,
      name
    };
  }

  async createBranch(name: string, sha: string) {
    const { data } = await this.octokit.git.createRef({
      ...this.getRepositoryInfo(),
      ref: `refs/heads/${name}`,
      sha
    });

    return data;
  }

  deleteBranch(name: string) {
    return this.octokit.git.deleteRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${name}`
    });
  }

  async getDefaultBranchName() {
    const response = await this.octokit.repos.get(this.getRepositoryInfo());

    if (response.status !== 200) {
      throw new Error(`Fetch for the default branch failed with the status code ${response.status}`);
    }

    return response.data.default_branch;
  }

  private async createBlobs(paths: string[]) {
    const encoding = 'base64';
    const type = 'blob' as const;
    const mode = '100644' as const;

    const blobs = [];

    for (const path of paths) {
      const {
        data: { sha }
      } = await this.octokit.git.createBlob({
        ...this.getRepositoryInfo(),
        content: btoa(readFileSync(path)),
        encoding
      });

      blobs.push({ type, mode, path, sha });
    }

    return blobs;
  }

  private async createCommit({ branchSha, treeSha, message, token, amend }: CreateCommitArgs) {
    const commitOctokit = token ? new Octokit({ auth: token }) : this.octokit;

    if (amend) {
      const { data: commit } = await this.octokit.git.getCommit({
        ...this.getRepositoryInfo(),
        commit_sha: branchSha
      });

      const { data } = await commitOctokit.git.createCommit({
        ...this.getRepositoryInfo(),
        parents: commit.parents.map(({ sha }) => sha),
        tree: treeSha,
        message: message || commit.message
      });

      return data;
    } else {
      if (!message) {
        throw new Error('Commit message is empty');
      }

      const { data } = await commitOctokit.git.createCommit({
        ...this.getRepositoryInfo(),
        parents: [branchSha],
        tree: treeSha,
        message
      });

      return data;
    }
  }

  async commitFiles({ paths, branchName, amend = false, ...restCommitArgs }: CommitFilesArgs) {
    const treeBlobs = await this.createBlobs(paths);

    const {
      object: { sha: branchSha }
    } = await this.getBranch(branchName);

    const {
      data: { sha: treeSha }
    } = await this.octokit.git.createTree({
      ...this.getRepositoryInfo(),
      tree: treeBlobs,
      base_tree: branchSha
    });

    const commit = await this.createCommit({ branchSha, treeSha, amend, ...restCommitArgs });

    await this.octokit.git.updateRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${branchName}`,
      sha: commit.sha,
      force: amend
    });

    return commit;
  }

  private async getBranchCommitMessage(branchName: string) {
    const {
      data: { commit }
    } = await this.octokit.repos.getBranch({
      ...this.getRepositoryInfo(),
      branch: branchName
    });

    return commit.commit.message;
  }

  async createPullRequest({
    branchName,
    baseBranchName,
    title,
    body,
    labels,
    assignees,
    reviewers,
    teamReviewers,
    milestone,
    draft
  }: CreatePullRequestArgs) {
    const { data } = await this.octokit.pulls.create({
      ...this.getRepositoryInfo(),
      base: baseBranchName || (await this.getDefaultBranchName()),
      head: branchName,
      title: title || (await this.getBranchCommitMessage(branchName)),
      ...dp({ body }),
      ...dp({ draft })
    });

    if (reviewers || teamReviewers) {
      await this.octokit.pulls.requestReviewers({
        ...this.getRepositoryInfo(),
        pull_number: data.number,
        ...dp({ reviewers }),
        ...dp({ team_reviewers: teamReviewers })
      });
    }

    if (labels || assignees || milestone) {
      await this.octokit.issues.update({
        ...this.getRepositoryInfo(),
        issue_number: data.number,
        ...dp({ labels }),
        ...dp({ assignees }),
        ...dp({ milestone })
      });
    }

    return data;
  }
}
