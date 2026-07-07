// scope-fence.mjs — PreToolUse on Edit|Write|MultiEdit.
// Turns a brief's "do-NOT-touch" list into a wall. Dormant when .active-scope is
// empty/absent. Fails open on its own malfunction (Law 3).
import { readStdin, warn, matchesAny, lines, TASKS_DIR, ROOT } from './lib.mjs';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const TAG = 'scope-fence';

try {
  const input = readStdin();
  const fp = input && input.tool_input && input.tool_input.file_path;
  if (!fp) process.exit(0);

  const scopePath = path.join(TASKS_DIR, '.active-scope');
  if (!existsSync(scopePath)) process.exit(0);

  const globs = lines(readFileSync(scopePath, 'utf8')).filter((l) => !l.startsWith('#'));
  if (!globs.length) process.exit(0);

  const relPath = path.relative(ROOT, path.resolve(fp)).split(path.sep).join('/');
  if (matchesAny(relPath, globs)) {
    process.stderr.write(
      `BLOCKED (scope-fence): '${relPath}' is fenced by the active task's scope ` +
        `(.claude/tasks/.active-scope). This edit is out of scope. If it is genuinely ` +
        `needed, the orchestrator must widen the brief's scope fence first.\n`
    );
    process.exit(2);
  }
  process.exit(0);
} catch (e) {
  warn(TAG, `internal error (fail-open): ${e && e.message}`);
  process.exit(0);
}
