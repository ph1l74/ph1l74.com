import { defineConfig } from 'vite';
import path from 'path';
import pluginReact from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  root: './',
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
  plugins: [pluginReact()],
});
