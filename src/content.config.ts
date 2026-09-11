import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const technicalContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  status: z.string().optional(),
  repo: z.string().url().optional(),
  image: z.string().optional(),
});

const projectCollection = (base: string) => defineCollection({
  loader: glob({ base, pattern: '**/*.{md,mdx}' }),
  schema: technicalContentSchema,
});

const researchCollection = (base: string) => defineCollection({
  loader: glob({ base, pattern: '**/*.{md,mdx}' }),
  schema: technicalContentSchema,
});

const noteCollection = (base: string) => defineCollection({
  loader: glob({ base, pattern: '**/*.{md,mdx}' }),
  schema: technicalContentSchema.extend({ draft: z.boolean().default(false) }),
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    titleTr: z.string().optional(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.string(),
    doi: z.string().url().optional(),
    pdf: z.string().optional(),
    code: z.string().url().optional(),
    dataset: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projectsEn: projectCollection('./src/content/projects/en'),
  projectsTr: projectCollection('./src/content/projects/tr'),
  researchEn: researchCollection('./src/content/research/en'),
  researchTr: researchCollection('./src/content/research/tr'),
  notesEn: noteCollection('./src/content/notes/en'),
  notesTr: noteCollection('./src/content/notes/tr'),
  publications,
};
