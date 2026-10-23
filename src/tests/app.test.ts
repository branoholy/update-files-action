import { execSync } from 'node:child_process';

import * as ActionsCore from '@actions/core';
import { type GlobOptionsWithFileTypesUnset, globSync } from 'glob';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { app, type AppArgs, type BranchArgs } from '../app.ts';
import { RepoKit } from '../repo-kit.ts';
import { FileUtils, TestUtils } from '../utils/index.ts';

const consoleInfoMock = vi.spyOn(console, 'info').mockReset();
const consoleErrorMock = vi.spyOn(console, 'error').mockReset();

vi.mock('@actions/core');
const actionsCoreSetOutputMock = TestUtils.asMockedFunction(ActionsCore.setOutput);

vi.mock('child_process');
const execSyncMock = TestUtils.asMockedFunction(execSync);

vi.mock('glob');
const globSyncMock =
  TestUtils.asMockedFunction<(path: string, options?: GlobOptionsWithFileTypesUnset) => string[]>(globSync);

vi.mock('../utils/file-utils');
const isFileUntrackedMock = TestUtils.asMockedFunction(FileUtils.isFileUntracked);
const isFileChangedMock = TestUtils.asMockedFunction(FileUtils.isFileChanged);

vi.mock('../repo-kit');

const RepoKitMock = TestUtils.asMockedClass(RepoKit);
const hasBranchMock = vi.spyOn(RepoKitMock.prototype, 'hasBranch');
const getBranchMock = vi.spyOn(RepoKitMock.prototype, 'getBranch');
const deleteBranchMock = vi.spyOn(RepoKitMock.prototype, 'deleteBranch');
const createBranchMock = vi.spyOn(RepoKitMock.prototype, 'createBranch');
const updateBranchMock = vi.spyOn(RepoKitMock.prototype, 'updateBranch');
const commitMock = vi.spyOn(RepoKitMock.prototype, 'commit');
const createPullRequestMock = vi.spyOn(RepoKitMock.prototype, 'createPullRequest');

