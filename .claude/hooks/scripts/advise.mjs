// advise.mjs — PostToolUse on Write|Edit|MultiEdit. Runs the ADVISE checks against
// the single changed file and surfaces notes to the agent. NEVER blocks (exit 0).
// This is where lint-style signal rides on PostToolUse per the manifest.
import { readStdin, sh, warn, lines, ROOT } from './lib.mjs';
import path from 'node:path';

const TAG = 'advise';

try {
  const input = readStdin();
  const fp = input && input.tool_input && input.tool_input.file_path;
  if (!fp) process.exit(0);

  const relPath = path.relative(ROOT, path.resolve(fp)).split(path.sep).join('/');
  if (!/^(content|social|briefs)\//.test(relPath)) process.exit(0);
  if (!/\.md$/i.test(relPath)) process.exit(0);

  const notes = [];
  for (const check of ['named-entity', 'links']) {
    const r = sh(`node .claude/hooks/scripts/checks/${check}.mjs "${relPath}"`);
    if (r.code === 0 && r.stdout.trim()) {
      for (const l of lines(r.stdout)) notes.push(`[${check}] ${l}`);
    }
  }

  if (notes.length) {
    process.stderr.write(`\nADVISORY (not blocking) for ${relPath}:\n`);
    for (const n of notes) process.stderr.write(`  - ${n}\n`);
    process.stderr.write('(Surface only. See content-standards.md §6 and routing-rules.md §2a.)\n\n');
  }
  process.exit(0);
} catch (e) {
  warn(TAG, `internal error (fail-open): ${e && e.message}`);
  process.exit(0);
}
