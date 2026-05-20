// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mcspathankot.edu.in',

  integrations: [
    react(),
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});







// // @ts-check
// import { defineConfig } from 'astro/config';
// import react from '@astrojs/react';
// import tailwindcss from '@tailwindcss/vite';

// // https://astro.build/config
// export default defineConfig({
//   integrations: [react()],

//   vite: {
//     plugins: [tailwindcss()]
//   }
// });


