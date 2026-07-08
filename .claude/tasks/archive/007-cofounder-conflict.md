# 007 — Draft: co-founder conflict and when to split

- **ID:** 007
- **Title:** Draft: co-founder conflict and when to split
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-08
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `stage-decision-guides`, keyword "co-founder conflict and when to split"

## Objective

Draft a decision-guide article helping a founder distinguish normal co-founder friction from the kind
that means the partnership is actually over. Name the decision: is this a fixable communication or
role problem, or a fundamental misalignment on where the company is going.

## Orient first

- `CLAUDE.md`, `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§4), `substrate/routing-rules.md`
- Voice/structure: `content/blog/board-dynamics-after-series-b.md`, `content/blog/first-senior-hire-seed.md`.
- Sensitivity note: this topic touches personal/relationship distress. Keep it clear-eyed and useful,
  not clinical and not dramatized. No invented anecdotes about real people.

## Scope fence (do NOT touch)

- `substrate/**`

## Definition of done (evidence-forcing)

- [ ] `content/drafts/cofounder-conflict.md` front-matter: `lane: linkedin-assisted-demand`,
      `cluster: stage-decision-guides`, `asset_type: article`, single `primary_cta`, `status: drafted`;
      `content-lint` clean.
- [ ] Names the founder decision in the first two body sentences (quote in Result).
- [ ] Zero retired terms, zero em dashes.
- [ ] Every claim observational, no invented statistics or fabricated founder stories.
- [ ] One primary CTA: `primary_cta: "Talk with a Nexus Partner"` + `route:
  "https://cal.com/karink/nexus-partner-intro-call"`.
- [ ] 800-1400 words.
- [ ] At least one `<div class="pull">` and one `<div class="checkbox">` block.

## Self-verify

- `node .claude/hooks/scripts/checks/{contract,terminology,emdash}.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/cofounder-conflict.md`

## Notes

Standard tier. No named competitor. Handle the human weight of the topic with restraint per
content-standards voice rules.

## Result (builder fills)

STATUS: done

FILES TOUCHED:

- `content/drafts/cofounder-conflict.md` — new decision-guide draft (created)
- `.claude/tasks/007-cofounder-conflict.md` — Status set to in-review, Result filled

SUMMARY: Drafted the co-founder conflict decision guide. It names the founder decision up front: whether the conflict is fixable friction (roles, communication, expectations) or a fundamental disagreement about where the company is going. Three decisions structure it (roles vs. direction, trust damaged vs. gone, tried vs. endured), plus a "what to do with the answer" close. Voice matches the board-dynamics and first-senior-hire templates. Human weight handled with restraint, no invented anecdotes, no clinical framing.

SELF-VERIFY:

- `node .claude/hooks/scripts/checks/contract.mjs` -> exit 0, clean
- `node .claude/hooks/scripts/checks/terminology.mjs` -> exit 0, empty (no retired terms)
- `node .claude/hooks/scripts/checks/emdash.mjs` -> exit 0, empty (no em/en dashes)
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/cofounder-conflict.md` -> exit 0, clean

CRITERIA:

- Front-matter (lane: linkedin-assisted-demand, cluster: stage-decision-guides, asset_type: article, single primary_cta, status: drafted), content-lint clean -> met (content-lint exit 0; also added target_keyword required by lint).
- Names decision in first two body sentences -> met. Quote: "the decision in front of you is not whether you and your co-founder are fighting. It's whether this is a fixable problem with roles, communication, or expectations, or a fundamental disagreement about where the company is going."
- Zero retired terms, zero em dashes -> met (terminology + emdash empty; literal grep for dash chars returned none).
- Every claim observational, no invented statistics or fabricated founder stories -> met (no stats, no named people, no anecdotes).
- One primary CTA "Talk with a Nexus Partner" + route cal.com/karink/nexus-partner-intro-call -> met (front-matter primary_cta + route; single in-body CTA link to same URL).
- 800-1400 words -> met (1210 body words).
- > =1 pull and >=1 checkbox block -> met (2 pull, 1 checkbox).

DOCS UPDATED: none (no doc changes required by brief).

RESIDUAL RISK: none. primary_cta uses the brief-specified label "Talk with a Nexus Partner" and cal.com route, which diverges from the generic routing-rules.md lane table (Newsletter signup); the brief's DoD is authoritative and explicitly names this CTA, matching the two existing published blog examples.

FOLLOW-UPS: none.

## QA verdict (orchestrator records)

VERDICT: fail -> fixed -> ship. QA found the decision landed in body sentence 3, not the first two (only in TL;DR). Fixed: hoisted the 'fixable inside the partnership vs a disagreement about the partnership itself' clause into the first two body sentences. Sensitive-topic restraint, no invented stories, one CTA (in-body 'Talk it through with a Nexus Partner' matches the published stage-guide cluster convention). RECOMMENDATION: ship. Published + atomized.
