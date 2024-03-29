import * as ActionsCore from '@actions/core';
import { execSync } from 'child_process';
import { GlobOptionsWithFileTypesUnset, globSync } from 'glob';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { Awaited, FileUtils, TestUtils } from ':/utils';

import { app, AppArgs, BranchArgs } from '../app';
import { RepoKit } from '../repo-kit';

const consoleInfoMock = vi.spyOn(console, 'info').mockReset();
const consoleErrorMock = vi.spyOn(console, 'error').mockReset();

vi.mock('@actions/core');
const actionsCoreSetOutputMock = TestUtils.asMockedFunction(ActionsCore.setOutput);

vi.mock('child_process');
const execSyncMock = TestUtils.asMockedFunction(execSync);

vi.mock('glob');
const globSyncMock =
  TestUtils.asMockedFunction<(path: string, options?: GlobOptionsWithFileTypesUnset | undefined) => string[]>(globSync);

vi.mock('../utils/file-utils');
const isFileUntrackedMock = TestUtils.asMockedFunction(FileUtils.isFileUntracked);
const isFileChangedMock = TestUtils.asMockedFunction(FileUtils.isFileChanged);

vi.mock('../repo-kit');
const RepoKitMock = TestUtils.asMockedClass(RepoKit);

describe('app', () => {
  const owner = 'owner';
  const repositoryName = 'repository-name';
  const repository = `${owner}/${repositoryName}`;
  const token = 'token';

  const branch: BranchArgs = {
    name: 'branch'
  };

  const commit = {
    paths: ['path1', 'path2', 'path3'],
    message: 'commit-message'
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
    draft: true
  };

  const appArgs: AppArgs = {
    repository,
    token,
    branch
  };

  const defaultBranchName = 'default-branch';
  const defaultBranchSha = 'default-branch-sha';

  const getDefaultBranchResult: Awaited<ReturnType<RepoKit['getBranch']>> = {
    name: defaultBranchName,
    node_id: 'node_id',
    object: { sha: defaultBranchSha, type: 'type', url: 'url' },
    ref: 'default-branch-ref',
    url: 'url'
  };

  const commitFilesResult = {
    sha: 'new-commit-sha'
  } as Awaited<ReturnType<RepoKit['commitFiles']>>;

  const createPullRequestResult = {
    html_url: 'html_url'
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
    RepoKitMock.prototype.commitFiles.mockResolvedValue(commitFilesResult);

    // Create a pull request
    RepoKitMock.prototype.createPullRequest.mockResolvedValue(createPullRequestResult);
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
      pullRequest: {}
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [['No file has been changed']]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2'], ['path3']]);

    // No request to GitHub is made
    expect(RepoKitMock.mock.instances.length).toBe(0);
  });

  test('flow #02: all files are changed, branch does not exist => create branch, commit', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch does not exist
    RepoKitMock.prototype.hasBranch.mockResolvedValue(false);

    // Use the default base branch
    RepoKitMock.prototype.getBranch.mockResolvedValue(getDefaultBranchResult);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes
      commit
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" has been created`],
      [`Changed files have been committed to ${commitFilesResult.sha}`]
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.getBranch, [[defaultBranchName]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createBranch, [[branch.name, defaultBranchSha]]);

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          ...commit,
          branchName: branch.name
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);
  });

  test('flow #03: all files are changed, branch does not exist => create branch, use non-default base, commit', async () => {
    const baseBranchName = 'base-branch';
    const baseBranchSha = 'base-branch-sha';

    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch does not exist
    RepoKitMock.prototype.hasBranch.mockResolvedValue(false);

    // Use a non-default base branch
    RepoKitMock.prototype.getBranch.mockResolvedValue({
      name: baseBranchName,
      node_id: 'node_id',
      object: { sha: baseBranchSha, type: 'type', url: 'url' },
      ref: 'base-branch-ref',
      url: 'url'
    });

    const exitCode = await app({
      ...appArgs,
      // Use non-default base branch
      branch: {
        ...branch,
        base: baseBranchName
      },
      // Commit the changes
      commit
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" has been created`],
      [`Changed files have been committed to ${commitFilesResult.sha}`]
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.getBranch, [[baseBranchName]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createBranch, [[branch.name, baseBranchSha]]);

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          ...commit,
          branchName: branch.name
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);
  });

  test('flow #04: all files are changed, branch exists => recreate branch, commit', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    // Use the default base branch
    RepoKitMock.prototype.getBranch.mockResolvedValue(getDefaultBranchResult);

    const exitCode = await app({
      ...appArgs,
      // Recreate the branch
      branch: {
        ...branch,
        recreate: true
      },
      // Commit the changes
      commit
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
      [`Changed files have been committed to ${commitFilesResult.sha}`]
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.getBranch, [[defaultBranchName]]);

    // The branch is deleted
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.deleteBranch, [[branch.name]]);

    // The branch is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createBranch, [[branch.name, defaultBranchSha]]);

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          ...commit,
          branchName: branch.name
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);
  });

  test('flow #05: all files are changed, ref exists => do not recreate branch, commit', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Use a ref
      branch: {
        name: `refs/heads/${branch.name}`
      },
      // Commit the changes
      commit
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" already exists`],
      [`Changed files have been committed to ${commitFilesResult.sha}`]
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is not created
    expect(RepoKitMock.mock.instances[0]?.createBranch).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          ...commit,
          branchName: branch.name
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);
  });

  test('flow #06: all files are changed, branch exists => do not recreate branch, do not commit', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs
      // Do not commit
      // commit: missing
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [[`Branch "${branch.name}" already exists`]]);

    expect(globSyncMock).not.toBeCalled();
    expect(isFileChangedMock).not.toBeCalled();
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is not created
    expect(RepoKitMock.mock.instances[0]?.createBranch).not.toBeCalled();

    // No file is committed
    expect(RepoKitMock.mock.instances[0]?.commitFiles).not.toBeCalled();

    // The commit hash is not sent to the output
    expect(actionsCoreSetOutputMock).not.toBeCalled();
  });

  test('flow #07: all files are changed, branch exists => do not recreate branch, commit, do not create pull request', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes
      commit
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
      [`Changed files have been committed to ${commitFilesResult.sha}`]
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is not created
    expect(RepoKitMock.mock.instances[0]?.createBranch).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          ...commit,
          branchName: branch.name
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);

    // A pull request is not created
    expect(RepoKitMock.mock.instances[0]?.createPullRequest).not.toBeCalled();
  });

  test('flow #08: all files are changed, branch exists => do not recreate branch, amend commit, do not create pull request', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes, amend the commit
      commit: {
        ...commit,
        amend: true
      }
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
      [`Changed files have been committed to ${commitFilesResult.sha}`]
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is not created
    expect(RepoKitMock.mock.instances[0]?.createBranch).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          ...commit,
          branchName: branch.name,
          amend: true
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);

    // A pull request is not created
    expect(RepoKitMock.mock.instances[0]?.createPullRequest).not.toBeCalled();
  });

  test('flow #09: all files are changed, branch exists => do not recreate branch, amend commit without commit message, create pull request', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes, amend the commit
      commit: {
        paths: commit.paths,
        amend: true
      },
      // Create a pull request
      pullRequest: {}
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" already exists`],
      [`Changed files have been committed to ${commitFilesResult.sha}`],
      [`Pull request has been created at ${createPullRequestResult.html_url}`]
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is not created
    expect(RepoKitMock.mock.instances[0]?.createBranch).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          paths: commit.paths,
          branchName: branch.name,
          amend: true
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);

    // A pull request is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createPullRequest, [
      [
        {
          branchName: branch.name
        }
      ]
    ]);
  });

  test('flow #10: all files are changed, branch exists => do not recreate branch, do not commit, do not create pull request', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs
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

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is not created
    expect(RepoKitMock.mock.instances[0]?.createBranch).not.toBeCalled();

    // No file is committed
    expect(RepoKitMock.mock.instances[0]?.commitFiles).not.toBeCalled();

    // The commit hash is not sent to the output
    expect(actionsCoreSetOutputMock).not.toBeCalled();

    // A pull request is not created
    expect(RepoKitMock.mock.instances[0]?.createPullRequest).not.toBeCalled();
  });

  test('flow #11: all files are changed, branch exists => do not recreate branch, commit, create pull request', async () => {
    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes
      commit,
      // Create a pull request
      pullRequest: {}
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" already exists`],
      [`Changed files have been committed to ${commitFilesResult.sha}`],
      [`Pull request has been created at ${createPullRequestResult.html_url}`]
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is not created
    expect(RepoKitMock.mock.instances[0]?.createBranch).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          ...commit,
          branchName: branch.name
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);

    // A pull request is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createPullRequest, [
      [
        {
          branchName: branch.name,
          title: commit.message
        }
      ]
    ]);
  });

  test('flow #12: all files are changed, branch does not exist => create branch, commit with token, create pull request with all args', async () => {
    const commitToken = 'commit-token';

    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => path === 'path3');
    isFileChangedMock.mockImplementation((path) => ['path1', 'path2'].includes(path));

    // The branch does not exist
    RepoKitMock.prototype.hasBranch.mockResolvedValue(false);

    // Use the default base branch
    RepoKitMock.prototype.getBranch.mockResolvedValue(getDefaultBranchResult);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes with a custom token
      commit: {
        ...commit,
        token: commitToken
      },
      // Create a pull request with all arguments
      pullRequest
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      ['File "path3" is created'],
      [`Branch "${branch.name}" has been created`],
      [`Changed files have been committed to ${commitFilesResult.sha}`],
      [`Pull request has been created at ${createPullRequestResult.html_url}`]
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [['path1'], ['path2'], ['path3']]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.getBranch, [[defaultBranchName]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createBranch, [[branch.name, defaultBranchSha]]);

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          ...commit,
          branchName: branch.name,
          token: commitToken
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);

    // A pull request is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createPullRequest, [
      [
        {
          ...pullRequest,
          baseBranchName: pullRequest.base,
          branchName: branch.name
        }
      ]
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
      commit
    });

    expect(consoleInfoMock).not.toBeCalled();
    expect(exitCode).toBe(1);

    TestUtils.expectToBeCalled(consoleErrorMock, [[error]]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
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
      repository: 'wrong'
    });

    expect(consoleInfoMock).not.toBeCalled();
    expect(exitCode).toBe(1);

    TestUtils.expectToBeCalled(consoleErrorMock, [
      [new Error('Repository "wrong" does not have the valid format (owner/repositoryName)')]
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
      commit: { paths: commit.paths }
    });

    expect(consoleInfoMock).not.toBeCalled();
    expect(exitCode).toBe(1);

    TestUtils.expectToBeCalled(consoleErrorMock, [
      [new Error('Commit message is missing, please specify the "commit.message" input')]
    ]);

    expect(globSyncMock).not.toBeCalled();
    expect(execSyncMock).not.toBeCalled();
    expect(isFileChangedMock).not.toBeCalled();

    // No request to GitHub is made
    expect(RepoKitMock.mock.instances.length).toBe(0);
  });

  test('flow #16: glob finds more files, all files are changed, branch does not exist => create branch, commit', async () => {
    // Glob finds more files
    globSyncMock.mockImplementation((path) => [path, `${path}-2`]);

    // All files are changed
    isFileUntrackedMock.mockImplementation((path) => ['path3', 'path3-2'].includes(path));
    isFileChangedMock.mockImplementation((path) => ['path1', 'path1-2', 'path2', 'path2-2'].includes(path));

    // The branch does not exist
    RepoKitMock.prototype.hasBranch.mockResolvedValue(false);

    // Use the default base branch
    RepoKitMock.prototype.getBranch.mockResolvedValue(getDefaultBranchResult);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes
      commit
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
      [`Changed files have been committed to ${commitFilesResult.sha}`]
    ]);

    TestUtils.expectToBeCalled(globSyncMock, [
      ['path1', { nodir: true }],
      ['path2', { nodir: true }],
      ['path3', { nodir: true }]
    ]);
    TestUtils.expectToBeCalled(isFileUntrackedMock, [
      ['path1'],
      ['path1-2'],
      ['path2'],
      ['path2-2'],
      ['path3'],
      ['path3-2']
    ]);
    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path1-2'], ['path2'], ['path2-2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch.name]]);
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.getBranch, [[defaultBranchName]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createBranch, [[branch.name, defaultBranchSha]]);

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          ...commit,
          paths: ['path1', 'path1-2', 'path2', 'path2-2', 'path3', 'path3-2'],
          branchName: branch.name
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);
  });
});
