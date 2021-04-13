import ChildProcess from 'child_process';
import FileSystem from 'fs';
import Nock from 'nock';
import Path from 'path';

import { main } from '../src/main';
import { TestUtils } from '../src/utils/test-utils';
import { E2EConstants } from './e2e-constants';
import { E2EExpects } from './e2e-expects';
import { E2EMocks } from './e2e-mocks';
import { GitHubMock } from './github-mock';

jest.mock('child_process', () => {
  const originalModule = jest.requireActual('child_process');

  return {
    ...originalModule,
    execSync: (...[command, options]: Parameters<typeof ChildProcess['execSync']>) => {
      return originalModule.execSync(command, {
        ...options,
        env: process.env
      });
    }
  };
});

describe('e2e tests', () => {
  let gitHubMock: GitHubMock;

  beforeAll(() => {
    Nock.disableNetConnect();

    FileSystem.mkdirSync(E2EConstants.testFilesDirectory);
    FileSystem.mkdirSync(E2EConstants.shellMocksDirectory);
    process.env.PATH = `${E2EConstants.shellMocksDirectory}:${process.env.PATH}`;

    FileSystem.writeFileSync(Path.join(E2EConstants.testFilesDirectory, 'path1'), 'content1');
    FileSystem.writeFileSync(Path.join(E2EConstants.testFilesDirectory, 'path2'), 'content2');

    ChildProcess.execSync(`git add ${E2EConstants.testFilesDirectory}`);
  });

  afterAll(() => {
    // Restore E2EMocks
    jest.restoreAllMocks();

    // Fix a memory leak
    Nock.restore();

    ChildProcess.execSync(`git reset HEAD ${E2EConstants.testFilesDirectory}`);
    FileSystem.rmdirSync(E2EConstants.testFilesDirectory, { recursive: true });
    FileSystem.rmdirSync(E2EConstants.shellMocksDirectory);
  });

  beforeEach(() => {
    ChildProcess.execSync(`git checkout ${E2EConstants.testFilesDirectory}`, { stdio: 'ignore' });

    jest.resetAllMocks();
    Nock.cleanAll();

    gitHubMock = new GitHubMock(E2EConstants.repository, E2EConstants.defaultBranch);

    process.env.GITHUB_REPOSITORY = E2EConstants.repository;
    process.env.INPUT_TOKEN = E2EConstants.token;
  });

  afterEach(() => {
    delete process.env.GITHUB_REPOSITORY;

    Object.keys(process.env).forEach((key) => {
      if (key.startsWith('INPUT_')) {
        delete process.env[key];
      }
    });

    ChildProcess.execSync(`rm -rf ${E2EConstants.shellMocksDirectory}/*`);
  });

  test('flow #01: no file is changed => do not connect to GitHub', async () => {
    // No file is changed
    ChildProcess.execSync(
      `echo -n content1 > ${E2EConstants.testFilesDirectory}/path1 && echo -n content2 > ${E2EConstants.testFilesDirectory}/path2`
    );

    // Commit the changes
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;

    // Create a pull request
    process.env['INPUT_PULL-REQUEST'] = 'true';

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [['No file has been changed']]);

    // No request to GitHub is made
    expect(gitHubMock.restMocks.any).not.toBeCalled();
  });

  test('flow #02: all files are changed, branch does not exist => create branch, commit', async () => {
    const branch = E2EConstants.branchDefaultArg;

    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // Commit the changes
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [
      [`File "${E2EConstants.testFilesDirectory}/path1" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2" is changed`],
      [`Branch "${branch}" has been created`],
      ['Changed files have been committed to commit-1-sha']
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    E2EExpects.branchIsCreated(gitHubMock, E2EConstants.token, branch);
    E2EExpects.filesAreCommitted(gitHubMock, E2EConstants.token, branch);
  });

  test('flow #03: all files are changed, branch exists => delete branch, commit', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(E2EConstants.branch);

    // Use a custom branch, delete the branch
    process.env.INPUT_BRANCH = E2EConstants.branch;
    process.env['INPUT_DELETE-BRANCH'] = 'true';

    // Commit the changes
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [
      [`File "${E2EConstants.testFilesDirectory}/path1" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2" is changed`],
      [`Branch "${E2EConstants.branch}" already exists`],
      [`Deleting branch "${E2EConstants.branch}"...`],
      [`Branch "${E2EConstants.branch}" has been deleted`],
      [`Branch "${E2EConstants.branch}" has been created`],
      ['Changed files have been committed to commit-1-sha']
    ]);

    // The branch is deleted
    TestUtils.expectToBeCalled(gitHubMock.restMocks.git.deleteRef, [
      [expect.stringMatching(new RegExp(`/heads%2F${E2EConstants.branch}$`)), expect.anything()]
    ]);

    E2EExpects.branchIsCreated(gitHubMock, E2EConstants.token, E2EConstants.branch);
    E2EExpects.filesAreCommitted(gitHubMock, E2EConstants.token, E2EConstants.branch);
  });

  test('flow #04: all files are changed, ref exists => do not delete branch, commit', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(E2EConstants.branch);

    // Use a custom branch (ref)
    process.env.INPUT_BRANCH = `refs/heads/${E2EConstants.branch}`;

    // Commit the changes
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [
      [`File "${E2EConstants.testFilesDirectory}/path1" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2" is changed`],
      [`Branch "${E2EConstants.branch}" already exists`],
      [`Changed files have been committed to commit-1-sha`]
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    E2EExpects.filesAreCommitted(gitHubMock, E2EConstants.token, E2EConstants.branch);
  });

  test('flow #05: all files are changed, branch exists => do not delete branch, do not commit', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(E2EConstants.branch);

    // Use a custom branch
    process.env.INPUT_BRANCH = E2EConstants.branch;

    // Do not commit
    process.env['INPUT_COMMIT'] = 'false';

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [[`Branch "${E2EConstants.branch}" already exists`]]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    // No file is committed
    expect(gitHubMock.restMocks.git.createCommit).not.toBeCalled();

    // The commit hash is not sent to the output
    expect(E2EMocks.processStdoutWrite).not.toBeCalled();
  });

  test('flow #06: all files are changed, branch exists => do not delete branch, commit, do not create pull request', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(E2EConstants.branch);

    // Use a custom branch
    process.env.INPUT_BRANCH = E2EConstants.branch;

    // Commit the changes
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;

    // Do not create a pull request
    process.env['INPUT_PULL-REQUEST'] = 'false';

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [
      [`File "${E2EConstants.testFilesDirectory}/path1" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2" is changed`],
      [`Branch "${E2EConstants.branch}" already exists`],
      [`Changed files have been committed to commit-1-sha`]
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    E2EExpects.filesAreCommitted(gitHubMock, E2EConstants.token, E2EConstants.branch);

    // A pull request is not created
    expect(gitHubMock.restMocks.pulls.create).not.toBeCalled();
  });

  test('flow #07: all files are changed, branch exists => do not delete branch, amend commit, do not create pull request', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(E2EConstants.branch);
    gitHubMock.commit(E2EConstants.branch);

    // Use a custom branch
    process.env.INPUT_BRANCH = E2EConstants.branch;

    // Commit the changes, amend the commit
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;
    process.env['INPUT_COMMIT.AMEND'] = 'true';

    // Do not create a pull request
    process.env['INPUT_PULL-REQUEST'] = 'false';

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [
      [`File "${E2EConstants.testFilesDirectory}/path1" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2" is changed`],
      [`Branch "${E2EConstants.branch}" already exists`],
      [`Changed files have been committed to commit-2-sha`]
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    E2EExpects.filesAreCommitted(gitHubMock, E2EConstants.token, E2EConstants.branch, undefined, true);

    // A pull request is not created
    expect(gitHubMock.restMocks.pulls.create).not.toBeCalled();
  });

  test('flow #08: all files are changed, branch exists => do not delete branch, do not commit, do not create pull request', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(E2EConstants.branch);

    // Use a custom branch
    process.env.INPUT_BRANCH = E2EConstants.branch;

    // Do not commit
    process.env['INPUT_COMMIT'] = 'false';

    // Do not create a pull request
    process.env['INPUT_PULL-REQUEST'] = 'false';

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [[`Branch "${E2EConstants.branch}" already exists`]]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    // No file is committed
    expect(gitHubMock.restMocks.git.createCommit).not.toBeCalled();

    // A pull request is not created
    expect(gitHubMock.restMocks.pulls.create).not.toBeCalled();
  });

  test('flow #09: all files are changed, branch exists => do not delete branch, commit, create pull request', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(E2EConstants.branch);

    // Use a custom branch
    process.env.INPUT_BRANCH = E2EConstants.branch;

    // Commit the changes
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;

    // Create a pull request
    process.env['INPUT_PULL-REQUEST'] = 'true';

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [
      [`File "${E2EConstants.testFilesDirectory}/path1" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2" is changed`],
      [`Branch "${E2EConstants.branch}" already exists`],
      [`Changed files have been committed to commit-1-sha`],
      [`Pull request has been created at html_url`]
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    E2EExpects.filesAreCommitted(gitHubMock, E2EConstants.token, E2EConstants.branch);
    E2EExpects.pullRequestIsCreated(gitHubMock, E2EConstants.token, E2EConstants.branch);
  });

  test('flow #10: all files are changed, branch does not exist => create branch, commit with token, create pull request with all args', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // Use a custom branch
    process.env.INPUT_BRANCH = E2EConstants.branch;

    // Commit the changes
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;
    process.env['INPUT_COMMIT.TOKEN'] = E2EConstants.commitToken;

    // Create a pull request with all arguments
    process.env['INPUT_PULL-REQUEST.TITLE'] = E2EConstants.pullRequestTitle;
    process.env['INPUT_PULL-REQUEST.BODY'] = E2EConstants.pullRequestBody;
    process.env['INPUT_PULL-REQUEST.BASE'] = E2EConstants.pullRequestBase;
    process.env['INPUT_PULL-REQUEST.LABELS'] = E2EConstants.pullRequestLabels;
    process.env['INPUT_PULL-REQUEST.ASSIGNEES'] = E2EConstants.pullRequestAssignees;
    process.env['INPUT_PULL-REQUEST.REVIEWERS'] = E2EConstants.pullRequestReviewers;
    process.env['INPUT_PULL-REQUEST.TEAM-REVIEWERS'] = E2EConstants.pullRequestTeamReviewers;
    process.env['INPUT_PULL-REQUEST.MILESTONE'] = E2EConstants.pullRequestMilestone;
    process.env['INPUT_PULL-REQUEST.DRAFT'] = E2EConstants.pullRequestDraft;

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [
      [`File "${E2EConstants.testFilesDirectory}/path1" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2" is changed`],
      [`Branch "${E2EConstants.branch}" has been created`],
      [`Changed files have been committed to commit-1-sha`],
      [`Pull request has been created at html_url`]
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    E2EExpects.branchIsCreated(gitHubMock, E2EConstants.token, E2EConstants.branch);
    E2EExpects.filesAreCommitted(gitHubMock, E2EConstants.token, E2EConstants.branch, E2EConstants.commitToken, false);
    E2EExpects.pullRequestIsCreated(gitHubMock, E2EConstants.token, E2EConstants.branch, true);
  });

  test('flow #11: exception is thrown when checking for changed files => print error, do not connect to GitHub, exit 1', async () => {
    FileSystem.writeFileSync(`${E2EConstants.shellMocksDirectory}/wc`, 'exit 1');
    FileSystem.chmodSync(`${E2EConstants.shellMocksDirectory}/wc`, 0o755);

    const command = 'git diff --shortstat temp-e2e-test-files/path1 | wc -l';
    const error = new Error(`Command failed: ${command}`);

    // Commit the changes
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;

    await main();

    expect(E2EMocks.consoleInfo).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[1]]);

    expect(E2EMocks.consoleError).toBeCalledTimes(1);
    expect(E2EMocks.consoleError.mock.calls[0]?.[0].toString()).toBe(error.toString());

    // No request to GitHub is made
    expect(gitHubMock.restMocks.any).not.toBeCalled();
  });

  test('flow #12: wrong repository is used => print error, do not connect to GitHub, exit 1', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // A wrong repository is used
    process.env.GITHUB_REPOSITORY = 'wrong';

    await main();

    expect(E2EMocks.consoleInfo).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[1]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleError, [
      [new Error('Repository "wrong" does not have the valid format (owner/repositoryName)')]
    ]);

    // No request to GitHub is made
    expect(gitHubMock.restMocks.any).not.toBeCalled();
  });

  test('flow #13: commit paths are specified, commit message is missing => print error, do not connect to GitHub, exit 1', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // Commit the changes without a commit message
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;

    await main();

    expect(E2EMocks.consoleInfo).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[1]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleError, [
      [new Error('Commit message is missing, please specify the "commit.message" input')]
    ]);

    // No request to GitHub is made
    expect(gitHubMock.restMocks.any).not.toBeCalled();
  });

  test('flow #14: repository is missing => print error, do not connect to GitHub, exit 1', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // Repository is missing
    delete process.env.GITHUB_REPOSITORY;

    await main();

    expect(E2EMocks.consoleInfo).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[1], [1]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleError, [['[envalid] Env var not found: GITHUB_REPOSITORY']]);

    // No request to GitHub is made
    expect(gitHubMock.restMocks.any).not.toBeCalled();
  });
});
