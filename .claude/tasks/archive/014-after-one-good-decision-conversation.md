# 014 — Draft: what changes after one good decision conversation

- **ID:** 014
- **Title:** Draft: what changes after one good decision conversation
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-08
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `peer-room-in-practice`, keyword "what changes after one good decision conversation"

## Objective

Draft an informational, newsletter-funnel piece on the downstream effect of a single high-quality
conversation about a hard decision: what actually changes in how a founder acts afterward. Name the
decision it helps: a founder weighing whether it is worth the effort to find one genuinely useful
conversation before a big call, versus deciding alone. Go deeper on the AFTER (the changed decision,
the avoided mistake, the compounding trust) rather than re-running `founder-decision-quality.md`'s
argument about how to weight input — that piece owns the "how to get good feedback" territory; this
one owns "what one good conversation is worth."

## Orient first

- `CLAUDE.md`, `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§4), `substrate/routing-rules.md`
- Read `content/blog/founder-decision-quality.md` to stay differentiated from it. Read sibling 013
  (`content/drafts/how-founders-use-a-peer-room.md`) if landed, to avoid overlap.

## Scope fence (do NOT touch)

- `substrate/**`

## Definition of done (evidence-forcing)

- [ ] `content/drafts/after-one-good-decision-conversation.md` front-matter: `lane: linkedin-assisted-demand`,
      `cluster: peer-room-in-practice`, `asset_type: article`, single `primary_cta`, `status: drafted`;
      `content-lint` clean.
- [ ] Names the decision in the first two body sentences (quote in Result).
- [ ] Zero retired terms, zero em dashes.
- [ ] Every claim observational, no invented statistics or fabricated stories.
- [ ] One primary CTA: `primary_cta: "Explore whether FounderNexus fits your stage"` + `route:
  "https://www.foundernexus.com/registration"`.
- [ ] 800-1400 words.
- [ ] Differentiated from `founder-decision-quality.md` and from sibling 013 — note how in Result.

## Self-verify

- `node .claude/hooks/scripts/checks/{contract,terminology,emdash}.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/after-one-good-decision-conversation.md`

## Notes

Standard tier. No named competitor. Same brochure-risk caution as 013 — concrete, not marketing.

## Result (builder fills)

**STATUS:** done

**FILES TOUCHED:** `content/drafts/after-one-good-decision-conversation.md` (new draft); this brief (Status + Result).

**SUMMARY:** Wrote an 1027-word informational, newsletter-funnel article on what one genuinely useful conversation before a hard call is worth, owning the "what one good conversation is worth" territory. The piece goes deep on the AFTER: the changed action, the invisible avoided mistake, and compounding trust across conversations. It names the decision in the first two body sentences (find one useful conversation before a big call vs decide alone) and closes with the single approved registration CTA. Concrete and observational throughout, no invented stats or fabricated stories.

**SELF-VERIFY:**

- `node .claude/hooks/scripts/checks/contract.mjs` -> exit 0, clean
- `node .claude/hooks/scripts/checks/terminology.mjs` -> exit 0, zero retired terms
- `node .claude/hooks/scripts/checks/emdash.mjs` -> exit 0, zero em dashes (0 literal em-dash chars in file)
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/after-one-good-decision-conversation.md` -> exit 0, clean

**CRITERIA:**

- Front-matter (`lane: linkedin-assisted-demand`, `cluster: peer-room-in-practice`, `asset_type: article`, single `primary_cta`, `status: drafted`, content-lint clean) -> met. Also included `target_keyword` (content-lint requires it).
- Names the decision in first two body sentences -> met. Sentence 1: "The decision this piece helps you make is narrow: is it worth the effort to find one genuinely useful conversation before a big call, or should you just decide alone and move on." Sentence 2 reinforces the default of deciding alone.
- Zero retired terms, zero em dashes -> met (both checks exit 0).
- Every claim observational, no invented statistics or fabricated stories -> met. Illustrative founder examples are framed as patterns ("A founder who was going to..."), no named people, no numbers presented as data.
- One primary CTA `Explore whether FounderNexus fits your stage` + `route: https://www.foundernexus.com/registration` -> met (front-matter + single in-body link).
- 800-1400 words -> met (1027 body words).
- Differentiated from `founder-decision-quality.md` and sibling 013 -> met. `founder-decision-quality.md` owns how to WEIGHT input / get good feedback (the three-property filter before you ask). This piece deliberately does not re-run that; it starts after the conversation and covers what changes downstream (action, invisible avoided mistake, compounding trust) and the go/no-go on whether one conversation is worth finding. Sibling 013 (`how-founders-use-a-peer-room.md`) has NOT landed in `content/drafts/`, so no overlap to reconcile; this piece is scoped to a single conversation's downstream value, not peer-room mechanics.

**DOCS UPDATED:** none (not requested; CHANGELOG/HANDOVER/registry untouched by scope).

**RESIDUAL RISK:** none material. Sibling 013 was not present at write time; if it lands, orchestrator should confirm no thematic collision on the compounding-trust point.

**FOLLOW-UPS:** Live-200 check on the registration route and dual-pass voice review are manual SMOKE steps outside builder scope.

## QA verdict (orchestrator records)

VERDICT: fail -> resolved-via-sibling -> ship. Same overlap defect as 013 from the other side; QA judged 014 the correct home for the after-effect/compounding-trust argument and cleaner on the brochure axis, so the fix was applied to 013, not here. 014 left as-is. Differentiated from founder-decision-quality.md (which owns how-to-weight-input). RECOMMENDATION: ship. Published (with inline image) + atomized.
