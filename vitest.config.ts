/// <reference types="vitest" />

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

import * as path from 'path';

export default defineConfig({
  plugins: [Vue()],
  test: {
    global: true,
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
