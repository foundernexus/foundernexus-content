// slop (ADVISE, never blocks) — surfaces mechanical AI-slop phrasing in shipped
// content (content/ + social/). Adapted from the stop-slop skill (Hardik Pandya,
// MIT); see substrate/anti-slop.md. HIGH-PRECISION only: it flags Part-A patterns
// that are slop with no downside (throat-clearing, jargon, meta-commentary, vague
// declaratives, filler). It deliberately does NOT flag the FounderNexus "name the
// decision" device ("the real question is", "not X, it's Y") or three-part lists or
// bare adverbs — those are Part-B house-voice judgment calls owned by the QA voice
// pass, not machine-checkable without false positives. Emits `path:line: <label>`;
// exit 0 always. A parser error exits 3 (fail-open).
import { listFiles, rel, read } from "../lib.mjs";
import { resolve } from "node:path";

const ROOT = process.cwd();

const PATTERNS = [
  // Throat-clearing openers
  { re: /\bhere's the thing\b/i, label: 'throat-clearing "here\'s the thing" — state the point' },
  { re: /\bhere's what i (find|think)\b/i, label: 'throat-clearing "here\'s what I..." — cut to the point' },
  { re: /\bthe uncomfortable truth\b/i, label: 'throat-clearing "the uncomfortable truth" — just say it' },
  { re: /\bit turns out\b/i, label: 'filler "it turns out" — state the fact directly' },
  { re: /\blet me be clear\b/i, label: 'throat-clearing "let me be clear" — cut it' },
  { re: /\bmake no mistake\b/i, label: 'emphasis crutch "make no mistake" — cut it' },
  { re: /\blet that sink in\b/i, label: 'emphasis crutch "let that sink in" — cut it' },
  // Business jargon
  { re: /\bgame[-\s]?changer\b/i, label: 'jargon "game-changer" — say significant/important' },
  { re: /\bdeep dive\b/i, label: 'jargon "deep dive" — say analysis/examination' },
  { re: /\bcircle back\b/i, label: 'jargon "circle back" — say return to/revisit' },
  { re: /\bmove the needle\b/i, label: 'jargon "move the needle" — name the specific effect' },
  { re: /\bboil the ocean\b/i, label: 'jargon "boil the ocean" — say something specific' },
  { re: /\blow[-\s]hanging fruit\b/i, label: 'jargon "low-hanging fruit" — name it' },
  { re: /\bparadigm shift\b/i, label: 'jargon "paradigm shift" — describe the actual change' },
  { re: /\blean into\b/i, label: 'jargon "lean into" — say accept/commit to' },
  { re: /\bdouble down\b/i, label: 'jargon "double down" — say commit/increase' },
  { re: /\btake a step back\b/i, label: 'jargon "take a step back" — say reconsider' },
  { re: /\bat the end of the day\b/i, label: 'filler "at the end of the day" — cut it' },
  { re: /\bwhen it comes to\b/i, label: 'filler "when it comes to" — restructure' },
  { re: /\bin today's\b/i, label: 'filler "in today\'s ..." — cut the framing' },
  { re: /\bin a world where\b/i, label: 'filler "in a world where" — cut the framing' },
  { re: /\bat its core\b/i, label: 'filler "at its core" — cut it' },
  { re: /\bit's worth noting\b/i, label: 'filler "it\'s worth noting" — just note it' },
  // Meta-commentary
  { re: /\bin this (section|piece|post|article)\b/i, label: 'meta-commentary "in this section..." — let the piece move' },
  { re: /\bas we'll see\b/i, label: 'meta-commentary "as we\'ll see" — cut it' },
  { re: /\blet me walk you through\b/i, label: 'meta-commentary "let me walk you through" — cut it' },
  { re: /\bthe rest of this (piece|post|essay|article)\b/i, label: 'meta-commentary "the rest of this piece" — cut it' },
  { re: /\bplot twist\b/i, label: 'meta-commentary "plot twist" — cut it' },
  // Vague declaratives (name the specific thing)
  { re: /\bthe implications are significant\b/i, label: 'vague declarative — name the specific implication' },
  { re: /\bthe stakes are high\b/i, label: 'vague declarative "the stakes are high" — name the stake' },
  { re: /\bthe reasons are structural\b/i, label: 'vague declarative — name the specific reason' },
  { re: /\bthe consequences are real\b/i, label: 'vague declarative — name the specific consequence' },
  // Filler
  { re: /\bneedless to say\b/i, label: 'filler "needless to say" — then don\'t say it' },
  { re: /\bit goes without saying\b/i, label: 'filler "it goes without saying" — cut it' },
];

function scan(files) {
  const out = [];
  for (const f of files) {
    const text = read(f);
    if (!text) continue;
    const relp = rel(f);
    text.split(/\r?\n/).forEach((line, i) => {
      for (const p of PATTERNS) {
        if (p.re.test(line)) out.push(`${relp}:${i + 1}: ${p.label}`);
      }
    });
  }
  return [...new Set(out)].sort();
}

try {
  const arg = process.argv[2];
  const files = arg ? [resolve(ROOT, arg)] : listFiles(["content", "social"], [".md"]);
  for (const l of scan(files)) process.stdout.write(l + "\n");
  process.exit(0);
} catch (e) {
  process.stderr.write("WARN slop could not run: " + (e && e.message) + "\n");
  process.exit(3);
}
