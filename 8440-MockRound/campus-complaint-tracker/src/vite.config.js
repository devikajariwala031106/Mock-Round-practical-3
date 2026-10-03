import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: true
  },
  build: {
    ssr: true,
    target: 'node20',
    outDir: 'dist'
  }
});