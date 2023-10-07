import nock from 'nock';
import { vi } from 'vitest';

import { GitHubMockUtils } from './github-mock-utils';
import { createGitHubRestMock, GitHubRestMocks, GitHubRestResponseData } from './github-rest-mocks';

interface Refs {
  // Key: The name of the fully qualified reference (ie: refs/heads/master).
  // Value: Commit SHA the reference points to.
  [name: string]: string;
}

interface Commit {
  sha: string;
  message: string;
  parents: { sha: string; html_url: string; url: string }[];
}

interface Commits {
  [sha: string]: Commit;
}

export class GitHubMock {
  private api = nock('https://api.github.com');

  private refs: Refs = {};

  private commitCounter = 0;
  private commits: Commits = {};

  public readonly restMocks: GitHubRestMocks = {
    any: vi.fn(),
    git: {
      createBlob: createGitHubRestMock<'git/create-blob'>(),

      getCommit: createGitHubRestMock<'git/get-commit'>(),
      createCommit: createGitHubRestMock<'git/create-commit'>(),

      getRef: createGitHubRestMock<'git/get-ref'>(),
      createRef: createGitHubRestMock<'git/create-ref'>(),
      updateRef: createGitHubRestMock<'git/update-ref'>(),
      deleteRef: createGitHubRestMock<'git/delete-ref'>(),

      createTree: createGitHubRestMock<'git/create-tree'>()
    },
    issues: {
      update: createGitHubRestMock<'issues/update'>()
    },
    pulls: {
      create: createGitHubRestMock<'pulls/create'>(),
      requestReviewers: createGitHubRestMock<'pulls/request-reviewers'>()
    },
    repos: {
      getBranch: createGitHubRestMock<'repos/get-branch'>()
    }
  };

  public constructor(
    private repository: string,
    public readonly defaultBranchName: string
  ) {
    this.commit(defaultBranchName);
    this.mockAll();
  }

  public getBranchSha(name: string) {
    const sha = this.refs[GitHubMockUtils.createBranchRefName(name)];
    if (!sha) {
      throw new Error('Branch not found');
    }

    return sha;
  }

  public createBranch(name: string, sha = this.refs[GitHubMockUtils.createBranchRefName(this.defaultBranchName)]) {
    if (!sha || !(sha in this.commits)) {
      throw new Error('Commit SHA not found');
    }

    this.refs[GitHubMockUtils.createBranchRefName(name)] = sha;
  }

  public commit(branchName = this.defaultBranchName) {
    const commitSha = this.createCommitSha();
    const refName = GitHubMockUtils.createBranchRefName(branchName);

    const parentSha = this.refs[refName];
    const parents = parentSha ? [{ sha: parentSha, html_url: 'html_url', url: 'url' }] : [];

    this.commits[commitSha] = {
      message: GitHubMockUtils.createCommitMessage(commitSha),
      sha: commitSha,
      parents
    };

    this.refs[refName] = commitSha;
  }

  private createCommitSha() {
    return GitHubMockUtils.createCommitSha(this.commitCounter++);
  }

  private mockAll() {
    this.api.on('request', this.restMocks.any);

    this.mockGitCreateBlob();

    this.mockGitGetCommit();
    this.mockGitCreateCommit();

    this.mockGitGetRef();
    this.mockGitCreateRef();
    this.mockGitUpdateRef();
    this.mockGitDeleteRef();

    this.mockGitCreateTree();

    this.mockIssuesUpdate();

    this.mockPullsCreate();
    this.mockPullsRequestReviewers();

    this.mockReposGet();
    this.mockReposGetBranch();
  }

  private mockGitCreateBlob() {
    this.restMocks.git.createBlob.mockReturnValue([201, { sha: 'blob-sha', url: 'url' }]);

    this.api
      .post(`/repos/${this.repository}/git/blobs`)
      .optionally()
      .times(Infinity)
      // @ts-expect-error
      .reply(this.restMocks.git.createBlob);
  }

  private mockGitGetCommit() {
    this.restMocks.git.getCommit.mockImplementation((uri) => {
      const sha = GitHubMockUtils.getLastPartFromPath(uri);
      if (!sha) {
        return [404];
      }

      const commit = this.commits[sha];
      if (!commit) {
        return [404];
      }

      return [200, commit as GitHubRestResponseData<'git/get-commit', 200>];
    });

    this.api
      .get((uri: string) => uri.startsWith(`/repos/${this.repository}/git/commits/`))
      .optionally()
      .times(Infinity)
      // @ts-expect-error
      .reply(this.restMocks.git.getCommit);
  }

  private mockGitCreateCommit() {
    this.restMocks.git.createCommit.mockImplementation((_uri, { message, parents: parentShas = [] }) => {
      const sha = this.createCommitSha();
      const parents = parentShas.map((parentSha) => ({ sha: parentSha, html_url: 'html_url', url: 'url' }));

      this.commits[sha] = {
        sha,
        message,
        parents
      };

      if (parentShas) {
        parentShas.forEach((parentSha) => {
          const refName = Object.keys(this.refs).find((refName) => this.refs[refName] === parentSha);

          if (refName) {
            this.refs[refName] = parentSha;
          }
        });
      }

      return [
        201,
        {
          sha,
          message,
          parents
        } as GitHubRestResponseData<'git/create-commit', 201>
      ];
    });

    this.api
      .post(`/repos/${this.repository}/git/commits`)
      .optionally()
      .times(Infinity)
      // @ts-expect-error
      .reply(this.restMocks.git.createCommit);
  }

