import ChildProcess from 'child_process';
import FileSystem from 'fs';
import Nock from 'nock';
import OS from 'os';
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
    execSync: (...[command, options]: Parameters<(typeof ChildProcess)['execSync']>) => {
      return originalModule.execSync(command, {
        ...options,
        env: process.env
      });
    }
  };
});

describe('e2e tests', () => {
  let gitHubMock: GitHubMock;
  const token = E2EConstants.token;
  const branchName = E2EConstants.branchName;

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
    FileSystem.rmSync(E2EConstants.testFilesDirectory, { recursive: true });
    FileSystem.rmSync(E2EConstants.shellMocksDirectory, { recursive: true });
  });

  beforeEach(() => {
    ChildProcess.execSync(`git checkout ${E2EConstants.testFilesDirectory}`, { stdio: 'ignore' });

    jest.resetAllMocks();
    Nock.cleanAll();

    E2EMocks.mockImplementation();

    gitHubMock = new GitHubMock(E2EConstants.repository, E2EConstants.defaultBranchName);

    process.env.GITHUB_REPOSITORY = E2EConstants.repository;
    process.env.INPUT_TOKEN = token;
    process.env['INPUT_BRANCH.NAME'] = branchName;
  });

  afterEach(() => {
    delete process.env.GITHUB_REPOSITORY;

    Object.keys(process.env).forEach((key) => {
      if (key.startsWith('INPUT_') || key === 'GITHUB_OUTPUT') {
        delete process.env[key];
      }
    });

    FileSystem.rmSync(Path.join(E2EConstants.testFilesDirectory, 'path3'), { force: true });
    FileSystem.rmSync(Path.join(E2EConstants.testFilesDirectory, 'path3-2'), { force: true });

    ChildProcess.execSync(`rm -rf ${E2EConstants.shellMocksDirectory}/*`);
  });

  test('flow #01: no file is changed => do not connect to GitHub', async () => {
    // No file is changed
    // noop()

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
      [`File "${E2EConstants.testFilesDirectory}/path3" is created`],
      [`Branch "${branchName}" has been created`],
      ['Changed files have been committed to commit-1-sha']
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    E2EExpects.branchIsCreated({ gitHubMock, token, branchName });
    E2EExpects.filesAreCommitted({ gitHubMock, token, branchName });
  });

  test('flow #03: all files are changed, branch does not exist => create branch, use non-default base, commit', async () => {
    const baseBranchName = 'base-branch';

    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // Use non-default base branch
    gitHubMock.createBranch(baseBranchName);
    gitHubMock.commit(baseBranchName);
    process.env['INPUT_BRANCH.BASE'] = baseBranchName;

    // Commit the changes
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;

    // Use GitHub Output file for GitHub Actions output
    process.env['GITHUB_OUTPUT'] = E2EConstants.githubOutputFile;
    FileSystem.writeFileSync(E2EConstants.githubOutputFile, '');

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [
      [`File "${E2EConstants.testFilesDirectory}/path1" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path3" is created`],
      [`Branch "${branchName}" has been created`],
      ['Changed files have been committed to commit-2-sha']
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    E2EExpects.branchIsCreated({
      gitHubMock,
      token,
      branchName,
      baseBranchName
    });
    E2EExpects.filesAreCommitted({ gitHubMock, token, branchName });
  });

  test('flow #04: all files are changed, branch exists => recreate branch, commit', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(branchName);

    // Recreate the branch
    process.env['INPUT_BRANCH.RECREATE'] = 'true';

    // Commit the changes
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [
      [`File "${E2EConstants.testFilesDirectory}/path1" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path3" is created`],
      [`Branch "${branchName}" already exists`],
      [`Deleting branch "${branchName}"...`],
      [`Branch "${branchName}" has been deleted`],
      [`Branch "${branchName}" has been created`],
      ['Changed files have been committed to commit-1-sha']
    ]);

    // The branch is deleted
    TestUtils.expectToBeCalled(gitHubMock.restMocks.git.deleteRef, [
      [expect.stringMatching(new RegExp(`/heads%2F${branchName}$`)), '']
    ]);

    E2EExpects.branchIsCreated({ gitHubMock, token, branchName });
    E2EExpects.filesAreCommitted({ gitHubMock, token, branchName });
  });

  test('flow #05: all files are changed, ref exists => do not delete branch, commit', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(branchName);

    // Use a ref
    process.env['INPUT_BRANCH.NAME'] = `refs/heads/${branchName}`;

    // Commit the changes
    process.env['INPUT_COMMIT.PATHS'] = E2EConstants.commitPaths;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [
      [`File "${E2EConstants.testFilesDirectory}/path1" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path3" is created`],
      [`Branch "${branchName}" already exists`],
      [`Changed files have been committed to commit-1-sha`]
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    E2EExpects.filesAreCommitted({ gitHubMock, token, branchName });
  });

  test('flow #06: all files are changed, branch exists => do not delete branch, do not commit', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(branchName);

    // Do not commit
    process.env['INPUT_COMMIT'] = 'false';

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [[`Branch "${branchName}" already exists`]]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    // No file is committed
    expect(gitHubMock.restMocks.git.createCommit).not.toBeCalled();

    // The commit hash is not sent to the output
    expect(E2EMocks.processStdoutWrite).not.toBeCalled();
  });

  test('flow #07: all files are changed, branch exists => do not delete branch, commit, do not create pull request', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(branchName);

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
      [`File "${E2EConstants.testFilesDirectory}/path3" is created`],
      [`Branch "${branchName}" already exists`],
      [`Changed files have been committed to commit-1-sha`]
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    E2EExpects.filesAreCommitted({ gitHubMock, token, branchName });

    // A pull request is not created
    expect(gitHubMock.restMocks.pulls.create).not.toBeCalled();
  });

  test('flow #08: all files are changed, branch exists => do not delete branch, amend commit, do not create pull request', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(branchName);
    gitHubMock.commit(branchName);

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
      [`File "${E2EConstants.testFilesDirectory}/path3" is created`],
      [`Branch "${branchName}" already exists`],
      [`Changed files have been committed to commit-2-sha`]
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    E2EExpects.filesAreCommitted({
      gitHubMock,
      token,
      branchName,
      amend: true
    });

    // A pull request is not created
    expect(gitHubMock.restMocks.pulls.create).not.toBeCalled();
  });

  test('flow #09: all files are changed, branch exists => do not delete branch, do not commit, do not create pull request', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(branchName);

    // Do not commit
    process.env['INPUT_COMMIT'] = 'false';

    // Do not create a pull request
    process.env['INPUT_PULL-REQUEST'] = 'false';

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [[`Branch "${branchName}" already exists`]]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    // No file is committed
    expect(gitHubMock.restMocks.git.createCommit).not.toBeCalled();

    // A pull request is not created
    expect(gitHubMock.restMocks.pulls.create).not.toBeCalled();
  });

  test('flow #10: all files are changed, branch exists => do not delete branch, commit, create pull request', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // The branch exists
    gitHubMock.createBranch(branchName);

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
      [`File "${E2EConstants.testFilesDirectory}/path3" is created`],
      [`Branch "${branchName}" already exists`],
      [`Changed files have been committed to commit-1-sha`],
      [`Pull request has been created at html_url`]
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    // The branch is not created
    expect(gitHubMock.restMocks.git.createRef).not.toBeCalled();

    E2EExpects.filesAreCommitted({ gitHubMock, token, branchName });
    E2EExpects.pullRequestIsCreated({ gitHubMock, token, branchName });
  });

  test('flow #11: all files are changed, branch does not exist => create branch, commit with token, create pull request with all args', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

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
      [`File "${E2EConstants.testFilesDirectory}/path3" is created`],
      [`Branch "${branchName}" has been created`],
      [`Changed files have been committed to commit-1-sha`],
      [`Pull request has been created at html_url`]
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    E2EExpects.branchIsCreated({ gitHubMock, token, branchName });
    E2EExpects.filesAreCommitted({
      gitHubMock,
      token,
      branchName,
      commitToken: E2EConstants.commitToken
    });
    E2EExpects.pullRequestIsCreated({
      gitHubMock,
      token,
      branchName,
      full: true
    });
  });

  test('flow #12: exception is thrown when checking for changed files => print error, do not connect to GitHub, exit 1', async () => {
    FileSystem.writeFileSync(`${E2EConstants.shellMocksDirectory}/wc`, 'exit 1');
    FileSystem.chmodSync(`${E2EConstants.shellMocksDirectory}/wc`, 0o755);

    const command = 'git ls-files --exclude-standard --others temp-e2e-test-files/path1 | wc -l';
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

  test('flow #13: wrong repository is used => print error, do not connect to GitHub, exit 1', async () => {
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

  test('flow #14: commit paths are specified, commit message is missing => print error, do not connect to GitHub, exit 1', async () => {
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

  test('flow #15: glob finds more files, all files are changed, branch does not exist => create branch, commit', async () => {
    // Add additional files to repo
    FileSystem.writeFileSync(Path.join(E2EConstants.testFilesDirectory, 'path1-2'), 'content1-2');
    FileSystem.writeFileSync(Path.join(E2EConstants.testFilesDirectory, 'path2-2'), 'content2-2');
    ChildProcess.execSync(`git add ${E2EConstants.testFilesDirectory}`);
    FileSystem.writeFileSync(Path.join(E2EConstants.testFilesDirectory, 'path3-2'), 'content3-2');

    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);
    // Additional files are created
    ChildProcess.execSync(
      `echo cmd1 > ${E2EConstants.testFilesDirectory}/path1-2 && echo cmd2 > ${E2EConstants.testFilesDirectory}/path2-2 && echo cmd3 > ${E2EConstants.testFilesDirectory}/path3-2`
    );

    // Commit the changes, use glob pattern
    process.env[
      'INPUT_COMMIT.PATHS'
    ] = `${E2EConstants.testFilesDirectory}/path1*${OS.EOL} ${E2EConstants.testFilesDirectory}/path2*${OS.EOL} ${E2EConstants.testFilesDirectory}/path3*${OS.EOL}`;
    process.env['INPUT_COMMIT.MESSAGE'] = E2EConstants.commitMessage;

    await main();

    expect(E2EMocks.consoleError).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[0]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleInfo, [
      [`File "${E2EConstants.testFilesDirectory}/path1-2" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path1" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2-2" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path2" is changed`],
      [`File "${E2EConstants.testFilesDirectory}/path3-2" is created`],
      [`File "${E2EConstants.testFilesDirectory}/path3" is created`],
      [`Branch "${branchName}" has been created`],
      ['Changed files have been committed to commit-1-sha']
    ]);

    // The branch is not deleted
    expect(gitHubMock.restMocks.git.deleteRef).not.toBeCalled();

    E2EExpects.branchIsCreated({ gitHubMock, token, branchName });
    E2EExpects.filesAreCommitted({
      gitHubMock,
      token,
      branchName,
      files: [
        {
          path: `${E2EConstants.testFilesDirectory}/path1-2`,
          content: 'Y21kMQo='
        },
        {
          path: `${E2EConstants.testFilesDirectory}/path1`,
          content: 'Y21kMQo='
        },
        {
          path: `${E2EConstants.testFilesDirectory}/path2-2`,
          content: 'Y21kMgo='
        },
        {
          path: `${E2EConstants.testFilesDirectory}/path2`,
          content: 'Y21kMgo='
        },
        {
          path: `${E2EConstants.testFilesDirectory}/path3-2`,
          content: 'Y21kMwo='
        },
        {
          path: `${E2EConstants.testFilesDirectory}/path3`,
          content: 'Y21kMwo='
        }
      ]
    });
  });

  test('flow #16: branch is missing => print error, do not connect to GitHub, exit 1', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // Branch is missing
    delete process.env['INPUT_BRANCH.NAME'];

    await main();

    expect(E2EMocks.consoleInfo).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[1]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleError, [['Input required and not supplied: branch.name']]);

    // No request to GitHub is made
    expect(gitHubMock.restMocks.any).not.toBeCalled();
  });

  test('flow #17: repository is missing => print error, do not connect to GitHub, exit 1', async () => {
    // All files are changed
    ChildProcess.execSync(E2EConstants.commands);

    // Repository is missing
    delete process.env.GITHUB_REPOSITORY;

    await main();

    expect(E2EMocks.consoleInfo).not.toBeCalled();
    TestUtils.expectToBeCalled(E2EMocks.processExit, [[1]]);

    TestUtils.expectToBeCalled(E2EMocks.consoleError, [['Missing env(s): GITHUB_REPOSITORY']]);

    // No request to GitHub is made
    expect(gitHubMock.restMocks.any).not.toBeCalled();
  });
});
