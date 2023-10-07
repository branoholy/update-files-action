/* eslint-disable import/no-default-export */

/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
export default {
  mutate: ['src/**/*.ts', '!src/**/__tests__/**'],
  checkers: ['typescript'],
  testRunner: 'vitest',
  vitest: {
    configFile: './vite-unit.config.ts'
  },
  reporters: ['progress', 'clear-text']
};