describe('app', () => {
  const owner = 'owner';
  const repositoryName = 'repository-name';
  const repository = `${owner}/${repositoryName}`;
  const token = 'token';

  const branch: BranchArgs = {
    name: 'branch',
  };

  const commit = {
    paths: ['path1', 'path2', 'path3'],
    message: 'commit-message',
  };

  const pullRequest = {
    title: 'pull-request-title',
    body: 'pull-request-body',
    base: 'custom-base-branch',
    labels: ['label1', 'label2'],
    assignees: ['assignee1'],
    reviewers: ['reviewer1', 'reviewer2', 'reviewer3'],
    teamReviewers: ['teamReviewer1'],
    milestone: 42,
    draft: true,
  };

  const appArgs: AppArgs = {
    repository,
    token,
    branch,
  };

  const defaultBranchName = 'default-branch';
  const defaultBranchSha = 'default-branch-sha';

  const getDefaultBranchResult: Awaited<ReturnType<RepoKit['getBranch']>> = {
    name: defaultBranchName,
    node_id: 'node_id',
    object: { sha: defaultBranchSha, type: 'type', url: 'url' },
    ref: 'default-branch-ref',
    url: 'url',
  };

  const commitResult = {
    sha: 'new-commit-sha',
  } as Awaited<ReturnType<RepoKit['commit']>>;

  const createPullRequestResult = {
    html_url: 'html_url',
  } as Awaited<ReturnType<RepoKit['createPullRequest']>>;

  beforeEach(() => {
    vi.resetAllMocks();

    // Mock console
    consoleInfoMock.mockReset();
    consoleErrorMock.mockReset();

    // Glob finds only one file
    globSyncMock.mockImplementation((path: string) => [path]);

    // Default branch name
    RepoKitMock.prototype.getDefaultBranchName.mockResolvedValue(defaultBranchName);

    // Commit files
    commitMock.mockResolvedValue(commitResult);

    // Create a pull request
    createPullRequestMock.mockResolvedValue(createPullRequestResult);
  });

  test('flow #01: no file is changed => do not connect to GitHub', async () => {
    // No file is changed
    isFileUntrackedMock.mockReturnValue(false);
    isFileChangedMock.mockReturnValue(false);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes
      commit,
      // Create a pull request
      pullRequest: {},
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [['No file has been changed']]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2'], ['path3']]);

    // No request to GitHub is made
    expect(RepoKitMock.mock.instances.length).toBe(0);
  });

  test('flow #02: all files are changed, branch does not exist => commit, create branch', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch does not exist
    hasBranchMock.mockResolvedValue(false);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes
      commit,
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" has been created`],
      [`Changed files have been committed to ${commitResult.sha}`],
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);
    expect(getBranchMock).not.toBeCalled();

    // The branch is not deleted
    expect(deleteBranchMock).not.toBeCalled();

    // The branch is created
    TestUtils.expectToBeCalled(createBranchMock, [[branch.name, commitResult.sha]]);

    // All files are committed
    TestUtils.expectToBeCalled(commitMock, [
      [
        {
          ...commit,
          branchName: defaultBranchName,
        },
      ],
    ]);

    expect(commitMock).toHaveBeenCalledBefore(createBranchMock);
    expect(updateBranchMock).not.toBeCalled();

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitResult.sha]]);
  });

  test('flow #03: all files are changed, branch does not exist => commit from non-default base, create branch', async () => {
    const baseBranchName = 'base-branch';

    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch does not exist
    hasBranchMock.mockResolvedValue(false);

    const exitCode = await app({
      ...appArgs,
      // Use non-default base branch
      branch: {
        ...branch,
        base: baseBranchName,
      },
      // Commit the changes
      commit,
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" has been created`],
      [`Changed files have been committed to ${commitResult.sha}`],
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);
    expect(getBranchMock).not.toBeCalled();

    // The branch is not deleted
    expect(deleteBranchMock).not.toBeCalled();

    // The branch is created
    TestUtils.expectToBeCalled(createBranchMock, [[branch.name, commitResult.sha]]);

    // All files are committed
    TestUtils.expectToBeCalled(commitMock, [
      [
        {
          ...commit,
          branchName: baseBranchName,
        },
      ],
    ]);

    expect(commitMock).toHaveBeenCalledBefore(createBranchMock);
    expect(updateBranchMock).not.toBeCalled();

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitResult.sha]]);
  });

  test('flow #04: all files are changed, branch exists => commit, recreate branch', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    hasBranchMock.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Recreate the branch
      branch: {
        ...branch,
        recreate: true,
      },
      // Commit the changes
      commit,
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" already exists`],
      [`Deleting branch "${branch.name}"...`],
      [`Branch "${branch.name}" has been deleted`],
      [`Branch "${branch.name}" has been created`],
      [`Changed files have been committed to ${commitResult.sha}`],
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);
    expect(getBranchMock).not.toBeCalled();

    // The branch is deleted
    TestUtils.expectToBeCalled(deleteBranchMock, [[branch.name]]);

    // The branch is created
    TestUtils.expectToBeCalled(createBranchMock, [[branch.name, commitResult.sha]]);

    // All files are committed
    TestUtils.expectToBeCalled(commitMock, [
      [
        {
          ...commit,
          branchName: defaultBranchName,
        },
      ],
    ]);

    expect(commitMock).toHaveBeenCalledBefore(createBranchMock);
    expect(updateBranchMock).not.toBeCalled();
    expect(commitMock).toHaveBeenCalledBefore(deleteBranchMock);
    expect(deleteBranchMock).toHaveBeenCalledBefore(createBranchMock);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitResult.sha]]);
  });

  test('flow #05: all files are changed, ref exists => do not recreate branch, commit', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    hasBranchMock.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Use a ref
      branch: {
        name: `refs/heads/${branch.name}`,
      },
      // Commit the changes
      commit,
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" already exists`],
      [`Changed files have been committed to ${commitResult.sha}`],
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);

    // The branch is not deleted
    expect(deleteBranchMock).not.toBeCalled();

    // The branch is not created
    expect(createBranchMock).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(commitMock, [
      [
        {
          ...commit,
          branchName: branch.name,
        },
      ],
    ]);

    TestUtils.expectToBeCalled(updateBranchMock, [[branch.name, commitResult.sha, false]]);
    expect(commitMock).toHaveBeenCalledBefore(updateBranchMock);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitResult.sha]]);
  });

  test('flow #06: all files are changed, branch exists => do not recreate branch, do not commit', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    hasBranchMock.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Do not commit
      // commit: missing
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [[`Branch "${branch.name}" already exists`]]);

    expect(globSyncMock).not.toBeCalled();
    expect(isFileChangedMock).not.toBeCalled();
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);

    // The branch is not deleted
    expect(deleteBranchMock).not.toBeCalled();

    // The branch is not created
    expect(createBranchMock).not.toBeCalled();

    // No file is committed
    expect(commitMock).not.toBeCalled();
    expect(updateBranchMock).not.toBeCalled();

    // The commit hash is not sent to the output
    expect(actionsCoreSetOutputMock).not.toBeCalled();
  });

  test('flow #07: all files are changed, branch exists => do not recreate branch, commit, do not create pull request', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    hasBranchMock.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes
      commit,
      // Do not create a pull request
      // pullRequest: missing
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" already exists`],
      [`Changed files have been committed to ${commitResult.sha}`],
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);

    // The branch is not deleted
    expect(deleteBranchMock).not.toBeCalled();

    // The branch is not created
    expect(createBranchMock).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(commitMock, [
      [
        {
          ...commit,
          branchName: branch.name,
        },
      ],
    ]);

    TestUtils.expectToBeCalled(updateBranchMock, [[branch.name, commitResult.sha, false]]);
    expect(commitMock).toHaveBeenCalledBefore(updateBranchMock);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitResult.sha]]);

    // A pull request is not created
    expect(createPullRequestMock).not.toBeCalled();
  });

  test('flow #08: all files are changed, branch exists => do not recreate branch, amend commit, do not create pull request', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    hasBranchMock.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes, amend the commit
      commit: {
        ...commit,
        amend: true,
      },
      // Do not create a pull request
      // pullRequest: missing
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" already exists`],
      [`Changed files have been committed to ${commitResult.sha}`],
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);

    // The branch is not deleted
    expect(deleteBranchMock).not.toBeCalled();

    // The branch is not created
    expect(createBranchMock).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(commitMock, [
      [
        {
          ...commit,
          branchName: branch.name,
          amend: true,
        },
      ],
    ]);

    TestUtils.expectToBeCalled(updateBranchMock, [[branch.name, commitResult.sha, true]]);
    expect(commitMock).toHaveBeenCalledBefore(updateBranchMock);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitResult.sha]]);

    // A pull request is not created
    expect(createPullRequestMock).not.toBeCalled();
  });

  test('flow #09: all files are changed, branch exists => do not recreate branch, amend commit without commit message, create pull request', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    hasBranchMock.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes, amend the commit
      commit: {
        paths: commit.paths,
        amend: true,
      },
      // Create a pull request
      pullRequest: {},
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" already exists`],
      [`Changed files have been committed to ${commitResult.sha}`],
      [`Pull request has been created at ${createPullRequestResult.html_url}`],
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);

    // The branch is not deleted
    expect(deleteBranchMock).not.toBeCalled();

    // The branch is not created
    expect(createBranchMock).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(commitMock, [
      [
        {
          paths: commit.paths,
          branchName: branch.name,
          amend: true,
        },
      ],
    ]);

    TestUtils.expectToBeCalled(updateBranchMock, [[branch.name, commitResult.sha, true]]);
    expect(commitMock).toHaveBeenCalledBefore(updateBranchMock);
    expect(updateBranchMock).toHaveBeenCalledBefore(createPullRequestMock);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitResult.sha]]);

    // A pull request is created
    TestUtils.expectToBeCalled(createPullRequestMock, [
      [
        {
          branchName: branch.name,
        },
      ],
    ]);
  });

  test('flow #10: all files are changed, branch exists => do not recreate branch, do not commit, do not create pull request', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    hasBranchMock.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Do not commit
      // commit: missing,
      // Do not create a pull request
      // pullRequest: missing
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [[`Branch "${branch.name}" already exists`]]);

    expect(globSyncMock).not.toBeCalled();
    expect(isFileChangedMock).not.toBeCalled();
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);

    // The branch is not deleted
    expect(deleteBranchMock).not.toBeCalled();

    // The branch is not created
    expect(createBranchMock).not.toBeCalled();

    // No file is committed
    expect(commitMock).not.toBeCalled();
    expect(updateBranchMock).not.toBeCalled();

    // The commit hash is not sent to the output
    expect(actionsCoreSetOutputMock).not.toBeCalled();

    // A pull request is not created
    expect(createPullRequestMock).not.toBeCalled();
  });

  test('flow #11: all files are changed, branch exists => do not recreate branch, commit, create pull request', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    hasBranchMock.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes
      commit,
      // Create a pull request
      pullRequest: {},
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" already exists`],
      [`Changed files have been committed to ${commitResult.sha}`],
      [`Pull request has been created at ${createPullRequestResult.html_url}`],
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);

    // The branch is not deleted
    expect(deleteBranchMock).not.toBeCalled();

    // The branch is not created
    expect(createBranchMock).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(commitMock, [
      [
        {
          ...commit,
          branchName: branch.name,
        },
      ],
    ]);

    TestUtils.expectToBeCalled(updateBranchMock, [[branch.name, commitResult.sha, false]]);
    expect(commitMock).toHaveBeenCalledBefore(updateBranchMock);
    expect(updateBranchMock).toHaveBeenCalledBefore(createPullRequestMock);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitResult.sha]]);

    // A pull request is created
    TestUtils.expectToBeCalled(createPullRequestMock, [
      [
        {
          branchName: branch.name,
          title: commit.message,
        },
      ],
    ]);
  });

  test('flow #12: all files are changed, branch does not exist => commit with token, create branch, create pull request with all args', async () => {
    const commitToken = 'commit-token';

    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch does not exist
    hasBranchMock.mockResolvedValue(false);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes with a custom token
      commit: {
        ...commit,
        token: commitToken,
      },
      // Create a pull request with all arguments
      pullRequest,
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" has been created`],
      [`Changed files have been committed to ${commitResult.sha}`],
      [`Pull request has been created at ${createPullRequestResult.html_url}`],
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);
    expect(getBranchMock).not.toBeCalled();

    // The branch is not deleted
    expect(deleteBranchMock).not.toBeCalled();

    // The branch is created
    TestUtils.expectToBeCalled(createBranchMock, [[branch.name, commitResult.sha]]);

    // All files are committed
    TestUtils.expectToBeCalled(commitMock, [
      [
        {
          ...commit,
          branchName: defaultBranchName,
          token: commitToken,
        },
      ],
    ]);

    expect(commitMock).toHaveBeenCalledBefore(createBranchMock);
    expect(updateBranchMock).not.toBeCalled();
    expect(createBranchMock).toHaveBeenCalledBefore(createPullRequestMock);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitResult.sha]]);

    // A pull request is created
    TestUtils.expectToBeCalled(createPullRequestMock, [
      [
        {
          ...pullRequest,
          baseBranchName: pullRequest.base,
          branchName: branch.name,
        },
      ],
    ]);
  });

  test('flow #13: exception is thrown when checking for changed files => print error, do not connect to GitHub, exit 1', async () => {
    const error = new Error('error-message');

    isFileUntrackedMock.mockImplementation(() => {
      throw error;
    });

    const exitCode = await app({
      ...appArgs,
      // Commit the changes
      commit,
    });

    expect(consoleInfoMock).not.toBeCalled();
    expect(exitCode).toBe(1);

    TestUtils.expectToBeCalled(consoleErrorMock, [[error]]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1']]);

    // No request to GitHub is made
    expect(RepoKitMock.mock.instances.length).toBe(0);
  });

  test('flow #14: wrong repository is used => print error, do not connect to GitHub, exit 1', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    const exitCode = await app({
      ...appArgs,
      // A wrong repository is used
      repository: 'wrong',
    });

    expect(consoleInfoMock).not.toBeCalled();
    expect(exitCode).toBe(1);

    TestUtils.expectToBeCalled(consoleErrorMock, [
      [new Error('Repository "wrong" does not have the valid format (owner/repositoryName)')],
    ]);

    expect(globSyncMock).not.toBeCalled();
    expect(execSyncMock).not.toBeCalled();
    expect(isFileChangedMock).not.toBeCalled();

    // No request to GitHub is made
    expect(RepoKitMock.mock.instances.length).toBe(0);
  });

  test('flow #15: commit paths are specified, commit message is missing => print error, do not connect to GitHub, exit 1', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    const exitCode = await app({
      ...appArgs,
      // Commit the changes without a commit message
      commit: { paths: commit.paths },
    });

    expect(consoleInfoMock).not.toBeCalled();
    expect(exitCode).toBe(1);

    TestUtils.expectToBeCalled(consoleErrorMock, [
      [new Error('Commit message is missing, please specify the "commit.message" input')],
    ]);

    expect(globSyncMock).not.toBeCalled();
    expect(execSyncMock).not.toBeCalled();
    expect(isFileChangedMock).not.toBeCalled();

    // No request to GitHub is made
    expect(RepoKitMock.mock.instances.length).toBe(0);
  });

  test('flow #16: glob finds more files, all files are changed, branch does not exist => commit, create branch', async () => {
    // Glob finds more files
    globSyncMock.mockImplementation((path) => [path, `${path}-2`]);

    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => ['path3', 'path3-2'].includes(path));
    isFileChangedMock.mockImplementation((path) => ['path1', 'path1-2', 'path2', 'path2-2'].includes(path));

    // The branch does not exist
    hasBranchMock.mockResolvedValue(false);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes
      commit,
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path1-2" is changed'],
      ['File "path2" is changed'],
      ['File "path2-2" is changed'],
      ['File "path3" is created'],
      ['File "path3-2" is created'],
      [`Branch "${branch.name}" has been created`],
      [`Changed files have been committed to ${commitResult.sha}`],
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true, dot: true }],
      ['path2', { nodir: true, dot: true }],
      ['path3', { nodir: true, dot: true }],
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [
      ['path1'],
      ['path1-2'],
      ['path2'],
      ['path2-2'],
      ['path3'],
      ['path3-2'],
    ]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path1-2'], ['path2'], ['path2-2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(hasBranchMock, [[branch.name]]);
    expect(getBranchMock).not.toBeCalled();

    // The branch is not deleted
    expect(deleteBranchMock).not.toBeCalled();

    // The branch is created
    TestUtils.expectToBeCalled(createBranchMock, [[branch.name, commitResult.sha]]);

    // All files are committed
    TestUtils.expectToBeCalled(commitMock, [
      [
        {
          ...commit,
          paths: ['path1', 'path1-2', 'path2', 'path2-2', 'path3', 'path3-2'],
          branchName: defaultBranchName,
        },
      ],
    ]);

    expect(commitMock).toHaveBeenCalledBefore(createBranchMock);
    expect(updateBranchMock).not.toBeCalled();

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitResult.sha]]);
  });

  test.each([
    { flow: '19', branchExists: false, amend: false },
    { flow: '20', branchExists: true, amend: false },
    { flow: '21', branchExists: false, amend: true },
    { flow: '22', branchExists: true, amend: true },
  ])(
    'flow #$flow: custom base, branchExists=$branchExists, amend=$amend => commit, create or recreate branch',
    async ({ branchExists, amend }) => {
      const baseBranchName = 'custom-base';
      const commitArgs = {
        paths: commit.paths,
        token: 'commit-token',
        amend,
        ...(!amend && { message: commit.message }),
      };
      isFileChangedMock.mockReturnValue(true);
      hasBranchMock.mockResolvedValue(branchExists);

      const exitCode = await app({
        ...appArgs,
        branch: { name: `refs/heads/${branch.name}`, base: baseBranchName, recreate: true },
        commit: commitArgs,
      });

      expect(exitCode).toBe(0);
      expect(consoleErrorMock).not.toBeCalled();
      TestUtils.expectToBeCalled(commitMock, [[{ ...commitArgs, branchName: baseBranchName }]]);
      TestUtils.expectToBeCalled(createBranchMock, [[branch.name, commitResult.sha]]);
      TestUtils.expectToBeCalled(deleteBranchMock, branchExists ? [[branch.name]] : []);
      expect(commitMock).toHaveBeenCalledBefore(createBranchMock);
      if (branchExists) {
        expect(commitMock).toHaveBeenCalledBefore(deleteBranchMock);
        expect(deleteBranchMock).toHaveBeenCalledBefore(createBranchMock);
      }
      expect(updateBranchMock).not.toBeCalled();
      expect(RepoKitMock.prototype.getDefaultBranchName.mock.calls).toHaveLength(0);
      TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitResult.sha]]);
    },
  );

  test.each([
    { flow: '23', branchExists: false },
    { flow: '24', branchExists: true },
  ])(
    'flow #$flow: commit fails, branchExists=$branchExists => preserve branch state, exit 1',
    async ({ branchExists }) => {
      isFileChangedMock.mockReturnValue(true);
      hasBranchMock.mockResolvedValue(branchExists);
      const error = new Error('Commit could not be created');
      commitMock.mockRejectedValue(error);

      const exitCode = await app({
        ...appArgs,
        branch: { ...branch, recreate: true },
        commit,
        pullRequest: {},
      });

      expect(exitCode).toBe(1);
      TestUtils.expectToBeCalled(consoleErrorMock, [[error]]);
      expect(deleteBranchMock).not.toBeCalled();
      expect(createBranchMock).not.toBeCalled();
      expect(updateBranchMock).not.toBeCalled();
      expect(createPullRequestMock).not.toBeCalled();
      expect(actionsCoreSetOutputMock).not.toBeCalled();
    },
  );

  test.each([
    { flow: '25', branchExists: false },
    { flow: '26', branchExists: true },
  ])(
    'flow #$flow: no commit, branchExists=$branchExists => create or recreate branch from custom base',
    async ({ branchExists }) => {
      const baseBranchName = 'custom-base';
      hasBranchMock.mockResolvedValue(branchExists);
      getBranchMock.mockResolvedValue(getDefaultBranchResult);

      const exitCode = await app({
        ...appArgs,
        branch: { ...branch, base: baseBranchName, recreate: true },
      });

      expect(exitCode).toBe(0);
      expect(consoleErrorMock).not.toBeCalled();
      TestUtils.expectToBeCalled(getBranchMock, [[baseBranchName]]);
      TestUtils.expectToBeCalled(createBranchMock, [[branch.name, defaultBranchSha]]);
      TestUtils.expectToBeCalled(deleteBranchMock, branchExists ? [[branch.name]] : []);
      if (branchExists) {
        expect(deleteBranchMock).toHaveBeenCalledBefore(createBranchMock);
      }
      expect(commitMock).not.toBeCalled();
      expect(updateBranchMock).not.toBeCalled();
      expect(actionsCoreSetOutputMock).not.toBeCalled();
    },
  );
});
