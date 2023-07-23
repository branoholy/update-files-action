import * as ActionsCore from '@actions/core';
import { globSync } from 'glob';

import { RepoKit } from './repo-kit';
import { FileUtils } from './utils/file-utils';
import { dp } from './utils/js-utils';

const branchRefPrefix = 'refs/heads/';

const findChangedFiles = (paths: string[]) => {
  const filePaths = paths.reduce<string[]>((acc, path) => {
    acc.push(...globSync(path, { nodir: true }));
    return acc;
  }, []);

  const changedPaths = filePaths.reduce<string[]>((acc, filePath) => {
    if (FileUtils.isFileChanged(filePath)) {
      console.info(`File "${filePath}" is changed`);
      acc.push(filePath);
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

const createBranch = async (
  repoKit: RepoKit,
  { name: branchName, base: baseBranchName, recreate = false }: BranchArgs
) => {
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
      return;
    }
  }

  // Create the branch
  const {
    object: { sha: baseBranchSha }
  } = await repoKit.getBranch(baseBranchName ?? (await repoKit.getDefaultBranchName()));

  await repoKit.createBranch(branchName, baseBranchSha);
  console.info(`Branch "${branchName}" has been created`);
};

export interface CommitArgs {
  readonly paths: string[];
  readonly message?: string;
  readonly token?: string;
  readonly amend?: boolean;
}

const commitFiles = async (repoKit: RepoKit, paths: string[], branchName: string, commitArgs: CommitArgs) => {
  const commit = await repoKit.commitFiles({
    ...commitArgs,
    paths,
    branchName
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

const createPullRequest = async (repoKit: RepoKit, branchName: string, pullRequestArgs: PullRequestArgs) => {
  const pullRequest = await repoKit.createPullRequest({
    ...pullRequestArgs,
    ...dp({ baseBranchName: pullRequestArgs.base }),
    branchName
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

export const app = async ({
  repository,
  token,
  branch: { name: branchName, ...restBranch },
  commit,
  pullRequest
}: AppArgs) => {
  try {
    const [owner, repositoryName] = repository.split('/');
    if (!owner || !repositoryName) {
      throw new Error(`Repository "${repository}" does not have the valid format (owner/repositoryName)`);
    }

    if (commit && !commit.message && !commit.amend) {
      throw new Error('Commit message is missing, please specify the "commit.message" input');
    }

    if (branchName.startsWith(branchRefPrefix)) {
      branchName = branchName.substr(branchRefPrefix.length);
    }

    const changedPaths = commit ? findChangedFiles(commit.paths) : null;
    if (changedPaths?.length === 0) {
      return 0;
    }

    const repoKit = new RepoKit(owner, repositoryName, token);

    await createBranch(repoKit, { name: branchName, ...restBranch });

    if (commit && changedPaths) {
      await commitFiles(repoKit, changedPaths, branchName, commit);
    }

    if (pullRequest) {
      await createPullRequest(repoKit, branchName, pullRequest);
    }
  } catch (error) {
    console.error(error);
    return 1;
  }

  return 0;
};
