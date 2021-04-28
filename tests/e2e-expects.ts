import Nock from 'nock';
import OS from 'os';

import { TestUtils } from '../src/utils/test-utils';
import { E2EConstants } from './e2e-constants';
import { E2EMocks } from './e2e-mocks';
import { GitHubMock } from './github-mock';
import { GitHubMockUtils } from './github-mock-utils';
import { GitHubRestParameters } from './github-rest-mocks';

const branchIsCreated = (
  gitHubMock: GitHubMock,
  token: string,
  branchName: string,
  baseBranchName = gitHubMock.defaultBranchName
) => {
  TestUtils.expectToBeCalled(gitHubMock.restMocks.git.createRef, [
    [
      expect.any(String),
      expect.objectContaining<Partial<GitHubRestParameters<'git', 'createRef'>>>({
        ref: `refs/heads/${branchName}`,
        sha: gitHubMock.getBranchSha(baseBranchName)
      })
    ]
  ]);

  const gitCreateRefMock = gitHubMock.restMocks.git.createRef.mock.instances[0] as Nock.ReplyFnContext | undefined;
  expect(gitCreateRefMock?.req.getHeader('authorization')).toStrictEqual([`token ${token}`]);
};

const filesAreCommitted = (
  gitHubMock: GitHubMock,
  token: string,
  branchName: string,
  commitToken = token,
  amend = false
) => {
  const newCommitSha = gitHubMock.getBranchSha(branchName);
  const oldCommitSha = GitHubMockUtils.createCommitSha(GitHubMockUtils.getCommitId(newCommitSha) - 1);

  TestUtils.expectToBeCalled(gitHubMock.restMocks.git.createBlob, [
    [
      expect.any(String),
      expect.objectContaining<Partial<GitHubRestParameters<'git', 'createBlob'>>>({
        content: 'Y21kMQo=',
        encoding: 'base64'
      })
    ],
    [
      expect.any(String),
      expect.objectContaining<Partial<GitHubRestParameters<'git', 'createBlob'>>>({
        content: 'Y21kMgo=',
        encoding: 'base64'
      })
    ]
  ]);

  const gitCreateBlobMock = gitHubMock.restMocks.git.createBlob.mock.instances[0] as Nock.ReplyFnContext | undefined;
  expect(gitCreateBlobMock?.req.getHeader('authorization')).toStrictEqual([`token ${token}`]);

  expect(gitHubMock.restMocks.git.getRef).toBeCalledWith(
    expect.stringMatching(new RegExp(`/heads%2F${branchName}$`)),
    expect.anything()
  );

  TestUtils.expectToBeCalled(gitHubMock.restMocks.git.createTree, [
    [
      expect.any(String),
      expect.objectContaining<Partial<GitHubRestParameters<'git', 'createTree'>>>({
        base_tree: oldCommitSha,
        tree: [
          { mode: '100644', path: `${E2EConstants.testFilesDirectory}/path1`, sha: 'blob-sha', type: 'blob' },
          { mode: '100644', path: `${E2EConstants.testFilesDirectory}/path2`, sha: 'blob-sha', type: 'blob' }
        ]
      })
    ]
  ]);

  if (amend) {
    TestUtils.expectToBeCalled(gitHubMock.restMocks.git.getCommit, [
      [expect.stringMatching(new RegExp(`/${oldCommitSha}`)), expect.anything()]
    ]);
  }

  const parentCommitSha = amend
    ? GitHubMockUtils.createCommitSha(GitHubMockUtils.getCommitId(oldCommitSha) - 1)
    : oldCommitSha;

  TestUtils.expectToBeCalled(gitHubMock.restMocks.git.createCommit, [
    [
      expect.any(String),
      expect.objectContaining<Partial<GitHubRestParameters<'git', 'createCommit'>>>({
        parents: [parentCommitSha],
        tree: 'tree-sha',
        message: E2EConstants.commitMessage
      })
    ]
  ]);

  const gitCreateCommitMock = gitHubMock.restMocks.git.createCommit.mock.instances[0] as
    | Nock.ReplyFnContext
    | undefined;
  expect(gitCreateCommitMock?.req.getHeader('authorization')).toStrictEqual([`token ${commitToken}`]);

  TestUtils.expectToBeCalled(gitHubMock.restMocks.git.updateRef, [
    [
      expect.stringMatching(new RegExp(`/heads%2F${branchName}$`)),
      expect.objectContaining<Partial<GitHubRestParameters<'git', 'updateRef'>>>({
        sha: newCommitSha,
        force: amend
      })
    ]
  ]);

  const gitUpdateRefMock = gitHubMock.restMocks.git.updateRef.mock.instances[0] as Nock.ReplyFnContext | undefined;
  expect(gitUpdateRefMock?.req.getHeader('authorization')).toStrictEqual([`token ${token}`]);

  TestUtils.expectToBeCalled(E2EMocks.processStdoutWrite, [
    [OS.EOL],
    [`::set-output name=commit.sha::${newCommitSha}` + OS.EOL]
  ]);
};

const pullRequestIsCreated = (gitHubMock: GitHubMock, token: string, branchName: string, full = false) => {
  if (!full) {
    TestUtils.expectToBeCalled(gitHubMock.restMocks.repos.getBranch, [
      [expect.stringMatching(new RegExp(`/${branchName}$`)), expect.anything()]
    ]);
  }

  const pullsCreateArgs = full
    ? {
        title: E2EConstants.pullRequestTitle,
        body: E2EConstants.pullRequestBody,
        base: E2EConstants.pullRequestBase,
        draft: E2EConstants.pullRequestDraft === 'true'
      }
    : {
        title: E2EConstants.commitMessage,
        base: E2EConstants.defaultBranchName
      };

  TestUtils.expectToBeCalled(gitHubMock.restMocks.pulls.create, [
    [
      expect.any(String),
      expect.objectContaining<Partial<GitHubRestParameters<'pulls', 'create'>>>({
        head: branchName,
        ...pullsCreateArgs
      })
    ]
  ]);

  const pullsCreateMock = gitHubMock.restMocks.pulls.create.mock.instances[0] as Nock.ReplyFnContext | undefined;
  expect(pullsCreateMock?.req.getHeader('authorization')).toStrictEqual([`token ${token}`]);

  if (full) {
    TestUtils.expectToBeCalled(gitHubMock.restMocks.pulls.requestReviewers, [
      [
        expect.stringMatching(new RegExp(`/42/requested_reviewers$`)),
        expect.objectContaining<Partial<GitHubRestParameters<'pulls', 'requestReviewers'>>>({
          reviewers: E2EConstants.pullRequestReviewers.split(',').map((reviewer) => reviewer.trim()),
          team_reviewers: E2EConstants.pullRequestTeamReviewers.split(',').map((teamReviewer) => teamReviewer.trim())
        })
      ]
    ]);

    TestUtils.expectToBeCalled(gitHubMock.restMocks.issues.update, [
      [
        expect.stringMatching(new RegExp(`/42$`)),
        expect.objectContaining<Partial<GitHubRestParameters<'issues', 'update'>>>({
          labels: E2EConstants.pullRequestLabels.split(',').map((label) => label.trim()),
          assignees: E2EConstants.pullRequestAssignees.split(',').map((assignee) => assignee.trim()),
          milestone: parseInt(E2EConstants.pullRequestMilestone, 10)
        })
      ]
    ]);
  }
};

export const E2EExpects = {
  branchIsCreated,
  filesAreCommitted,
  pullRequestIsCreated
};
