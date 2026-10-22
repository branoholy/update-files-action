import FileSystem from 'node:fs';
import OS from 'node:os';

import { expect } from 'vitest';

import { TestUtils } from '../src/utils/index.ts';
import { E2EConstants } from './e2e-constants.ts';
import { E2EMocks } from './e2e-mocks.ts';
import type { GitHubMock } from './github-mock.ts';
import { GitHubMockUtils } from './github-mock-utils.ts';
import type { GitHubRestParameters } from './github-rest-mocks.ts';

interface BranchIsCreatedArgs {
  readonly gitHubMock: GitHubMock;
  readonly token: string;
  readonly branchName: string;
}

const branchIsCreated = ({ gitHubMock, token, branchName }: BranchIsCreatedArgs) => {
  TestUtils.expectToBeCalled(gitHubMock.restMocks.git.createRef, [
    [
      expect.any(String),
      expect.objectContaining<Partial<GitHubRestParameters<'git/create-ref'>>>({
        ref: `refs/heads/${branchName}`,
        sha: gitHubMock.getBranchSha(branchName),
      }),
    ],
  ]);

  const gitCreateRefMock = gitHubMock.restMocks.git.createRef.mock.contexts[0];
  expect(gitCreateRefMock?.req.headers.get('authorization')).toStrictEqual(`token ${token}`);
};

interface FileArg {
  readonly path: string;
  readonly content: string;
}

const defaultFiles: FileArg[] = [
  {
    path: `${E2EConstants.testFilesDirectory}/path1`,
    content: 'Y21kMQo=',
  },
  {
    path: `${E2EConstants.testFilesDirectory}/path2`,
    content: 'Y21kMgo=',
  },
  {
    path: `${E2EConstants.testFilesDirectory}/path3`,
    content: 'Y21kMwo=',
  },
];

interface FilesAreCommittedArgs {
  readonly gitHubMock: GitHubMock;
  readonly token: string;
  readonly branchName: string;
  readonly branchCreated?: boolean;
  readonly baseCommitSha?: string;
  readonly commitToken?: string;
  readonly amend?: boolean;
  readonly withoutCommitMessage?: boolean;
  readonly files?: FileArg[];
}

