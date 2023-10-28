import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
    sourcemap: true, // enable production source maps
  },
  css: {
    devSourcemap: true // enable CSS source maps during development
  }
});
