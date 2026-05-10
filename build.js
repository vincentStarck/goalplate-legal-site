const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const ASSETS_SRC = path.join(ROOT, 'assets');
const DIST = path.join(ROOT, 'dist');

const template = fs.readFileSync(path.join(SRC, 'template.html'), 'utf-8');
const inlineCss = fs.readFileSync(path.join(ASSETS_SRC, 'styles.css'), 'utf-8');

const routes = [
  { md: 'index.md',           out: 'index.html',           title: 'GoalPlate &mdash; Legal' },
  { md: 'privacy/index.md',   out: 'privacy/index.html',   title: 'Privacy Policy &mdash; GoalPlate' },
  { md: 'terms/index.md',     out: 'terms/index.html',     title: 'Terms of Service &mdash; GoalPlate' },
];

marked.setOptions({ gfm: true, breaks: false });

// Compute the relative path from one built page to another so that the
// rendered nav works under both file:// (local preview) and SWA in
// production. SWA also rewrites /privacy → /privacy/index.html via
// staticwebapp.config.json, so direct deep-links from the app stay clean.
function relPath(fromOut, toOut) {
  const fromDir = path.dirname(fromOut);
  return path.relative(fromDir, toOut);
}

if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true, force: true });
}
fs.mkdirSync(DIST, { recursive: true });

const ASSETS_DIST = path.join(DIST, 'assets');
fs.mkdirSync(ASSETS_DIST, { recursive: true });
for (const f of fs.readdirSync(ASSETS_SRC)) {
  fs.copyFileSync(path.join(ASSETS_SRC, f), path.join(ASSETS_DIST, f));
}

const cfg = path.join(ROOT, 'staticwebapp.config.json');
if (fs.existsSync(cfg)) {
  fs.copyFileSync(cfg, path.join(DIST, 'staticwebapp.config.json'));
}

for (const route of routes) {
  const md = fs.readFileSync(path.join(SRC, route.md), 'utf-8');
  let content = marked.parse(md);

  const homeRel = relPath(route.out, 'index.html');
  const privacyRel = relPath(route.out, 'privacy/index.html');
  const termsRel = relPath(route.out, 'terms/index.html');

  // Rewrite intra-site absolute hrefs that appear inside markdown body
  // (e.g. [Privacy Policy](/privacy)) to the same depth-aware relative
  // paths used by the template's nav.
  content = content
    .replace(/href="\/privacy"/g, `href="${privacyRel}"`)
    .replace(/href="\/terms"/g, `href="${termsRel}"`);

  const html = template
    .replaceAll('{{TITLE}}', route.title)
    .replaceAll('{{INLINE_CSS}}', inlineCss)
    .replaceAll('{{HOME}}', homeRel)
    .replaceAll('{{PRIVACY}}', privacyRel)
    .replaceAll('{{TERMS}}', termsRel)
    .replaceAll('{{CONTENT}}', content);
  const outPath = path.join(DIST, route.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`built: ${route.out}`);
}

console.log(`\nDone. ${routes.length} pages rendered to ${path.relative(ROOT, DIST)}/`);
