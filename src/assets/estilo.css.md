```css
:root {
  /* COLOR PRINCIPAL - Cambia este valor */
  --color-primary: #7c3aed;
  
  /* PALETA DE COLORES */
  --color-bg: #f8fafc;
  --color-text: #1e293b;
  --color-text-light: #64748b;
  --color-border: #e2e8f0;
  --color-card: #ffffff;
  
  /* TIPOGRAFÍA */
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-heading: 'Inter', -apple-system, sans-serif;
  
  /* ESPACIADO */
  --border-radius: 8px;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
}

/* ESTILOS GENERALES */
body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.7;
}

/* ENCABEZADOS */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-primary);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

/* LINKS */
a {
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

a:hover {
  border-bottom-color: var(--color-primary);
}

/* TARJETAS DE POSTS */
.post-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* CONTENIDO DE NOTAS */
.note-content {
  max-width: 65ch;
  margin: 0 auto;
  padding: var(--spacing-lg);
}

/* CITAS */
blockquote {
  border-left: 4px solid var(--color-primary);
  padding-left: var(--spacing-md);
  margin-left: 0;
  color: var(--color-text-light);
  font-style: italic;
}

/* CÓDIGO */
code {
  background: #f1f5f9;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}

pre code {
  background: transparent;
  padding: 0;
}

/* LISTAS */
ul, ol {
  padding-left: var(--spacing-lg);
}

li {
  margin-bottom: var(--spacing-sm);
}

/* IMÁGENES */
img {
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius);
}

/* MÉTRICAS PERSONALIZADAS - Para tu proyecto sonoro */
.sonification-metric {
  background: linear-gradient(135deg, var(--color-primary), #8b5cf6);
  color: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  text-align: center;
}

.frequency-visualization {
  background: #0f172a;
  color: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  font-family: monospace;
}
```