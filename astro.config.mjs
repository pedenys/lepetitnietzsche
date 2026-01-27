import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://lepetitnietzsche.fr',
  build: {
    assets: 'assets'
  },
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@ui': '/src/components/UI',
        '@services': '/src/services',
        '@styles': '/src/styles',
        '@resources': '/src/resources'
      }
    }
  }
});
