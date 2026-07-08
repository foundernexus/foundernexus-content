# 008 — Draft: pricing your first enterprise deal

- **ID:** 008
- **Title:** Draft: pricing your first enterprise deal
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-08
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `stage-decision-guides`, keyword "pricing your first enterprise deal"

## Objective

Draft a decision-guide article on how a founder should think about pricing their first real enterprise
deal, where the number they pick sets an anchor they will live with. Name the decision: are you
pricing to win this logo, or pricing to establish what the product is worth for every deal after it.

## Orient first

- `CLAUDE.md`, `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§4), `substrate/routing-rules.md`
- Voice/structure: `content/blog/founder-led-sales-limits.md`, `content/blog/series-a-operating-layer.md`.

## Scope fence (do NOT touch)

- `substrate/**`

## Definition of done (evidence-forcing)

- [ ] `content/drafts/first-enterprise-pricing.md` front-matter: `lane: linkedin-assisted-demand`,
      `cluster: stage-decision-guides`, `asset_type: article`, single `primary_cta`, `status: drafted`;
      `content-lint` clean.
- [ ] Names the founder decision in the first two body sentences (quote in Result).
- [ ] Zero retired terms, zero em dashes.
- [ ] Every claim observational, no invented pricing benchmarks or statistics.
- [ ] One primary CTA: `primary_cta: "Talk with a Nexus Partner"` + `route:
  "https://cal.com/karink/nexus-partner-intro-call"`.
- [ ] 800-1400 words.
- [ ] At least one `<div class="pull">` and one `<div class="checkbox">` block.

## Self-verify

- `node .claude/hooks/scripts/checks/{contract,terminology,emdash}.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/first-enterprise-pricing.md`

## Notes

Standard tier. No named competitor.

## Result (builder fills)

**STATUS:** done

**FILES TOUCHED:** `content/drafts/first-enterprise-pricing.md` — new decision-guide draft.

**SUMMARY:** Drafted an 1066-word decision guide on pricing a first enterprise deal. The
article names the founder decision in the first two body sentences: whether you're pricing
to win this one logo or pricing to set what the product is worth for every deal after it. It
frames the first price as an anchor, covers when each path is right, and how to protect the
anchor when discounting. CEO-brief voice, conclusion-first TL;DR, one CTA to a Nexus Partner,
one `<div class="pull">` (two used) and one `<div class="checkbox">` block. All claims are
observational with no invented pricing benchmarks or statistics.

**SELF-VERIFY:**

- `node .claude/hooks/scripts/checks/contract.mjs` -> exit 0, clean.
- `node .claude/hooks/scripts/checks/terminology.mjs` -> exit 0, clean (zero retired terms).
- `node .claude/hooks/scripts/checks/emdash.mjs` -> exit 0, clean (zero em dashes).
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/first-enterprise-pricing.md` -> exit 0, clean.

**CRITERIA:**

- Front-matter `lane: linkedin-assisted-demand`, `cluster: stage-decision-guides`,
  `asset_type: article`, single `primary_cta`, `status: drafted`, content-lint clean -> met.
- Names the founder decision in first two body sentences -> met. Quote: "The real question on
  your first enterprise deal is not 'what will they pay.' It's whether you're pricing to win
  this logo or pricing to set the worth of the product for every deal that follows."
- Zero retired terms, zero em dashes -> met (terminology + emdash exit 0).
- Every claim observational, no invented benchmarks/statistics -> met (no numbers or stats invented).
- One primary CTA `"Talk with a Nexus Partner"` + `route: "https://cal.com/karink/nexus-partner-intro-call"` -> met.
- 800-1400 words -> met (1066 body words).
- At least one `<div class="pull">` and one `<div class="checkbox">` -> met (two pull, one checkbox).

**DOCS UPDATED:** none required.

**RESIDUAL RISK:** none.

**FOLLOW-UPS:** none.

## QA verdict (orchestrator records)

VERDICT: pass. All DoD criteria clean; sharp operator voice, no invented benchmarks, single CTA, pull+checkbox, ~1059 words. RECOMMENDATION: ship. Published + atomized.
