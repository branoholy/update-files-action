import * as ActionsCore from '@actions/core';
import { execSync } from 'child_process';

import { app, AppArgs, CommitArgs, PullRequestArgs } from '../app';
import { RepoKit } from '../repo-kit';
import { FileUtils } from '../utils/file-utils';
import { TestUtils } from '../utils/test-utils';
import { Awaited } from '../utils/type-utils';

const consoleInfoMock = jest.spyOn(console, 'info');
const consoleErrorMock = jest.spyOn(console, 'error');

jest.mock('@actions/core');
const actionsCoreSetOutputMock = TestUtils.asMockedFunction(ActionsCore.setOutput);

jest.mock('child_process');
const execSyncMock = TestUtils.asMockedFunction(execSync);

jest.mock('../utils/file-utils');
const isFileChangedMock = TestUtils.asMockedFunction(FileUtils.isFileChanged);

jest.mock('../repo-kit');
const RepoKitMock = TestUtils.asMockedClass(RepoKit);

describe('app', () => {
  const branchDefaultArg = 'update-files';

  const owner = 'owner';
  const repositoryName = 'repository-name';
  const repository = `${owner}/${repositoryName}`;
  const token = 'token';

  const branch = 'branch';

  const commit: CommitArgs = {
    paths: ['path1', 'path2'],
    message: 'commit-message'
  };

  const pullRequest: PullRequestArgs = {
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
    token
  };

  const defaultBranch = 'default-branch';
  const defaultBranchSha = 'default-branch-sha';

  const getDefaultBranchResult: Awaited<ReturnType<RepoKit['getDefaultBranch']>> = {
    name: defaultBranch,
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
    jest.resetAllMocks();

    // Default branch name
    RepoKitMock.prototype.getDefaultBranchName.mockResolvedValue(defaultBranch);

    // Default branch
    RepoKitMock.prototype.getDefaultBranch.mockResolvedValue(getDefaultBranchResult);

    // Commit files
    RepoKitMock.prototype.commitFiles.mockResolvedValue(commitFilesResult);

    // Create a pull request
    RepoKitMock.prototype.createPullRequest.mockResolvedValue(createPullRequestResult);
  });

  test('flow #1: no file is changed', async () => {
    // No file is changed
    isFileChangedMock.mockReturnValue(false);

    const exitCode = await app({
      ...appArgs,
      // Commit the changes
      commit
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [['No file has been changed']]);

    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);

    // No request to GitHub is made
    expect(RepoKitMock.mock.instances.length).toBe(0);
  });

  test('flow #2: all files are changed, the branch does not exist, use defaults for the commit and the pull request', async () => {
    // All files are changed
    isFileChangedMock.mockReturnValue(true);

    // The branch does not exist
    RepoKitMock.prototype.hasBranch.mockResolvedValue(false);

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
      [`Branch "${branchDefaultArg}" has been created`],
      [`Changed files have been committed to ${commitFilesResult.sha}`],
      [`Pull request has been created at ${createPullRequestResult.html_url}`]
    ]);

    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branchDefaultArg]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createBranch, [[branchDefaultArg, defaultBranchSha]]);

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          branch: branchDefaultArg,
          paths: commit.paths,
          message: commit.message
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);

    // A pull request is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createPullRequest, [[{ branch: branchDefaultArg }]]);
  });

  test('flow #3: all files are changed, the branch exists, delete the branch', async () => {
    // All files are changed
    isFileChangedMock.mockReturnValue(true);

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Use a custom branch, delete the branch
      branch,
      deleteBranch: true,
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
      [`Branch "${branch}" already exists`],
      [`Deleting branch "${branch}"...`],
      [`Branch "${branch}" has been deleted`],
      [`Branch "${branch}" has been created`],
      [`Changed files have been committed to ${commitFilesResult.sha}`],
      [`Pull request has been created at ${createPullRequestResult.html_url}`]
    ]);

    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch]]);

    // The branch is deleted
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.deleteBranch, [[branch]]);

    // The branch is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createBranch, [[branch, defaultBranchSha]]);

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          branch,
          paths: commit.paths,
          message: commit.message
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);

    // A pull request is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createPullRequest, [[{ branch }]]);
  });

  test('flow #4: all files are changed, the branch (ref) exists, do not delete the branch', async () => {
    // All files are changed
    isFileChangedMock.mockReturnValue(true);

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Use a custom branch (ref)
      branch: `refs/heads/${branch}`,
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
      [`Branch "${branch}" already exists`],
      [`Changed files have been committed to ${commitFilesResult.sha}`],
      [`Pull request has been created at ${createPullRequestResult.html_url}`]
    ]);

    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is not created
    expect(RepoKitMock.mock.instances[0]?.createBranch).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          branch,
          paths: commit.paths,
          message: commit.message
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);

    // A pull request is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createPullRequest, [[{ branch }]]);
  });

  test('flow #5: all files are changed, the branch exists, do not delete the branch, do not create a pull request', async () => {
    // All files are changed
    isFileChangedMock.mockReturnValue(true);

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Use a custom branch
      branch,
      // Commit the changes
      commit,
      // Do not create a pull request
      pullRequest: undefined
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      [`Branch "${branch}" already exists`],
      [`Changed files have been committed to ${commitFilesResult.sha}`]
    ]);

    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is not created
    expect(RepoKitMock.mock.instances[0]?.createBranch).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          branch,
          paths: commit.paths,
          message: commit.message
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);

    // A pull request is not created
    expect(RepoKitMock.mock.instances[0]?.createPullRequest).not.toBeCalled();
  });

  test('flow #6: all files are changed, the branch exists, do not delete the branch, amend the commit, do not create a pull request', async () => {
    // All files are changed
    isFileChangedMock.mockReturnValue(true);

    // The branch exists
    RepoKitMock.prototype.hasBranch.mockResolvedValue(true);

    const exitCode = await app({
      ...appArgs,
      // Use a custom branch
      branch,
      // Commit the changes, amend the commit
      commit: {
        ...commit,
        amend: true
      },
      // Do not create a pull request
      pullRequest: undefined
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      [`Branch "${branch}" already exists`],
      [`Changed files have been committed to ${commitFilesResult.sha}`]
    ]);

    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is not created
    expect(RepoKitMock.mock.instances[0]?.createBranch).not.toBeCalled();

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          branch,
          paths: commit.paths,
          message: commit.message,
          amend: true
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);

    // A pull request is not created
    expect(RepoKitMock.mock.instances[0]?.createPullRequest).not.toBeCalled();
  });

  test('flow #7: an exception is thrown when checking for changed files', async () => {
    const error = new Error('error-message');

    isFileChangedMock.mockImplementation(() => {
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

    TestUtils.expectToBeCalled(isFileChangedMock, [['path1']]);

    // No request to GitHub is made
    expect(RepoKitMock.mock.instances.length).toBe(0);
  });

  test('flow #8: all files are changed, the branch does not exist, use all custom arguments for the pull request', async () => {
    // All files are changed
    isFileChangedMock.mockReturnValue(true);

    // The branch does not exist
    RepoKitMock.prototype.hasBranch.mockResolvedValue(false);

    const exitCode = await app({
      ...appArgs,
      // Use a custom branch
      branch,
      // Commit the changes
      commit,
      // Create a pull request with all arguments
      pullRequest
    });

    expect(consoleErrorMock).not.toBeCalled();
    expect(exitCode).toBe(0);

    TestUtils.expectToBeCalled(consoleInfoMock, [
      ['File "path1" is changed'],
      ['File "path2" is changed'],
      [`Branch "${branch}" has been created`],
      [`Changed files have been committed to ${commitFilesResult.sha}`],
      [`Pull request has been created at ${createPullRequestResult.html_url}`]
    ]);

    TestUtils.expectToBeCalled(isFileChangedMock, [['path1'], ['path2']]);
    TestUtils.expectToBeCalled(RepoKitMock, [[owner, repositoryName, token]]);

    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.hasBranch, [[branch]]);

    // The branch is not deleted
    expect(RepoKitMock.mock.instances[0]?.deleteBranch).not.toBeCalled();

    // The branch is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createBranch, [[branch, defaultBranchSha]]);

    // All files are committed
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.commitFiles, [
      [
        {
          branch,
          paths: commit.paths,
          message: commit.message
        }
      ]
    ]);

    // The commit hash is sent to the output
    TestUtils.expectToBeCalled(actionsCoreSetOutputMock, [['commit.sha', commitFilesResult.sha]]);

    // A pull request is created
    TestUtils.expectToBeCalled(RepoKitMock.mock.instances[0]?.createPullRequest, [
      [
        {
          branch,
          ...pullRequest
        }
      ]
    ]);
  });

  test('flow #9: wrong repository is used', async () => {
    // All files are changed
    isFileChangedMock.mockReturnValue(true);

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

    expect(execSyncMock).not.toBeCalled();
    expect(isFileChangedMock).not.toBeCalled();

    // No request to GitHub is made
    expect(RepoKitMock.mock.instances.length).toBe(0);
  });

  test('flow #10: commit message is missing', async () => {
    // All files are changed
    isFileChangedMock.mockReturnValue(true);

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

    expect(execSyncMock).not.toBeCalled();
    expect(isFileChangedMock).not.toBeCalled();

    // No request to GitHub is made
    expect(RepoKitMock.mock.instances.length).toBe(0);
  });
});
