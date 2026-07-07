// doc-gate.mjs — Stop / SubagentStop. Only active when a task is dispatched.
// If this task touched content but CHANGELOG.md / HANDOVER.md were not updated,
// block with the missing items. Fails open on any git/ref malfunction (Law 3).
import { readStdin, activeTask, sh, warn, lines, TASKS_DIR } from './lib.mjs';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const TAG = 'doc-gate';
const CONTENT_DIRS = ['content/', 'social/', 'briefs/', 'substrate/', 'scripts/'];

try {
  const input = readStdin();
  if (input && input.stop_hook_active === true) process.exit(0);

  const task = activeTask();
  if (!task) process.exit(0);

  const refPath = path.join(TASKS_DIR, `.baseline-${task}`, 'ref');
  const ref = existsSync(refPath) ? readFileSync(refPath, 'utf8').trim() : '';
  if (!ref) {
    warn(TAG, 'no baseline ref; skipping (fail-open)');
    process.exit(0);
  }

  const diff = sh(`git diff --name-only ${ref}`);
  if (diff.code !== 0) {
    warn(TAG, `git diff failed (fail-open): ${(diff.stderr || '').split(/\r?\n/)[0]}`);
    process.exit(0);
  }
  const untracked = sh('git ls-files --others --exclude-standard');
  const changed = [...new Set([...lines(diff.stdout), ...lines(untracked.stdout)])].filter(
    (f) => !f.startsWith('.claude/')
  );

  const touchedContent = changed.some((f) => CONTENT_DIRS.some((d) => f.startsWith(d)));
  if (!touchedContent) process.exit(0);

  const has = (name) => changed.some((f) => f === name);
  const missing = [];
  if (!has('CHANGELOG.md')) missing.push('CHANGELOG.md (append an entry for this task)');
  if (!has('HANDOVER.md')) missing.push('HANDOVER.md (append a dated block for this task)');

  if (missing.length) {
    process.stderr.write(`\nBLOCKED (doc-gate, task ${task}): content changed but these were not updated:\n`);
    for (const m of missing) process.stderr.write(`  - ${m}\n`);
    process.stderr.write('\nAppend them, then finish again. See the orchestration-protocol Skill finish protocol.\n\n');
    process.exit(2);
  }
  process.exit(0);
} catch (e) {
  warn(TAG, `internal error (fail-open): ${e && e.message}`);
  process.exit(0);
}
