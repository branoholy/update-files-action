const testFilesDirectory = 'temp-e2e-test-files';

const owner = 'owner';
const repositoryName = 'repository-name';

export const E2EConstants = {
  testFilesDirectory,
  shellMocksDirectory: 'temp-e2e-shell-mocks',
  commands: `echo cmd1 > ${testFilesDirectory}/path1 && echo cmd2 > ${testFilesDirectory}/path2`,

  repository: `${owner}/${repositoryName}`,
  token: 'token',

  branchName: 'branch',

  commitPaths: `${testFilesDirectory}/path1, ${testFilesDirectory}/path2`,
  commitMessage: 'commit-message',
  commitToken: 'commit-token',

  pullRequestTitle: 'pull-request-title',
  pullRequestBody: 'pull-request-body',
  pullRequestBase: 'custom-base-branch',
  pullRequestLabels: 'label1, label2',
  pullRequestAssignees: 'assignee1',
  pullRequestReviewers: 'reviewer1, reviewer2, reviewer3',
  pullRequestTeamReviewers: 'teamReviewer1',
  pullRequestMilestone: '42',
  pullRequestDraft: 'true',

  defaultBranchName: 'default-branch'
};
