import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
        '@services': '/src/services',
        '@styles': '/src/styles',
        '@resources': '/src/resources'
      }
    }
  }
});
