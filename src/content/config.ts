import { defineCollection, z } from "astro:content";

const proyects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        order: z.string(),
        heroImage: z.string().optional(),
        pills: z.array(z.string().optional()).optional(),
        links: z.object({
            Probar: z.string().optional(),
            ClientRepo: z.string().optional(),
            ApiRepo: z.string().optional(),
            Repo: z.string().optional()
        }).optional()
    }),
});


export const collections = { proyects };