const filesAreCommitted = ({
  gitHubMock,
  token,
  branchName,
  branchCreated = false,
  baseCommitSha,
  commitToken = token,
  amend = false,
  withoutCommitMessage = false,
  files = defaultFiles,
}: FilesAreCommittedArgs) => {
  const newCommitSha = gitHubMock.getBranchSha(branchName);
  const oldCommitSha = baseCommitSha ?? GitHubMockUtils.createCommitSha(GitHubMockUtils.getCommitId(newCommitSha) - 1);

  TestUtils.expectToBeCalled(
    gitHubMock.restMocks.git.createBlob,
    files.map(
      ({ content }) =>
        [
          expect.any(String),
          expect.objectContaining<Partial<GitHubRestParameters<'git/create-blob'>>>({
            content,
            encoding: 'base64',
          }),
        ] as [string, GitHubRestParameters<'git/create-blob'>],
    ),
  );

  const gitCreateBlobMock = gitHubMock.restMocks.git.createBlob.mock.contexts[0];
  expect(gitCreateBlobMock?.req.headers.get('authorization')).toStrictEqual(`token ${token}`);

  expect(gitHubMock.restMocks.git.getRef).toBeCalledWith(
    expect.stringMatching(new RegExp(`/heads%2F${branchName}$`)),
    expect.anything(),
  );

  TestUtils.expectToBeCalled(gitHubMock.restMocks.git.createTree, [
    [
      expect.any(String),
      expect.objectContaining<Partial<GitHubRestParameters<'git/create-tree'>>>({
        base_tree: oldCommitSha,
        tree: files.map(({ path }) => ({
          mode: '100644',
          path,
          sha: 'blob-sha',
          type: 'blob',
        })),
      }),
    ],
  ]);

  if (amend) {
    TestUtils.expectToBeCalled(gitHubMock.restMocks.git.getCommit, [
      [expect.stringMatching(new RegExp(`/${oldCommitSha}`)), ''],
    ]);
  }

  const parentCommitSha = amend
    ? GitHubMockUtils.createCommitSha(GitHubMockUtils.getCommitId(oldCommitSha) - 1)
    : oldCommitSha;

  const commitMessage = withoutCommitMessage
    ? GitHubMockUtils.createCommitMessage(oldCommitSha)
    : E2EConstants.commitMessage;

  TestUtils.expectToBeCalled(gitHubMock.restMocks.git.createCommit, [
    [
      expect.any(String),
      expect.objectContaining<Partial<GitHubRestParameters<'git/create-commit'>>>({
        parents: [parentCommitSha],
        tree: 'tree-sha',
        message: commitMessage,
      }),
    ],
  ]);

  const gitCreateCommitMock = gitHubMock.restMocks.git.createCommit.mock.contexts[0];
  expect(gitCreateCommitMock?.req.headers.get('authorization')).toStrictEqual(`token ${commitToken}`);

  if (branchCreated) {
    const commitResponse = gitHubMock.restMocks.git.createCommit.mock.results[0]?.value as
      ReturnType<typeof gitHubMock.restMocks.git.createCommit> | undefined;
    expect(newCommitSha).toBe(commitResponse?.[1]?.sha);
    expect(gitHubMock.restMocks.git.updateRef).not.toBeCalled();
    expect(gitHubMock.restMocks.git.createCommit).toHaveBeenCalledBefore(gitHubMock.restMocks.git.createRef);
    if (gitHubMock.restMocks.git.deleteRef.mock.calls.length > 0) {
      expect(gitHubMock.restMocks.git.createCommit).toHaveBeenCalledBefore(gitHubMock.restMocks.git.deleteRef);
      expect(gitHubMock.restMocks.git.deleteRef).toHaveBeenCalledBefore(gitHubMock.restMocks.git.createRef);
    }
  } else {
    TestUtils.expectToBeCalled(gitHubMock.restMocks.git.updateRef, [
      [
        expect.stringMatching(new RegExp(`/heads%2F${branchName}$`)),
        expect.objectContaining<Partial<GitHubRestParameters<'git/update-ref'>>>({
          sha: newCommitSha,
          force: amend,
        }),
      ],
    ]);
    expect(gitHubMock.restMocks.git.createCommit).toHaveBeenCalledBefore(gitHubMock.restMocks.git.updateRef);

    const gitUpdateRefMock = gitHubMock.restMocks.git.updateRef.mock.contexts[0];
    expect(gitUpdateRefMock?.req.headers.get('authorization')).toStrictEqual(`token ${token}`);
  }

  if (process.env['GITHUB_OUTPUT']) {
    const delimiterPrefix = 'ghadelimiter_';
    const delimiterFullPrefix = `<<${delimiterPrefix}`;

    const fileContent = FileSystem.readFileSync(process.env['GITHUB_OUTPUT']).toString();
    const fileLines = fileContent.split(OS.EOL);

    expect(fileLines).toHaveLength(4);

    const [firstLine, variableValue, delimiter, emptyLine] = fileLines;
    if (firstLine && variableValue && delimiter) {
      const [variableName, delimiterValue] = firstLine.split(delimiterFullPrefix);

      expect(variableName).toBe('commit.sha');
      expect(variableValue).toBe(newCommitSha);
      expect(delimiter).toBe(`${delimiterPrefix}${delimiterValue}`);
      expect(emptyLine).toBe('');
    } else {
      expect(firstLine?.length).toBeGreaterThan(0);
      expect(variableValue?.length).toBeGreaterThan(0);
      expect(delimiter?.length).toBeGreaterThan(0);
      expect(emptyLine).toBeDefined();
    }
  } else {
    TestUtils.expectToBeCalled(E2EMocks.processStdoutWrite, [
      [OS.EOL],
      [`::set-output name=commit.sha::${newCommitSha}` + OS.EOL],
    ]);
  }
};

