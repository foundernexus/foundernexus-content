// links (ADVISE, never blocks) — internal link integrity + known-dead CTA routes.
// routing-rules.md §2a + comparison-page-playbook: do not publish a CTA until its
// destination returns a live 200. /apply, /nominate, /newsletter are 404 today.
// Live 200 verification is network + out-of-band => that stays a SMOKE checklist item.
import { listFiles, rel, read } from "../lib.mjs";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";

const ROOT = process.cwd();
const DEAD = ["/apply", "/nominate", "/newsletter", "/founder-conversation"];

function scan(files) {
  const out = [];
  for (const f of files) {
    const text = read(f);
    if (!text) continue;
    const relp = rel(f);
    const linkRe = /\]\(([^)]+)\)/g;
    let m;
    while ((m = linkRe.exec(text))) {
      const target = m[1].split("#")[0].trim();
      if (!target || /^(https?:|mailto:|#)/.test(target)) continue;
      if (/^\//.test(target)) {
        if (DEAD.includes(target))
          out.push(
            `${relp}: links to ${target} (known 404 route — not a live CTA yet)`,
          );
        continue;
      }
      const base = /^\.\.?\//.test(target)
        ? resolve(dirname(f), target)
        : resolve(ROOT, target);
      if (!existsSync(base))
        out.push(`${relp}: internal link target not found: ${target}`);
    }
    for (const d of DEAD) {
      if (new RegExp("(^|\\s)" + d + "(\\s|$)", "m").test(text))
        out.push(
          `${relp}: mentions ${d} (known 404 route today; confirm live 200 before publishing)`,
        );
    }
  }
  return [...new Set(out)].sort();
}

try {
  const arg = process.argv[2];
  const files = arg
    ? [resolve(ROOT, arg)]
    : listFiles(["content", "social", "briefs"], [".md"]);
  for (const l of scan(files)) process.stdout.write(l + "\n");
  process.exit(0);
} catch (e) {
  process.stderr.write("WARN links could not run: " + (e && e.message) + "\n");
  process.exit(3);
}
