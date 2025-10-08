// src/content/config.ts

// 1. Importamos las utilidades de `astro:content`.
// `z` es una librería para validar datos (Zod). Nos aseguramos que el frontmatter de los posts es correcto.
// `defineCollection` es la función que usamos para definir un esquema para nuestra colección de contenido.
import { defineCollection, z } from 'astro:content';

// 2. Definimos una colección. El nombre 'vault' es importante, porque corresponde
//    al nombre de la carpeta en `src/content/vault`.
const vaultCollection = defineCollection({
  // `type: 'content'` significa que son archivos de contenido como Markdown o MDX.
  type: 'content',
  // `schema` define la estructura del frontmatter (el YAML de cada archivo).
  // Astro validará automáticamente que cada archivo .md cumpla con esta estructura.
  schema: z.object({
    // `title` es el título de la nota. Es obligatorio (no puede estar vacío).
    title: z.string(),
    // `description` es una descripción corta. Es opcional.
    description: z.string().optional(),
    // `pubDate` es la fecha de publicación. La transformamos a un objeto Date de JavaScript.
    // Es opcional, pero recomendado.
    pubDate: z.coerce.date().optional(),
    // `updatedDate` es la fecha de última actualización. Opcional.
    updatedDate: z.coerce.date().optional(),
    // `imgHero` es la imagen de portada, usada en la galería. Es opcional.
    imgHero: z.string().optional(),
    // `tags` es una lista de etiquetas. Es un array de strings, opcional.
    tags: z.array(z.string()).optional(),
  }),
});

// 3. Exportamos un objeto `collections` con nuestra colección registrada.
//    Ahora Astro sabe todo sobre nuestro 'vault'.
export const collections = {
  'vault': vaultCollection,
};
