# 011 — Draft: FounderNexus vs Vistage

- **ID:** 011
- **Title:** Draft: FounderNexus vs Vistage
- **Risk:** standard
- **Status:** blocked
- **Created:** 2026-07-08
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `peer-advisory-alternatives`, keyword "FounderNexus vs Vistage"

## Objective

Draft an honest comparison between FounderNexus and Vistage. Vistage is a large, established CEO/
executive peer-advisory and coaching organization spanning many industries. Make the genuine, fair
case for who Vistage fits (broad executive peer groups, one-on-one coaching, long-tenure structure),
then where FounderNexus is deliberately different (venture-scale founders only, organized by stage,
convened around the live decision). Do NOT attack Vistage; the reader should be able to self-select.

## Orient first

- `CLAUDE.md`, `substrate/content-standards.md` (§6 named-competitor rules), `substrate/campaign-lanes.md`,
  `substrate/routing-rules.md`, `substrate/comparison-page-playbook.md`
- Voice/structure: `content/blog/founder-nexus-vs-eo.md` — match its exact shape (fair case with a
  `.callout.fair`, differentiated case with `ul.clean`, a `table.cmp` side-by-side, a `.credibility`
  line naming Court Lorenzini / DocuSign, a how-to-decide close, a `.softcta` block).

## Scope fence (do NOT touch)

- `substrate/**`

## Definition of done (evidence-forcing)

- [ ] `content/drafts/compare-vistage.md` front-matter: `lane: linkedin-assisted-demand`,
      `cluster: peer-advisory-alternatives`, `asset_type: comparison_page`, single `primary_cta`,
      `status: held_review`, and a `review_flag` noting it names Vistage and needs Court+legal sign-off
      before publishing (mirror `content/drafts/`-era `compare-eo.md` front-matter, which is now at
      `content/blog/founder-nexus-vs-eo.md`); `content-lint` clean.
- [ ] Names the reader's decision in the first two body sentences / TL;DR (quote in Result).
- [ ] Zero retired terms, zero em dashes.
- [ ] Every claim about Vistage is factual, neutral, and sourced-or-general — no invented membership
      numbers, no fabricated quotes. When unsure of a Vistage specific, describe it in general terms.
- [ ] One primary CTA: `primary_cta: "Talk with a Nexus Partner"` + `route:
  "https://cal.com/karink/nexus-partner-intro-call"`.
- [ ] Includes the `table.cmp` side-by-side and the `.credibility` line, like the EO/Hampton pieces.
- [ ] Word count in a comparable range to `founder-nexus-vs-eo.md`.

## Self-verify

- `node .claude/hooks/scripts/checks/{contract,terminology,emdash}.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/compare-vistage.md`
- `node .claude/hooks/scripts/checks/named-entity.mjs content/drafts/compare-vistage.md` (expect it to
  flag Vistage with the held-review marker — that is correct, not a failure)

## Notes

Standard tier but NAMES A COMPETITOR -> `held_review`, Court+legal sign-off gate per content-standards
§6 and comparison-page-playbook. Do NOT self-publish. `Vistage` is already in `named-entity.mjs`'s
NETWORKS list.

## Result (builder fills)

**STATUS:** done

**FILES TOUCHED:**

- `content/drafts/compare-vistage.md` — new comparison-page draft (created)
- `.claude/tasks/011-compare-vistage.md` — Status set to in-review, Result filled (this file)

**SUMMARY:** Drafted an honest FounderNexus vs Vistage comparison matching the exact structure of `founder-nexus-vs-eo.md`: TL;DR naming the reader's decision, a `.callout.fair` making the genuine case for Vistage, a `ul.clean` differentiated case, a `table.cmp` side-by-side, a `.credibility` line naming Court Lorenzini / DocuSign, a how-to-decide close, and a `.softcta`. Every Vistage claim is factual, neutral, and stated in general terms (established peer-group model, one-on-one coaching, cross-industry breadth, long-tenure structure), with no invented membership numbers or fabricated quotes. Front-matter carries `status: held_review` and a `review_flag` requiring Court + legal sign-off; the piece stays in `content/drafts/` and is not self-published.

**SELF-VERIFY:**

- `contract.mjs` -> exit 0, clean
- `terminology.mjs` -> exit 0, clean (zero retired terms)
- `emdash.mjs` -> exit 0, clean (zero em dashes)
- `content-lint.mjs content/drafts/compare-vistage.md` -> exit 0, no output (all required front-matter present, lane valid, TL;DR present)
- `named-entity.mjs content/drafts/compare-vistage.md` -> exit 0, flags "names Vistage (has a sign-off/held-review marker — CONFIRM Court + legal actually signed before publishing)" — expected and correct

**CRITERIA:**

- Front-matter (lane linkedin-assisted-demand, cluster peer-advisory-alternatives, asset_type comparison_page, single primary_cta, status held_review, review_flag) + content-lint clean -> met (content-lint exit 0)
- Names reader's decision in first two sentences / TL;DR -> met ("the decision here is which room you want in your corner, a broad executive peer group and coach for the long haul, or a stage-matched founder room convened around the specific call you're carrying")
- Zero retired terms, zero em dashes -> met (terminology + emdash exit 0; grep for em dash returns 0)
- Every Vistage claim factual, neutral, sourced-or-general, no invented numbers or quotes -> met (all claims stated in general terms; no figures, no quotes)
- One primary CTA "Talk with a Nexus Partner" + cal.com route -> met
- Includes table.cmp side-by-side and .credibility line -> met
- Word count comparable to EO piece -> met (688 body words vs EO 599)

**DOCS UPDATED:** none

**RESIDUAL RISK:** Held-review gate is intentional. Vistage specifics (coaching cadence, group size) are deliberately described in general terms; a human reviewer with Vistage knowledge could tighten wording. No live-route check performed on the cal.com link (out of scope for a held draft).

**FOLLOW-UPS:** Court + legal sign-off required before this moves out of `content/drafts/`. Confirm the cal.com route returns 200 before any publish.

## QA verdict (orchestrator records)

VERDICT: pass (ship-to-signoff). Adversarial factual audit web-corroborated every claim about Vistage as accurate and safely general (no membership numbers, no quotes, no disparagement). Structure matches EO/Hampton template; named-entity correctly flags Vistage WITH the held-review marker. status: held_review intact, remains in content/drafts/. RECOMMENDATION: hand to Court + legal; do NOT auto-publish.
