// import { components } from '@octokit/openapi-types';
// import { SetupServer, setupServer } from 'msw/node';

// import { dp } from ':/utils';

// import { createGitHubRestHandler } from './github-rest-handler';

// type GitBlob = {
//   sha: string;
//   content: string;
//   encoding: string;
// };

// type GitBlobMap = {
//   [sha: string]: GitBlob;
// };

// type GitTreeNode = {
//   sha: string;
//   path: string;
//   mode: '100644' | '100755' | '040000' | '160000' | '120000';
//   type: 'tree' | 'blob' | 'commit';
// };

// type GitTree = {
//   sha: string;
//   nodes: GitTreeNode[];
// };

// type GitTreeMap = {
//   [sha: string]: GitTree;
// };

// type GitUser = {
//   name: string;
//   email: string;
//   date: string;
// };

// type GitCommit = {
//   sha: string;
//   message: string;
//   tree: string;
//   parents: string[];
//   author: GitUser;
//   committer: GitUser;
//   signature?: string;
// };

// type GitCommitMap = {
//   [sha: string]: GitCommit;
// };

// type RefMap = {
//   // Key: The name of the fully qualified reference (ie: refs/heads/main).
//   // Value: Commit SHA the reference points to.
//   [name: string]: string;
// };

// type PullRequest = {
//   base: components['schemas']['pull-request']['base'];
//   head: components['schemas']['pull-request']['head'];
//   title: string;
//   body: string | null;
//   draft: boolean;
//   assignees: string[];
//   reviewers: string[];
//   teamReviewers: string[];
//   labels: string[];
//   milestone: string | null;
// };

// type IssueMap = {
//   [issueNumber: string]: PullRequest;
// };

// export class GitHubMock {
//   private server: SetupServer;

//   private blobs: GitBlobMap = {};
//   private trees: GitTreeMap = {};
//   private commits: GitCommitMap = {};
//   private refs: RefMap = {};

//   private nextIssueNumber = 1;
//   private issues: IssueMap = {};

//   constructor(readonly defaultBranchName: string) {
//     this.server = this.createServer();
//   }

//   listen() {
//     this.server.listen();
//   }

//   close() {
//     this.server.close();
//   }

//   reset() {
//     this.blobs = {};
//     this.trees = {};
//     this.commits = {};
//     this.refs = {};
//     this.nextIssueNumber = 1;
//     this.issues = {};

//     this.server.resetHandlers();
//   }

//   get empty() {
//     const blobCount = Object.keys(this.blobs).length;
//     const treeCount = Object.keys(this.trees).length;
//     const commitCount = Object.keys(this.commits).length;
//     const refCount = Object.keys(this.refs).length;
//     const issueCount = Object.keys(this.issues).length;

//     return blobCount + treeCount + commitCount + refCount + issueCount === 0;
//   }

//   getBranch(branchName: string) {
//     const ref = `refs/heads/${branchName}`;
//     const sha = this.refs[ref];

//     if (!sha) {
//       return null;
//     }

//     return {
//       sha,
//       ref
//     };
//   }

//   private createServer() {
//     const handlers = [
//       this.createGitCreateBlobHandler(),
//       this.createGitCreateTreeHandler(),

//       this.createGitGetCommitHandler(),
//       this.createGitCreateCommitHandler(),

//       this.createGitGetRefHandler(),
//       this.createGitCreateRefHandler(),
//       this.createGitUpdateRefHandler(),
//       this.createGitDeleteRefHandler(),

//       this.createPullsCreateHandler(),
//       this.createIssuesUpdateHandler(),
//       this.createPullsRequestReviewersHandler(),

//       this.createReposGetHandler(),
//       this.createReposGetBranchHandler()
//     ];

//     return setupServer(...handlers);
//   }

//   private static createBlob(content: string, encoding: string = 'utf-8'): GitBlob {
//     const sha = `blob-sha-${content}-${encoding}`;

//     return {
//       sha,
//       content,
//       encoding
//     };
//   }

//   private findRefBySha(sha: string) {
//     return Object.entries(this.refs).find(([, refSha]) => refSha === sha)?.[0] ?? null;
//   }

//   private createGitCreateBlobHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}/git/blobs', 'post', async (request) => {
//       const { content, encoding } = await request.json();

//       const blob = GitHubMock.createBlob(content, encoding);
//       this.blobs[blob.sha] = blob;

//       return {
//         code: 201,
//         json: {
//           sha: blob.sha,
//           url: `blob-url-${blob.sha}`
//         },
//         headers: {}
//       } as const;
//     });
//   }

