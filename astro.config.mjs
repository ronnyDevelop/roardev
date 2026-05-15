// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tu-usuario.github.io',
  base: '/mi-portafolio',
  vite: {
    plugins: [tailwindcss()]
  }
});