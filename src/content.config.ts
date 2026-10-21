import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    hero: z.string().optional(),
    heroAlt: z.string().optional(),
    // Service slugs (src/data/services.ts) linked as related cards under the post.
    services: z.array(z.string()).optional(),
    // Questions shown under the post and marked up as FAQPage for rich results.
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional()
  })
});

export const collections = { blog };