//   private createGitCreateTreeHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}/git/trees', 'post', async (request) => {
//       const { tree, base_tree: sha = 'root' } = await request.json();

//       const nodes = tree.map(({ sha, content, path, mode, type }) => {
//         if (typeof path === 'undefined') {
//           throw new Error('Path is missing');
//         }

//         if (typeof mode === 'undefined') {
//           throw new Error('Mode is missing');
//         }

//         if (typeof type === 'undefined') {
//           throw new Error('Type is missing');
//         }

//         if (typeof sha !== 'undefined') {
//           if (sha === null) {
//             throw new Error('Deleting files is not supported');
//           }

//           if (type !== 'blob') {
//             throw new Error('Only blob type is supported');
//           }

//           return {
//             sha,
//             path,
//             mode,
//             type
//           };
//         }

//         if (typeof content !== 'undefined') {
//           const blob = GitHubMock.createBlob(content);
//           this.blobs[blob.sha] = blob;

//           return {
//             sha: blob.sha,
//             path,
//             mode,
//             type
//           };
//         }

//         throw new Error('Content and SHA is missing');
//       });

//       this.trees[sha] = {
//         sha,
//         nodes
//       };

//       return {
//         code: 201,
//         json: {
//           sha,
//           tree: nodes,
//           truncated: false,
//           url: `tree-url-${sha}`
//         },
//         headers: {}
//       } as const;
//     });
//   }

//   private createGitGetCommitHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}/git/commits/{commit_sha}', 'get', (request) => {
//       const { commit_sha: sha } = request.params;

//       if (typeof sha !== 'string') {
//         return {
//           code: 404,
//           json: {
//             message: 'Commit SHA is not a string'
//           }
//         } as const;
//       }

//       const commit = this.commits[sha];
//       if (!commit) {
//         return {
//           code: 404,
//           json: {
//             message: `Commit ${sha} is not found`
//           }
//         } as const;
//       }

//       return {
//         code: 200,
//         json: {
//           sha,
//           message: commit.message,
//           tree: {
//             sha: commit.tree,
//             url: `tree-url-${sha}`
//           },
//           author: commit.author,
//           committer: commit.committer,
//           parents: commit.parents.map((sha) => ({
//             sha,
//             url: `commit-url-${sha}`,
//             html_url: `commit-html-url-${sha}`
//           })),
//           verification: {
//             verified: commit.signature === 'verified-signature',
//             reason: `commit-verification-reason-${commit.signature}`,
//             signature: commit.signature ?? null,
//             payload: commit.signature ? `commit-verification-payload-${commit.signature}` : null
//           },
//           node_id: `commit-node-id-${sha}`,
//           url: `commit-url-${sha}`,
//           html_url: `commit-html-url-${sha}`
//         }
//       } as const;
//     });
//   }

//   private createGitCreateCommitHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}/git/commits', 'post', async (request) => {
//       const { message, tree, author, committer, parents, signature } = await request.json();

//       if (!(tree in this.trees)) {
//         return {
//           code: 404,
//           json: {
//             message: 'Tree not found'
//           }
//         } as const;
//       }

//       const sha = `commit-sha-${tree}-${message}`;

//       const commitAuthor: GitUser = {
//         email: author?.email ?? 'author-email',
//         name: author?.name ?? 'author-name',
//         date: author?.date ?? 'author-date'
//       };

//       const commitCommitter: GitUser = {
//         email: committer?.email ?? commitAuthor.email,
//         name: committer?.name ?? commitAuthor.name,
//         date: committer?.date ?? commitAuthor.date
//       };

//       const commitParents = parents ?? ['root-commit-sha'];

//       this.commits[sha] = {
//         sha,
//         message,
//         tree,
//         author: commitAuthor,
//         committer: commitCommitter,
//         parents: commitParents,
//         ...dp({ signature })
//       };

//       return {
//         code: 201,
//         json: {
//           sha,
//           message,
//           tree: {
//             sha: tree,
//             url: `tree-url-${sha}`
//           },
//           author: commitAuthor,
//           committer: commitCommitter,
//           parents: commitParents.map((sha) => ({
//             sha,
//             url: `commit-url-${sha}`,
//             html_url: `commit-html-url-${sha}`
//           })),
//           verification: {
//             verified: signature === 'verified-signature',
//             reason: `commit-verification-reason-${signature}`,
//             signature: signature ?? null,
//             payload: signature ? `commit-verification-payload-${signature}` : null
//           },
//           node_id: `commit-node-id-${sha}`,
//           url: `commit-url-${sha}`,
//           html_url: `commit-html-url-${sha}`
//         },
//         headers: {}
//       } as const;
//     });
//   }

