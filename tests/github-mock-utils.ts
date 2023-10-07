const createBranchRefName = (branchName: string) => `refs/heads/${branchName}`;

const createCommitMessage = (sha: string) => `message-${sha}`;

const createCommitSha = (id: number) => `commit-${id}-sha`;

const getCommitId = (sha: string) => parseInt(sha.split('-')[1] ?? '', 10);

const getLastPartFromPath = (path: string) => path.split('/').filter(Boolean).at(-1);

const getRefNameFromPath = (path: string) => {
  const ref = getLastPartFromPath(path);

  if (!ref) {
    return null;
  }

  return `refs/${ref.replaceAll('%2F', '/')}`;
};

export const GitHubMockUtils = {
  createBranchRefName,
  createCommitMessage,
  createCommitSha,
  getCommitId,
  getLastPartFromPath,
  getRefNameFromPath
};
