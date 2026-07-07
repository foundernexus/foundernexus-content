// dangerous-edit.mjs — PreToolUse on Edit|Write|MultiEdit. ALWAYS ON (safety, not
// workflow). Blocks edits to secrets, lockfiles, and generated/VCS dirs. Pair with
// the deny permission rules in settings.json. Fails open on its own malfunction.
// (substrate/keywords.yaml is protected via the task scope-fence, not here, because
//  a keyword-pipeline task legitimately edits it.)
import { readStdin, warn, ROOT } from './lib.mjs';
import path from 'node:path';

const TAG = 'dangerous-edit';
const DENY = [
  { re: /(^|\/)\.env(\.|$)/i, why: '.env files hold secrets' },
  { re: /(^|\/)secrets\//i, why: 'secrets/ directory' },
  {
    re: /(^|\/)(package-lock\.json|yarn\.lock|pnpm-lock\.yaml|composer\.lock|Gemfile\.lock)$/i,
    why: 'lockfile — regenerate via the package manager, do not hand-edit',
  },
  { re: /(^|\/)(node_modules|dist|build|\.git)\//i, why: 'generated / vendored / VCS directory' },
];

try {
  const input = readStdin();
  const fp = input && input.tool_input && input.tool_input.file_path;
  if (!fp) process.exit(0);

  const relPath = path.relative(ROOT, path.resolve(fp)).split(path.sep).join('/');
  for (const d of DENY) {
    if (d.re.test(relPath) || d.re.test(fp)) {
      process.stderr.write(`BLOCKED (dangerous-edit): '${relPath}' — ${d.why}.\n`);
      process.exit(2);
    }
  }
  process.exit(0);
} catch (e) {
  warn(TAG, `internal error (fail-open): ${e && e.message}`);
  process.exit(0);
}
