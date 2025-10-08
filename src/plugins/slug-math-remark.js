// PLUGIN: slug-math-remark
// Este plugin es un truco para solucionar un problema de Obsidian.
// Obsidian a veces "rompe" las fórmulas matemáticas al escribir, por ejemplo, "$algo$".
// Para evitarlo, en Obsidian se puede escribir "$<algo>$".
// Este plugin, al construir el sitio, revierte "$<...$>" a la sintaxis normal "$...$"
// para que MathJax/KaTeX puedan procesarlo correctamente.
import {visitParents} from 'unist-util-visit-parents'

export default function slugMathRemark() {
  const SKIP_INSIDE = new Set(['code','inlineCode','link','linkReference','definition','html'])

  return (tree) => {
    visitParents(tree, 'text', (node, ancestors) => {
      if (ancestors.some(a => SKIP_INSIDE.has(a.type))) return
      let t = node.value

      // bloque: $$< ... >$$  -> $$ ... $$
      t = t.replace(/\$\$<([\s\S]*?)>\$\$/g, (_, inner) => `$$${inner}$$`)

      // inline: $< ... >$ -> $ ... $
      t = t.replace(/\$<([\s\S]*?)>\$/g, (_, inner) => `$${inner}$`)

      node.value = t
    })
  }
}
