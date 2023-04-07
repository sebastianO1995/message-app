import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: path.resolve('./node_modules/vue')
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [vue()]
});
