// emdash (RATCHET) — content-standards.md §3: "No em dashes." Scan shipped content
// for U+2014 (em dash) and U+2015 (horizontal bar). Emits `path:line: em dash`.
import { listFiles, rel, read } from '../lib.mjs';
import { resolve } from 'node:path';

const ROOT = process.cwd();
const DIRS = ['content', 'social'];
const EM = /[—―]/;

function scan(files) {
  const out = [];
  for (const f of files) {
    const text = read(f);
    if (!text) continue;
    const relp = rel(f);
    text.split(/\r?\n/).forEach((line, i) => {
      if (EM.test(line)) out.push(`${relp}:${i + 1}: em dash (use a period or comma)`);
    });
  }
  return [...new Set(out)].sort();
}

try {
  const arg = process.argv[2];
  const files = arg ? [resolve(ROOT, arg)] : listFiles(DIRS, ['.md']);
  for (const l of scan(files)) process.stdout.write(l + '\n');
  process.exit(0);
} catch (e) {
  process.stderr.write('WARN emdash could not run: ' + (e && e.message) + '\n');
  process.exit(3);
}
