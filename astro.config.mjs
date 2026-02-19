import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://dbrnet.fr',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'framer-motion': ['framer-motion'],
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },

      cssMinify: true,

      target: 'es2020',
    },

    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion'],
    },
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },
});
