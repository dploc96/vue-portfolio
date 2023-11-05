import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Eslint from '@rollup/plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig(() => {
  return {
    plugins: [
      Vue(),
      {
        ...Eslint({
          include: ['./src/**/*.js', './src/**/*.vue'],
          fix: true,
          throwOnError: true,
        }),
        enforce: 'pre',
        apply: 'build',
      },
      AutoImport({
        imports: ['@vueuse/core', 'pinia', 'vue-i18n', 'vue-router', 'vue'],
        dirs: ['src/constants'],
        vueTemplate: true,
        eslintrc: {
          enabled: true,
        },
        injectAtEnd: false,
      }),
      Components(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.mjs', '.js', '.json', '.vue'],
    },
    server: {
      strictPort: false,
      port: process.env.PORT || 8000,
    },
  };
});
