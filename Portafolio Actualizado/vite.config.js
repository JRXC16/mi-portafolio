<<<<<<< HEAD
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
=======
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
>>>>>>> 44d13fb572c677a6b19d0db111cb6ea8ad3942bb
});