  private mockGitGetRef() {
    this.restMocks.git.getRef.mockImplementation((uri) => {
      const refName = GitHubMockUtils.getRefNameFromPath(uri);
      if (!refName) {
        return [404];
      }

      const commitSha = this.refs[refName];
      if (!commitSha) {
        return [404];
      }

      return [
        200,
        {
          node_id: 'node_id',
          object: { sha: commitSha, type: 'type', url: 'url' },
          ref: refName, // TODO Is this correct?
          url: 'url'
        } as GitHubRestResponseData<'git/get-ref', 200>
      ];
    });

    this.api
      .get((uri) => uri.startsWith(`/repos/${this.repository}/git/ref/`))
      .optionally()
      .times(Infinity)
      // @ts-expect-error
      .reply(this.restMocks.git.getRef);
  }

  private mockGitCreateRef() {
    this.restMocks.git.createRef.mockImplementation((_uri, { ref, sha }) => {
      this.refs[ref] = sha;

      return [201];
    });

    this.api
      .post(`/repos/${this.repository}/git/refs`)
      // @ts-expect-error
      .reply(this.restMocks.git.createRef);
  }

  private mockGitUpdateRef() {
    this.restMocks.git.updateRef.mockImplementation((uri, { sha /*force*/ }) => {
      const refName = GitHubMockUtils.getRefNameFromPath(uri);
      if (!refName) {
        return [422];
      }

      if (!(refName in this.refs)) {
        return [422];
      }

      this.refs[refName] = sha;
      return [200];
    });

    this.api
      .patch((uri: string) => uri.startsWith(`/repos/${this.repository}/git/refs/`))
      .optionally()
      .times(Infinity)
      // @ts-expect-error
      .reply(this.restMocks.git.updateRef);
  }

  private mockGitDeleteRef() {
    this.restMocks.git.deleteRef.mockImplementation((uri) => {
      const refName = GitHubMockUtils.getRefNameFromPath(uri);
      if (!refName) {
        return [422];
      }

      if (!(refName in this.refs)) {
        return [422];
      }

      delete this.refs[refName];
      return [204];
    });

    this.api
      .delete((uri) => uri.startsWith(`/repos/${this.repository}/git/refs/`))
      .optionally()
      .times(Infinity)
      // @ts-expect-error
      .reply(this.restMocks.git.deleteRef);
  }

  private mockGitCreateTree() {
    this.restMocks.git.createTree.mockReturnValue([
      201,
      {
        sha: 'tree-sha',
        tree: [],
        url: 'url',
        truncated: false
      }
    ]);

    this.api
      .post(`/repos/${this.repository}/git/trees`)
      .optionally()
      .times(Infinity)
      // @ts-expect-error
      .reply(this.restMocks.git.createTree);
  }

  private mockIssuesUpdate() {
    this.api
      .patch((uri: string) => uri.startsWith(`/repos/${this.repository}/issues/`))
      .optionally()
      .times(Infinity)
      .reply(200, this.restMocks.issues.update);
  }

  private mockPullsCreate() {
    this.restMocks.pulls.create.mockReturnValue([
      201,
      {
        number: 42,
        html_url: 'html_url'
      } as GitHubRestResponseData<'pulls/create', 201>
    ]);

    this.api
      .post(`/repos/${this.repository}/pulls`)
      .optionally()
      .times(Infinity)
      // @ts-expect-error
      .reply(this.restMocks.pulls.create);
  }

  private mockPullsRequestReviewers() {
    this.api
      .post(new RegExp(`^/repos/${this.repository}/pulls/\\d+/requested_reviewers$`))
      .optionally()
      .times(Infinity)
      .reply(200, this.restMocks.pulls.requestReviewers);
  }

  private mockReposGet() {
    this.api
      .get(`/repos/${this.repository}`)
      .optionally()
      .times(Infinity)
      .reply(200, {
        default_branch: this.defaultBranchName
      } as GitHubRestResponseData<'repos/get', 200>);
  }

  private mockReposGetBranch() {
    this.restMocks.repos.getBranch.mockImplementation((uri) => {
      const branchName = GitHubMockUtils.getLastPartFromPath(uri);
      if (!branchName) {
        return [404];
      }

      const refName = GitHubMockUtils.createBranchRefName(branchName);
      const commitSha = this.refs[refName];
      if (!commitSha) {
        return [404];
      }

      const commit = this.commits[commitSha];
      if (!commit) {
        return [404];
      }

      return [
        200,
        {
          commit: { commit: { message: commit.message } }
        } as GitHubRestResponseData<'repos/get-branch', 200>
      ];
    });

    this.api
      .get((uri: string) => uri.startsWith(`/repos/${this.repository}/branches/`))
      .optionally()
      .times(Infinity)
      // @ts-expect-error
      .reply(this.restMocks.repos.getBranch);
  }
}
