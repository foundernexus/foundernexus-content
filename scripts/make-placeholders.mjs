// Dependency-free placeholder image generator (no sharp, no native deps).
// Emits valid solid/gradient PNGs so the blog builds + smoke-tests with real images
// before real cover art exists. Replace these with designed art later.
//
//   node scripts/make-placeholders.mjs            # site placeholders + the sample post cover
//   node scripts/make-placeholders.mjs <slug>     # also a cover for content/blog/<slug>.md
//
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

// Vertical gradient between two [r,g,b] colors -> PNG buffer.
function makePng(w, h, top, bottom) {
  const raw = Buffer.alloc(h * (1 + w * 3));
  for (let y = 0; y < h; y++) {
    const t = h === 1 ? 0 : y / (h - 1);
    const r = Math.round(top[0] + (bottom[0] - top[0]) * t);
    const g = Math.round(top[1] + (bottom[1] - top[1]) * t);
    const b = Math.round(top[2] + (bottom[2] - top[2]) * t);
    const rowStart = y * (1 + w * 3);
    raw[rowStart] = 0; // filter: none
    for (let x = 0; x < w; x++) {
      const i = rowStart + 1 + x * 3;
      raw[i] = r;
      raw[i + 1] = g;
      raw[i + 2] = b;
    }
  }
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: truecolor RGB
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function write(out, buf) {
  mkdirSync(path.dirname(out), { recursive: true });
  writeFileSync(out, buf);
  console.log("wrote", out, `(${buf.length} bytes)`);
}

const SLATE_TOP = [17, 24, 39];
const SLATE_BOTTOM = [37, 45, 66];

// Site-wide placeholders.
write("public/open-graph/og-home.png", makePng(1200, 630, SLATE_TOP, SLATE_BOTTOM));
write("public/logo.png", makePng(512, 512, SLATE_TOP, SLATE_BOTTOM));

// The sample post cover, plus any slug passed on the CLI.
const slugs = new Set(["what-a-good-founder-room-looks-like", ...process.argv.slice(2)]);
for (const slug of slugs) {
  write(`public/images/blog/${slug}/cover.png`, makePng(1200, 630, SLATE_TOP, SLATE_BOTTOM));
}
