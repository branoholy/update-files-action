/* eslint-disable import/no-default-export */

import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,

  defineConfig({
    test: {
      dir: 'tests/',
      coverage: {
        provider: 'v8',
        exclude: [...(configDefaults.coverage.exclude ?? []), 'tests/', 'src/utils/test-utils.ts']
      }
    }
  })
);
