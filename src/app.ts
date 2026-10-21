import * as ActionsCore from '@actions/core';
import { globSync } from 'glob';

import { RepoKit } from './repo-kit.ts';
import { dp, FileUtils } from './utils/index.ts';

const branchRefPrefix = 'refs/heads/';

const getBaseBranchName = async (repoKit: RepoKit, baseBranchName: string | null) =>
  baseBranchName ?? (await repoKit.getDefaultBranchName());

const findChangedFiles = (paths: string[]) => {
  const filePaths = paths.reduce<string[]>((acc, path) => {
    acc.push(...globSync(path, { nodir: true }));
    return acc;
  }, []);

  const changedPaths = filePaths.reduce<string[]>((acc, filePath) => {
    if (FileUtils.isFileUntracked(filePath)) {
      console.info(`File "${filePath}" is created`);
      acc.push(filePath);

      return acc;
    }

    if (FileUtils.isFileChanged(filePath)) {
      console.info(`File "${filePath}" is changed`);
      acc.push(filePath);

      return acc;
    }

    return acc;
  }, []);

  if (changedPaths.length === 0) {
    console.info('No file has been changed');
  }

  return changedPaths;
};

type CreateBranchFromBaseBranchOptions = {
  baseBranchName: string | null;
  recreate: boolean;
};

type CreateBranchFromCommitOptions = {
  commitSha: string;
  recreate: boolean;
};

type CreateBranchOptions = CreateBranchFromBaseBranchOptions | CreateBranchFromCommitOptions;

const createBranch = async (repoKit: RepoKit, branchName: string, options: CreateBranchOptions) => {
  const { recreate } = options;

  // Delete the branch
  if (await repoKit.hasBranch(branchName)) {
    console.info(`Branch "${branchName}" already exists`);

    if (recreate) {
      // Delete the branch if it exists and the recreate option is set
      console.info(`Deleting branch "${branchName}"...`);
      await repoKit.deleteBranch(branchName);
      console.info(`Branch "${branchName}" has been deleted`);
    } else {
      // Keep the original branch if it exists and the recreate option is not set
      return false;
    }
  }

  // Create the branch
  if ('baseBranchName' in options) {
    const { baseBranchName } = options;

    const {
      object: { sha: baseBranchSha },
    } = await repoKit.getBranch(await getBaseBranchName(repoKit, baseBranchName));

    await repoKit.createBranch(branchName, baseBranchSha);
  } else {
    const { commitSha } = options;
    await repoKit.createBranch(branchName, commitSha);
  }

  console.info(`Branch "${branchName}" has been created`);

  return true;
};

type CommitFilesOptions = {
  message: string | null;
  token: string | null;
  amend: boolean;
};

const commitFiles = async (repoKit: RepoKit, paths: string[], branchName: string, options: CommitFilesOptions) => {
  const commit = await repoKit.commit({
    paths,
    branchName,
    ...dp(
      {
        message: options.message,
        token: options.token,
      },
      null,
    ),
    amend: options.amend,
  });

  return commit.sha;
};

type CreatePullRequestOptions = {
  title?: string;
  body?: string;
  base?: string;
  labels?: string[];
  assignees?: string[];
  reviewers?: string[];
  teamReviewers?: string[];
  milestone?: number;
  draft?: boolean;
};

const createPullRequest = async (repoKit: RepoKit, branchName: string, options: CreatePullRequestOptions) => {
  const pullRequest = await repoKit.createPullRequest({
    ...options,
    ...dp({ baseBranchName: options.base }),
    branchName,
  });

  console.info(`Pull request has been created at ${pullRequest.html_url}`);
};

export interface BranchArgs {
  readonly name: string;
  readonly base?: string;
  readonly recreate?: boolean;
  readonly creation?: 'base' | 'commit';
}

export interface CommitArgs {
  readonly paths: string[];
  readonly message?: string;
  readonly token?: string;
  readonly amend?: boolean;
}

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

export interface AppArgs {
  readonly repository: string;
  readonly token: string;
  readonly branch: BranchArgs;
  readonly commit?: CommitArgs;
  readonly pullRequest?: PullRequestArgs;
}

export const app = async ({ repository, token, branch, commit, pullRequest }: AppArgs) => {
  try {
    const [owner, repositoryName] = repository.split('/', 2);
    if (!owner || !repositoryName) {
      throw new Error(`Repository "${repository}" does not have the valid format (owner/repositoryName)`);
    }

    if (commit && !commit.message && !commit.amend) {
      throw new Error('Commit message is missing, please specify the "commit.message" input');
    }

    if (!commit && branch.creation === 'commit') {
      throw new Error('The "branch.creation: commit" input requires committing to be enabled');
    }

    let branchName = branch.name;
    if (branchName.startsWith(branchRefPrefix)) {
      branchName = branchName.slice(branchRefPrefix.length);
    }

    const changedPaths = commit ? findChangedFiles(commit.paths) : null;
    if (changedPaths?.length === 0) {
      return 0;
    }

    const branchBase = branch.base ?? null;
    const branchRecreate = branch.recreate ?? false;
    const branchCreation = branch.creation ?? 'base';

    const commitMessage = commit?.message ?? null;
    const commitToken = commit?.token ?? null;
    const commitAmend = commit?.amend ?? false;

    const repoKit = new RepoKit(owner, repositoryName, token);

    const branchExists = branchCreation === 'commit' && (await repoKit.hasBranch(branchName));

    if (branchCreation === 'base') {
      await createBranch(repoKit, branchName, {
        baseBranchName: branchBase,
        recreate: branchRecreate,
      });
    }

    if (commit && changedPaths) {
      const commitSha = await commitFiles(
        repoKit,
        changedPaths,
        branchCreation === 'base' || (branchExists && !branchRecreate)
          ? branchName
          : await getBaseBranchName(repoKit, branchBase),
        {
          message: commitMessage,
          token: commitToken,
          amend: commitAmend,
        },
      );

      if (branchCreation === 'base' || (branchExists && !branchRecreate)) {
        await repoKit.updateBranch({
          name: branchName,
          commitSha,
          force: commitAmend,
        });
      } else {
        await createBranch(repoKit, branchName, {
          commitSha,
          recreate: branchRecreate,
        });
      }

      ActionsCore.setOutput('commit.sha', commitSha);
      console.info(`Changed files have been committed to ${commitSha}`);
    }

    if (pullRequest) {
      await createPullRequest(repoKit, branchName, {
        ...dp({ title: commitMessage }, null),
        ...pullRequest,
      });
    }
  } catch (error) {
    console.error(error);
    return 1;
  }

  return 0;
};
