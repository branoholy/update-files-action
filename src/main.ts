import * as envalid from 'envalid';

import { app, BranchArgs, CommitArgs, PullRequestArgs } from './app';
import { ActionUtils } from './utils/action-utils';

const commitArgFields = ['paths', 'message', 'token', 'amend'];

const pullRequestArgFields = [
  'title',
  'body',
  'base',
  'labels',
  'assignees',
  'reviewers',
  'team-reviewers',
  'milestone',
  'draft'
];

const hasCommitArgs = () => commitArgFields.some((field) => ActionUtils.hasInput(`commit.${field}`));
const hasPullRequestArgs = () => pullRequestArgFields.some((field) => ActionUtils.hasInput(`pull-request.${field}`));

const getBranchArgs = () => {
  const branchArgs: BranchArgs = {
    name: ActionUtils.getInputAsString('branch.name', { required: true }),
    base: ActionUtils.getInputAsString('branch.base'),
    recreate: ActionUtils.getInputAsBoolean('branch.recreate')
  };

  return branchArgs;
};

const getCommitArgs = () => {
  const commit = ActionUtils.getInputAsBoolean('commit') ?? hasCommitArgs();

  if (!commit) {
    return undefined;
  }

  const commitArgs: CommitArgs = {
    paths: ActionUtils.getInputAsStrings('commit.paths', { required: true }),
    message: ActionUtils.getInputAsString('commit.message'),
    token: ActionUtils.getInputAsString('commit.token'),
    amend: ActionUtils.getInputAsBoolean('commit.amend')
  };

  return commitArgs;
};

const getPullRequestArgs = () => {
  const pullRequest = ActionUtils.getInputAsBoolean('pull-request') ?? hasPullRequestArgs();

  if (!pullRequest) {
    return undefined;
  }

  const pullRequestArgs: PullRequestArgs = {
    title: ActionUtils.getInputAsString('pull-request.title'),
    body: ActionUtils.getInputAsString('pull-request.body'),
    base: ActionUtils.getInputAsString('pull-request.base'),
    labels: ActionUtils.getInputAsStrings('pull-request.labels'),
    assignees: ActionUtils.getInputAsStrings('pull-request.assignees'),
    reviewers: ActionUtils.getInputAsStrings('pull-request.reviewers'),
    teamReviewers: ActionUtils.getInputAsStrings('pull-request.team-reviewers'),
    milestone: ActionUtils.getInputAsInteger('pull-request.milestone'),
    draft: ActionUtils.getInputAsBoolean('pull-request.draft')
  };

  return pullRequestArgs;
};

export const main = async () => {
  try {
    const requiredEnv = envalid.cleanEnv(process.env, {
      GITHUB_REPOSITORY: envalid.str()
    });

    const exitCode = await app({
      repository: requiredEnv.GITHUB_REPOSITORY,
      token: ActionUtils.getInputAsString('token', { required: true }),
      branch: getBranchArgs(),
      commit: getCommitArgs(),
      pullRequest: getPullRequestArgs()
    });

    process.exit(exitCode);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
