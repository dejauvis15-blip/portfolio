// One-off script: extracts embedded base64 <img> assets from the source
// Discord case-study HTML export into public/images/discord/*.png,
// named by a slugified version of each image's alt text.
const fs = require('fs');
const path = require('path');

const SRC = 'C:\\Users\\Jauvi\\Downloads\\discord-case-study-humanized.html';
const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'discord');

fs.mkdirSync(OUT_DIR, { recursive: true });

const html = fs.readFileSync(SRC, 'utf8');

// Match <img ... src="data:image/png;base64,XXXX" ... alt="YYYY" ...> in either attribute order.
const imgRe = /<img\b[^>]*>/gi;
const srcRe = /src="data:image\/png;base64,([^"]+)"/i;
const altRe = /alt="([^"]*)"/i;

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

let count = 0;
const manifest = [];
const seen = new Map();

for (const match of html.matchAll(imgRe)) {
  const tag = match[0];
  const srcMatch = tag.match(srcRe);
  const altMatch = tag.match(altRe);
  if (!srcMatch) continue;
  const alt = altMatch ? altMatch[1] : `image-${count}`;
  let slug = slugify(alt);
  const dupeCount = seen.get(slug) || 0;
  seen.set(slug, dupeCount + 1);
  if (dupeCount > 0) slug = `${slug}-${dupeCount}`;

  const buffer = Buffer.from(srcMatch[1], 'base64');
  const filename = `${slug}.png`;
  fs.writeFileSync(path.join(OUT_DIR, filename), buffer);
  manifest.push({ alt, filename, bytes: buffer.length });
  count++;
}

fs.writeFileSync(
  path.join(OUT_DIR, 'manifest.json'),
  JSON.stringify(manifest, null, 2)
);

console.log(`Extracted ${count} images to ${OUT_DIR}`);
