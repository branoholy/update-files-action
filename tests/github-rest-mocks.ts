import type { operations } from '@octokit/openapi-types';

import { OptionalChain } from '../src/utils/type-utils';

export type GitHubRestParameters<OperationT extends keyof operations> = OptionalChain<
  operations[OperationT],
  ['requestBody', 'content', 'application/json']
> &
  OptionalChain<operations[OperationT], ['parameters', 'path']>;

export type GitHubRestResponseData<
  OperationT extends keyof operations,
  HttpCodeT extends keyof operations[OperationT]['responses'] = keyof operations[OperationT]['responses']
> = OptionalChain<operations[OperationT]['responses'][HttpCodeT], ['content', 'application/json']>;

type GitHubRestMock<
  OperationT extends keyof operations,
  HttpCodeT extends keyof operations[OperationT]['responses'] = keyof operations[OperationT]['responses']
> = jest.Mock<
  [HttpCodeT, GitHubRestResponseData<OperationT, HttpCodeT>?],
  GitHubRestParameters<OperationT> extends never ? [string, ''] : [string, GitHubRestParameters<OperationT>]
>;

export type GitHubRestMocks = {
  readonly any: jest.Mock;
  readonly git: {
    readonly createBlob: GitHubRestMock<'git/create-blob'>;
    readonly getCommit: GitHubRestMock<'git/get-commit'>;
    readonly createCommit: GitHubRestMock<'git/create-commit'>;
    readonly getRef: GitHubRestMock<'git/get-ref'>;
    readonly createRef: GitHubRestMock<'git/create-ref'>;
    readonly updateRef: GitHubRestMock<'git/update-ref'>;
    readonly deleteRef: GitHubRestMock<'git/delete-ref'>;
    readonly createTree: GitHubRestMock<'git/create-tree'>;
  };
  readonly issues: {
    readonly update: GitHubRestMock<'issues/update'>;
  };
  readonly pulls: {
    readonly create: GitHubRestMock<'pulls/create'>;
    readonly requestReviewers: GitHubRestMock<'pulls/request-reviewers'>;
  };
  readonly repos: {
    readonly getBranch: GitHubRestMock<'repos/get-branch'>;
  };
};

export const createGitHubRestMock = <
  OperationT extends keyof operations,
  HttpCodeT extends keyof operations[OperationT]['responses'] = keyof operations[OperationT]['responses']
>() =>
  jest.fn<
    [HttpCodeT, GitHubRestResponseData<OperationT, HttpCodeT>?],
    GitHubRestParameters<OperationT> extends never ? [string, ''] : [string, GitHubRestParameters<OperationT>]
  >();
