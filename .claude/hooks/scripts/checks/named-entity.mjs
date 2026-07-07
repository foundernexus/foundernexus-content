// named-entity (ADVISE, never blocks) — surfaces shipped content that names a peer
// network / competitor. content-standards.md §6 + comparison-page-playbook require
// Court + legal sign-off for named-network language. A script cannot confirm a
// sign-off happened, so this only flags. Emits notes; exit 0 always.
import { listFiles, rel, read } from "../lib.mjs";
import { resolve } from "node:path";

const ROOT = process.cwd();
const NETWORKS = [
  "YPO",
  "Young Presidents",
  "Vistage",
  "TIGER 21",
  "Tiger 21",
  "R360",
  "Hampton",
  "Pavilion",
  "EO",
  "Entrepreneurs' Organization",
  "Entrepreneurs Organization",
];

function hasSignoff(text) {
  return /review_flag:|status:\s*held_review|signed[-_ ]?off|court\s*\/\s*legal|legal sign-?off/i.test(
    text,
  );
}

function scan(files) {
  const out = [];
  for (const f of files) {
    const text = read(f);
    if (!text) continue;
    const relp = rel(f);
    const found = new Set();
    for (const n of NETWORKS) {
      const esc = n.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (new RegExp("\\b" + esc + "\\b", "i").test(text)) found.add(n.trim());
    }
    if (found.size) {
      const mark = hasSignoff(text)
        ? "has a sign-off/held-review marker — CONFIRM Court + legal actually signed before publishing"
        : "NO sign-off marker — needs Court + legal per content-standards.md §6";
      out.push(`${relp}: names ${[...found].join(", ")} (${mark})`);
    }
  }
  return [...new Set(out)].sort();
}

try {
  const arg = process.argv[2];
  const files = arg
    ? [resolve(ROOT, arg)]
    : listFiles(["content", "social"], [".md"]);
  for (const l of scan(files)) process.stdout.write(l + "\n");
  process.exit(0);
} catch (e) {
  process.stderr.write(
    "WARN named-entity could not run: " + (e && e.message) + "\n",
  );
  process.exit(3);
}
