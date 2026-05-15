// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ronnyDevelop.github.io',
  base: '/roardev',
  vite: {
    plugins: [tailwindcss()]
  }
});