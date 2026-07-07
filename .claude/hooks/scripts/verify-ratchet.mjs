// verify-ratchet.mjs — Stop / SubagentStop.
// THE HEART OF v3. Blocks a hand-off ONLY on failures that are NEW versus the task
// baseline snapshotted at dispatch. Pre-existing failures are invisible. Clean
// baseline degenerates to absolute (any failure is new). Fails open on its own
// malfunction (Law 3): missing task, missing baseline, un-runnable check => exit 0.
import { readStdin, activeTask, loadManifest, sh, warn, lines, TASKS_DIR } from './lib.mjs';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const TAG = 'verify-ratchet';

try {
  const input = readStdin();
  if (input && input.stop_hook_active === true) process.exit(0); // loop guard

  const task = activeTask();
  if (!task) process.exit(0); // dormant: no active task => ADVISE/off

  const manifest = loadManifest();
  if (!manifest || !Array.isArray(manifest.checks)) {
    warn(TAG, 'no manifest; skipping (fail-open)');
    process.exit(0);
  }

  const baseDir = path.join(TASKS_DIR, `.baseline-${task}`);
  if (!existsSync(baseDir)) {
    warn(TAG, `no baseline dir for task ${task}; ratchet disabled this run (fail-open)`);
    process.exit(0);
  }

  const newFindings = [];
  for (const c of manifest.checks) {
    if (c.behavior !== 'ratchet') continue;
    const ev = (c.event || '').toLowerCase();
    if (ev !== 'stop' && ev !== 'subagentstop') continue;

    // Law 3: only a check that produced a REAL baseline snapshot may enforce.
    // A '<id>.norun' sentinel (could-not-run at dispatch) or a MISSING baseline
    // file (check added to the manifest after the snapshot) => non-enforcing, so
    // we never block on PRE-EXISTING failures the task did not introduce. A truly
    // clean baseline is an EMPTY <id> file (exists) and still enforces absolutely.
    const basePath = path.join(baseDir, c.id);
    if (existsSync(path.join(baseDir, c.id + '.norun'))) {
      warn(TAG, `check '${c.id}' had no runnable baseline at dispatch; non-enforcing (fail-open)`);
      continue;
    }
    if (!existsSync(basePath)) {
      warn(TAG, `no baseline for check '${c.id}' (added after snapshot?); non-enforcing (fail-open)`);
      continue;
    }

    const { code, stdout, stderr } = sh(c.cmd);
    if (code !== 0) {
      // exit 3 = could-not-run; any other nonzero = crashed. Either way fail open.
      warn(TAG, `check '${c.id}' could not run (fail-open): ${(stderr || '').split(/\r?\n/)[0]}`);
      continue;
    }

    const now = lines(stdout);
    const base = lines(readFileSync(basePath, 'utf8'));
    const baseSet = new Set(base);
    const fresh = now.filter((l) => !baseSet.has(l));
    if (fresh.length) newFindings.push({ id: c.id, fresh });
  }

  if (newFindings.length) {
    process.stderr.write(`\nBLOCKED (verify-ratchet): new regressions vs task ${task} baseline.\n`);
    process.stderr.write(`Fix or revert these. Pre-existing baseline issues are ignored — only NEW failures block.\n`);
    for (const f of newFindings) {
      process.stderr.write(`\n  [${f.id}] ${f.fresh.length} new:\n`);
      for (const l of f.fresh) process.stderr.write(`    - ${l}\n`);
    }
    process.stderr.write('\n');
    process.exit(2);
  }
  process.exit(0);
} catch (e) {
  warn(TAG, `internal error (fail-open): ${e && e.message}`);
  process.exit(0);
}
