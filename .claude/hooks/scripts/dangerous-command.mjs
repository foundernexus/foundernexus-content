// dangerous-command.mjs — PreToolUse on Bash. ALWAYS ON. Blocks clearly destructive
// commands and, domain-specific, automated SENDING (engagement-guardrails §1:
// "Automation prepares. Humans send."). Fails open on its own malfunction (Law 3).
import { readStdin, warn } from './lib.mjs';

const TAG = 'dangerous-command';
const RULES = [
  { re: /\brm\s+-[a-z]*r[a-z]*f[a-z]*\s+(\/(?!\w)|~|\*|\.$|\.\s|\$HOME)/i, why: 'recursive force-delete of a root/home/glob target' },
  { re: /\brm\s+-[a-z]*f[a-z]*r[a-z]*\s+(\/(?!\w)|~|\*|\.$|\.\s|\$HOME)/i, why: 'recursive force-delete of a root/home/glob target' },
  { re: /\b(DROP|TRUNCATE)\s+(TABLE|DATABASE)\b/i, why: 'destructive SQL' },
  { re: /git\s+push\s+[^\n]*(--force\b|\s-f\b)/i, why: 'force-push' },
  { re: /:\s*\(\s*\)\s*\{\s*:\s*\|\s*:\s*&\s*\}\s*;/, why: 'fork bomb' },
  { re: /\bchmod\s+-R\s+0?777\b/i, why: 'world-writable recursive chmod' },
  { re: /\bcurl\b[^|]*\|\s*(sudo\s+)?(ba)?sh\b/i, why: 'pipe-to-shell of a remote script' },
  {
    re: /(api\.mailchimp\.com|api\.sendgrid\.com|api\.postmarkapp\.com)[^\n]*(send|messages|actions\/send|campaigns\/[^\s]+\/actions)/i,
    why: 'automated email send violates engagement-guardrails §1 ("Automation prepares. Humans send.")',
  },
  {
    re: /linkedin\.com\/[^\n]*\/(ugcPosts|shares|messages)/i,
    why: 'automated LinkedIn posting/messaging violates engagement-guardrails §1',
  },
];

try {
  const input = readStdin();
  const cmd = (input && input.tool_input && input.tool_input.command) || '';
  if (!cmd) process.exit(0);

  for (const r of RULES) {
    if (r.re.test(cmd)) {
      process.stderr.write(`BLOCKED (dangerous-command): ${r.why}.\nCommand: ${cmd}\n`);
      process.exit(2);
    }
  }
  process.exit(0);
} catch (e) {
  warn(TAG, `internal error (fail-open): ${e && e.message}`);
  process.exit(0);
}
