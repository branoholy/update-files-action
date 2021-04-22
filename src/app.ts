import * as ActionsCore from '@actions/core';

import { RepoKit } from './repo-kit';
import { FileUtils } from './utils/file-utils';

const branchRefPrefix = 'refs/heads/';

const findChangedFiles = (paths: string[]) => {
  const changedPaths = paths.reduce<string[]>((acc, path) => {
    if (FileUtils.isFileChanged(path)) {
      console.info(`File "${path}" is changed`);
      acc.push(path);
    }

    return acc;
  }, []);

  if (changedPaths.length === 0) {
    console.info('No file has been changed');
  }

  return changedPaths;
};

export interface BranchArgs {
  readonly name: string;
  readonly base?: string;
  readonly recreate?: boolean;
}

const getBaseBranchSha = async (repoKit: RepoKit, baseBranch?: string) => {
  const {
    object: { sha }
  } = await (baseBranch ? repoKit.getBranch(baseBranch) : repoKit.getDefaultBranch());

  return sha;
};

const createBranch = async (repoKit: RepoKit, { name: branch, base: baseBranch, recreate = false }: BranchArgs) => {
  // Delete the branch
  if (await repoKit.hasBranch(branch)) {
    console.info(`Branch "${branch}" already exists`);

    if (recreate) {
      // Delete the branch if it exists and the recreate option is set
      console.info(`Deleting branch "${branch}"...`);
      await repoKit.deleteBranch(branch);
      console.info(`Branch "${branch}" has been deleted`);
    } else {
      // Keep the original branch if it exists and the recreate option is not set
      return;
    }
  }

  // Create the branch
  const baseBranchSha = await getBaseBranchSha(repoKit, baseBranch);
  await repoKit.createBranch(branch, baseBranchSha);
  console.info(`Branch "${branch}" has been created`);
};

export interface CommitArgs {
  readonly paths: string[];
  readonly message?: string;
  readonly token?: string;
  readonly amend?: boolean;
}

const commitFiles = async (repoKit: RepoKit, paths: string[], branch: string, commitArgs: CommitArgs) => {
  const commit = await repoKit.commitFiles({
    ...commitArgs,
    paths,
    branch
  });

  ActionsCore.setOutput('commit.sha', commit.sha);
  console.info(`Changed files have been committed to ${commit.sha}`);
};

export interface PullRequestArgs {
  readonly title?: string;
  readonly body?: string;
  readonly base?: string;
  readonly labels?: string[];
  readonly assignees?: string[];
  readonly reviewers?: string[];
  readonly teamReviewers?: string[];
  readonly milestone?: number;
  readonly draft?: boolean;
}

const createPullRequest = async (repoKit: RepoKit, branch: string, pullRequestArgs: PullRequestArgs) => {
  const pullRequest = await repoKit.createPullRequest({
    ...pullRequestArgs,
    branch
  });

  console.info(`Pull request has been created at ${pullRequest.html_url}`);
};

export interface AppArgs {
  readonly repository: string;
  readonly token: string;
  readonly branch: BranchArgs;
  readonly commit?: CommitArgs;
  readonly pullRequest?: PullRequestArgs;
}

export const app = async ({ repository, token, branch, commit, pullRequest }: AppArgs) => {
  try {
    const [owner, repositoryName] = repository.split('/');
    if (!owner || !repositoryName) {
      throw new Error(`Repository "${repository}" does not have the valid format (owner/repositoryName)`);
    }

    if (commit && !commit.message && !commit.amend) {
      throw new Error('Commit message is missing, please specify the "commit.message" input');
    }

    if (branch.name.startsWith(branchRefPrefix)) {
      branch = {
        ...branch,
        name: branch.name.substr(branchRefPrefix.length)
      };
    }

    const changedPaths = commit ? findChangedFiles(commit.paths) : null;
    if (changedPaths?.length === 0) {
      return 0;
    }

    const repoKit = new RepoKit(owner, repositoryName, token);

    await createBranch(repoKit, branch);

    if (commit && changedPaths) {
      await commitFiles(repoKit, changedPaths, branch.name, commit);
    }

    if (pullRequest) {
      await createPullRequest(repoKit, branch.name, pullRequest);
    }
  } catch (error) {
    console.error(error);
    return 1;
  }

  return 0;
};
