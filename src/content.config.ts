import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const proyectos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: ({ image }) =>
    z.object({
      categoria: z.string(), // "grafica", "escultura", etc.
      title: z.string(),
      year: z.number(),
      description: z.string(),
      image: image(), // portada
      gallery: z.array(image()).default([]), // fotos extra
      video: z.string().optional(), // 👈 Nuevo campo para la ruta del vídeo
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      tags: z.array(z.string()).default([]),
      summary: z.string(),
      image: image().optional(),
    }),
});

export const collections = { proyectos, blog };
