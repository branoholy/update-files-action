import type { RestEndpointMethodTypes } from '@octokit/rest';
import { type Mock, vi } from 'vitest';

interface GitHubRestOperations {
  'git/create-blob': RestEndpointMethodTypes['git']['createBlob'];
  'git/get-commit': RestEndpointMethodTypes['git']['getCommit'];
  'git/create-commit': RestEndpointMethodTypes['git']['createCommit'];
  'git/get-ref': RestEndpointMethodTypes['git']['getRef'];
  'git/create-ref': RestEndpointMethodTypes['git']['createRef'];
  'git/update-ref': RestEndpointMethodTypes['git']['updateRef'];
  'git/delete-ref': RestEndpointMethodTypes['git']['deleteRef'];
  'git/create-tree': RestEndpointMethodTypes['git']['createTree'];
  'issues/update': RestEndpointMethodTypes['issues']['update'];
  'pulls/create': RestEndpointMethodTypes['pulls']['create'];
  'pulls/request-reviewers': RestEndpointMethodTypes['pulls']['requestReviewers'];
  'repos/get': RestEndpointMethodTypes['repos']['get'];
  'repos/get-branch': RestEndpointMethodTypes['repos']['getBranch'];
}

export type GitHubRestParameters<OperationT extends keyof GitHubRestOperations> =
  GitHubRestOperations[OperationT]['parameters'];

export type GitHubRestResponseData<OperationT extends keyof GitHubRestOperations> =
  GitHubRestOperations[OperationT]['response']['data'];

type GitHubRestBody<OperationT extends keyof GitHubRestOperations> = OperationT extends
  'git/get-commit' | 'git/get-ref' | 'git/delete-ref' | 'repos/get' | 'repos/get-branch'
  ? ''
  : GitHubRestParameters<OperationT>;

type GitHubRestHandler<OperationT extends keyof GitHubRestOperations> = (
  this: { req: Request },
  uri: string,
  body: GitHubRestBody<OperationT>,
) => [number, Partial<GitHubRestResponseData<OperationT>>?];

type GitHubRestMock<OperationT extends keyof GitHubRestOperations> = Mock<GitHubRestHandler<OperationT>>;

export type GitHubRestMocks = {
  readonly any: Mock;
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

export const createGitHubRestMock = <OperationT extends keyof GitHubRestOperations>() =>
  vi.fn<GitHubRestHandler<OperationT>>();

export const createGitHubRestReply =
  <OperationT extends keyof GitHubRestOperations>(mock: GitHubRestMock<OperationT>) =>
  async (request: Request) => {
    const rawBody = await request.text();
    // eslint-disable-next-line no-restricted-globals -- Parse Nock's JSON request body for typed assertions.
    const body: unknown = rawBody ? JSON.parse(rawBody) : '';
    return mock.call({ req: request }, new URL(request.url).pathname, body as GitHubRestBody<OperationT>);
  };
