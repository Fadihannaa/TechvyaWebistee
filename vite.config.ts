import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Root '/' for custom domains (Cloudflare). Set PAGES_BASE='/TechvyaWebistee/' for GitHub Pages project sites.
  base: process.env.PAGES_BASE || '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 800,
  },
})
