import * as ActionsCore from '@actions/core';

import { ActionUtils } from '../action-utils';
import { TestUtils } from '../test-utils';

jest.mock('@actions/core');

const actionsCoreGetInputMock = TestUtils.asMockedFunction(ActionsCore.getInput);

describe('ActionUtils', () => {
  const inputName = 'name';

  beforeEach(() => {
    actionsCoreGetInputMock.mockClear();
  });

  describe('getInputAsBoolean', () => {
    // Typing check for (string) => boolean | null.
    it('should return true if the input is "true" and options are not set', () => {
      actionsCoreGetInputMock.mockReturnValue('true');

      let output = ActionUtils.getInputAsBoolean(inputName);
      expect(output).toBe(true);
      expect(actionsCoreGetInputMock.mock.calls[0]?.[0]).toBe(inputName);

      output = null;
      output = true;
    });

    it('should return false if the input is "false" and options are not set', () => {
      actionsCoreGetInputMock.mockReturnValue('false');

      let output = ActionUtils.getInputAsBoolean(inputName);
      expect(output).toBe(false);
      expect(actionsCoreGetInputMock.mock.calls[0]?.[0]).toBe(inputName);

      output = null;
      output = false;
    });

    it('should return null if the input is not defined and options are not set', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsBoolean(inputName)).toBeNull();
      expect(actionsCoreGetInputMock.mock.calls[0]?.[0]).toBe(inputName);
    });

    // Typing check for (string, {}) => boolean | null.
    it('should return true if the input is "true" and options are empty', () => {
      actionsCoreGetInputMock.mockReturnValue('true');

      let output = ActionUtils.getInputAsBoolean(inputName, {});
      expect(output).toBe(true);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, {});

      output = null;
      output = true;
    });

    it('should return false if the input is "false" and options are empty', () => {
      actionsCoreGetInputMock.mockReturnValue('false');

      let output = ActionUtils.getInputAsBoolean(inputName, {});
      expect(output).toBe(false);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, {});

      output = null;
      output = false;
    });

    it('should return null if the input is not defined and options are empty', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsBoolean(inputName, {})).toBeNull();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, {});
    });

    // Typing check for (string, NonRequiredInputOptions) => boolean | null.
    it('should return true if the input is "true" and not required', () => {
      actionsCoreGetInputMock.mockReturnValue('true');

      let output = ActionUtils.getInputAsBoolean(inputName, { required: false });
      expect(output).toBe(true);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: false });

      output = null;
      output = true;
    });

    it('should return false if the input is "false" and not required', () => {
      actionsCoreGetInputMock.mockReturnValue('false');

      let output = ActionUtils.getInputAsBoolean(inputName, { required: false });
      expect(output).toBe(false);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: false });

      output = null;
      output = false;
    });

    it('should return null if the input is not defined and not required', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsBoolean(inputName, { required: false })).toBeNull();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: false });
    });

    // Typing check for (string, RequiredInputOptions) => boolean.
    it('should return true if the input is "true" and required', () => {
      actionsCoreGetInputMock.mockReturnValue('true');

      expect<boolean>(ActionUtils.getInputAsBoolean(inputName, { required: true })).toBe(true);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: true });
    });

    it('should return false if the input is "false" and required', () => {
      actionsCoreGetInputMock.mockReturnValue('false');

      expect<boolean>(ActionUtils.getInputAsBoolean(inputName, { required: true })).toBe(false);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: true });
    });

    it('should throw an error if the input is not defined but required', () => {
      actionsCoreGetInputMock.mockImplementation(() => {
        throw new Error();
      });

      const getUndefinedRequiredInput = () => ActionUtils.getInputAsBoolean(inputName, { required: true });

      expect(getUndefinedRequiredInput).toThrowError();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: true });
    });
  });

  describe('getInputAsInteger', () => {
    const inputValue = '42';
    const parsedValue = 42;

    // Typing check for (string) => number | null.
    it('should return the corresponding parsed value if the input is defined and options are not set', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      let output = ActionUtils.getInputAsInteger(inputName);
      expect(output).toBe(parsedValue);
      expect(actionsCoreGetInputMock.mock.calls[0]?.[0]).toBe(inputName);

      output = null;
      output = parsedValue;
    });

    it('should return null if the input is not defined and options are not set', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsInteger(inputName)).toBeNull();
      expect(actionsCoreGetInputMock.mock.calls[0]?.[0]).toBe(inputName);
    });

    // Typing check for (string, {}) => number | null.
    it('should return the corresponding parsed value if the input is defined and options are empty', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      let output = ActionUtils.getInputAsInteger(inputName, {});
      expect(output).toBe(parsedValue);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, {});

      output = null;
      output = parsedValue;
    });

    it('should return null if the input is not defined and options are empty', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsInteger(inputName, {})).toBeNull();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, {});
    });

    // Typing check for (string, NonRequiredInputOptions) => number | null.
    it('should return the corresponding parsed value if the input is defined and not required', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      let output = ActionUtils.getInputAsInteger(inputName, { required: false });
      expect(output).toBe(parsedValue);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: false });

      output = null;
      output = parsedValue;
    });

    it('should return null if the input is not defined and not required', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsInteger(inputName, { required: false })).toBeNull();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: false });
    });

    // Typing check for (string, RequiredInputOptions) => number.
    it('should return the corresponding parsed value if the input is defined and required', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      expect<number>(ActionUtils.getInputAsInteger(inputName, { required: true })).toBe(parsedValue);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: true });
    });

    it('should throw an error if the input is not defined but required', () => {
      actionsCoreGetInputMock.mockImplementation(() => {
        throw new Error();
      });

      const getUndefinedRequiredInput = () => ActionUtils.getInputAsInteger(inputName, { required: true });

      expect(getUndefinedRequiredInput).toThrowError();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: true });
    });
  });

  describe('getInputAsString', () => {
    const inputValue = 'value';

    // Typing check for (string) => string | null.
    it('should return the corresponding value if the input is defined and options are not set', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      let output = ActionUtils.getInputAsString(inputName);
      expect(output).toBe(inputValue);
      expect(actionsCoreGetInputMock.mock.calls[0]?.[0]).toBe(inputName);

      output = null;
      output = '';
    });

    it('should return null if the input is not defined and options are not set', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsString(inputName)).toBeNull();
      expect(actionsCoreGetInputMock.mock.calls[0]?.[0]).toBe(inputName);
    });

    // Typing check for (string, {}) => string | null.
    it('should return the corresponding value if the input is defined and options are empty', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      let output = ActionUtils.getInputAsString(inputName, {});
      expect(output).toBe(inputValue);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, {});

      output = null;
      output = '';
    });

    it('should return null if the input is not defined and options are empty', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsString(inputName, {})).toBeNull();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, {});
    });

    // Typing check for (string, NonRequiredInputOptions) => string | null.
    it('should return the corresponding value if the input is defined and not required', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      let output = ActionUtils.getInputAsString(inputName, { required: false });
      expect(output).toBe(inputValue);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: false });

      output = null;
      output = '';
    });

    it('should return null if the input is not defined and not required', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsString(inputName, { required: false })).toBeNull();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: false });
    });

    // Typing check for (string, RequiredInputOptions) => string.
    it('should return the corresponding value if the input is defined and required', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      expect<string>(ActionUtils.getInputAsString(inputName, { required: true })).toBe(inputValue);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: true });
    });

    it('should throw an error if the input is not defined but required', () => {
      actionsCoreGetInputMock.mockImplementation(() => {
        throw new Error();
      });

      const getUndefinedRequiredInput = () => ActionUtils.getInputAsString(inputName, { required: true });

      expect(getUndefinedRequiredInput).toThrowError();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: true });
    });
  });

  describe('getInputAsStrings', () => {
    const inputValue = 'value1, value2';
    const parsedValue = ['value1', 'value2'];

    // Typing check for (string) => string[] | null.
    it('should return the corresponding parsed value if the input is defined and options are not set', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      let output = ActionUtils.getInputAsStrings(inputName);
      expect(output).toStrictEqual(parsedValue);
      expect(actionsCoreGetInputMock.mock.calls[0]?.[0]).toBe(inputName);

      output = null;
      output = parsedValue;
    });

    it('should return null if the input is not defined and options are not set', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsStrings(inputName)).toBeNull();
      expect(actionsCoreGetInputMock.mock.calls[0]?.[0]).toBe(inputName);
    });

    // Typing check for (string, {}) => string[] | null.
    it('should return the corresponding parsed value if the input is defined and options are empty', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      let output = ActionUtils.getInputAsStrings(inputName, {});
      expect(output).toStrictEqual(parsedValue);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, {});

      output = null;
      output = parsedValue;
    });

    it('should return null if the input is not defined and options are empty', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsStrings(inputName, {})).toBeNull();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, {});
    });

    // Typing check for (string, NonRequiredInputOptions) => string[] | null.
    it('should return the corresponding parsed value if the input is defined and not required', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      let output = ActionUtils.getInputAsStrings(inputName, { required: false });
      expect(output).toStrictEqual(parsedValue);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: false });

      output = null;
      output = parsedValue;
    });

    it('should return null if the input is not defined and not required', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.getInputAsStrings(inputName, { required: false })).toBeNull();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: false });
    });

    // Typing check for (string, RequiredInputOptions) => string[].
    it('should return the corresponding parsed value if the input is defined and required', () => {
      actionsCoreGetInputMock.mockReturnValue(inputValue);

      expect<string[]>(ActionUtils.getInputAsStrings(inputName, { required: true })).toStrictEqual(parsedValue);
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: true });
    });

    it('should throw an error if the input is not defined but required', () => {
      actionsCoreGetInputMock.mockImplementation(() => {
        throw new Error();
      });

      const getUndefinedRequiredInput = () => ActionUtils.getInputAsStrings(inputName, { required: true });

      expect(getUndefinedRequiredInput).toThrowError();
      expect(actionsCoreGetInputMock).toBeCalledWith(inputName, { required: true });
    });
  });

  describe('hasInput', () => {
    it('should return true if the input is defined', () => {
      actionsCoreGetInputMock.mockReturnValue('value');

      expect(ActionUtils.hasInput(inputName)).toBe(true);
      expect(actionsCoreGetInputMock.mock.calls[0]?.[0]).toBe(inputName);
    });

    it('should return false if the input is not defined', () => {
      actionsCoreGetInputMock.mockReturnValue('');

      expect(ActionUtils.hasInput(inputName)).toBe(false);
      expect(actionsCoreGetInputMock.mock.calls[0]?.[0]).toBe(inputName);
    });
  });
});
