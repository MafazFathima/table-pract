import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';  // <-- import path module

export default defineConfig({
  plugins: [
    tailwindcss(),
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // <-- add this
    },
  },
});
