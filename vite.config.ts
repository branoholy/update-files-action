import { defineConfig } from 'vite';

import { dependencies } from './package.json';

export default defineConfig({
  ssr: {
    noExternal: Object.keys(dependencies)
  },
  resolve: {
    alias: {
      ':': '/src'
    }
  }
});
