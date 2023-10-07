var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import * as envalid from "envalid";
import * as ActionsCore from "@actions/core";
import OS from "os";
import { execSync } from "child_process";
import { globSync } from "glob";
import { Octokit } from "@octokit/rest";
import btoa from "btoa";
import { readFileSync } from "fs";
function parseList(listString) {
  if (listString === null) {
    return null;
  }
  return listString.split(OS.EOL).map((item) => item.trim()).filter(Boolean);
}
const StringUtils = {
  parseList
};
const getInput = (name, options) => {
  const input = ActionsCore.getInput(name, options);
  if (!(options == null ? void 0 : options.required) && input === "") {
    return null;
  }
  return input;
};
function getInputAsBoolean(name, options) {
  const input = getInput(name, options);
  if (input === "true") {
    return true;
  }
  if (input === "false") {
    return false;
  }
  return null;
}
function getInputAsInteger(name, options) {
  const input = getInput(name, options);
  if (typeof input === "string") {
    return parseInt(input, 10);
  }
  return null;
}
function getInputAsString(name, options) {
  return getInput(name, options);
}
function getInputAsStrings(name, options) {
  return StringUtils.parseList(getInput(name, options));
}
const hasInput = (name) => getInput(name) !== null;
const ActionUtils = {
  getInputAsBoolean,
  getInputAsInteger,
  getInputAsString,
  getInputAsStrings,
  hasInput
};
const requireEnv = (specs) => envalid.cleanEnv(process.env, specs, {
  reporter: ({ errors }) => {
    const missingEnvs = Object.keys(errors);
    if (missingEnvs.length > 0) {
      throw new Error(`Missing env(s): ${missingEnvs.join(", ")}`);
    }
  }
});
const EnvUtils = {
  requireEnv
};
const isFileUntracked = (path) => {
  return execSync(`git ls-files --exclude-standard --others ${path} | wc -l`).toString().trim() === "1";
};
const isFileChanged = (path) => {
  return execSync(`git diff --shortstat ${path} | wc -l`).toString().trim() === "1";
};
const FileUtils = {
  isFileUntracked,
  isFileChanged
};
const definedProperty = (obj, emptyValue) => Object.values(obj)[0] === emptyValue ? {} : obj;
const dp = definedProperty;
class RepoKit {
  constructor(owner, repositoryName, token) {
    __publicField(this, "octokit");
    this.owner = owner;
    this.repositoryName = repositoryName;
    this.octokit = new Octokit({ auth: token });
  }
  getRepositoryInfo() {
    return {
      owner: this.owner,
      repo: this.repositoryName
    };
  }
  async hasBranch(name) {
    try {
      await this.getBranch(name);
      return true;
    } catch (error) {
      return false;
    }
  }
  async getBranch(name) {
    const { data } = await this.octokit.rest.git.getRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${name}`
    });
    return {
      ...data,
      name
    };
  }
  async createBranch(name, sha) {
    const { data } = await this.octokit.rest.git.createRef({
      ...this.getRepositoryInfo(),
      ref: `refs/heads/${name}`,
      sha
    });
    return data;
  }
  deleteBranch(name) {
    return this.octokit.rest.git.deleteRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${name}`
    });
  }
  async getDefaultBranchName() {
    const response = await this.octokit.rest.repos.get(this.getRepositoryInfo());
    if (response.status !== 200) {
      throw new Error(`Fetch for the default branch failed with the status code ${response.status}`);
    }
    return response.data.default_branch;
  }
  async createBlobs(paths) {
    const encoding = "base64";
    const type = "blob";
    const mode = "100644";
    const blobs = [];
    for (const path of paths) {
      const {
        data: { sha }
      } = await this.octokit.rest.git.createBlob({
        ...this.getRepositoryInfo(),
        content: btoa(readFileSync(path)),
        encoding
      });
      blobs.push({ type, mode, path, sha });
    }
    return blobs;
  }
  async createCommit({ branchSha, treeSha, message, token, amend }) {
    const commitOctokit = token ? new Octokit({ auth: token }) : this.octokit;
    if (amend) {
      const { data: commit } = await this.octokit.rest.git.getCommit({
        ...this.getRepositoryInfo(),
        commit_sha: branchSha
      });
      const { data } = await commitOctokit.rest.git.createCommit({
        ...this.getRepositoryInfo(),
        parents: commit.parents.map(({ sha }) => sha),
        tree: treeSha,
        message: message || commit.message
      });
      return data;
    } else {
      if (!message) {
        throw new Error("Commit message is empty");
      }
      const { data } = await commitOctokit.rest.git.createCommit({
        ...this.getRepositoryInfo(),
        parents: [branchSha],
        tree: treeSha,
        message
      });
      return data;
    }
  }
  async commitFiles({ paths, branchName, amend = false, ...restCommitArgs }) {
    const treeBlobs = await this.createBlobs(paths);
    const {
      object: { sha: branchSha }
    } = await this.getBranch(branchName);
    const {
      data: { sha: treeSha }
    } = await this.octokit.rest.git.createTree({
      ...this.getRepositoryInfo(),
      tree: treeBlobs,
      base_tree: branchSha
    });
    const commit = await this.createCommit({ branchSha, treeSha, amend, ...restCommitArgs });
    await this.octokit.rest.git.updateRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${branchName}`,
      sha: commit.sha,
      force: amend
    });
    return commit;
  }
  async getBranchCommitMessage(branchName) {
    const {
      data: { commit }
    } = await this.octokit.rest.repos.getBranch({
      ...this.getRepositoryInfo(),
      branch: branchName
    });
    return commit.commit.message;
  }
  async createPullRequest({
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
  }) {
    const { data } = await this.octokit.rest.pulls.create({
      ...this.getRepositoryInfo(),
      base: baseBranchName || await this.getDefaultBranchName(),
      head: branchName,
      title: title || await this.getBranchCommitMessage(branchName),
      ...dp({ body }),
      ...dp({ draft })
    });
    if (reviewers || teamReviewers) {
      await this.octokit.rest.pulls.requestReviewers({
        ...this.getRepositoryInfo(),
        pull_number: data.number,
        ...dp({ reviewers }),
        ...dp({ team_reviewers: teamReviewers })
      });
    }
    if (labels || assignees || milestone) {
      await this.octokit.rest.issues.update({
        ...this.getRepositoryInfo(),
        issue_number: data.number,
        ...dp({ labels }),
        ...dp({ assignees }),
        ...dp({ milestone })
      });
    }
    return data;
  }
}
const branchRefPrefix = "refs/heads/";
const findChangedFiles = (paths) => {
  const filePaths = paths.reduce((acc, path) => {
    acc.push(...globSync(path, { nodir: true }));
    return acc;
  }, []);
  const changedPaths = filePaths.reduce((acc, filePath) => {
    if (FileUtils.isFileUntracked(filePath)) {
      console.info(`File "${filePath}" is created`);
      acc.push(filePath);
      return acc;
    }
    if (FileUtils.isFileChanged(filePath)) {
      console.info(`File "${filePath}" is changed`);
      acc.push(filePath);
      return acc;
    }
    return acc;
  }, []);
  if (changedPaths.length === 0) {
    console.info("No file has been changed");
  }
  return changedPaths;
};
const createBranch = async (repoKit, { name: branchName, base: baseBranchName, recreate = false }) => {
  if (await repoKit.hasBranch(branchName)) {
    console.info(`Branch "${branchName}" already exists`);
    if (recreate) {
      console.info(`Deleting branch "${branchName}"...`);
      await repoKit.deleteBranch(branchName);
      console.info(`Branch "${branchName}" has been deleted`);
    } else {
      return;
    }
  }
  const {
    object: { sha: baseBranchSha }
  } = await repoKit.getBranch(baseBranchName ?? await repoKit.getDefaultBranchName());
  await repoKit.createBranch(branchName, baseBranchSha);
  console.info(`Branch "${branchName}" has been created`);
};
const commitFiles = async (repoKit, paths, branchName, commitArgs) => {
  const commit = await repoKit.commitFiles({
    ...commitArgs,
    paths,
    branchName
  });
  ActionsCore.setOutput("commit.sha", commit.sha);
  console.info(`Changed files have been committed to ${commit.sha}`);
};
const createPullRequest = async (repoKit, branchName, pullRequestArgs) => {
  const pullRequest = await repoKit.createPullRequest({
    ...pullRequestArgs,
    ...dp({ baseBranchName: pullRequestArgs.base }),
    branchName
  });
  console.info(`Pull request has been created at ${pullRequest.html_url}`);
};
const app = async ({
  repository,
  token,
  branch: { name: branchName, ...restBranch },
  commit,
  pullRequest
}) => {
  try {
    const [owner, repositoryName] = repository.split("/");
    if (!owner || !repositoryName) {
      throw new Error(`Repository "${repository}" does not have the valid format (owner/repositoryName)`);
    }
    if (commit && !commit.message && !commit.amend) {
      throw new Error('Commit message is missing, please specify the "commit.message" input');
    }
    if (branchName.startsWith(branchRefPrefix)) {
      branchName = branchName.slice(branchRefPrefix.length);
    }
    const changedPaths = commit ? findChangedFiles(commit.paths) : null;
    if ((changedPaths == null ? void 0 : changedPaths.length) === 0) {
      return 0;
    }
    const repoKit = new RepoKit(owner, repositoryName, token);
    await createBranch(repoKit, { name: branchName, ...restBranch });
    if (commit && changedPaths) {
      await commitFiles(repoKit, changedPaths, branchName, commit);
    }
    if (pullRequest) {
      await createPullRequest(repoKit, branchName, {
        ...dp({ title: commit == null ? void 0 : commit.message }),
        ...pullRequest
      });
    }
  } catch (error) {
    console.error(error);
    return 1;
  }
  return 0;
};
const commitArgFields = ["paths", "message", "token", "amend"];
const pullRequestArgFields = [
  "title",
  "body",
  "base",
  "labels",
  "assignees",
  "reviewers",
  "team-reviewers",
  "milestone",
  "draft"
];
const hasCommitArgs = () => commitArgFields.some((field) => ActionUtils.hasInput(`commit.${field}`));
const hasPullRequestArgs = () => pullRequestArgFields.some((field) => ActionUtils.hasInput(`pull-request.${field}`));
const getBranchArgs = () => {
  const name = ActionUtils.getInputAsString("branch.name", { required: true });
  const base = ActionUtils.getInputAsString("branch.base");
  const recreate = ActionUtils.getInputAsBoolean("branch.recreate");
  return {
    name,
    ...dp({ base }, null),
    ...dp({ recreate }, null)
  };
};
const getCommitArgs = () => {
  const commit = ActionUtils.getInputAsBoolean("commit") ?? hasCommitArgs();
  if (!commit) {
    return null;
  }
  const paths = ActionUtils.getInputAsStrings("commit.paths", { required: true });
  const message = ActionUtils.getInputAsString("commit.message");
  const token = ActionUtils.getInputAsString("commit.token");
  const amend = ActionUtils.getInputAsBoolean("commit.amend");
  return {
    paths,
    ...dp({ message }, null),
    ...dp({ token }, null),
    ...dp({ amend }, null)
  };
};
const getPullRequestArgs = () => {
  const pullRequest = ActionUtils.getInputAsBoolean("pull-request") ?? hasPullRequestArgs();
  if (!pullRequest) {
    return null;
  }
  const title = ActionUtils.getInputAsString("pull-request.title");
  const body = ActionUtils.getInputAsString("pull-request.body");
  const base = ActionUtils.getInputAsString("pull-request.base");
  const labels = ActionUtils.getInputAsStrings("pull-request.labels");
  const assignees = ActionUtils.getInputAsStrings("pull-request.assignees");
  const reviewers = ActionUtils.getInputAsStrings("pull-request.reviewers");
  const teamReviewers = ActionUtils.getInputAsStrings("pull-request.team-reviewers");
  const milestone = ActionUtils.getInputAsInteger("pull-request.milestone");
  const draft = ActionUtils.getInputAsBoolean("pull-request.draft");
  return {
    ...dp({ title }, null),
    ...dp({ body }, null),
    ...dp({ base }, null),
    ...dp({ labels }, null),
    ...dp({ assignees }, null),
    ...dp({ reviewers }, null),
    ...dp({ teamReviewers }, null),
    ...dp({ milestone }, null),
    ...dp({ draft }, null)
  };
};
const main = async () => {
  try {
    const requiredEnv = EnvUtils.requireEnv({
      GITHUB_REPOSITORY: envalid.str()
    });
    const token = ActionUtils.getInputAsString("token", { required: true });
    const branch = getBranchArgs();
    const commit = getCommitArgs();
    const pullRequest = getPullRequestArgs();
    const exitCode = await app({
      repository: requiredEnv.GITHUB_REPOSITORY,
      token,
      branch,
      ...dp({ commit }, null),
      ...dp({ pullRequest }, null)
    });
    process.exit(exitCode);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
};
main();
