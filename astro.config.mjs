// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://adelbaseli.github.io',

  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()],

  redirects: {
    '/linkedin': 'https://www.linkedin.com/in/adel-baselizadeh-779719b1/',
    '/scholar': 'https://scholar.google.com/citations?user=KlV1ExYAAAAJ',
    '/orcid': 'https://orcid.org/0009-0005-7561-8889',
  }
});