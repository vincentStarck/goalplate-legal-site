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
  const content = marked.parse(md);
  const html = template
    .replace('{{TITLE}}', route.title)
    .replace('{{INLINE_CSS}}', inlineCss)
    .replace('{{CONTENT}}', content);
  const outPath = path.join(DIST, route.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`built: ${route.out}`);
}

console.log(`\nDone. ${routes.length} pages rendered to ${path.relative(ROOT, DIST)}/`);
