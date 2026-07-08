# 006 — Draft: when to raise a bridge round

- **ID:** 006
- **Title:** Draft: when to raise a bridge round
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-08
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `stage-decision-guides`, keyword "when to raise a bridge round"

## Objective

Draft a decision-guide article helping a founder decide whether a bridge round is the right move or a
sign of a deeper problem they are papering over. Name the real decision underneath: is the bridge
buying time to hit a specific, nameable milestone, or delaying a harder call about the business.

## Orient first

- `CLAUDE.md`, `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§4 LinkedIn-Assisted
  Demand), `substrate/routing-rules.md`
- For voice/structure: `content/blog/first-senior-hire-seed.md` and `content/blog/series-a-operating-layer.md`
  (decision-guide shape: named sub-decisions, a `.pull` quote or two, a `.checkbox` block near the end).

## Scope fence (do NOT touch)

- `substrate/**`

## Definition of done (evidence-forcing)

- [ ] `content/drafts/bridge-round-timing.md` front-matter: `lane: linkedin-assisted-demand`,
      `cluster: stage-decision-guides`, `asset_type: article`, single `primary_cta`, `status: drafted`;
      `content-lint` clean on the file.
- [ ] Names the founder decision in the first two body sentences (quote in Result).
- [ ] Zero retired terms, zero em dashes (terminology + emdash clean).
- [ ] Every claim phrased as observation, no invented statistics (no fabricated dilution/valuation numbers).
- [ ] Exactly one primary CTA. Use `primary_cta: "Talk with a Nexus Partner"` + `route:
"https://cal.com/karink/nexus-partner-intro-call"`, matching the other `stage-decision-guides` posts.
- [ ] 800-1400 words.
- [ ] Uses at least one `<div class="pull">` and one `<div class="checkbox">` block (visual break,
      matching the sibling decision guides).

## Self-verify

- `node .claude/hooks/scripts/checks/{contract,terminology,emdash}.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/bridge-round-timing.md`

## Notes

Standard tier. No named competitor. Invariants: terminology, em-dash, one-CTA, no invented stats.

## Result (builder fills)

**STATUS:** done

**FILES TOUCHED:** `content/drafts/bridge-round-timing.md` — new decision-guide draft.

**SUMMARY:** Drafted an 800-1400 word decision guide on when to raise a bridge round, framed around the real founder decision: is the bridge buying time to hit one specific, nameable milestone, or delaying a harder call about whether the business works. Three named sub-decisions (what the bridge buys, timing vs. business, cost beyond the money), plus the pattern-underneath close, matching the sibling guide shape. CEO-brief voice, conclusion-first TL;DR, single primary CTA to a Nexus Partner call. Every claim is observational; no dilution/valuation numbers or other statistics invented.

**SELF-VERIFY:**

- `node .claude/hooks/scripts/checks/contract.mjs` -> exit 0, empty output (clean)
- `node .claude/hooks/scripts/checks/terminology.mjs` -> exit 0, empty output (clean)
- `node .claude/hooks/scripts/checks/emdash.mjs` -> exit 0, empty output (clean); `grep -c "—"` = 0
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/bridge-round-timing.md` -> exit 0, empty output (clean)

**CRITERIA:**

- Front-matter `lane: linkedin-assisted-demand`, `cluster: stage-decision-guides`, `asset_type: article`, single `primary_cta`, `status: drafted` -> met (also includes `target_keyword`, which content-lint requires; content-lint clean).
- Names founder decision in first two body sentences -> met. First two body sentences: "The decision underneath 'should I raise a bridge' is not 'can I get the money.' It's whether the next six to nine months of runway change the story a real investor will fund, or just postpone the moment you have to face that the story hasn't changed. Naming which of those you're actually in is the entire job here."
- Zero retired terms, zero em dashes -> met (terminology + emdash clean; 0 em-dash chars).
- Every claim observational, no invented statistics -> met (no fabricated dilution/valuation/percentage figures; all framed as observation).
- Exactly one primary CTA `"Talk with a Nexus Partner"` + `route: "https://cal.com/karink/nexus-partner-intro-call"` -> met.
- 800-1400 words -> met (~990 body words).
- At least one `<div class="pull">` and one `<div class="checkbox">` -> met (3 pull, 1 checkbox).

**RESIDUAL RISK:** none identified. Voice/filler/"reads like AI" is a Pass-2 judgment call for QA; structural floor is clean.

**FOLLOW-UPS:** none.

## QA verdict (orchestrator records)

VERDICT: pass. All DoD criteria reproduced clean (content-lint, decision in first two body sentences, no invented stats, single cal.com CTA, pull+checkbox, ~982 words). No overlap with siblings. RECOMMENDATION: ship. Published to content/blog/, atomized to social/queue/.
