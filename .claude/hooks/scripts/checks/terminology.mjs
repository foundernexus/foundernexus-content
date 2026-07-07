// terminology (RATCHET) — retired-term scan over SHIPPED content (content/ + social/).
// Emits one normalized line per hit: `path:line: <label>`. Empty stdout = clean.
// Strict set only (unambiguous, near-zero false positives). The looser retired
// terms ("Chapter" alone, "Event" alone) are surfaced by named-entity/advise
// instead, so a noisy signal can never wedge a hand-off (Law 3 spirit).
// content-standards.md §2: "A draft containing a retired term fails review."
import { listFiles, rel, read } from '../lib.mjs';
import { resolve } from 'node:path';

const ROOT = process.cwd();
const DIRS = ['content', 'social'];
const PATTERNS = [
  { re: /\bTier\s+[1-5]\b/gi, label: '"Tier N" is retired (use "Stage 1 to 4")' },
  { re: /\bChapter\s+chairs?\b/gi, label: '"Chapter chair" is retired (use "Nexus Partner")' },
];

function scan(files) {
  const out = [];
  for (const f of files) {
    const text = read(f);
    if (!text) continue;
    const relp = rel(f);
    text.split(/\r?\n/).forEach((line, i) => {
      for (const p of PATTERNS) {
        p.re.lastIndex = 0;
        if (p.re.test(line)) out.push(`${relp}:${i + 1}: ${p.label}`);
      }
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
  process.stderr.write('WARN terminology could not run: ' + (e && e.message) + '\n');
  process.exit(3);
}
