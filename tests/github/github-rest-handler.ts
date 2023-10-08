// import { paths } from '@octokit/openapi-types';
// import { DefaultBodyType, PathParams, ResponseResolver, rest, RestContext, RestRequest } from 'msw';

// import { OptionalChain } from ':/utils';

// type GitHubOperationPathParams<OperationT> = OptionalChain<OperationT, ['parameters', 'path']>;

// type GitHubOperationRequestBody<OperationT> = OptionalChain<OperationT, ['requestBody', 'content', 'application/json']>;

// type GitHubOperationResponseHeaders<OperationT, CodeT> = OptionalChain<OperationT, ['responses', CodeT, 'headers']>;

// type GitHubOperationResponseBody<OperationT, CodeT> = OptionalChain<
//   OperationT,
//   ['responses', CodeT, 'content', 'application/json']
// >;

// type GitHubRequest<OperationT> = Omit<
//   RestRequest<
//     GitHubOperationRequestBody<OperationT> extends DefaultBodyType
//       ? GitHubOperationRequestBody<OperationT>
//       : DefaultBodyType,
//     PathParams<keyof GitHubOperationPathParams<OperationT>>
//   >,
//   'json'
// > & {
//   json: () => Promise<GitHubOperationRequestBody<OperationT>>;
// };

// type GitHubResponse<OperationT> = {
//   [CodeT in keyof OptionalChain<OperationT, ['responses']>]: {
//     code: CodeT & number;
//   } & (GitHubOperationResponseBody<OperationT, CodeT> extends never
//     ? unknown
//     : { json: GitHubOperationResponseBody<OperationT, CodeT> }) &
//     (GitHubOperationResponseHeaders<OperationT, CodeT> extends never
//       ? unknown
//       : { headers: GitHubOperationResponseHeaders<OperationT, CodeT> });
// }[keyof OptionalChain<OperationT, ['responses']>];

// type GitHubResolver<OperationT> = (
//   request: GitHubRequest<OperationT>
// ) => GitHubResponse<OperationT> | Promise<GitHubResponse<OperationT>>;

// export const createGitHubRestHandler = <
//   PathT extends keyof paths,
//   MethodT extends keyof paths[PathT] & keyof typeof rest
// >(
//   path: PathT,
//   method: MethodT,
//   resolver: GitHubResolver<paths[PathT][MethodT]>
// ) => {
//   const mswPath = path.replaceAll(/\{([a-z]+)\}/g, ':$1');

//   const mswResolver: ResponseResolver<GitHubRequest<paths[PathT][MethodT]>, RestContext> = async (
//     request,
//     response,
//     context
//   ) => {
//     const responseData = await resolver(request);

//     const transformers = [
//       context.status(responseData.code),
//       ...('json' in responseData ? [context.json(responseData.json)] : [])
//     ];

//     return response(...transformers);
//   };

//   return rest[method](mswPath, mswResolver);
// };
