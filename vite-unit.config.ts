/* eslint-disable import/no-default-export */

import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,

  defineConfig({
    test: {
      dir: 'src/'
    }
  })
);
