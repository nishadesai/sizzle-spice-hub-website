import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sizzle-spice-hub-website/', // This is the repository name, change it if necessary
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
