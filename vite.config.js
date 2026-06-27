import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standard Vite + React config. `base: './'` keeps asset paths relative so the
// production build works whether it's served from a domain root (Vercel) or a
// sub-path (GitHub Pages project sites).
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
  },
});
