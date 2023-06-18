import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {},
    fs: {
      strict: true,
      allow: [],
    },
    hmr: {
      protocol: '',
      host: '',
    },
    mimeTypes: {
      'text/javascript': ['js', 'jsx'],
      'text/jsx': ['jsx'],
    },
  },
});
