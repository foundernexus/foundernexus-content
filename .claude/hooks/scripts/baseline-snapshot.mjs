// baseline-snapshot.mjs — invoked by /dispatch-task (NOT a hook). Snapshots the
// normalized failure set of every RATCHET check against the task's base ref, so
// verify-ratchet can later block only NEW failures. Uses the SAME check scripts as
// verify-ratchet, guaranteeing identical normalization at snapshot and compare time.
//
//   node .claude/hooks/scripts/baseline-snapshot.mjs <task-id> [baseRef]
//
import { loadManifest, sh, warn, lines, TASKS_DIR } from './lib.mjs';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import path from 'node:path';

const TAG = 'baseline-snapshot';
const task = process.argv[2];
if (!task) {
  process.stderr.write('usage: baseline-snapshot.mjs <task-id> [baseRef]\n');
  process.exit(1);
}

const baseRef = process.argv[3] || (sh('git rev-parse HEAD').stdout.trim() || 'HEAD');
const manifest = loadManifest();
if (!manifest || !Array.isArray(manifest.checks)) {
  process.stderr.write('no manifest; cannot snapshot\n');
  process.exit(1);
}

const dir = path.join(TASKS_DIR, `.baseline-${task}`);
try {
  if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
} catch {
  /* ignore */
}
mkdirSync(dir, { recursive: true });
writeFileSync(path.join(dir, 'ref'), baseRef + '\n');

const summary = [];
for (const c of manifest.checks) {
  if (c.behavior !== 'ratchet') continue;
  const { code, stdout, stderr } = sh(c.cmd);
  if (code !== 0) {
    warn(TAG, `check '${c.id}' could not run at baseline (non-enforcing this task): ${(stderr || '').split(/\r?\n/)[0]}`);
    // Law 3: mark could-not-run with a SENTINEL, not an empty baseline file.
    // An empty <id> file means "clean" (enforce absolutely); a '<id>.norun' marker
    // tells verify-ratchet to SKIP this check, so it can never block on pre-existing
    // failures the task did not introduce.
    writeFileSync(path.join(dir, c.id + '.norun'), '');
    summary.push(`${c.id}: could-not-run (non-enforcing)`);
    continue;
  }
  const set = [...new Set(lines(stdout))].sort();
  writeFileSync(path.join(dir, c.id), set.length ? set.join('\n') + '\n' : '');
  summary.push(`${c.id}: ${set.length} baseline finding(s)`);
}

process.stdout.write(`Baseline snapshotted for task ${task} @ ${baseRef}\n`);
process.stdout.write(summary.map((s) => '  ' + s).join('\n') + '\n');
process.exit(0);
