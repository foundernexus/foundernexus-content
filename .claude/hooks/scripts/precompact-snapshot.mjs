// precompact-snapshot.mjs — PreCompact. Before the context window compacts (lossy),
// append the orchestrator's critical state to HANDOVER.md so a cold restart loses
// nothing. Never blocks compaction: exit 0 unconditionally.
import { readStdin, activeTask, warn, ROOT } from './lib.mjs';
import { appendFileSync, existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const TAG = 'precompact-snapshot';

try {
  readStdin();
  const task = activeTask() || '(none)';
  const now = new Date().toISOString();
  const block =
    `\n---\n## PreCompact snapshot ${now}\n\n` +
    `- Active task: ${task}\n` +
    `- Context is about to compact (lossy — the first things dropped are "don't do X" constraints).\n` +
    `- Re-orient after compaction with /orient.\n` +
    `- Registry: .claude/orchestration/_task-registry.md\n` +
    `- Defending against: goal drift.\n`;

  const hp = path.join(ROOT, 'HANDOVER.md');
  if (existsSync(hp)) appendFileSync(hp, block);
  else writeFileSync(hp, `# HANDOVER\n${block}`);
  process.exit(0);
} catch (e) {
  warn(TAG, `internal error (fail-open): ${e && e.message}`);
  process.exit(0);
}
