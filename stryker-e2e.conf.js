/* eslint-disable import/no-default-export */

/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
export default {
  mutate: ['src/**/*.ts', '!src/**/__tests__/**', '!src/utils/test-utils.ts'],
  checkers: ['typescript'],
  testRunner: 'vitest',
  vitest: {
    configFile: './vite-e2e.config.ts'
  },
  concurrency: 1,
  reporters: ['progress', 'clear-text']
};
