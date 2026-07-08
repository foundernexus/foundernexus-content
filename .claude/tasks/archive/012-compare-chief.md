# 012 — Draft: FounderNexus vs Chief

- **ID:** 012
- **Title:** Draft: FounderNexus vs Chief
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-08
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `peer-advisory-alternatives`, keyword "FounderNexus vs Chief"

## Objective

Draft an honest comparison between FounderNexus and Chief. Chief is a private membership network built
for senior executive women (VPs, C-suite, senior leaders), centered on executive peer core groups and
a broad professional community. Make the genuine, fair case for who Chief fits (senior women executives
across functions and industries, not only founders, executive leadership community), then where
FounderNexus differs (venture-scale founders specifically, stage-matched rooms, the live decision).
Respectful and accurate; the reader self-selects. Note honestly that these serve substantially
different audiences (executive leaders broadly vs venture founders), which is itself the main point.

## Orient first

- `CLAUDE.md`, `substrate/content-standards.md` (§6), `substrate/campaign-lanes.md`,
  `substrate/routing-rules.md`, `substrate/comparison-page-playbook.md`
- Voice/structure: `content/blog/founder-nexus-vs-hampton.md` (its "genuinely close but different
  focus" framing is the closest analog) and `content/blog/founder-nexus-vs-eo.md`.

## Scope fence (do NOT touch)

- `substrate/**`

## Definition of done (evidence-forcing)

- [ ] `content/drafts/compare-chief.md` front-matter: `lane: linkedin-assisted-demand`,
      `cluster: peer-advisory-alternatives`, `asset_type: comparison_page`, single `primary_cta`,
      `status: held_review`, and a `review_flag` noting it names Chief and needs Court+legal sign-off;
      `content-lint` clean.
- [ ] Names the reader's decision in the first two body sentences / TL;DR (quote in Result).
- [ ] Zero retired terms, zero em dashes.
- [ ] Every claim about Chief is factual, neutral, general where unsure — no invented membership
      numbers, no fabricated quotes.
- [ ] One primary CTA: `primary_cta: "Talk with a Nexus Partner"` + `route:
  "https://cal.com/karink/nexus-partner-intro-call"`.
- [ ] Includes the `table.cmp` side-by-side and the `.credibility` line.
- [ ] Word count comparable to `founder-nexus-vs-hampton.md`.

## Self-verify

- `node .claude/hooks/scripts/checks/{contract,terminology,emdash}.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/compare-chief.md`
- `node .claude/hooks/scripts/checks/named-entity.mjs content/drafts/compare-chief.md`

## Notes

Standard tier but NAMES A COMPETITOR -> `held_review`, sign-off gate. Do NOT self-publish. NOTE:
"Chief" is a common English word — confirm `named-entity.mjs` behavior; if it does not flag "Chief"
(it may not be in the NETWORKS list, or may over/under-match), say so in Result. Either way this piece
is held_review because it compares against a named organization; the front-matter `review_flag` is the
authoritative gate, not the advisory check.

## Result (builder fills)

**STATUS:** done

**FILES TOUCHED:** `content/drafts/compare-chief.md` — new comparison-page draft, FounderNexus vs Chief.

**SUMMARY:** Drafted an honest FounderNexus vs Chief comparison matching the structure of `founder-nexus-vs-hampton.md` / `founder-nexus-vs-eo.md` (fair `callout fair`, differentiated `ul.clean`, `table.cmp`, `p.credibility`, how-to-decide, `softcta`). The spine is the honest main point: Chief serves senior executive women broadly, FounderNexus serves venture-scale founders specifically, so they serve substantially different audiences. All claims about Chief are factual, neutral, and general where unsure, with no invented membership numbers or fabricated quotes. Front-matter carries `status: held_review` plus a `review_flag` gating it for Court + legal sign-off; not self-published.

**SELF-VERIFY:**

- `contract.mjs` -> exit 0, clean
- `terminology.mjs` -> exit 0, clean (also manual grep for Tier N / Chapter / Chapter chair / Event -> none)
- `emdash.mjs` -> exit 0, clean (manual grep for em dash -> 0)
- `content-lint.mjs content/drafts/compare-chief.md` -> exit 0, no output
- `named-entity.mjs content/drafts/compare-chief.md` -> exit 0, NO output. "Chief" is not in the script's NETWORKS list, so the advisory check does not flag it. The front-matter `review_flag` + `status: held_review` are the authoritative gate regardless.

**CRITERIA:**

- Front-matter `lane: linkedin-assisted-demand`, `cluster: peer-advisory-alternatives`, `asset_type: comparison_page`, single `primary_cta`, `status: held_review`, `review_flag` naming Chief + Court/legal sign-off -> met. content-lint clean (exit 0).
- Names the reader's decision in first two body sentences / TL;DR -> met. TL;DR: "the decision here is not which network is better, it is which room matches who you are and what you are carrying right now."
- Zero retired terms, zero em dashes -> met (grep: 0 em dashes, no retired terms).
- Every claim about Chief factual/neutral/general where unsure, no invented numbers or quotes -> met (uses "generally known", "generally described", no membership figures, no quotes).
- One primary CTA `"Talk with a Nexus Partner"` + route `https://cal.com/karink/nexus-partner-intro-call` -> met (single CTA, softcta only).
- Includes `table.cmp` side-by-side and `.credibility` line -> met.
- Word count comparable to hampton (805 body) -> met. Draft is 987 words incl. front-matter; body prose is comparable.

**DOCS UPDATED:** none (scope-fenced; no CHANGELOG/HANDOVER/registry touched).

**RESIDUAL RISK:** Piece names a specific organization (Chief) and MUST clear Court + legal sign-off before publishing. Claims about Chief are kept general and neutral by design; a reviewer should still confirm accuracy against Chief's current public description. `named-entity.mjs` does not auto-flag "Chief" (common English word, absent from NETWORKS list), so the `review_flag` front-matter is the only automated gate marker.

**FOLLOW-UPS:** Consider adding "Chief" to the `named-entity.mjs` NETWORKS list so future drafts naming it are auto-flagged (out of scope here; `substrate/**` and hook edits are fenced).

## QA verdict (orchestrator records)

VERDICT: pass (ship-to-signoff). Factual audit web-corroborated all claims about Chief as accurate/general (no membership counts, no pricing, no quotes); frames the different-audiences point respectfully. status: held_review intact, in content/drafts/. GAP: named-entity.mjs does NOT catch 'Chief' (not in NETWORKS list), so the front-matter review_flag is the sole automated gate. RECOMMENDATION: hand to Court + legal; do NOT auto-publish. Follow-up: add 'Chief' to named-entity.mjs NETWORKS.
