import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import { typesetDist } from './scripts/typeset.mjs';

const typeset = {
  name: 'typeset',
  hooks: {
    'astro:build:done': ({ dir, logger }) => {
      const n = typesetDist(fileURLToPath(dir));
      logger.info(`Typeset running text in ${n} pages`);
    }
  }
};

export default defineConfig({
  site: 'https://sanjoaquintowing.com',
  integrations: [sitemap(), typeset],
  build: { inlineStylesheets: 'always' }
});
