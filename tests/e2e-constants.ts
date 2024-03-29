import OS from 'os';
import Path from 'path';

const testFilesDirectory = 'temp-e2e-test-files';
const githubOutputFile = Path.join(testFilesDirectory, 'github-output.txt');

const owner = 'owner';
const repositoryName = 'repository-name';

export const E2EConstants = {
  testFilesDirectory,
  shellMocksDirectory: 'temp-e2e-shell-mocks',
  githubOutputFile,
  commands: `echo cmd1 > ${testFilesDirectory}/path1 && echo cmd2 > ${testFilesDirectory}/path2 && echo cmd3 > ${testFilesDirectory}/path3`,

  repository: `${owner}/${repositoryName}`,
  token: 'token',

  branchName: 'branch',

  commitPaths: `${testFilesDirectory}/path1${OS.EOL} ${testFilesDirectory}/path2${OS.EOL} ${testFilesDirectory}/path3${OS.EOL}`,
  commitMessage: 'commit-message',
  commitToken: 'commit-token',

  pullRequestTitle: 'pull-request-title',
  pullRequestBody: 'pull-request-body',
  pullRequestBase: 'custom-base-branch',
  pullRequestLabels: `label1${OS.EOL} label2${OS.EOL}`,
  pullRequestAssignees: 'assignee1',
  pullRequestReviewers: `reviewer1${OS.EOL} reviewer2${OS.EOL} reviewer3`,
  pullRequestTeamReviewers: 'teamReviewer1',
  pullRequestMilestone: '42',
  pullRequestDraft: 'true',

  defaultBranchName: 'default-branch'
};
