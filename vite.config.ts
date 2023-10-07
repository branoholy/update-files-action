import { builtinModules } from 'module';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      fileName: 'index'
    },
    outDir: './build',
    rollupOptions: {
      external: [...builtinModules, /^node:/]
    }
  },
  resolve: {
    alias: {
      ':': '/src'
    }
  }
});
