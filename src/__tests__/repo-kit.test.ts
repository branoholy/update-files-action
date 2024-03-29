import { Octokit } from '@octokit/rest';
import { readFileSync } from 'fs';
import { beforeEach, describe, expect, it, MockedFunction, MockInstance, SpyInstance, vi } from 'vitest';

import { Awaited, ExtractCallable, TestUtils } from ':/utils';

import { RepoKit } from '../repo-kit';

vi.mock('fs');
const readFileSyncMock = TestUtils.asMockedFunction(readFileSync);

type MockedOctokit = {
  rest: {
    git: {
      [fn in
        | 'createRef'
        | 'deleteRef'
        | 'getRef'
        | 'createBlob'
        | 'createTree'
        | 'getCommit'
        | 'createCommit'
        | 'updateRef']: MockedFunction<ExtractCallable<Octokit['git'][fn]>>;
    };
    issues: {
      [fn in 'update']: MockedFunction<ExtractCallable<Octokit['issues'][fn]>>;
    };
    pulls: {
      [fn in 'create' | 'requestReviewers']: MockedFunction<ExtractCallable<Octokit['pulls'][fn]>>;
    };
    repos: {
      [fn in 'get' | 'getBranch']: MockedFunction<ExtractCallable<Octokit['repos'][fn]>>;
    };
  };
};

type OctokitMockType = MockInstance<ConstructorParameters<typeof Octokit>, MockedOctokit> & typeof Octokit;

vi.mock('@octokit/rest');
const OctokitMock = Octokit as OctokitMockType;