//   private createGitGetRefHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}/git/ref/{ref}', 'get', (request) => {
//       const { ref } = request.params;

//       if (typeof ref !== 'string') {
//         return {
//           code: 404,
//           json: {
//             message: 'Ref is not a string'
//           }
//         } as const;
//       }

//       const sha = this.refs[ref];
//       if (!sha) {
//         return {
//           code: 404,
//           json: {
//             message: `Ref ${sha} is not found`
//           }
//         } as const;
//       }

//       return {
//         code: 200,
//         json: {
//           ref,
//           object: {
//             sha,
//             type: 'commit',
//             url: `commit-url-${sha}`
//           },
//           node_id: `ref-node-id-${sha}`,
//           url: `ref-url-${sha}`
//         }
//       } as const;
//     });
//   }

//   private createGitCreateRefHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}/git/refs', 'post', async (request) => {
//       const { ref, sha } = await request.json();

//       this.refs[ref] = sha;

//       return {
//         code: 201,
//         json: {
//           ref,
//           object: {
//             sha,
//             type: 'commit',
//             url: `commit-url-${sha}`
//           },
//           node_id: `ref-node-id-${sha}`,
//           url: `ref-url-${sha}`
//         },
//         headers: {}
//       } as const;
//     });
//   }

//   private createGitUpdateRefHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}/git/refs/{ref}', 'patch', async (request) => {
//       const { ref } = request.params;
//       const { sha: nextSha } = await request.json();

//       if (typeof ref !== 'string') {
//         return {
//           code: 422,
//           json: {
//             message: 'Ref is not a string',
//             documentation_url: 'documentation-url'
//           }
//         } as const;
//       }

//       const prevSha = this.refs[ref];
//       if (!prevSha) {
//         return {
//           code: 422,
//           json: {
//             message: `Ref ${prevSha} is not found`,
//             documentation_url: 'documentation-url'
//           }
//         } as const;
//       }

//       this.refs[ref] = nextSha;

//       return {
//         code: 200,
//         json: {
//           ref,
//           object: {
//             sha: nextSha,
//             type: 'commit',
//             url: `commit-url-${nextSha}`
//           },
//           node_id: `ref-node-id-${nextSha}`,
//           url: `ref-url-${nextSha}`
//         }
//       } as const;
//     });
//   }

//   private createGitDeleteRefHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}/git/refs/{ref}', 'delete', (request) => {
//       const { ref } = request.params;

//       if (typeof ref !== 'string') {
//         return {
//           code: 422,
//           json: {
//             message: 'Ref is not a string',
//             documentation_url: 'documentation-url'
//           }
//         } as const;
//       }

//       if (!(ref in this.refs)) {
//         return {
//           code: 422,
//           json: {
//             message: `Ref ${ref} is not found`,
//             documentation_url: 'documentation-url'
//           }
//         } as const;
//       }

//       delete this.refs[ref];

//       return {
//         code: 204
//       } as const;
//     });
//   }

//   private createPullsCreateHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}/pulls', 'post', async (request) => {
//       const { base: baseSha, head: headSha, title, body, draft = false } = await request.json();

//       if (typeof title === 'undefined') {
//         return {
//           code: 422,
//           json: {
//             message: 'Title is missing',
//             documentation_url: 'documentation-url'
//           }
//         } as const;
//       }

//       const baseRef = this.findRefBySha(baseSha);
//       if (baseRef === null) {
//         return {
//           code: 422,
//           json: {
//             message: 'Base not found',
//             documentation_url: 'documentation-url'
//           }
//         } as const;
//       }

//       const headRef = this.findRefBySha(headSha);
//       if (headRef === null) {
//         return {
//           code: 422,
//           json: {
//             message: 'Head not found',
//             documentation_url: 'documentation-url'
//           }
//         } as const;
//       }

//       const issueNumber = this.nextIssueNumber;
//       this.nextIssueNumber++;

//       const pullRequest: PullRequest = {
//         base: {
//           sha: baseSha,
//           ref: baseRef,
//           label: 'label',
//           repo: {} as components['schemas']['pull-request']['base']['repo'],
//           user: {} as components['schemas']['pull-request']['base']['user']
//         },
//         head: {
//           sha: headSha,
//           ref: headRef,
//           label: 'label',
//           repo: {} as components['schemas']['pull-request']['head']['repo'],
//           user: {} as components['schemas']['pull-request']['head']['user']
//         },
//         title,
//         body: body ?? null,
//         draft,
//         assignees: [],
//         labels: [],
//         milestone: null,
//         reviewers: [],
//         teamReviewers: []
//       };

