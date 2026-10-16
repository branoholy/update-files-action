import { builtinModules } from 'node:module';

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'node24',
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    outDir: './build',
    rolldownOptions: {
      platform: 'node',
      external: [...builtinModules, /^node:/],
    },
  },
});
