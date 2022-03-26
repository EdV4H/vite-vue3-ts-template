import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

// https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), Pages()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
