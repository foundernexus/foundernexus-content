// Optional, idempotent image optimizer (guide §10). Uses sharp IF installed; if not,
// it no-ops with a friendly note so `npm install` never fails on a native dep and the
// build never depends on it. Covers stay PNG/JPG (OG-safe); in-body screenshots -> WebP.
//
//   node scripts/optimize-images.mjs
//
// To enable real optimization: `npm i -D sharp`, then re-run.
import { readdirSync, statSync } from "node:fs";
import path from "node:path";

let sharp;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  console.log("[optimize-images] sharp not installed — skipping (no-op). Run `npm i -D sharp` to enable.");
  process.exit(0);
}

const ROOT = path.join(process.cwd(), "public", "images", "blog");

function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

const COVER = /(^|[\\/])cover\.(png|jpe?g)$/i;
const RASTER = /\.(png|jpe?g)$/i;

for (const file of walk(ROOT)) {
  try {
    if (COVER.test(file)) {
      // Cover: keep format (OG-safe), just cap width to 1200 and recompress. Idempotent.
      const meta = await sharp(file).metadata();
      if ((meta.width ?? 0) > 1200) {
        await sharp(file).resize({ width: 1200 }).toFile(file + ".tmp");
        const { renameSync } = await import("node:fs");
        renameSync(file + ".tmp", file);
        console.log("[optimize-images] resized cover ->", file);
      }
    } else if (RASTER.test(file)) {
      // In-body raster -> WebP alongside it, if not already present.
      const webp = file.replace(RASTER, ".webp");
      try {
        statSync(webp);
      } catch {
        await sharp(file).webp({ quality: 82 }).toFile(webp);
        console.log("[optimize-images] wrote", webp);
      }
    }
  } catch (e) {
    console.warn("[optimize-images] skip", file, "-", e.message);
  }
}
console.log("[optimize-images] done.");
