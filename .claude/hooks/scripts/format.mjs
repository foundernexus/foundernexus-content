// format.mjs — PostToolUse on Write|Edit|MultiEdit. Mutates, never judges.
// This is a PROSE repo: line breaks in drafts and social copy are meaningful, so
// auto-reflowing content is unsafe, and no prose formatter is installed anyway.
// Therefore this is a deliberate fail-open no-op. It also refuses to touch the
// .claude scaffolding, markdown, JSON, or shell. If a SAFE structural formatter is
// added later, gate it here to non-prose files only. PostToolUse cannot undo an
// edit, so this must never feed plumbing errors back: exit 0 unconditionally.
import { readStdin } from './lib.mjs';

try {
  const input = readStdin();
  const fp = (input && input.tool_input && input.tool_input.file_path) || '';
  // Skip scaffolding / non-source. (No formatter configured => every path is a no-op.)
  const skip = /(^|\/)\.claude\//.test(fp) || /\.(md|json|sh|mjs|cjs|js|ya?ml)$/i.test(fp);
  void skip; // documented intent; nothing to run today
  process.exit(0);
} catch {
  process.exit(0);
}
