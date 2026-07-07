# 001 — Draft: how founders get better feedback on hard decisions

- **ID:** 001
- **Title:** Draft: how founders get better feedback on hard decisions
- **Risk:** standard
- **Status:** ready
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

<STATUS / FILES TOUCHED / SUMMARY / SELF-VERIFY / CRITERIA / DOCS UPDATED / RESIDUAL RISK / FOLLOW-UPS>

## QA verdict (orchestrator records from the QA agent's return)

<VERDICT / CRITERIA / DEFECTS / NOT-COVERED / RECOMMENDATION>
