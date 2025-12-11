// generate-snippets.js
import fs from "fs";
import path from "path";

const optimizedDir = "./public/optimized";
const outFile = "./public/optimized/snippets.html";

if (!fs.existsSync(optimizedDir)) {
  console.error("Folder not found:", optimizedDir);
  process.exit(1);
}

const files = fs.readdirSync(optimizedDir).filter(f => /\.(webp|jpg|jpeg|png)$/i.test(f));
const byBase = {};

// group files by base name (before -{size}.ext)
files.forEach(f => {
  const m = f.match(/^(.*)-(\d+)\.(webp|jpg|jpeg|png)$/i);
  if (m) {
    const base = m[1];
    const size = parseInt(m[2], 10);
    if (!byBase[base]) byBase[base] = [];
    byBase[base].push({ name: f, size });
  } else {
    // fallback single file, group as base
    const base = f.replace(/\.(webp|jpg|jpeg|png)$/i, "");
    if (!byBase[base]) byBase[base] = [];
    byBase[base].push({ name: f, size: null });
  }
});

let out = `<!-- Generated picture snippets - paste these into your HTML where images are used -->\n\n`;

Object.keys(byBase).sort().forEach(base => {
  const items = byBase[base].sort((a,b) => (a.size||0) - (b.size||0));
  const webps = items.filter(i => i.name.endsWith(".webp"));
  const jpgs = items.filter(i => /\.(jpe?g|png)$/i.test(i.name));

  if (webps.length) {
    const srcset = webps.map(i => `/public/optimized/${i.name} ${i.size || 640}w`).join(", ");
    // choose best jpg fallback or first jpg or fallback to webp 640
    const fallback = jpgs[0] ? `/public/optimized/${jpgs[0].name}` : `/public/optimized/${webps[Math.floor(webps.length/2)].name}`;
    out += `<!-- ${base} -->\n<picture>\n  <source type="image/webp" srcset="${srcset}" sizes="(max-width:600px) 90vw, 50vw">\n  <img src="${fallback}" alt="${base}" loading="lazy" decoding="async" style="max-width:100%;height:auto;">\n</picture>\n\n`;
  } else {
    // only jpg/png available
    const fallback = jpgs[0] ? `/public/optimized/${jpgs[0].name}` : `/public/optimized/${items[0].name}`;
    out += `<!-- ${base} (no webp) -->\n<img src="${fallback}" alt="${base}" loading="lazy" decoding="async" style="max-width:100%;height:auto;">\n\n`;
  }
});

fs.writeFileSync(outFile, out, "utf8");
console.log("Snippets written to", outFile);
