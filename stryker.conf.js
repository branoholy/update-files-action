/* eslint-disable import/no-commonjs */

/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutate: ['src/**/*.ts', '!src/**/__tests__/**'],
  testRunner: 'jest',
  jest: {
    enableFindRelatedTests: true
  },
  concurrency: 1,
  reporters: ['progress', 'clear-text']
};
