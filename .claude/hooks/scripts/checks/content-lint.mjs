// content-lint (RATCHET) — structural floor for article drafts in content/.
// Checks the machine-checkable subset of content-standards.md: required front-matter,
// a valid lane, a single primary_cta, and a TL;DR. Judgment criteria (reads like a
// founder conversation, no filler, claim sourcing) stay with QA. Emits `path: rule`.
import { listFiles, rel, read, APPROVED_LANES } from '../lib.mjs';
import { resolve } from 'node:path';

const ROOT = process.cwd();
const REQUIRED = ['title', 'target_keyword', 'cluster', 'lane', 'asset_type', 'status', 'primary_cta'];

function frontMatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const obj = {};
  for (const line of m[1].split(/\r?\n/)) {
    const km = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (km) {
      let v = km[2].trim();
      // Strip one pair of surrounding quotes so a quoted-but-valid scalar
      // (e.g. lane: "linkedin-assisted-demand") compares equal to the unquoted form.
      if (v.length >= 2 && ((v[0] === '"' && v.endsWith('"')) || (v[0] === "'" && v.endsWith("'"))))
        v = v.slice(1, -1);
      obj[km[1]] = v;
    }
  }
  return obj;
}

function scan(files) {
  const out = [];
  for (const f of files) {
    const text = read(f);
    if (!text) continue;
    const relp = rel(f);
    const fm = frontMatter(text);
    if (!fm) {
      out.push(`${relp}: missing front-matter (--- block)`);
      continue;
    }
    for (const k of REQUIRED) {
      if (!(k in fm) || fm[k] === '') out.push(`${relp}: missing front-matter key '${k}'`);
    }
    if (fm.lane && !APPROVED_LANES.includes(fm.lane))
      out.push(`${relp}: invalid lane '${fm.lane}' (allowed: ${APPROVED_LANES.join(', ')})`);
    if (!/tl;?dr/i.test(text))
      out.push(`${relp}: missing TL;DR / lead conclusion (content-standards §3)`);
  }
  return [...new Set(out)].sort();
}

try {
  const arg = process.argv[2];
  const files = arg ? [resolve(ROOT, arg)] : listFiles(['content'], ['.md']);
  for (const l of scan(files)) process.stdout.write(l + '\n');
  process.exit(0);
} catch (e) {
  process.stderr.write('WARN content-lint could not run: ' + (e && e.message) + '\n');
  process.exit(3);
}
