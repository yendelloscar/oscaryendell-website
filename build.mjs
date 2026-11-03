// Build: rendert alle Seiten zu fertigem HTML nach dist/.
// Quelle bleiben die HTML-Dateien mit <script type="text/babel"> und die JSX-Komponenten
// (kompatibel mit Exporten aus Claude Design). Im Browser läuft danach nur noch site.js.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const babel = require('@babel/core');
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
  if (SKIP_FILES.has(base)) return true;
  if (/print/i.test(base)) return true;           // Druckversionen nicht veröffentlichen
  if (base.endsWith('.jsx')) return true;          // Quelltext, wird vorgerendert
  return false;
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

const transpile = (code, filename) => babel.transformSync(code, {
  filename, babelrc: false, configFile: false,
  presets: [[require.resolve('@babel/preset-react'), { runtime: 'classic' }]],
}).code;

function renderPage(rel, html) {
  const dir = path.dirname(path.join(ROOT, rel));
  const scriptRe = /<script\b[^>]*type="text\/babel"[^>]*>([\s\S]*?)<\/script>/g;
  const scripts = [...html.matchAll(scriptRe)];
  if (!scripts.length) return html;

  let rendered = null;
  const ctx = {
    React, console, setTimeout: () => 0, clearTimeout: () => {},
    location: { hash: '', pathname: '/' + rel },
    document: { getElementById: () => ({}), querySelector: () => null },
    ReactDOM: { createRoot: () => ({ render: (el) => { rendered = ReactDOMServer.renderToStaticMarkup(el); } }) },
  };
  ctx.window = ctx;
  vm.createContext(ctx);

  for (const m of scripts) {
    const src = m[0].match(/\bsrc="([^"]+)"/);
    const file = src ? path.join(dir, src[1]) : rel;
    const code = src ? fs.readFileSync(file, 'utf8') : m[1];
    vm.runInContext(transpile(code, file), ctx, { filename: file });
  }
  if (rendered == null) throw new Error(`${rel}: keine render()-Ausgabe gefunden`);

  const depth = rel.split(path.sep).length - 1;
  const prefix = depth ? '../'.repeat(depth) : '';

  let out = html
    .replace(scriptRe, '')
    .replace(/<script\b[^>]*src="https:\/\/unpkg\.com[^"]*"[^>]*><\/script>\s*/g, '')
    .replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);

  // Verstecktes Erkennungsformular entfällt, wenn das echte Formular jetzt im HTML steht
  if (/<form[^>]*name="contact"[^>]*data-netlify/.test(rendered)) {
    out = out.replace(/<!--[^]*?Netlify form detection[^]*?-->\s*<form name="contact"[^]*?<\/form>\s*/, '');
  }
  // Ohne JavaScript Inhalte nicht verstecken
  out = out.replace('</head>', '<noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>\n</head>');
  out = out.replace('</body>', `<script src="${prefix}site.js" defer></script>\n</body>`);
  return out;
}

function pageUrl(rel) {
  const p = rel.split(path.sep).join('/');
  if (p === 'index.html') return `${SITE_URL}/`;
  if (p.endsWith('/index.html')) return `${SITE_URL}/${p.slice(0, -'index.html'.length)}`;
  return `${SITE_URL}/${p}`;
}

function seoTags(rel, html) {
  const url = pageUrl(rel);
  if (!/rel="canonical"/.test(html)) {
    html = html.replace('</title>', `</title>\n<link rel="canonical" href="${url}" />`);
  }
  // og:image muss eine absolute Adresse sein
  html = html.replace(/(<meta property="og:image" content=")(?!https?:)(?:\.\.\/)*([^"]+)"/,
    (_, a, p) => `${a}${SITE_URL}/${p}"`);
  return html;
}

fs.rmSync(OUT, { recursive: true, force: true });
const pages = [];
for (const rel of walk(ROOT)) {
  if (isSkipped(rel)) continue;
  const dest = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (rel.endsWith('.html')) {
    let html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    html = seoTags(rel, renderPage(rel, html));
    fs.writeFileSync(dest, html);
    if (!/noindex/.test(html) && path.basename(rel) !== '404.html') pages.push(rel);
  } else {
    fs.copyFileSync(path.join(ROOT, rel), dest);
  }
}

const urls = pages.sort().map((p) => `  <url><loc>${pageUrl(p)}</loc></url>`).join('\n');
fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`Fertig: ${pages.length} Seiten nach dist/\n` + pages.map((p) => '  ' + pageUrl(p)).join('\n'));
