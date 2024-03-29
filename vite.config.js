import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgrPlugin(),
    react(),
  ],
  server: {
    port: 3000,
  },
  assetsInclude: ['**/*.md'],
});
