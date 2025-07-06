// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ✅ needed for alias

export default defineConfig({
  plugins: [react()], // ✅ no need for tailwind plugin
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ enables @/ for imports
    },
  },
});
