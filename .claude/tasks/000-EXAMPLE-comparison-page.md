# 000 — EXAMPLE: First comparison-page manual test (YPO alternatives)

> This is a **worked sample brief**, kept for reference. It mirrors the real held-review draft in the
> repo. Copy `../orchestration/TASK-BRIEF-TEMPLATE.md` (not this file) via `/new-task` for real work.

- **ID:** 000
- **Title:** First comparison-page manual test (YPO alternatives)
- **Risk:** standard
- **Status:** archived
- **Created:** 2026-07-07
- **Owner:** orchestrator
- **Origin:** `keywords.yaml` cluster `peer-advisory-alternatives`, keyword "YPO alternatives for founders"

## Objective

Draft the first manual comparison page so a founder evaluating peer networks can decide *which decision
environment fits their stage and current decision* — clarifying the FounderNexus worldview, not attacking a competitor.

## Orient first

- `CLAUDE.md`, `.claude/orchestration/README.md`, `HANDOVER.md`
- `substrate/content-standards.md`, `substrate/campaign-lanes.md`, `substrate/routing-rules.md`,
  `substrate/comparison-page-playbook.md`
- `substrate/keywords.yaml` → cluster `peer-advisory-alternatives`

## Scope fence (seeds `.active-scope`)

- `substrate/**`  <!-- do not edit the constitution while drafting -->

## Definition of done

- [x] `content/drafts/ypo-alternatives-for-founders.md` exists with complete front-matter; `content-lint` clean.
- [x] First two sentences name the founder decision (quote: "where do I take the decision I cannot afford
      to process alone?"). One core argument: the room should be organized around the decision.
- [x] Zero retired terms, zero em dashes (`terminology` + `emdash` clean).
- [x] Exactly one primary CTA — "Explore whether FounderNexus fits your stage" — matched to the
      `linkedin-assisted-demand` lane per `routing-rules.md` §2a; secondary paths are text links only.
- [x] No named-competitor attack; the piece routes by reader intent (playbook "Page job").
- [x] Front-matter `status: held_review` with a `review_flag` because the keyword names a network and
      CTA routes are unresolved (advisory `named-entity` + `links` surfaced this).

## Self-verify (ratcheted, not self-attested)

- `node .claude/hooks/scripts/checks/{contract,terminology,emdash,content-lint}.mjs` → all clean.
- SMOKE: CTA routes `/apply` `/nominate` `/newsletter` return 404 → **not** publishable as live links yet.

## Notes

- **Ceremony:** standard (single builder + QA). Invariants: retired terminology, lane gate, named-network
  sign-off, live-200 CTA.

## Plan

APPROACH: Lead with the decision standard, not the competitor. Explain access vs relevance; give the
three-test frame; route by reader intent with one primary CTA. Hold for sign-off — do not publish.
CRITICAL FILES: `content/drafts/ypo-alternatives-for-founders.md` (the draft); `comparison-page-playbook.md`
(structure + CTA model). SLICES: single slice. RISKS: named-network keyword (legal), dead CTA routes.
DRAFT ACCEPTANCE CRITERIA: see Definition of done. OPEN QUESTIONS: does the SEO title carry the network name?
(Court/legal.)

## Result

STATUS: done. FILES TOUCHED: `content/drafts/ypo-alternatives-for-founders.md` (new draft);
`social/queue/ypo-alternatives-for-founders-derivatives.md` (5 held-review derivatives);
`briefs/reviews/...` (dual-pass review). SUMMARY: Drafted a held-review comparison page + derivatives,
routed to founder-evaluation primary CTA. SELF-VERIFY: all checks clean; SMOKE routes 404 (held).
CRITERIA: all met. DOCS UPDATED: weekly readout. RESIDUAL RISK: named-network sign-off. FOLLOW-UPS: build
the founder-evaluation / nomination / relationship-reservoir destination pages.

## QA verdict

VERDICT: pass (as a *draft*; not clear to publish). CRITERIA: all pass with evidence. DEFECTS: none for the
draft; blocker for *publishing* — CTA routes 404 + named-network sign-off pending. NOT-COVERED: live-200
(routes don't exist). RECOMMENDATION: fix-then-ship — hold until routes live and Court/legal sign off.
