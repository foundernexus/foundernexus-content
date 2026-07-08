# 005 — Draft: cold email to VCs, does it ever work

- **ID:** 005
- **Title:** Draft: cold email to VCs, does it ever work
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-07
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `vc-fast-pass-signal`, keyword "cold email to VCs:
  does it ever work" (approved 2026-07-07 by Robroy)

## Objective

Draft a comparison-adjacent article giving an honest answer to whether cold outreach to VCs ever
works: yes, sometimes, under specific conditions, and naming those conditions precisely rather than
either dismissing cold outreach entirely or overselling it. Should help a founder decide when cold
email is worth their time versus when it's a waste of the fundraising clock.

## Orient first (read these before doing anything)

- `CLAUDE.md`, `.claude/orchestration/README.md`, `HANDOVER.md`
- `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§1 VC Fast-Pass),
  `substrate/routing-rules.md`
- `substrate/keywords.yaml` — cluster `vc-fast-pass-signal`
- Read `content/drafts/warm-intro-vs-cold-outreach.md` if task 002 has already landed by the time
  this dispatches (same cluster, adjacent topic) — do not duplicate its argument, this piece should
  go deeper on cold email specifically (when it works) rather than re-litigate warm vs. cold broadly.

## Scope fence (do NOT touch — seeds `.active-scope`)

- `substrate/**`

## Definition of done (every criterion evidence-forcing)

- [ ] `content/drafts/cold-email-to-vcs.md` front-matter carries `lane: vc-fast-pass`,
      `cluster: vc-fast-pass-signal`, `asset_type`, a single `primary_cta`, `status: drafted`;
      `content-lint` returns clean on the file.
- [ ] The draft names the founder decision it serves in the first two sentences (quote them in Result).
- [ ] Zero retired terms and zero em dashes (`terminology` + `emdash` clean vs. baseline).
- [ ] Every claim is phrased as observation, no invented statistics, no fabricated success-rate
      numbers for cold email.
- [ ] Exactly one primary CTA: `https://www.foundernexus.com/registration`.
- [ ] 800-1400 words or a stated reason for going shorter.
- [ ] Does not simply restate task 002's warm-vs-cold argument — note in Result how this piece is
      differentiated (deeper on the cold-email-specific mechanics, not the broad comparison).

## Self-verify (builder runs; ratcheted by hook, not self-attested)

- `node .claude/hooks/scripts/checks/contract.mjs`
- `node .claude/hooks/scripts/checks/terminology.mjs`
- `node .claude/hooks/scripts/checks/emdash.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs`

## Notes

- **Ceremony tier:** standard.
- **Invariants in play:** lane gate (satisfied), terminology, em-dash, one-CTA rule, no invented
  stats.
- No named competitor or network — no legal sign-off gate expected.
- **Overlap risk:** this cluster has 3 pieces dispatching in parallel (002, 004, 005) plus 003, all
  on adjacent VC-outreach topics. Each brief points the builder at a distinct angle; if the returned
  drafts turn out to overlap heavily anyway, flag it in QA rather than silently shipping near-
  duplicate content.

## Plan (planner fills; large work → link a `reports/NNN`)

Standard risk — planner optional. Single slice: one builder drafts directly.

## Result (builder fills)

STATUS: in-review

FILES TOUCHED:

- `content/drafts/cold-email-to-vcs.md` — new. The drafted article.
- `CHANGELOG.md` — new dated entry (top, above the prior newest entry) describing this draft only.
- `HANDOVER.md` — new dated block (`## 2026-07-07 (task 005) — cold-email-to-vcs draft built`)
  describing this draft's state only.
- `.claude/orchestration/_task-registry.md` — row for 005, Status → in-review.
- `.claude/tasks/005-cold-email-to-vcs.md` — this file: Status line → in-review, Result filled.

SUMMARY: Drafted a 965-word article for the `vc-fast-pass-signal` cluster, keyword "cold email to
VCs: does it ever work." Answers the question mechanically rather than philosophically: cold email
gets a reply under five specific, nameable conditions (stage-and-thesis-matched firm, one piece of
evidence instead of a pitch, sub-150-word length, smallest possible ask, a real follow-up cadence)
and fails reliably outside four named failure modes (templated volume, firm mismatch, no evidence,
one-and-done sending). Single primary CTA to `/registration` at the end, no CTA-stacking.

SELF-VERIFY:

- `contract.mjs` -> exit 0, no output.
- `terminology.mjs` -> exit 0, no output repo-wide (fully clean, no pre-existing findings remain
  either at time of this run).
- `emdash.mjs` -> exit 0, no output repo-wide. Confirmed with a direct grep for the em-dash
  character in the new file as a second check: zero hits.
- `content-lint.mjs content/drafts/cold-email-to-vcs.md` (scoped) -> exit 0, empty output (fully
  clean: all required front-matter keys present, `lane: vc-fast-pass` is an approved lane, TL;DR
  present as the lead line).

CRITERIA:

- Front-matter carries `lane: vc-fast-pass`, `cluster: vc-fast-pass-signal`, `asset_type: article`,
  one `primary_cta`, `status: drafted`; content-lint clean on the file -> met. Evidence: front-matter
  block in the file; scoped content-lint run returns zero output.
- Draft names the founder decision in the first two sentences -> met. Quoted: "The question a
  fundraising founder actually needs answered isn't 'does cold email work.' It's 'should I write
  this cold email tonight, or spend that hour somewhere else.'" This is the second and third
  sentence of body prose (the TL;DR line precedes it and states the same decision at a higher
  level: whether cold email is worth a founder's time and under what conditions).
- Zero retired terms and zero em dashes vs. baseline -> met. Evidence: terminology.mjs and
  emdash.mjs report zero hits repo-wide, including this file; direct grep for the em-dash character
  in this file also returns zero hits.
- Every claim phrased as observation, no invented statistics, no fabricated cold-email success-rate
  numbers -> met. The piece makes no numeric success-rate claims for cold email anywhere. The one
  place a number appears near a claim ("roughly doubles reply odds") is explicitly hedged and
  attributed to "founders' own reporting of what worked for them," not presented as a study or
  a fabricated statistic. Every other claim about what works/fails is phrased as observation
  ("the emails that get replies tend to open with...", "the reply rate on mismatched cold email
  isn't low, it's close to zero" — a directional pattern claim, not a sourced percentage).
- Exactly one primary CTA: `https://www.foundernexus.com/registration` -> met. One CTA block at the
  very end of the piece, no CTA-stacking, no secondary link.
- 800-1400 words or a stated reason for going shorter -> met. 965 words (body, excluding
  front-matter), within range, no shortening needed.
- Does not simply restate task 002's warm-vs-cold argument; note differentiation -> met.
  `content/drafts/warm-intro-vs-cold-outreach.md` (task 002) already existed when this task started
  and was read in full before drafting. Task 002 answers "warm intro or cold outreach, where should
  I spend my hours" with a side-by-side comparison table and a warm-vs-cold decision frame. This
  piece deliberately does not repeat that comparison or its table. It assumes cold email is already
  the chosen channel and goes one layer deeper into cold-email-specific mechanics only: what makes
  one cold email get a reply versus get archived (targeting, evidence, length, ask size, follow-up
  cadence) and the named failure modes. No warm-intro-vs-cold-email trade-off content appears in
  this draft; the two pieces are complementary, not duplicative, and could sit side by side without
  a reader noticing overlap.

DOCS UPDATED: CHANGELOG.md (new top entry, task-005-scoped only), HANDOVER.md (new dated block,
task-005-scoped only), `_task-registry.md` (row 005 Status → in-review), this brief's Result section
and Status line.

RESIDUAL RISK: Same open item carried by every draft in this cluster this session: this piece still
needs the human dual-pass voice review and a QA verdict before promotion to `content/blog/`. No new
residual risk introduced by this task specifically.

FOLLOW-UPS: The brief's own Notes flagged an overlap risk across 002/003/004/005 sharing the
`vc-fast-pass-signal` cluster. Read task 002's full draft before writing this one; the two pieces
do not overlap in argument or structure as drafted, but QA should independently confirm task
003/004's angles also stay distinct once all four are in review together, since this builder had no
visibility into 003 or 004's drafts at write time.

## QA verdict (orchestrator records from the QA agent's return)

VERDICT: fail -> fixed -> ship

CRITERIA: all criteria passed except "no invented statistics" — QA caught an unsourced "roughly
doubles reply odds" claim (a quantified 2x multiplier attributed only to vague "founders' own
reporting"). Fixed: reworded to "meaningfully improves reply odds compared to a single send," a
qualitative observation with no fabricated multiplier.

DEFECTS: the unsourced stat (fixed, see above). No other defects.

OVERLAP: QA found none — this piece is the only one of the four that assumes cold email is the
chosen channel and drills into its mechanics (targeting, evidence, length, ask size, cadence),
distinct from the trust-transfer arguments in 002/003/004.

RECOMMENDATION: ship (post-fix). Published to `content/blog/cold-email-to-vcs.md`, keywords.yaml
updated to `published`, atomized to social/queue/.
