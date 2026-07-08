# 009 — Draft: what makes a founder worth nominating

- **ID:** 009
- **Title:** Draft: what makes a founder worth nominating
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-08
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `founder-nomination-flywheel` (NEW lane: `founder-nomination`),
  keyword "what makes a founder worth nominating"

## Objective

Draft the FIRST piece in the Founder Nomination lane. Audience is an existing member deciding whether
to nominate a peer into a stage-specific room. Name the decision: not "who do I like," but "whose
presence would make the room sharper." The piece should give a member a clear standard for a good
nomination, drawn from `substrate/campaign-lanes.md` §2 and the "nomination test" already articulated
in `content/blog/ypo-alternatives-for-founders.md` (reuse that worldview, do not contradict it).

## Orient first

- `CLAUDE.md`, `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§2 Founder Nomination,
  the highest-leverage lane), `substrate/routing-rules.md` (§2 lane->CTA map: Founder Nomination
  primary CTA is "Nominate a founder" routing to `/nominate`, which is a KNOWN 404), `substrate/comparison-page-playbook.md`
- Voice/structure: `content/blog/what-a-good-founder-room-looks-like.md` (the "nomination test" section
  especially), `content/blog/first-senior-hire-seed.md` for decision-guide shape.

## Scope fence (do NOT touch)

- `substrate/**`

## Definition of done (evidence-forcing)

- [ ] `content/drafts/what-makes-a-founder-worth-nominating.md` front-matter: `lane: founder-nomination`,
      `cluster: founder-nomination-flywheel`, `asset_type: article`, single `primary_cta`, `status: drafted`;
      `content-lint` clean.
- [ ] Names the decision (nominate / not) in the first two body sentences (quote in Result).
- [ ] Zero retired terms, zero em dashes.
- [ ] Every claim observational, no invented statistics or fabricated member stories.
- [ ] Exactly one primary CTA. **CTA-route decision:** the lane's canonical CTA is "Nominate a founder"
      -> `/nominate`, but that route is a known 404 (routing-rules.md §2a). There is no live nomination
      page. Route the CTA to the real, live `https://cal.com/karink/nexus-partner-intro-call` with
      framing that a member can raise a nomination in that conversation. Set `primary_cta: "Nominate a
  founder"` and `route: "https://cal.com/karink/nexus-partner-intro-call"`. Flag in FOLLOW-UPS that
      a real `/nominate` destination is the actual fix for this lane.
- [ ] 800-1400 words.
- [ ] At least one `<div class="pull">` block.

## Self-verify

- `node .claude/hooks/scripts/checks/{contract,terminology,emdash}.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/what-makes-a-founder-worth-nominating.md`

## Notes

Standard tier, but this OPENS a new lane, so its voice/CTA choices set precedent for lane sibling 010.
No named competitor. The nomination ask is an earned, high-trust ask (routing-rules.md §4) — keep the
tone peer-to-peer, not salesy.

## Result (builder fills)

**STATUS:** done

**FILES TOUCHED:**

- `content/drafts/what-makes-a-founder-worth-nominating.md` — new draft, first piece in the `founder-nomination` lane.
- `.claude/tasks/009-what-makes-a-founder-worth-nominating.md` — Status set to `in-review`, Result filled.

**SUMMARY:** Drafted the opening piece for the Founder Nomination lane. It frames the nominate/not decision as a question about the room, not the relationship, reusing the "nomination test" worldview from `what-a-good-founder-room-looks-like.md` without contradicting it. Peer-to-peer, high-trust tone; conclusion-first TL;DR; one CTA. All four checks clean.

**SELF-VERIFY:**

- `contract.mjs` -> exit 0, empty output (clean)
- `terminology.mjs` -> exit 0, empty output (zero retired terms)
- `emdash.mjs` -> exit 0, empty output (zero em/en dashes)
- `content-lint.mjs content/drafts/what-makes-a-founder-worth-nominating.md` -> exit 0, empty output (front-matter, lane, single CTA, TL;DR all valid)

**CRITERIA:**

- Front-matter (`lane: founder-nomination`, `cluster: founder-nomination-flywheel`, `asset_type: article`, single `primary_cta`, `status: drafted`, `content-lint` clean) -> met. All required keys present; content-lint exits 0.
- Names the decision in first two body sentences -> met. Sentence 1: "So here is the decision in front of you: nominate this founder, or not." Sentence 2 frames it as a question about the room, not the relationship.
- Zero retired terms, zero em dashes -> met. terminology + emdash exit 0.
- Every claim observational, no invented stats or member stories -> met. No numbers, no named or fabricated members; all claims are about the standard/worldview.
- Exactly one primary CTA, routed per brief -> met. `primary_cta: "Nominate a founder"`, `route: https://cal.com/karink/nexus-partner-intro-call`, single CTA link in body with framing that a member raises the nomination in that conversation.
- 800-1400 words -> met. Body is 975 words.
- At least one `<div class="pull">` block -> met. Two pull blocks.

**DOCS UPDATED:** none (scope-fenced out of `substrate/**`; no doc changes required).

**RESIDUAL RISK:** The CTA routes to the cal.com intro-call link, not a true nomination flow, so a member ready to nominate takes an extra conversational step rather than a direct submit. Voice/CTA precedent for lane sibling 010 is set here and should be mirrored, not re-litigated.

**FOLLOW-UPS:** A real live `/nominate` destination is the actual fix for this lane. The canonical CTA "Nominate a founder" points at `/nominate`, a known 404 (routing-rules.md §2a); until that page exists, every piece in this lane inherits the cal.com workaround. Recommend building `/nominate` and repointing `route` across the lane once live.

## QA verdict (orchestrator records)

VERDICT: pass. First piece in the new founder-nomination lane; peer-to-peer member tone, consistent with the 'nomination test' worldview in what-a-good-founder-room-looks-like.md, single 'Nominate a founder' CTA routed to cal.com (no live /nominate page). RECOMMENDATION: ship. Published + atomized.
