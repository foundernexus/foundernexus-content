// contract (RATCHET) — the machine contract in substrate/keywords.yaml.
// No YAML library is available, so this is a purpose-built structural linter that
// validates the SEMANTIC contract (not general YAML): every cluster carries a
// valid lane + status; statuses use the allowed enums; declared draft paths exist.
// Emits one line per violation. Empty stdout = valid. Internal parse error => exit 3
// (fail-open) so a linter bug can never falsely block a hand-off.
import { read, APPROVED_LANES } from '../lib.mjs';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = process.cwd();
const CLUSTER_STATUS = ['approved', 'proposed', 'killed'];
const KEYWORD_STATUS = ['unwritten', 'drafted', 'published'];
const ALL_STATUS = new Set([...CLUSTER_STATUS, ...KEYWORD_STATUS]);

function emit(a) {
  for (const l of a) process.stdout.write(l + '\n');
}

try {
  const p = resolve(ROOT, 'substrate/keywords.yaml');
  const text = read(p);
  const out = [];

  if (!text.trim()) {
    emit(['keywords.yaml: file missing or empty']);
    process.exit(0);
  }

  const linesArr = text.split(/\r?\n/);
  if (!linesArr.some((l) => /^clusters:\s*$/.test(l))) {
    out.push("keywords.yaml: missing top-level 'clusters:' key");
  }

  let cur = null;
  let hasLane = false;
  let hasStatus = false;
  let curLine = 0;
  const closeCluster = () => {
    if (!cur) return;
    if (!hasLane)
      out.push(
        `keywords.yaml: cluster '${cur}' (line ${curLine}) missing 'lane' — every cluster must carry exactly one lane`
      );
    if (!hasStatus)
      out.push(`keywords.yaml: cluster '${cur}' (line ${curLine}) missing 'status'`);
  };

  linesArr.forEach((line, idx) => {
    const id = line.match(/^\s*-\s+id:\s*(\S+)/);
    if (id) {
      closeCluster();
      cur = id[1];
      hasLane = false;
      hasStatus = false;
      curLine = idx + 1;
      return;
    }
    const lane = line.match(/^\s*lane:\s*(\S+)/);
    if (lane) {
      hasLane = true;
      const laneVal = lane[1].replace(/^['"]|['"]$/g, ''); // a quoted scalar is YAML-equal
      if (!APPROVED_LANES.includes(laneVal))
        out.push(
          `keywords.yaml: cluster '${cur}' invalid lane '${laneVal}' (allowed: ${APPROVED_LANES.join(', ')})`
        );
      return;
    }
    const st = line.match(/^(\s*)status:\s*(\S+)/);
    if (st) {
      const indent = st[1].length;
      if (indent <= 4) hasStatus = true;
      const v = st[2].replace(/#.*$/, '').trim().replace(/^['"]|['"]$/g, '');
      if (v && !ALL_STATUS.has(v))
        out.push(
          `keywords.yaml: invalid status '${v}' near line ${idx + 1} (allowed: ${[...ALL_STATUS].join(', ')})`
        );
      return;
    }
    const draft = line.match(/^\s*draft:\s*(\S+)/);
    if (draft) {
      const dp = draft[1].replace(/^['"]|['"]$/g, '');
      if (dp.includes('/') && !existsSync(resolve(ROOT, dp)))
        out.push(`keywords.yaml: draft path not found: ${dp} (line ${idx + 1})`);
    }
  });
  closeCluster();

  emit([...new Set(out)].sort());
  process.exit(0);
} catch (e) {
  process.stderr.write('WARN contract could not run: ' + (e && e.message) + '\n');
  process.exit(3);
}
