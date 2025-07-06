// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/EcoCart/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), 
dcc7ab8493267304a6123d01b0f28bd294ecec1b
    },
  },
});
