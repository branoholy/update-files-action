import * as envalid from 'envalid';

import { app, BranchArgs, CommitArgs, PullRequestArgs } from './app';
import { ActionUtils } from './utils/action-utils';
import { EnvUtils } from './utils/env-utils';
import { dp } from './utils/js-utils';

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

const getBranchArgs = (): BranchArgs => {
  const name = ActionUtils.getInputAsString('branch.name', { required: true });
  const base = ActionUtils.getInputAsString('branch.base');
  const recreate = ActionUtils.getInputAsBoolean('branch.recreate');

  return {
    name,
    ...dp({ base }, null),
    ...dp({ recreate }, null)
  };
};

const getCommitArgs = (): CommitArgs | null => {
  const commit = ActionUtils.getInputAsBoolean('commit') ?? hasCommitArgs();

  if (!commit) {
    return null;
  }

  const paths = ActionUtils.getInputAsStrings('commit.paths', { required: true });
  const message = ActionUtils.getInputAsString('commit.message');
  const token = ActionUtils.getInputAsString('commit.token');
  const amend = ActionUtils.getInputAsBoolean('commit.amend');

  return {
    paths,
    ...dp({ message }, null),
    ...dp({ token }, null),
    ...dp({ amend }, null)
  };
};

const getPullRequestArgs = (): PullRequestArgs | null => {
  const pullRequest = ActionUtils.getInputAsBoolean('pull-request') ?? hasPullRequestArgs();

  if (!pullRequest) {
    return null;
  }

  const title = ActionUtils.getInputAsString('pull-request.title');
  const body = ActionUtils.getInputAsString('pull-request.body');
  const base = ActionUtils.getInputAsString('pull-request.base');
  const labels = ActionUtils.getInputAsStrings('pull-request.labels');
  const assignees = ActionUtils.getInputAsStrings('pull-request.assignees');
  const reviewers = ActionUtils.getInputAsStrings('pull-request.reviewers');
  const teamReviewers = ActionUtils.getInputAsStrings('pull-request.team-reviewers');
  const milestone = ActionUtils.getInputAsInteger('pull-request.milestone');
  const draft = ActionUtils.getInputAsBoolean('pull-request.draft');

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

export const main = async () => {
  try {
    const requiredEnv = EnvUtils.requireEnv({
      GITHUB_REPOSITORY: envalid.str()
    });

    const token = ActionUtils.getInputAsString('token', { required: true });
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
