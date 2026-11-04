import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/nombre-de-tu-repositorio/', 
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.js'],
    }),
  ],
  build: {
    minify: 'terser', 
    cssCodeSplit: false,
  },
});