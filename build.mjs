/**
 * Build de producción · TuMatch Cliente Vendedor Avanzado
 * Minifica JS + CSS con esbuild, copia HTML y assets a dist/
 */
import { build } from 'esbuild';
import { mkdirSync, readFileSync, writeFileSync, cpSync, existsSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = '.';
const OUT = 'dist';

function sizeKB(path) {
  try { return (statSync(path).size / 1024).toFixed(1) + ' KB'; } catch { return '?'; }
}

if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(OUT);

// 1. Minify JS
await build({
  entryPoints: [join(SRC, 'app.js')],
  outfile: join(OUT, 'app.min.js'),
  minify: true,
  sourcemap: true,
  target: ['es2020'],
  legalComments: 'none',
  charset: 'utf8',
});

// 2. Concat + minify CSS via esbuild (loader css)
const tmpCss = join(OUT, '__bundle.css');
writeFileSync(tmpCss, [
  readFileSync(join(SRC, 'styles.css'), 'utf8'),
  readFileSync(join(SRC, 'styles-extra.css'), 'utf8'),
].join('\n'));
await build({
  entryPoints: [tmpCss],
  outfile: join(OUT, 'styles.min.css'),
  minify: true,
  sourcemap: true,
  legalComments: 'none',
  loader: { '.css': 'css' },
  charset: 'utf8',
});
rmSync(tmpCss);

// 3. Rewrite HTML
let html = readFileSync(join(SRC, 'index.html'), 'utf8');
html = html
  .replace(
    /<link rel="stylesheet" href="styles\.css">\s*<link rel="stylesheet" href="styles-extra\.css">/,
    '<link rel="stylesheet" href="styles.min.css">'
  )
  .replace('<script defer src="app.js"></script>', '<script defer src="app.min.js"></script>')
  // Minify HTML: quita comentarios y whitespace entre tags
  .replace(/<!--(?!\[if)[\s\S]*?-->/g, '')
  .replace(/\n\s*\n/g, '\n')
  .replace(/>\s+</g, '><')
  .trim();
writeFileSync(join(OUT, 'index.html'), html);

// 4. Copy assets directory
cpSync(join(SRC, 'assets'), join(OUT, 'assets'), { recursive: true });

// 5. Report
console.log('✓ Build OK → dist/');
console.log('  index.html       ' + sizeKB(join(OUT, 'index.html')));
console.log('  app.min.js       ' + sizeKB(join(OUT, 'app.min.js')));
console.log('  styles.min.css   ' + sizeKB(join(OUT, 'styles.min.css')));
