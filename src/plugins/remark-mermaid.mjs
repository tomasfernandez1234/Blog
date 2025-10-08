// PLUGIN: remark-mermaid
// Este plugin busca bloques de código marcados con el lenguaje "mermaid".
// Cuando encuentra uno, en lugar de tratarlo como código normal, lo envuelve
// en un <div class="mermaid">.
// Esto permite que la librería de Mermaid.js en el frontend lo detecte y lo
// renderice como un diagrama.
import { visit } from 'unist-util-visit';

export default function remarkMermaid() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;
      if (node.lang !== 'mermaid') return;
      const code = String(node.value || '');
      parent.children.splice(index, 1, {
        type: 'html',
        value: `<div class="mermaid">
${code}
</div>`,
      });
    });
  };
}
