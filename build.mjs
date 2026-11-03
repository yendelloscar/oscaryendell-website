// Build: schreibt den fertig gerenderten Seiteninhalt in jede HTML-Datei (dist/),
// damit Suchmaschinen und KI-Suche den Text sehen, ohne JavaScript auszuführen.
// Im Browser läuft die Seite danach unverändert weiter (React übernimmt und rendert neu).
// Quelle bleiben die Exporte aus Claude Design: *.html + *.app.js + vendor/.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'dist');
const SITE_URL = 'https://oscaryendell.de';

const SKIP_DIRS = new Set(['.git', 'node_modules', 'dist', '.netlify', '.claude']);
const SKIP_FILES = new Set(['package.json', 'package-lock.json', 'build.mjs', 'netlify.toml',
  'CLAUDE.md', 'README.md', '.gitignore']);
const isSkipped = (rel) => {
  const base = path.basename(rel);
  return SKIP_FILES.has(base) || /print/i.test(base);   // Druckversionen nicht veröffentlichen
};

function walk(dir, rel = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (!SKIP_DIRS.has(e.name)) out.push(...walk(path.join(dir, e.name), path.join(rel, e.name)));
    } else out.push(path.join(rel, e.name));
  }
  return out;
}

function prerender(rel, html) {
  if (!html.includes('<div id="root"></div>')) return html;
  const dir = path.dirname(path.join(ROOT, rel));
  const apps = [...html.matchAll(/<script\b[^>]*\bsrc="([^"]+\.app\.js)"[^>]*><\/script>/g)].map((m) => m[1]);
  if (!apps.length) return html;

  let rendered = null;
  const ctx = {
    React, console, setTimeout: () => 0, clearTimeout: () => {}, requestAnimationFrame: () => 0,
    location: { hash: '', pathname: '/' + rel, href: `${SITE_URL}/${rel}` },
    document: { getElementById: () => ({}), querySelector: () => null, querySelectorAll: () => [],
      addEventListener: () => {} },
    addEventListener: () => {},
    ReactDOM: { createRoot: () => ({ render: (el) => { rendered = ReactDOMServer.renderToStaticMarkup(el); } }) },
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  for (const src of apps) {
    const file = path.join(dir, src);
    vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  }
  if (rendered == null) throw new Error(`${rel}: keine render()-Ausgabe gefunden`);
  // Einblend-Effekt abgeschaltet: Abschnitte blieben sonst für Suchmaschinen unsichtbar,
  // weil deren Renderer nicht scrollt. Inhalte sind immer sofort sichtbar.
  const noReveal = '<style>.reveal{opacity:1!important;transform:none!important;transition:none!important}</style>\n';
  return html
    .replace('<div id="root"></div>', `<div id="root">${rendered}</div>`)
    .replace('</head>', noReveal + '</head>');
}

function pageUrl(rel) {
  const p = rel.split(path.sep).join('/');
  if (p === 'index.html') return `${SITE_URL}/`;
  return `${SITE_URL}/${p}`;
}

fs.rmSync(OUT, { recursive: true, force: true });
const pages = [];
for (const rel of walk(ROOT)) {
  if (isSkipped(rel)) continue;
  const dest = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (rel.endsWith('.html')) {
    let html = prerender(rel, fs.readFileSync(path.join(ROOT, rel), 'utf8'));
    // og:image muss eine absolute Adresse sein
    html = html.replace(/(<meta property="og:image" content=")(?!https?:)(?:\.\.\/)*([^"]+)"/,
      (_, a, p) => `${a}${SITE_URL}/${p}"`);
    fs.writeFileSync(dest, html);
    if (!/noindex/.test(html) && path.basename(rel) !== '404.html') pages.push(rel);
  } else {
    fs.copyFileSync(path.join(ROOT, rel), dest);
  }
}

// Sitemap und robots.txt erzeugen, falls im Export keine enthalten sind
if (!fs.existsSync(path.join(ROOT, 'sitemap.xml'))) {
  const urls = pages.sort().map((p) => `  <url><loc>${pageUrl(p)}</loc></url>`).join('\n');
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
}
if (!fs.existsSync(path.join(ROOT, 'robots.txt'))) {
  fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
}
console.log(`Fertig: ${pages.length} Seiten vorgerendert nach dist/\n` + pages.map((p) => '  ' + pageUrl(p)).join('\n'));
