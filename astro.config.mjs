// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({  
  output: "static",
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      //prefixDefaultLocale: true,  // URLs will be /en and /vi
      redirectToDefaultLocal: false
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

