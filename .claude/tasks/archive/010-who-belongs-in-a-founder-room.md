# 010 — Draft: how to know if a founder belongs in your room

- **ID:** 010
- **Title:** Draft: how to know if a founder belongs in your room
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-08
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `founder-nomination-flywheel` (lane: `founder-nomination`),
  keyword "how to know if a founder belongs in your room"

## Objective

Second Founder Nomination lane piece. Audience is a member evaluating a specific founder for a
specific room. Where 009 gives the general standard for a nomination, THIS piece is about fit: stage
match, whether they'd bring a real decision, and whether they'd protect the room's candor. Name the
decision: would this specific person make this specific room better, or just bigger. Do NOT re-run
009's general "what makes a nomination good" argument; go deeper on the fit assessment itself.

## Orient first

- `CLAUDE.md`, `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§2), `substrate/routing-rules.md`
- Read `content/drafts/what-makes-a-founder-worth-nominating.md` (sibling 009) if it has landed, to
  stay differentiated. Voice/structure: `content/blog/what-a-good-founder-room-looks-like.md`.

## Scope fence (do NOT touch)

- `substrate/**`

## Definition of done (evidence-forcing)

- [ ] `content/drafts/who-belongs-in-a-founder-room.md` front-matter: `lane: founder-nomination`,
      `cluster: founder-nomination-flywheel`, `asset_type: article`, single `primary_cta`, `status: drafted`;
      `content-lint` clean.
- [ ] Names the decision in the first two body sentences (quote in Result).
- [ ] Zero retired terms, zero em dashes.
- [ ] Every claim observational, no invented statistics.
- [ ] One primary CTA: `primary_cta: "Nominate a founder"` + `route:
  "https://cal.com/karink/nexus-partner-intro-call"` (same lane CTA-route decision as 009 — no
      live `/nominate` page; flag in FOLLOW-UPS).
- [ ] 800-1400 words.
- [ ] At least one `<div class="pull">` and one `<div class="checkbox">` block (a fit checklist fits here).
- [ ] Differentiated from 009 — note how in Result.

## Self-verify

- `node .claude/hooks/scripts/checks/{contract,terminology,emdash}.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/who-belongs-in-a-founder-room.md`

## Notes

Standard tier. Same lane as 009 — hold the peer-to-peer, earned-ask tone. No named competitor.

## Result (builder fills)

**STATUS:** done

**FILES TOUCHED:** `content/drafts/who-belongs-in-a-founder-room.md` — new draft article (the fit-assessment piece for the founder-nomination lane).

**SUMMARY:** Wrote the second founder-nomination lane piece, focused on evaluating a specific founder for a specific room rather than the general nomination standard (009's job). The article names the decision up front (make this room better or just bigger) and runs three fit tests: stage closeness (exchange runs both ways), whether they'd bring a live decision vs. a highlight reel, and whether they'd protect the room's candor. Peer-to-peer, earned-ask tone; one CTA; a fit checklist as the checkbox block.

**SELF-VERIFY:**

- `contract.mjs` -> clean (no output, exit 0)
- `terminology.mjs` -> clean (no output; zero retired terms in draft)
- `emdash.mjs` -> clean (no output; 0 em dash characters in draft)
- `content-lint.mjs content/drafts/who-belongs-in-a-founder-room.md` -> clean (no output)
- Word count (body): 1013 words (within 800-1400)

**CRITERIA:**

- Front-matter (`lane: founder-nomination`, `cluster: founder-nomination-flywheel`, `asset_type: article`, single `primary_cta`, `status: drafted`; content-lint clean) -> met. Note: brief-required `status: "drafted"` used; also included `target_keyword` (required by content-lint REQUIRED set).
- Names the decision in first two body sentences -> met. Quote: "When you think about nominating someone, the real question is not whether they're a good founder. It's whether this person makes this room better, or just bigger."
- Zero retired terms, zero em dashes -> met (grep: 0 em dash chars, 0 retired-term hits).
- Every claim observational, no invented statistics -> met (no numbers/stats; all claims are observational about room dynamics).
- One primary CTA `Nominate a founder` + route `https://cal.com/karink/nexus-partner-intro-call` -> met (single primary_cta; one in-body CTA link).
- 800-1400 words -> met (1013).
- At least one `<div class="pull">` and one `<div class="checkbox">` -> met (2 pull, 1 checkbox; checkbox is the fit checklist).
- Differentiated from 009 -> met. 009 (`what-makes-a-founder-worth-nominating.md`) had not landed at build time, so differentiation is by design per brief: this piece does not argue the general nomination standard. It assumes a founder is already worth nominating and answers a narrower question — fit for THIS room — via three concrete fit tests (stage-both-ways, live-decision, candor-protection) and a per-nomination checklist. Also distinct from the published `what-a-good-founder-room-looks-like.md`, which judges a room from a prospective member's side; this judges a candidate from a nominating member's side.

**DOCS UPDATED:** none (draft only; no doc changes in scope).

**RESIDUAL RISK:** 009 had not landed, so I could not skim it for phrasing overlap. Angle is structurally differentiated (fit assessment vs. general standard), but a QA cross-check against 009 once it lands is worth a glance for any incidental phrasing collision.

**FOLLOW-UPS:** No live `/nominate` page exists (routing-rules §2a: `/nominate` returns 404 on the live site). CTA routes to the cal.com Nexus Partner intro call per the lane CTA-route decision. Flag for whoever owns publish: swap to the real `/nominate` destination once it exists.

## QA verdict (orchestrator records)

VERDICT: pass. Differentiation from 009 confirmed by QA (009 owns the general nomination bar, 010 owns fit-of-a-specific-founder-for-a-specific-room via three fit tests + checklist); shared 'better not bigger' motif is intentional lane cohesion, not repetition. RECOMMENDATION: ship. Published + atomized.
