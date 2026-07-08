# 002 — Draft: warm intro to VC vs cold outreach

- **ID:** 002
- **Title:** Draft: warm intro to VC vs cold outreach
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-07
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `vc-fast-pass-signal`, keyword "warm intro to VC vs
  cold outreach" (approved 2026-07-07 by Robroy)

## Objective

Draft a comparison article that helps a fundraising founder decide how to actually spend their
limited outreach effort: chasing warm introductions versus cold-emailing VCs directly. Should make
the honest case for both, then land on why a curated warm-intro path is usually the higher-leverage
move for a venture-scale founder, without pretending cold outreach never works.

## Orient first (read these before doing anything)

- `CLAUDE.md`, `.claude/orchestration/README.md`, `HANDOVER.md`
- `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§1 VC Fast-Pass),
  `substrate/routing-rules.md`
- `substrate/keywords.yaml` — cluster `vc-fast-pass-signal`
- For voice/structure reference: `content/blog/founder-nexus-vs-eo.md` (comparison-page structure —
  fair-case-for-the-alternative, then the differentiated case, side-by-side, how to decide) is the
  closest analog even though this isn't a named-competitor piece; do NOT copy its comparison-table
  format literally since there's no single named alternative here, adapt the honest-both-sides shape.

## Scope fence (do NOT touch — seeds `.active-scope`)

- `substrate/**`

## Definition of done (every criterion evidence-forcing)

- [ ] `content/drafts/warm-intro-vs-cold-outreach.md` front-matter carries `lane: vc-fast-pass`,
      `cluster: vc-fast-pass-signal`, `asset_type`, a single `primary_cta`, `status: drafted`;
      `content-lint` returns clean on the file.
- [ ] The draft names the founder decision it serves in the first two sentences (quote them in Result).
- [ ] Zero retired terms and zero em dashes (`terminology` + `emdash` clean vs. baseline).
- [ ] Every claim about outreach/response behavior is phrased as observation, not an invented
      statistic — no fabricated response rates, no invented VC quotes (list each claim -> source or
      "observation, no stat claimed").
- [ ] Exactly one primary CTA. Use `https://www.foundernexus.com/registration` (the real, confirmed-
      live application path — same resolution used for every other piece published this session;
      there is no dedicated `/fast-pass` page on the live site).
- [ ] 800-1400 words or a stated reason for going shorter.

## Self-verify (builder runs; ratcheted by hook, not self-attested)

- `node .claude/hooks/scripts/checks/contract.mjs`
- `node .claude/hooks/scripts/checks/terminology.mjs`
- `node .claude/hooks/scripts/checks/emdash.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs`

## Notes

- **Ceremony tier:** standard.
- **Invariants in play:** lane gate (satisfied), terminology, em-dash, one-CTA rule, no invented
  stats (this lane is especially exposed to the temptation to cite fake VC response-rate numbers —
  do not).
- No named competitor or network in this piece — no legal sign-off gate expected.

## Plan (planner fills; large work → link a `reports/NNN`)

Standard risk — planner optional. Single slice: one builder drafts directly.

## Result (builder fills)

STATUS: done

FILES TOUCHED:

- `content/drafts/warm-intro-vs-cold-outreach.md` — new comparison draft, 843 words.
- `CHANGELOG.md` — new dated entry (task 002), added above the existing newest entry.
- `HANDOVER.md` — new dated `---` section appended describing this draft's state.
- `.claude/orchestration/_task-registry.md` — task 002 row, Status `ready` -> `in-review`.
- `.claude/tasks/002-warm-intro-vs-cold-outreach.md` — this Result section + Status line filled.

SUMMARY: Drafted a comparison piece on where a fundraising founder should spend limited outreach
effort, cold VC email versus building warm-introduction paths. Structure adapts
`founder-nexus-vs-eo.md`'s honest-both-sides shape (fair case for the alternative, then the
differentiated case, side-by-side table, how to decide) without copying its literal comparison-table
format, since there's no single named alternative here. Lands on warm intros as the higher-leverage
default for Stage 2-3 founders while giving cold outreach a genuine, non-strawman case for
earlier-stage/thin-network founders.

SELF-VERIFY:

- `node .claude/hooks/scripts/checks/contract.mjs` -> exit 0, zero output (clean).
- `node .claude/hooks/scripts/checks/terminology.mjs` -> exit 0, zero output (clean repo-wide).
- `node .claude/hooks/scripts/checks/emdash.mjs` -> exit 0, zero output (clean repo-wide).
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/warm-intro-vs-cold-outreach.md`
  -> exit 0, zero output (clean, scoped to this file).
- Direct greps as a second check: zero em dashes (`—`) and zero retired terms (`Tier N`, `Chapter
chair`, bare `Chapter`, `Event` outside a URL) found in the file body.

CRITERIA:

- Front-matter carries `lane: vc-fast-pass`, `cluster: vc-fast-pass-signal`, `asset_type:
comparison_page`, single `primary_cta`, `status: drafted`; content-lint clean -> **met**. Verified
  by the scoped content-lint run above (zero output) and direct front-matter read.
- Names the founder decision in the first two sentences -> **met**. Quoted from the body (not the
  TL;DR): "If you're fundraising right now, the question isn't 'does cold outreach ever work.' It's
  where your next ten hours of outreach effort go: writing and sending cold emails to VC associates,
  or working the relationships that could produce a warm introduction instead. That's a real
  trade-off, because both take real time, and you can't fully do both well at once."
- Zero retired terms and zero em dashes vs. baseline -> **met**. `terminology.mjs`/`emdash.mjs` both
  exit 0 with zero output repo-wide (post-edit), and a direct grep of the file confirms no matches.
- Every outreach/response claim phrased as observation, no invented statistics or VC quotes ->
  **met**. Claim inventory:
  - "some VCs genuinely read cold inbound, at some rate, especially at the earliest stages" ->
    observation, no stat claimed.
  - "a deck that arrives via someone the VC already trusts gets read differently... next to fifty
    others" -> observation about inbox dynamics, no invented percentage; "fifty" is illustrative
    phrasing of volume, not a cited statistic.
  - "one warm intro from someone who has sent that VC a good deal before is worth more than ten
    intros from people the VC doesn't know either" -> observation/comparative reasoning, no source
    data cited as fact, no specific numeric claim about response or conversion rates.
  - No VC is quoted, named, or attributed a statement anywhere in the piece.
  - No response-rate, conversion-rate, or funding-outcome statistic appears anywhere in the piece.
- Exactly one primary CTA, routed to `https://www.foundernexus.com/registration` -> **met**. Single
  `<a href>` in the body (softcta block), matching `primary_cta` front-matter; verified via grep
  (one `href=` occurrence, one additional plain-text mention of the URL in front-matter `route:`,
  which is metadata not a second CTA).
- 800-1400 words -> **met**. 843 words (front-matter and HTML tags excluded from count).

DOCS UPDATED: `CHANGELOG.md` (new entry, task-002-scoped only, no mention of sibling tasks
003/004/005), `HANDOVER.md` (new dated block), `.claude/orchestration/_task-registry.md` (002 row
only).

RESIDUAL RISK: This piece was drafted in parallel with three sibling tasks (003/004/005) in the same
`vc-fast-pass-signal` cluster, same working directory, no worktree isolation; CHANGELOG.md and
HANDOVER.md received concurrent interleaved edits from sibling builders, so line numbers in those
files shifted during this session, but each entry's own content is intact and correctly scoped. No
Court/legal sign-off gate applies (no named competitor or network in this piece). The CTA route
(`/registration`) is confirmed live per prior session history, but the human dual-pass voice review
and QA verdict are still outstanding before this can move toward publish.

FOLLOW-UPS: None required by this task's Definition of Done. Once QA passes and, if desired, the
other three `vc-fast-pass-signal` keywords land clean, the cluster would go from one unwritten
keyword to all four drafted, worth noting in `substrate/keywords.yaml`'s cluster status (orchestrator
task, scope-fenced away from this builder).

## QA verdict (orchestrator records from the QA agent's return)

VERDICT: pass

CRITERIA: all DoD criteria independently reproduced and confirmed pass. One minor note: `primary_cta`
front-matter format (label + separate `route`) differs from 2 of the 3 sibling drafts at QA time
(cosmetic, not a DoD failure) — normalized across all 4 at publish time.

DEFECTS: none blocking.

OVERLAP: QA flagged meaningful thematic overlap with 003/004 (all three independently derive the
"credibility transfer" mechanism), but judged this piece's resource-allocation framing ("where do
your next ten hours go") as the most differentiated of the three. Addressed by sharpening 004's
angle post-QA; this piece needed no changes.

RECOMMENDATION: ship. Published to `content/blog/warm-intro-vs-cold-outreach.md`, keywords.yaml
updated to `published`, atomized to social/queue/.
