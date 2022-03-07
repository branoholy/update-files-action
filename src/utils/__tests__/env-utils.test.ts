import * as envalid from 'envalid';

import { EnvUtils } from '../env-utils';

const envKey = 'MY_CUSTOM_VALUE';
const envValue = 'test-value';

describe('EnvUtils', () => {
  describe('requireEnv', () => {
    beforeEach(() => {
      process.env[envKey] = envValue;
    });

    afterAll(() => {
      delete process.env[envKey];
    });

    it('should return object with a defined env value', () => {
      const { MY_CUSTOM_VALUE } = EnvUtils.requireEnv({ [envKey]: envalid.str() });
      expect(MY_CUSTOM_VALUE).toBe(envValue);
    });

    it('should throw an error when the requred env is missing', () => {
      expect(() => EnvUtils.requireEnv({ MISSING_ENV: envalid.str() })).toThrowError('Missing env(s): MISSING_ENV');
    });
  });
});
