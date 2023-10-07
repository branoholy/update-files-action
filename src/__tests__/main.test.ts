import * as envalid from 'envalid';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ActionUtils, TestUtils } from ':/utils';

import { app } from '../app';
import { main } from '../main';

const consoleErrorMock = vi.spyOn(console, 'error').mockReset();
const processExitMock = vi.spyOn(process, 'exit').mockReset();

vi.mock('envalid');
const envalidMock = {
  cleanEnv: TestUtils.asMockedFunction(envalid.cleanEnv),
  str: TestUtils.asMockedFunction(envalid.str)
};

vi.mock('../app');
const appMock = TestUtils.asMockedFunction(app);

vi.mock('../utils/action-utils');
const ActionUtilsMock = {
  getInputAsBoolean: TestUtils.asMockedFunction(ActionUtils.getInputAsBoolean),
  getInputAsInteger: TestUtils.asMockedFunction(ActionUtils.getInputAsInteger),
  getInputAsString: TestUtils.asMockedFunction(ActionUtils.getInputAsString),
  getInputAsStrings: TestUtils.asMockedFunction(ActionUtils.getInputAsStrings),
  hasInput: TestUtils.asMockedFunction(ActionUtils.hasInput)
};

describe('main', () => {
  const repository = 'owner/repository-name';
  const token = 'token';

  const branch = {
    name: 'branch'
  };

  const commit = {
    paths: ['path1', 'path2'],
    message: 'commit-message',
    token: 'commit-token',
    amend: true
  };

  const pullRequest = {
    title: 'pull-request-title',
    body: 'pull-request-body',
    base: 'custom-base-branch',
    labels: ['label1', 'label2'],
    assignees: ['assignee1'],
    reviewers: ['reviewer1', 'reviewer2', 'reviewer3'],
    teamReviewers: ['teamReviewer1'],
    milestone: 42,
    draft: true
  };

  const mockEnv = () => {
    envalidMock.str.mockReturnValue({
      _parse: vi.fn()
    });

    envalidMock.cleanEnv.mockReturnValue({ GITHUB_REPOSITORY: repository } as unknown as ReturnType<
      typeof envalid.cleanEnv
    >);
  };

  const expectEnv = () =>
    TestUtils.expectToBeCalled(envalidMock.cleanEnv, [
      [
        process.env,
        {
          GITHUB_REPOSITORY: envalidMock.str()
        },
        {
          reporter: expect.any(Function) as (opts: envalid.ReporterOptions<unknown>) => void
        }
      ]
    ]);

  const booleanInputNames = [
    'branch.recreate',
    'commit',
    'commit.amend',
    'pull-request',
    'pull-request.draft'
  ] as const;
  type BooleanInputName = (typeof booleanInputNames)[number];

  const integerInputNames = ['pull-request.milestone'] as const;
  type IntegerInputName = (typeof integerInputNames)[number];

  const stringInputNames = [
    'token',
    'branch.name',
    'branch.base',
    'commit.message',
    'commit.token',
    'pull-request.title',
    'pull-request.body',
    'pull-request.base'
  ] as const;
  type StringInputName = (typeof stringInputNames)[number];

  const stringsInputNames = [
    'commit.paths',
    'pull-request.labels',
    'pull-request.assignees',
    'pull-request.reviewers',
    'pull-request.team-reviewers'
  ] as const;
  type StringsInputName = (typeof stringsInputNames)[number];

  type InputName = BooleanInputName | IntegerInputName | StringInputName | StringsInputName;

  const isBooleanInput = (name: string): name is BooleanInputName =>
    booleanInputNames.includes(name as BooleanInputName);

  const isIntegerInput = (name: string): name is IntegerInputName =>
    integerInputNames.includes(name as IntegerInputName);

  const isStringInput = (name: string): name is StringInputName => stringInputNames.includes(name as StringInputName);

  const isStringsInput = (name: string): name is StringsInputName =>
    stringsInputNames.includes(name as StringsInputName);

  const isInput = (name: string): name is InputName =>
    isBooleanInput(name) || isIntegerInput(name) || isStringInput(name) || isStringsInput(name);

  interface Inputs {
    token: string;

    'branch.name': string;
    'branch.base'?: string;
    'branch.recreate'?: boolean;

    commit?: boolean;
    'commit.paths'?: string[];
    'commit.message'?: string;
    'commit.token'?: string;
    'commit.amend'?: boolean;

    'pull-request'?: boolean;
    'pull-request.title'?: string;
    'pull-request.body'?: string;
    'pull-request.base'?: string;
    'pull-request.labels'?: string[];
    'pull-request.assignees'?: string[];
    'pull-request.reviewers'?: string[];
    'pull-request.team-reviewers'?: string[];
    'pull-request.milestone'?: number;
    'pull-request.draft'?: boolean;
  }

  const mockInputs = (inputs: Inputs) => {
    const names: InputName[] = Object.keys(inputs) as (keyof Inputs)[];

    ActionUtilsMock.getInputAsBoolean.mockImplementation((name, { required } = {}) => {
      if (isBooleanInput(name) && names.includes(name)) {
        return inputs[name] ?? null;
      }

      if (required) {
        throw new Error(`Missing required input: ${name}`);
      }

      return null;
    });

    ActionUtilsMock.getInputAsInteger.mockImplementation((name, { required } = {}) => {
      if (isIntegerInput(name) && names.includes(name)) {
        return inputs[name] ?? null;
      }

      if (required) {
        throw new Error(`Missing required input: ${name}`);
      }

      return null;
    });

    ActionUtilsMock.getInputAsString.mockImplementation((name, { required } = {}) => {
      if (isStringInput(name) && names.includes(name)) {
        return inputs[name] ?? null;
      }

      if (required) {
        throw new Error(`Missing required input: ${name}`);
      }

      return null;
    });

    ActionUtilsMock.getInputAsStrings.mockImplementation((name, { required } = {}) => {
      if (isStringsInput(name) && names.includes(name)) {
        return inputs[name] ?? null;
      }

      if (required) {
        throw new Error(`Missing required input: ${name}`);
      }

      return null;
    });

    ActionUtilsMock.hasInput.mockImplementation((name) => {
      if (isInput(name) && names.includes(name)) {
        return true;
      }

      return false;
    });
  };

  const expectInputs = (expectPullRequest = true) => {
    expect(ActionUtilsMock.getInputAsBoolean).toBeCalledWith('branch.recreate');
    expect(ActionUtilsMock.getInputAsBoolean).toBeCalledWith('commit');

    if (expectPullRequest) {
      expect(ActionUtilsMock.getInputAsBoolean).toBeCalledWith('pull-request');
    }

    expect(ActionUtilsMock.getInputAsString).toBeCalledWith('token', { required: true });
    expect(ActionUtilsMock.getInputAsString).toBeCalledWith('branch.name', { required: true });
    expect(ActionUtilsMock.getInputAsString).toBeCalledWith('branch.base');
  };

  const expectCommitInputs = () => {
    expect(ActionUtilsMock.getInputAsBoolean).toBeCalledWith('commit.amend');

    expect(ActionUtilsMock.getInputAsString).toBeCalledWith('commit.message');
    expect(ActionUtilsMock.getInputAsString).toBeCalledWith('commit.token');

    expect(ActionUtilsMock.getInputAsStrings).toBeCalledWith('commit.paths', { required: true });
  };

  const expectPullRequestInputs = () => {
    expect(ActionUtilsMock.getInputAsBoolean).toBeCalledWith('pull-request.draft');

    expect(ActionUtilsMock.getInputAsInteger).toBeCalledWith('pull-request.milestone');

    expect(ActionUtilsMock.getInputAsString).toBeCalledWith('pull-request.title');
    expect(ActionUtilsMock.getInputAsString).toBeCalledWith('pull-request.body');
    expect(ActionUtilsMock.getInputAsString).toBeCalledWith('pull-request.base');

    expect(ActionUtilsMock.getInputAsStrings).toBeCalledWith('pull-request.labels');
    expect(ActionUtilsMock.getInputAsStrings).toBeCalledWith('pull-request.assignees');
    expect(ActionUtilsMock.getInputAsStrings).toBeCalledWith('pull-request.reviewers');
    expect(ActionUtilsMock.getInputAsStrings).toBeCalledWith('pull-request.team-reviewers');
  };

  beforeEach(() => {
    vi.resetAllMocks();

    // Mock console and process
    consoleErrorMock.mockReset();
    processExitMock.mockReset();
  });

  it('should run app with required args and exit with 0', async () => {
    mockEnv();
    mockInputs({
      token,
      'branch.name': branch.name
    });

    appMock.mockResolvedValue(0);

    await main();

    expect(consoleErrorMock).not.toBeCalled();
    TestUtils.expectToBeCalled(processExitMock, [[0]]);

    expectEnv();
    expectInputs();

    TestUtils.expectToBeCalled(appMock, [
      [
        {
          repository,
          token,
          branch
        }
      ]
    ]);
  });

  it('should print error and exit with 1 if commit arg is true and commit.paths arg is missing', async () => {
    mockEnv();
    mockInputs({
      token,
      'branch.name': branch.name,
      commit: true
    });

    appMock.mockResolvedValue(0);

    await main();

    expect(consoleErrorMock).toBeCalledWith('Missing required input: commit.paths');
    TestUtils.expectToBeCalled(processExitMock, [[1]]);

    expectEnv();
    expectInputs(false);

    expect(appMock).not.toBeCalled();
  });

  it('should run app without commit and exit with 0 if commit.paths arg is specified but commit arg is false', async () => {
    mockEnv();
    mockInputs({
      token,
      'branch.name': branch.name,
      commit: false,
      'commit.paths': commit.paths
    });

    appMock.mockResolvedValue(0);

    await main();

    expect(consoleErrorMock).not.toBeCalled();
    TestUtils.expectToBeCalled(processExitMock, [[0]]);

    expectEnv();
    expectInputs();

    TestUtils.expectToBeCalled(appMock, [
      [
        {
          repository,
          token,
          branch
        }
      ]
    ]);
  });

  it('should run app with commit.paths arg and exit with 0', async () => {
    mockEnv();
    mockInputs({
      token,
      'branch.name': branch.name,
      'commit.paths': commit.paths
    });

    appMock.mockResolvedValue(0);

    await main();

    expect(consoleErrorMock).not.toBeCalled();
    TestUtils.expectToBeCalled(processExitMock, [[0]]);

    expectEnv();
    expectInputs();
    expectCommitInputs();

    TestUtils.expectToBeCalled(appMock, [
      [
        {
          repository,
          token,
          branch,
          commit: {
            paths: commit.paths
          }
        }
      ]
    ]);
  });

  it.each([
    ['commit.message', commit.message],
    ['commit.token', commit.token],
    ['commit.amend', commit.amend]
  ])(
    'should print error and exit with 1 if %s arg is specified but commit.paths arg is missing',
    async (name, value) => {
      mockEnv();
      mockInputs({
        token,
        'branch.name': branch.name,
        [name]: value
      });

      appMock.mockResolvedValue(0);

      await main();

      expect(consoleErrorMock).toBeCalledWith('Missing required input: commit.paths');
      TestUtils.expectToBeCalled(processExitMock, [[1]]);

      expectEnv();
      expectInputs(false);

      expect(appMock).not.toBeCalled();
    }
  );

  it('should run app with empty pullRequest and exit with 0 if pull-request arg is true', async () => {
    mockEnv();
    mockInputs({
      token,
      'branch.name': branch.name,
      'pull-request': true
    });

    appMock.mockResolvedValue(0);

    await main();

    expect(consoleErrorMock).not.toBeCalled();
    TestUtils.expectToBeCalled(processExitMock, [[0]]);

    expectEnv();
    expectInputs();
    expectPullRequestInputs();

    TestUtils.expectToBeCalled(appMock, [
      [
        {
          repository,
          branch,
          token,
          pullRequest: {}
        }
      ]
    ]);
  });

  it('should run app without pullRequest and exit with 0 if pull-request.title arg is specified but pull-request arg is false', async () => {
    mockEnv();
    mockInputs({
      token,
      'branch.name': branch.name,
      'pull-request': false,
      'pull-request.title': pullRequest.title
    });

    appMock.mockResolvedValue(0);

    await main();

    expect(consoleErrorMock).not.toBeCalled();
    TestUtils.expectToBeCalled(processExitMock, [[0]]);

    expectEnv();
    expectInputs();

    TestUtils.expectToBeCalled(appMock, [
      [
        {
          repository,
          token,
          branch
        }
      ]
    ]);
  });

  it.each([
    ['pull-request.title', 'title', pullRequest.title],
    ['pull-request.body', 'body', pullRequest.body],
    ['pull-request.base', 'base', pullRequest.base],
    ['pull-request.labels', 'labels', pullRequest.labels],
    ['pull-request.assignees', 'assignees', pullRequest.assignees],
    ['pull-request.reviewers', 'reviewers', pullRequest.reviewers],
    ['pull-request.team-reviewers', 'teamReviewers', pullRequest.teamReviewers],
    ['pull-request.milestone', 'milestone', pullRequest.milestone],
    ['pull-request.draft', 'draft', pullRequest.draft]
  ])('should run app with %s arg and exit with 0', async (name, field, value) => {
    mockEnv();
    mockInputs({
      token,
      'branch.name': branch.name,
      [name]: value
    });

    appMock.mockResolvedValue(0);

    await main();

    expect(consoleErrorMock).not.toBeCalled();
    TestUtils.expectToBeCalled(processExitMock, [[0]]);

    expectEnv();
    expectInputs();
    expectPullRequestInputs();

    TestUtils.expectToBeCalled(appMock, [
      [
        {
          repository,
          token,
          branch,
          pullRequest: {
            [field]: value
          }
        }
      ]
    ]);
  });

  it('should run app with all args and exit with 0', async () => {
    const baseBranchName = 'base-branch';

    mockEnv();
    mockInputs({
      token,
      'branch.name': branch.name,
      'branch.base': baseBranchName,
      'branch.recreate': true,

      commit: true,
      'commit.paths': commit.paths,
      'commit.message': commit.message,
      'commit.token': commit.token,
      'commit.amend': commit.amend,

      'pull-request': true,
      'pull-request.title': pullRequest.title,
      'pull-request.body': pullRequest.body,
      'pull-request.base': pullRequest.base,
      'pull-request.labels': pullRequest.labels,
      'pull-request.assignees': pullRequest.assignees,
      'pull-request.reviewers': pullRequest.reviewers,
      'pull-request.team-reviewers': pullRequest.teamReviewers,
      'pull-request.milestone': pullRequest.milestone,
      'pull-request.draft': pullRequest.draft
    });

    appMock.mockResolvedValue(0);

    await main();

    expect(consoleErrorMock).not.toBeCalled();
    TestUtils.expectToBeCalled(processExitMock, [[0]]);

    expectEnv();
    expectInputs();
    expectCommitInputs();
    expectPullRequestInputs();

    TestUtils.expectToBeCalled(appMock, [
      [
        {
          repository,
          token,
          branch: {
            ...branch,
            base: baseBranchName,
            recreate: true
          },
          commit,
          pullRequest
        }
      ]
    ]);
  });

  it('should print error and exit with 1 if GITHUB_REPOSITORY env is missing', async () => {
    const errorMessage = 'error-message';

    envalidMock.cleanEnv.mockImplementation(() => {
      console.error(errorMessage);
      process.exit(1);
    });

    appMock.mockResolvedValue(0);

    await main();

    expect(consoleErrorMock).nthCalledWith(1, errorMessage);
    expect(processExitMock).nthCalledWith(1, 1);

    expectEnv();

    expect(appMock).not.toBeCalled();
  });

  it('should print error message and exit with 1 if app throws an Error', async () => {
    const errorMessage = 'error-message';

    mockEnv();
    mockInputs({
      token,
      'branch.name': branch.name
    });

    appMock.mockImplementation(() => {
      throw new Error(errorMessage);
    });

    await main();

    TestUtils.expectToBeCalled(consoleErrorMock, [[errorMessage]]);
    TestUtils.expectToBeCalled(processExitMock, [[1]]);

    expectEnv();

    TestUtils.expectToBeCalled(appMock, [
      [
        {
          repository,
          token,
          branch
        }
      ]
    ]);
  });

  it('should print error exit with 1 if app throws an exception different from Error', async () => {
    const errorMessage = 'error-message';

    mockEnv();
    mockInputs({
      token,
      'branch.name': branch.name
    });

    appMock.mockImplementation(() => {
      throw errorMessage;
    });

    await main();

    TestUtils.expectToBeCalled(consoleErrorMock, [[errorMessage]]);
    TestUtils.expectToBeCalled(processExitMock, [[1]]);

    expectEnv();

    TestUtils.expectToBeCalled(appMock, [
      [
        {
          repository,
          token,
          branch
        }
      ]
    ]);
  });
});
