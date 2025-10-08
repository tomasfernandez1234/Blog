// CONFIGURACIÓN PRINCIPAL DE ASTRO

// Importamos las herramientas que necesitamos.
// 'defineConfig' es una función de ayuda de Astro para que el editor nos dé sugerencias.
import { defineConfig } from 'astro/config';

// Integraciones y plugins de Markdown (remark/rehype).
// Astro usa un ecosistema llamado "unified" con "remark" (para procesar Markdown)
// y "rehype" (para procesar el HTML resultante).
import mdx from '@astrojs/mdx'; // Permite usar componentes de Astro/React/etc. dentro de Markdown.
import remarkMath from 'remark-math'; // Reconoce la sintaxis de matemáticas como $...$ y $$...$$
import rehypeKatex from 'rehype-katex'; // Renderiza las matemáticas usando la librería KaTeX para que se vean bien.
import remarkGfm from 'remark-gfm'; // Soporte para "GitHub Flavored Markdown" (tablas, texto tachado, etc.).
import rehypeRaw from 'rehype-raw'; // Permite que el HTML que generan nuestros plugins se inserte de forma segura.

// --- Plugins personalizados para la funcionalidad de Obsidian ---
// Estos los hemos copiado de `cymp` a nuestra carpeta `src/plugins`.
import slugMathRemark from './src/plugins/slug-math-remark.js';
import remarkObsidianCallouts from './src/plugins/remark-obsidian-callouts.mjs';
import remarkMermaid from './src/plugins/remark-mermaid.mjs';
import remarkRefsApa from './src/plugins/remark-refs-apa.mjs';

// Esta es la exportación principal de la configuración.
export default defineConfig({
  // URL base de tu sitio. Vercel la configurará automáticamente al hacer deploy.
  site: 'https://localhost:4321', // URL para desarrollo local

  // 'static' significa que Astro generará un sitio de archivos HTML, CSS y JS puros.
  // Es perfecto para desplegar en Vercel, Netlify, etc.
  output: 'static',

  // Las "integraciones" son como los "grandes plugins" de Astro.
  integrations: [
    mdx(), // Habilitamos MDX.
  ],

  // Aquí configuramos cómo Astro procesa los archivos Markdown.
  markdown: {
    // Los plugins de 'remark' actúan sobre el árbol de sintaxis de Markdown.
    remarkPlugins: [
      remarkGfm,
      slugMathRemark,         // 1. Arregla la sintaxis de matemáticas de Obsidian ($< >$).
      remarkMath,             // 2. Reconoce la sintaxis de matemáticas ya corregida.
      remarkMermaid,          // 3. Procesa los bloques de código de Mermaid.
      remarkRefsApa,          // 4. Procesa las referencias BibTeX y <ref>.
    ],
    // Los plugins de 'rehype' actúan sobre el árbol de HTML después de convertir el Markdown.
    rehypePlugins: [
      rehypeRaw,              // 1. Permite que los plugins de remark (como Mermaid) inyecten HTML.
      remarkObsidianCallouts, // 2. Transforma los blockquotes de callouts en el HTML final.
      rehypeKatex,            // 3. Renderiza las fórmulas matemáticas en HTML y CSS.
    ]
  }
});