describe('RepoKit', () => {
  const owner = 'owner';
  const repo = 'repo';
  const token = 'token';

  const repositoryInfo = { owner, repo };

  const response = {
    headers: {} as Awaited<ReturnType<Octokit['git']['createRef']>>['headers'],
    url: 'url'
  };

  const response200 = {
    ...response,
    status: 200 as const
  };

  const response201 = {
    ...response,
    status: 201 as const
  };

  const response301 = {
    ...response,
    status: 301 as const
  };

  const ref = {
    node_id: 'node_id',
    object: {
      sha: 'sha',
      type: 'type',
      url: 'url'
    },
    ref: 'ref',
    url: 'url'
  };

  const octokitMock: MockedOctokit = {
    rest: {
      git: {
        createRef: vi.fn(),
        deleteRef: vi.fn(),
        getRef: vi.fn(),
        createBlob: vi.fn(),
        createTree: vi.fn(),
        getCommit: vi.fn(),
        createCommit: vi.fn(),
        updateRef: vi.fn()
      },
      issues: {
        update: vi.fn()
      },
      pulls: {
        create: vi.fn(),
        requestReviewers: vi.fn()
      },
      repos: {
        get: vi.fn(),
        getBranch: vi.fn()
      }
    }
  };

  let repoKit: RepoKit;

  beforeEach(() => {
    vi.resetAllMocks();

    OctokitMock.mockImplementation(function (this: MockedOctokit) {
      this.rest = {
        git: octokitMock.rest.git,
        issues: octokitMock.rest.issues,
        pulls: octokitMock.rest.pulls,
        repos: octokitMock.rest.repos
      };

      return this;
    });

    repoKit = new RepoKit(owner, repo, token);
  });

  describe('constructor', () => {
    it('should create Octokit with the token', () => {
      expect(OctokitMock).toBeCalledWith({ auth: token });
    });
  });

  describe('getRepositoryInfo', () => {
    it('should return repository info set in the constructor', () => {
      expect(repoKit.getRepositoryInfo()).toStrictEqual(repositoryInfo);
    });
  });

  describe('hasBranch', () => {
    const name = 'branch';

    it('should return true if the input is an existing branch', async () => {
      const getBranchMock = vi.spyOn(repoKit, 'getBranch').mockResolvedValue({ name, ...ref });

      expect(await repoKit.hasBranch(name)).toBe(true);
      expect(getBranchMock).toBeCalledWith(name);
    });

    it('should return false if the input is a non-existing branch (an Error is thrown)', async () => {
      const getBranchMock = vi.spyOn(repoKit, 'getBranch').mockImplementation(() => {
        throw new Error();
      });

      expect(await repoKit.hasBranch(name)).toBe(false);
      expect(getBranchMock).toBeCalledWith(name);
    });
  });

  describe('getBranch', () => {
    const name = 'branch';

    it('should return branch if the input is an existing branch', async () => {
      octokitMock.rest.git.getRef.mockResolvedValue({ ...response200, data: ref });

      expect(await repoKit.getBranch(name)).toEqual({ name, ...ref });
      expect(octokitMock.rest.git.getRef).toBeCalledWith({ ...repositoryInfo, ref: `heads/${name}` });
    });

    it('should throw an error if the input is a non-existing branch (an Error is thrown)', async () => {
      octokitMock.rest.git.getRef.mockImplementation(() => {
        throw new Error();
      });

      await expect(repoKit.getBranch(name)).rejects.toBeDefined();
      expect(octokitMock.rest.git.getRef).toBeCalledWith({ ...repositoryInfo, ref: `heads/${name}` });
    });
  });

  describe('createBranch', () => {
    const name = 'branch';
    const sha = 'sha';

    it('should return the newly created branch if it was created successfully', async () => {
      octokitMock.rest.git.createRef.mockResolvedValue({
        ...response201,
        data: ref
      });

      expect(await repoKit.createBranch(name, sha)).toEqual(ref);
      expect(octokitMock.rest.git.createRef).toBeCalledWith({
        ...repositoryInfo,
        ref: `refs/heads/${name}`,
        sha
      });
    });

    it('should throw an error if it was not created successfully (an Error was thrown)', async () => {
      octokitMock.rest.git.createRef.mockImplementation(() => {
        throw new Error();
      });

      await expect(repoKit.createBranch(name, sha)).rejects.toBeDefined();
      expect(octokitMock.rest.git.createRef).toBeCalledWith({ ...repositoryInfo, ref: `refs/heads/${name}`, sha });
    });
  });

  describe('deleteBranch', () => {
    const name = 'branch';

    it('should call deleteRef', async () => {
      await repoKit.deleteBranch(name);
      expect(octokitMock.rest.git.deleteRef).toBeCalledWith({ ...repositoryInfo, ref: `heads/${name}` });
    });
  });

  describe('getDefaultBranchName', () => {
    const name = 'default-branch';
    const message = 'Fetch for the default branch failed with the status code 301';

    it('should return the default branch name', async () => {
      octokitMock.rest.repos.get.mockResolvedValue({
        ...response200,
        data: { default_branch: name }
      } as Awaited<ReturnType<Octokit['repos']['get']>>);

      expect(await repoKit.getDefaultBranchName()).toEqual(name);
      expect(octokitMock.rest.repos.get).toBeCalledWith(repositoryInfo);
    });

    it('should throw an error if the request has status 301', async () => {
      octokitMock.rest.repos.get.mockResolvedValue(
        response301 as unknown as Awaited<ReturnType<Octokit['repos']['get']>>
      );

      await expect(repoKit.getDefaultBranchName()).rejects.toMatchObject({ message });
      expect(octokitMock.rest.repos.get).toBeCalledWith(repositoryInfo);
    });
  });

  describe('commitFiles', () => {
    const paths = ['path1', 'path2'];
    const commitMessage = 'commit-message';
    const branchName = 'branch';

    const blobs = paths.map((path) => ({ sha: `blob-${path}-sha`, url: '' }));

    const tree = { sha: 'tree-sha', tree: [], truncated: false, url: '' };

    const commit = {
      author: { date: 'data', email: 'email', name: 'name' },
      committer: { date: 'date', email: 'email', name: 'name' },
      html_url: 'html_url',
      message: 'message',
      node_id: 'node_id',
      parents: [],
      sha: 'commit-sha',
      tree: { sha: 'tree-sha', url: '' },
      url: 'url',
      verification: {
        // @ts-expect-error Wrong typing in @octokit/rest for payload
        payload: null as string,
        reason: 'unsigned',
        // @ts-expect-error Wrong typing in @octokit/rest for signature
        signature: null as string,
        verified: false
      }
    };

    let getBranchMock: SpyInstance<Parameters<RepoKit['getBranch']>, ReturnType<RepoKit['getBranch']>>;

    const expectCommitMethods = () => {
      expect(octokitMock.rest.git.createBlob).toBeCalledWith({
        ...repositoryInfo,
        content: 'cmVhZEZpbGUocGF0aDEp', // base64 of "readFile(path1)"
        encoding: 'base64'
      });

      expect(octokitMock.rest.git.createBlob).toBeCalledWith({
        ...repositoryInfo,
        content: 'cmVhZEZpbGUocGF0aDIp', // base64 "readFile(path2)"
        encoding: 'base64'
      });

      expect(getBranchMock).toBeCalledWith(branchName);

      expect(octokitMock.rest.git.createTree).toBeCalledWith({
        ...repositoryInfo,
        base_tree: 'sha',
        tree: paths.map((path) => ({
          path,
          mode: '100644',
          sha: `blob-${path}-sha`,
          type: 'blob'
        }))
      });
    };

    beforeEach(() => {
      readFileSyncMock.mockImplementation((path) => `readFile(${path})`);

      paths.forEach((_path, index) => {
        const blob = blobs[index];
        if (!blob) {
          throw new Error(`Error: Missing blob data for index ${index}.`);
        }

        octokitMock.rest.git.createBlob.mockResolvedValueOnce({ ...response201, data: blob });
      });

      octokitMock.rest.git.createTree.mockResolvedValue({
        ...response201,
        data: tree
      });

      octokitMock.rest.git.createCommit.mockResolvedValue({
        ...response201,
        data: commit
      });

      getBranchMock = vi.spyOn(repoKit, 'getBranch').mockResolvedValue({ name: branchName, ...ref });
    });

    it('should call all necessary methods in the correct order', async () => {
      expect(await repoKit.commitFiles({ paths, message: commitMessage, branchName })).toBe(commit);

      expectCommitMethods();

      // Use instance[0] to be sure the token for createCommit is used
      expect(OctokitMock.mock.instances[0]?.rest.git.createCommit).toBeCalledWith({
        ...repositoryInfo,
        parents: ['sha'],
        tree: tree.sha,
        message: commitMessage
      });

      expect(octokitMock.rest.git.updateRef).toBeCalledWith({
        ...repositoryInfo,
        ref: `heads/${branchName}`,
        sha: commit.sha,
        force: false
      });
    });

    it('should call all necessary methods in the correct order and use a custom token when it is specified', async () => {
      const commitToken = 'commit-token';

      expect(
        await repoKit.commitFiles({ paths, message: commitMessage, branchName, token: commitToken })
      ).toStrictEqual(commit);

      expectCommitMethods();

      // A new instance of Octokit is created with commitToken
      expect(OctokitMock.mock.calls[1]?.[0]).toStrictEqual({ auth: commitToken });

      // Use instance[1] to be sure the commitToken for createCommit is used
      expect(OctokitMock.mock.instances[1]?.rest.git.createCommit).toBeCalledWith({
        ...repositoryInfo,
        parents: ['sha'],
        tree: tree.sha,
        message: commitMessage
      });

      expect(octokitMock.rest.git.updateRef).toBeCalledWith({
        ...repositoryInfo,
        ref: `heads/${branchName}`,
        sha: commit.sha,
        force: false
      });
    });

    it('should throw an error if the commit message is missing', async () => {
      await expect(repoKit.commitFiles({ paths, branchName })).rejects.toMatchObject({
        message: 'Commit message is empty'
      });

      expectCommitMethods();

      expect(octokitMock.rest.git.createCommit).not.toBeCalled();
      expect(octokitMock.rest.git.updateRef).not.toBeCalled();
    });

    it('should call all necessary methods in the correct order for an amended commit', async () => {
      octokitMock.rest.git.getCommit.mockResolvedValue({
        ...response200,
        data: {
          ...commit,
          sha: 'old-commit-sha',
          parents: [{ sha: 'old-commit-parent-sha', url: 'url', html_url: 'html_url' }]
        }
      });

      expect(await repoKit.commitFiles({ paths, message: commitMessage, branchName, amend: true })).toBe(commit);

      expectCommitMethods();

      expect(octokitMock.rest.git.getCommit).toBeCalledWith({
        ...repositoryInfo,
        commit_sha: 'sha'
      });

      expect(octokitMock.rest.git.createCommit).toBeCalledWith({
        ...repositoryInfo,
        parents: ['old-commit-parent-sha'],
        tree: tree.sha,
        message: commitMessage
      });

      expect(octokitMock.rest.git.updateRef).toBeCalledWith({
        ...repositoryInfo,
        ref: `heads/${branchName}`,
        sha: commit.sha,
        force: true
      });
    });

    it('should use old commit message if the commit message is missing for an amended commit', async () => {
      const getCommitMock = OctokitMock.mock.instances[0]?.rest.git.getCommit?.mockResolvedValue({
        ...response200,
        data: {
          ...commit,
          sha: 'old-commit-sha',
          parents: [{ sha: 'old-commit-parent-sha', url: 'url', html_url: 'html_url' }]
        }
      });

      expect(await repoKit.commitFiles({ paths, branchName, amend: true })).toBe(commit);

      expectCommitMethods();

      expect(getCommitMock).toBeCalledWith({
        ...repositoryInfo,
        commit_sha: 'sha'
      });

      expect(octokitMock.rest.git.createCommit).toBeCalledWith({
        ...repositoryInfo,
        parents: ['old-commit-parent-sha'],
        tree: tree.sha,
        message: commit.message
      });

      expect(octokitMock.rest.git.updateRef).toBeCalledWith({
        ...repositoryInfo,
        ref: `heads/${branchName}`,
        sha: commit.sha,
        force: true
      });
    });
  });

  describe('createPullRequest', () => {
    const branchName = 'branch-name';
    const baseBranchName = 'base-branch-name';
    const title = 'title';
    const body = 'body';
    const labels = ['label'];
    const assignees = ['assignee'];
    const reviewers = ['reviewer'];
    const teamReviewers = ['teamReviewer'];
    const milestone = 1;
    const draft = true;

    const pullRequest = { number: 42 } as Awaited<ReturnType<Octokit['pulls']['create']>>['data'];

    beforeEach(() => {
      octokitMock.rest.pulls.create.mockResolvedValue({
        ...response201,
        data: pullRequest
      });
    });

    it('should call all necessary methods in the correct order', async () => {
      expect(
        await repoKit.createPullRequest({
          branchName,
          baseBranchName,
          title,
          body,
          labels,
          assignees,
          reviewers,
          teamReviewers,
          milestone,
          draft
        })
      ).toBe(pullRequest);

      expect(octokitMock.rest.pulls.create).toBeCalledWith({
        ...repositoryInfo,
        base: baseBranchName,
        head: branchName,
        title,
        body,
        draft
      });

      expect(octokitMock.rest.pulls.requestReviewers).toBeCalledWith({
        ...repositoryInfo,
        pull_number: pullRequest.number,
        reviewers,
        team_reviewers: teamReviewers
      });

      expect(octokitMock.rest.issues.update).toBeCalledWith({
        ...repositoryInfo,
        issue_number: pullRequest.number,
        labels,
        assignees,
        milestone
      });
    });

    it('should use the default branch when base is not defined', async () => {
      const defaultBranchName = 'default-branch-name';
      const getDefaultBranchName = vi.spyOn(repoKit, 'getDefaultBranchName').mockResolvedValue(defaultBranchName);

      await repoKit.createPullRequest({ branchName, title });

      expect(getDefaultBranchName).toBeCalled();

      expect(octokitMock.rest.pulls.create).toBeCalledWith({
        ...repositoryInfo,
        base: defaultBranchName,
        head: branchName,
        title
      });
    });

    it('should use message of last commit as title when title is not defined', async () => {
      const message = 'commit-mesage';

      octokitMock.rest.repos.getBranch.mockResolvedValue({
        ...response200,
        data: {
          commit: {
            commit: {
              message
            }
          }
        }
      } as Awaited<ReturnType<Octokit['repos']['getBranch']>>);

      expect(
        await repoKit.createPullRequest({
          branchName,
          baseBranchName
        })
      ).toBe(pullRequest);

      expect(octokitMock.rest.repos.getBranch).toBeCalledWith({
        ...repositoryInfo,
        branch: branchName
      });

      expect(octokitMock.rest.pulls.create).toBeCalledWith({
        ...repositoryInfo,
        base: baseBranchName,
        head: branchName,
        title: message
      });
    });

    it('should not call requestReviewers when reviewers and team reviewers are not defined', async () => {
      await repoKit.createPullRequest({ branchName, baseBranchName, title });
      expect(octokitMock.rest.pulls.requestReviewers).not.toBeCalled();
    });

    it('should call requestReviewers when reviewers are defined', async () => {
      await repoKit.createPullRequest({ branchName, baseBranchName, title, reviewers });
      expect(octokitMock.rest.pulls.requestReviewers).toBeCalled();
    });

    it('should call requestReviewers when team reviewers are defined', async () => {
      await repoKit.createPullRequest({ branchName, baseBranchName, title, teamReviewers });
      expect(octokitMock.rest.pulls.requestReviewers).toBeCalled();
    });

    it('should not call update when labels and assignees and milestone are not defined', async () => {
      await repoKit.createPullRequest({ branchName, baseBranchName, title });
      expect(octokitMock.rest.issues.update).not.toBeCalled();
    });

    it('should call update when labels are defined', async () => {
      await repoKit.createPullRequest({ branchName, baseBranchName, title, labels });
      expect(octokitMock.rest.issues.update).toBeCalled();
    });

    it('should call update when assignees are defined', async () => {
      await repoKit.createPullRequest({ branchName, baseBranchName, title, assignees });
      expect(octokitMock.rest.issues.update).toBeCalled();
    });

    it('should call update when milestone is defined', async () => {
      await repoKit.createPullRequest({ branchName, baseBranchName, title, milestone });
      expect(octokitMock.rest.issues.update).toBeCalled();
    });
  });
});