//       this.issues[issueNumber] = pullRequest;

//       return {
//         code: 201,
//         json: {
//           number: issueNumber,
//           base: pullRequest.base,
//           head: pullRequest.head,
//           title,
//           body: body ?? null,
//           draft
//         } as components['schemas']['pull-request'],
//         headers: {}
//       } as const;
//     });
//   }

//   private createIssuesUpdateHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}/issues/{issue_number}', 'patch', async (request) => {
//       const { issue_number: issueNumber } = request.params;
//       const { title, body, assignees, labels = [], milestone } = await request.json();

//       if (typeof issueNumber !== 'string') {
//         return {
//           code: 422,
//           json: {
//             message: 'Issue number is not a string',
//             documentation_url: 'documentation-url'
//           }
//         } as const;
//       }

//       const issue = this.issues[issueNumber];
//       if (!issue) {
//         return {
//           code: 404,
//           json: {
//             message: 'Issue not found'
//           }
//         } as const;
//       }

//       const issueLabels = labels
//         .map((label) => {
//           if (typeof label === 'string') {
//             return label;
//           }

//           return label.name;
//         })
//         .filter((label): label is string => !!label);

//       this.issues[issueNumber] = {
//         ...issue,
//         title: title?.toString() ?? issue.title,
//         body: body ?? issue.body,
//         assignees: assignees ?? [],
//         labels: issueLabels,
//         milestone: milestone?.toString() ?? null
//       };

//       return {
//         code: 200,
//         json: {
//           number: issueNumber,
//           base: issue.base,
//           head: issue.head,
//           title,
//           body: body ?? null,
//           draft: issue.draft,
//           assignees,
//           labels: issueLabels,
//           milestone
//         } as unknown as components['schemas']['issue']
//       } as const;
//     });
//   }

//   private createPullsRequestReviewersHandler() {
//     return createGitHubRestHandler(
//       '/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
//       'post',
//       async (request) => {
//         const { pull_number: pullRequestNumber } = request.params;
//         const { reviewers, team_reviewers: teamReviewers } = await request.json();

//         if (typeof pullRequestNumber !== 'string') {
//           return {
//             code: 422,
//             json: {
//               message: 'Pull request number is not a string',
//               documentation_url: 'documentation-url'
//             }
//           } as const;
//         }

//         const pullRequest = this.issues[pullRequestNumber];
//         if (!pullRequest) {
//           return {
//             code: 422,
//             json: {
//               message: 'Pull request not found',
//               documentation_url: 'documentation-url'
//             }
//           } as const;
//         }

//         this.issues[pullRequestNumber] = {
//           ...pullRequest,
//           reviewers: reviewers ?? [],
//           teamReviewers: teamReviewers ?? []
//         };

//         return {
//           code: 201,
//           json: {
//             number: pullRequestNumber,
//             base: pullRequest.base,
//             head: pullRequest.head,
//             title: pullRequest.title,
//             body: pullRequest.body,
//             draft: pullRequest.draft,
//             assignees: pullRequest.assignees,
//             labels: pullRequest.labels,
//             milestone: pullRequest.milestone,
//             requested_reviewers: pullRequest.reviewers.map((reviewer) => ({
//               login: reviewer
//             })),
//             requested_teams: pullRequest.teamReviewers.map((teamReviewer) => ({
//               name: teamReviewer
//             }))
//           } as unknown as components['schemas']['pull-request-simple']
//         } as const;
//       }
//     );
//   }

//   private createReposGetHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}', 'get', () => {
//       return {
//         code: 200,
//         json: {
//           default_branch: this.defaultBranchName
//         } as components['schemas']['full-repository']
//       } as const;
//     });
//   }

//   private createReposGetBranchHandler() {
//     return createGitHubRestHandler('/repos/{owner}/{repo}/branches/{branch}', 'get', (request) => {
//       const { branch } = request.params;
//       const branchRef = `refs/heads/${branch}`;

//       const sha = this.refs[branchRef];
//       if (!sha) {
//         return {
//           code: 404,
//           json: {
//             message: 'Branch not found'
//           }
//         } as const;
//       }

//       const commit = this.commits[sha];
//       if (!commit) {
//         return {
//           code: 404,
//           json: {
//             message: 'Commit not found'
//           }
//         } as const;
//       }

//       return {
//         code: 200,
//         json: {
//           commit: {
//             commit
//           }
//         } as unknown as components['schemas']['branch-with-protection']
//       } as const;
//     });
//   }
// }
