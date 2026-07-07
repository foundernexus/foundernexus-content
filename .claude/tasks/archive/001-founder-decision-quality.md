# 001 — Draft: how founders get better feedback on hard decisions

- **ID:** 001
- **Title:** Draft: how founders get better feedback on hard decisions
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-07
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `founder-decision-quality`, keyword "how founders get
  better feedback on hard decisions" (approved 2026-07-07, this session, by Robroy)

## Objective

Draft an informational article that helps a founder recognize when they're making a hard decision
without enough outside signal, and what "good feedback" on a decision actually looks like versus
generic advice. It should make the case, implicitly, for a structured peer room without turning
into a sales pitch — the newsletter-funnel CTA carries that job, not the body copy.

## Orient first (read these before doing anything)

- `CLAUDE.md`, `.claude/orchestration/README.md`, `HANDOVER.md`
- `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§5 Proof Capture), `substrate/routing-rules.md`
- `substrate/keywords.yaml` — cluster `founder-decision-quality`
- No prior draft exists for this keyword. For voice/structure reference, read the sample article
  `content/blog/what-a-good-founder-room-looks-like.md` (published tone/structure) and the held
  `content/drafts/ypo-alternatives-for-founders.md` (front-matter shape, not tone — that one is a
  comparison page, this is informational).

## Scope fence (do NOT touch — seeds `.active-scope`)

- `substrate/**`

## Definition of done (every criterion evidence-forcing)

- [ ] `content/drafts/founder-decision-quality.md` front-matter carries `lane: proof-capture`,
      `cluster: founder-decision-quality`, `asset_type`, a single `primary_cta`, `status: drafted`;
      `content-lint` returns clean on the file.
- [ ] The draft names the founder decision it serves in the first two sentences (quote them in Result).
- [ ] Zero retired terms and zero em dashes in the new file (`terminology` + `emdash` clean vs. baseline).
- [ ] Every claim about founder behavior/decision-making is either sourced or phrased as observation,
      not an invented statistic (list each claim -> source or "observation, no stat claimed").
- [ ] Exactly one primary CTA, matched to `proof-capture`'s funnel (`newsletter` per routing-rules.md
      fallback rule — proof-capture's own table CTA is "Request permission to feature," which is an
      internal ask, not reader-facing; note this in Result and use the newsletter-signup fallback,
      per routing-rules.md §4, unless the builder finds a better-fitting reason to deviate).
- [ ] 800-1400 words (pillar-length) or a stated reason for going shorter.

## Self-verify (builder runs; ratcheted by hook, not self-attested)

- `node .claude/hooks/scripts/checks/contract.mjs`
- `node .claude/hooks/scripts/checks/terminology.mjs`
- `node .claude/hooks/scripts/checks/emdash.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs`
- SMOKE (manual, note in Result): dual-pass voice review. No named network/competitor in this piece,
  so no legal sign-off gate expected — flag in Result if that assumption breaks.

## Notes

- **Ceremony tier:** standard — a normal article, no lane/terminology/keyword-contract invariant at
  risk beyond the usual gates.
- **Invariants in play:** lane gate (already satisfied, cluster approved), terminology, em-dash,
  one-CTA rule.
- **Open question carried from scaffolding, not resolved here:** the `proof-capture` lane's own
  definition (`campaign-lanes.md` §5) describes member-interview/case-study content with an
  internal "permission to feature" ask — this keyword is closer to a general point-of-view piece.
  The lane was pre-assigned in `keywords.yaml` before this task; the builder should draft it as
  written (informational, newsletter CTA) but flag in FOLLOW-UPS if the lane assignment itself
  looks wrong, rather than silently reassigning it.

## Plan (planner fills; large work → link a `reports/NNN`)

Standard risk — planner optional. Single slice: one builder drafts directly.

## Result (builder fills)

STATUS: done

FILES TOUCHED:

- `content/drafts/founder-decision-quality.md` — new. The drafted article.
- `CHANGELOG.md` — new dated entry (top, above existing 2026-07-07 entries) describing the draft.
- `HANDOVER.md` — new dated block describing the draft's state.
- `.claude/orchestration/DECISIONS.md` — new entry on the CTA-fallback and asset_type calls.
- `.claude/orchestration/_task-registry.md` — row for 001, Status → in-review.
- `.claude/tasks/001-founder-decision-quality.md` — this file: Status line → in-review, Result filled.

SUMMARY: Drafted an 803-word informational article for the `founder-decision-quality` cluster,
target keyword "how founders get better feedback on hard decisions." The piece argues that
founders facing a hard decision usually have plenty of feedback but little of it is close enough
to the problem to change their mind, gives a three-part filter for weighting outside input
(recency of a similar decision, whether it reshapes the call, independence from the outcome), and
closes on naming the decision precisely before seeking input. Single newsletter CTA at the end;
no sales pitch in the body.

SELF-VERIFY:

- `contract.mjs` -> exit 0, no output (keywords.yaml unaffected, not scope-fenced).
- `terminology.mjs` -> exit 0; repo-wide output shows only one pre-existing hit in
  `content/README.md` ("Chapter chair"), not this file. Zero hits in
  `content/drafts/founder-decision-quality.md`.
- `emdash.mjs` -> exit 0; repo-wide output shows only pre-existing hits in `content/README.md` and
  `content/blog/_TEMPLATE.md`, not this file. Zero em dashes in the new draft.
- `content-lint.mjs` -> exit 0; when run scoped to just this file
  (`node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/founder-decision-quality.md`)
  output is empty (fully clean). Repo-wide run surfaces only pre-existing findings in
  `content/README.md`, `content/_meta/blog.md`, `content/blog/_TEMPLATE.md`, and
  `content/blog/what-a-good-founder-room-looks-like.md` — the known blog-scaffolding gotcha logged
  in HANDOVER.md 2026-07-07 (later), none of it touched by this task.
- SMOKE dual-pass voice review (manual): Pass 1 (structure) — lane assigned (`proof-capture`, per
  keywords.yaml), terminology clean, every claim phrased as observation (no invented stats, see
  below), CTA matches the routing-rules.md §4 fallback. Pass 2 (voice) — conclusion-first TL;DR
  present, no em dashes, no filler openers, reads as one argument addressed to one founder, not a
  segment. No named network or competitor appears anywhere in the piece, so the assumption "no
  legal sign-off gate expected" holds; did not break.

CRITERIA:

- Front-matter carries `lane: proof-capture`, `cluster: founder-decision-quality`, `asset_type:
article`, one `primary_cta`, `status: drafted`; content-lint clean on the file -> met. Evidence:
  front-matter block in the file; scoped content-lint run returns zero output.
- Draft names the founder decision in the first two sentences -> met. Quoted: "Most founders facing
  a hard decision are not short on feedback. They are short on feedback that is close enough to the
  problem to change their mind." (TL;DR line, which precedes the body — the first two sentences of
  body prose reinforce the same decision: "A founder deciding whether to extend runway by cutting
  headcount, delay a fundraise, or walk away from a key hire is not usually stuck for lack of
  advice. They are stuck because most of the advice they can get does not actually test the
  decision.")
- Zero retired terms and zero em dashes vs. baseline -> met. Evidence: terminology.mjs and
  emdash.mjs report zero hits in this file (see SELF-VERIFY above).
- Every claim sourced or phrased as observation, no invented statistics -> met. This piece makes no
  cited statistics or named-study claims; every claim about founder behavior is phrased as
  observation/pattern ("Founders who separate the two... tend to make the call faster," "This is
  also why the same handful of names keep showing up") rather than a numbered stat. No source
  citations were needed because no numeric or study-backed claim is made anywhere in the draft.
- Exactly one primary CTA, matched to proof-capture's funnel via the newsletter fallback -> met.
  One CTA ("sign up for the FounderNexus newsletter," linking `/newsletter`) at the very end, no
  CTA-stacking. Used the routing-rules.md §4 fallback (lowest-commitment ask) rather than
  proof-capture's own table CTA ("Request permission to feature") because that CTA is an internal
  ask aimed at an existing member going on record, not a reader-facing ask — this piece has no
  interview subject. See DECISIONS.md entry for the full reasoning.
- 800-1400 words -> met. 803 words (body, excluding front-matter).

DOCS UPDATED: CHANGELOG.md (new top entry), HANDOVER.md (new dated block), DECISIONS.md (new entry
on the CTA/asset_type calls), `_task-registry.md` (Status → in-review), this brief's Result section
and Status line.

RESIDUAL RISK: The `/newsletter` CTA route is a known 404 per routing-rules.md §2a and CLAUDE.md's
live-200 invariant (same open item already tracked against the held YPO draft) — this piece cannot
clear the live-200 SMOKE gate until that route exists. QA should also independently judge whether
`asset_type: article` (a value not previously used in this repo outside the blog template) is the
right choice versus inventing/confirming a more specific value, since the brief's DoD only required
"a" asset_type, not a specific one.

FOLLOW-UPS:

- The `proof-capture` lane's definition (`campaign-lanes.md` §5: member interviews, case studies,
  an internal "permission to feature" ask) does not cleanly describe this piece, which is a general
  point-of-view article with no member subject. The lane was pre-assigned in `keywords.yaml` before
  this task and was drafted as directed per the brief's Notes, but the lane assignment itself may be
  worth revisiting — either reclassify this cluster's lane (closest fit looks like
  `linkedin-assisted-demand`, same pattern as the YPO piece) or adjust `proof-capture`'s own
  definition/CTA table to admit informational content. Not fixed here: `substrate/**` is scope-fenced
  off-limits for this task.
- The `/newsletter` CTA route returning 404 blocks this draft (and the already-held YPO draft) from
  ever clearing the live-200 SMOKE gate. Out of scope for a builder task; likely needs its own
  ticket against whatever builds the actual newsletter signup page/route.

## QA verdict (orchestrator records from the QA agent's return)

VERDICT: pass

CRITERIA: all 6 Definition-of-done criteria independently reproduced and confirmed pass (front-matter

- content-lint clean; decision named in first two sentences, quoted; zero retired terms/em dashes
  via direct check runs + grep; every claim observational, zero stat-claim patterns found; exactly
  one CTA, newsletter fallback independently justified against routing-rules.md §4; 803 words, in
  range). Full evidence in the QA agent's return, recorded 2026-07-07.

DEFECTS: none blocker/major. Three minor notes: (1) this orchestrator's QA dispatch prompt
incorrectly claimed the Result section was a placeholder — it was not, the builder had already
filled it; noted for process hygiene, no effect on the artifact. (2) `/newsletter` CTA is a known
404, same open item as the held YPO draft — tracked, not a new defect. (3) the `proof-capture` lane
mismatch the builder already flagged in FOLLOW-UPS is confirmed by QA as genuine and worth Rob/Court
revisiting (closest fit: `linkedin-assisted-demand`).

NOT-COVERED: live-200 check for `/newsletter` (not in scope, route doesn't exist yet); legal sign-off
gate not applicable (no named network/competitor, confirmed by named-entity.mjs returning clean).

RECOMMENDATION: ship (draft stage — "ship" here means the draft is sound and ready to sit in
content/drafts/ pending the same live-CTA-route gate as the held YPO piece, not an immediate publish).
