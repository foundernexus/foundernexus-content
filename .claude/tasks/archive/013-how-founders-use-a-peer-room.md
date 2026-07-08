# 013 — Draft: how founders actually use a peer room

- **ID:** 013
- **Title:** Draft: how founders actually use a peer room
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-08
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `peer-room-in-practice`, keyword "how founders actually use a peer room"

## Objective

Draft an informational, newsletter-funnel piece on how founders actually get value from a peer room in
practice, beyond the abstract idea of one. Name the decision it helps: a founder deciding whether a
peer room would actually change how they operate, or just add another meeting. Concrete texture:
bringing a real live decision, what a useful session looks like, how the value shows up after.

## Orient first

- `CLAUDE.md`, `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§4), `substrate/routing-rules.md`
- Voice/structure: `content/blog/founder-decision-quality.md` (informational, newsletter-adjacent,
  single low-key CTA) and `content/blog/what-a-good-founder-room-looks-like.md`.

## Scope fence (do NOT touch)

- `substrate/**`

## Definition of done (evidence-forcing)

- [ ] `content/drafts/how-founders-use-a-peer-room.md` front-matter: `lane: linkedin-assisted-demand`,
      `cluster: peer-room-in-practice`, `asset_type: article`, single `primary_cta`, `status: drafted`;
      `content-lint` clean.
- [ ] Names the decision in the first two body sentences (quote in Result).
- [ ] Zero retired terms, zero em dashes.
- [ ] Every claim observational, no invented statistics or fabricated member stories.
- [ ] One primary CTA (newsletter-funnel): `primary_cta: "Explore whether FounderNexus fits your
  stage"` + `route: "https://www.foundernexus.com/registration"` (matching `founder-decision-quality.md`).
- [ ] 800-1400 words.

## Self-verify

- `node .claude/hooks/scripts/checks/{contract,terminology,emdash}.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/how-founders-use-a-peer-room.md`

## Notes

Standard tier. No named competitor. Keep it concrete, not brochure-like — the risk on this topic is
sounding like marketing copy. Show the mechanism, do not assert the benefit.

## Result (builder fills)

**STATUS:** done

**FILES TOUCHED:**

- `content/drafts/how-founders-use-a-peer-room.md` — new draft (created)
- `.claude/tasks/013-how-founders-use-a-peer-room.md` — Status set to in-review, Result filled

**SUMMARY:** Drafted an informational, newsletter-funnel article on how founders actually get value from a peer room in practice. Built around the mechanism (bring a live decision, what a useful session looks like, how value shows up after) rather than asserting the benefit, to avoid brochure/marketing framing. 969-word body, conclusion-first TL;DR, single newsletter-funnel CTA, no em dashes, every claim observational.

**SELF-VERIFY:**

- `node .claude/hooks/scripts/checks/contract.mjs` -> exit 0 (clean)
- `node .claude/hooks/scripts/checks/terminology.mjs` -> exit 0 (clean, zero retired terms)
- `node .claude/hooks/scripts/checks/emdash.mjs` -> exit 0 (clean); `grep "—"` -> no hits
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/how-founders-use-a-peer-room.md` -> exit 0 (clean)

**CRITERIA:**

- Front-matter (lane: linkedin-assisted-demand, cluster: peer-room-in-practice, asset_type: article, single primary_cta, status: drafted) + content-lint clean -> met (lint exit 0; also includes required target_keyword)
- Names the decision in first two body sentences -> met. Quote: "The decision this piece is meant to help you make is narrow: would a peer room actually change how you operate, or would it just add another recurring block to a calendar that is already full."
- Zero retired terms, zero em dashes -> met (terminology exit 0, emdash exit 0, grep clean)
- Every claim observational, no invented stats or fabricated member stories -> met (illustrative "picture the version" framing, no named members, no numbers presented as data)
- One primary CTA (newsletter-funnel): `primary_cta: "Explore whether FounderNexus fits your stage"` + `route: "https://www.foundernexus.com/registration"` -> met (matches founder-decision-quality.md; single CTA in body)
- 800-1400 words -> met (969-word body)

**DOCS UPDATED:** none (scope-fenced; no substrate/** or shared registry files touched)

**RESIDUAL RISK:** none material. Draft leans on illustrative session texture ("picture the version that works") rather than a specific member anecdote, which keeps it observational but means QA may want a note that no real session is being described.

**FOLLOW-UPS:** none.

## QA verdict (orchestrator records)

VERDICT: fail -> fixed -> ship. QA found 013's 'How the value shows up after' section duplicated 014's entire thesis (changed-decision tell + compounding trust). Fixed: replaced that section with an in-room reciprocity-mechanics section ('You have to work the room, not just attend it'), leaving 014 to own the after-effect argument; also softened one borderline-promotional line. Brochure-check otherwise clean. RECOMMENDATION: ship. Published (with inline image) + atomized.