interface PullRequestIsCreatedArgs {
  readonly gitHubMock: GitHubMock;
  readonly token: string;
  readonly branchName: string;
  readonly withoutCommitMessage?: boolean;
  readonly full?: boolean;
}

const pullRequestIsCreated = ({
  gitHubMock,
  token,
  branchName,
  withoutCommitMessage = false,
  full = false,
}: PullRequestIsCreatedArgs) => {
  const newCommitSha = gitHubMock.getBranchSha(branchName);
  const oldCommitSha = GitHubMockUtils.createCommitSha(GitHubMockUtils.getCommitId(newCommitSha) - 1);

  const publishMock =
    gitHubMock.restMocks.git.createRef.mock.calls.length > 0
      ? gitHubMock.restMocks.git.createRef
      : gitHubMock.restMocks.git.updateRef;
  expect(publishMock).toHaveBeenCalledBefore(gitHubMock.restMocks.pulls.create);

  if (withoutCommitMessage) {
    TestUtils.expectToBeCalled(gitHubMock.restMocks.repos.getBranch, [
      [expect.stringMatching(new RegExp(`/${branchName}$`)), ''],
    ]);
  }

  const pullsCreateArgs = full
    ? {
        title: E2EConstants.pullRequestTitle,
        body: E2EConstants.pullRequestBody,
        base: E2EConstants.pullRequestBase,
        draft: E2EConstants.pullRequestDraft === 'true',
      }
    : {
        title: withoutCommitMessage ? GitHubMockUtils.createCommitMessage(oldCommitSha) : E2EConstants.commitMessage,
        base: E2EConstants.defaultBranchName,
      };

  TestUtils.expectToBeCalled(gitHubMock.restMocks.pulls.create, [
    [
      expect.any(String),
      expect.objectContaining<Partial<GitHubRestParameters<'pulls/create'>>>({
        head: branchName,
        ...pullsCreateArgs,
      }),
    ],
  ]);

  const pullsCreateMock = gitHubMock.restMocks.pulls.create.mock.contexts[0];
  expect(pullsCreateMock?.req.headers.get('authorization')).toStrictEqual(`token ${token}`);

  if (!full) {
    return;
  }

  TestUtils.expectToBeCalled(gitHubMock.restMocks.pulls.requestReviewers, [
    [
      expect.stringMatching(new RegExp(`/42/requested_reviewers$`)),
      expect.objectContaining<Partial<GitHubRestParameters<'pulls/request-reviewers'>>>({
        reviewers: E2EConstants.pullRequestReviewers
          .split(OS.EOL)
          .map((reviewer) => reviewer.trim())
          .filter(Boolean),
        team_reviewers: E2EConstants.pullRequestTeamReviewers
          .split(OS.EOL)
          .map((teamReviewer) => teamReviewer.trim())
          .filter(Boolean),
      }),
    ],
  ]);

  TestUtils.expectToBeCalled(gitHubMock.restMocks.issues.update, [
    [
      expect.stringMatching(new RegExp(`/42$`)),
      expect.objectContaining<Partial<GitHubRestParameters<'issues/update'>>>({
        labels: E2EConstants.pullRequestLabels
          .split(OS.EOL)
          .map((label) => label.trim())
          .filter(Boolean),
        assignees: E2EConstants.pullRequestAssignees
          .split(OS.EOL)
          .map((assignee) => assignee.trim())
          .filter(Boolean),
        milestone: Number(E2EConstants.pullRequestMilestone),
      }),
    ],
  ]);
};

export const E2EExpects = {
  branchIsCreated,
  filesAreCommitted,
  pullRequestIsCreated,
};
