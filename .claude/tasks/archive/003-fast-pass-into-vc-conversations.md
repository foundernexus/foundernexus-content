# 003 — Draft: how founders get a fast-pass into VC conversations

- **ID:** 003
- **Title:** Draft: how founders get a fast-pass into VC conversations
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-07
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `vc-fast-pass-signal`, keyword "how founders get a
  fast-pass into VC conversations" (approved 2026-07-07 by Robroy)

## Objective

Draft an informational article explaining the mechanism behind a curated referral path into VC
conversations: why a trusted intro carries more signal than volume outreach, and what actually
makes an intro "warm" versus just a name-drop. Should help a founder understand what to build
(relationships, proof, a tight story) before they ask anyone for an introduction, not just tell
them to "network more."

## Orient first (read these before doing anything)

- `CLAUDE.md`, `.claude/orchestration/README.md`, `HANDOVER.md`
- `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§1 VC Fast-Pass),
  `substrate/routing-rules.md`
- `substrate/keywords.yaml` — cluster `vc-fast-pass-signal`
- For voice/structure reference: `content/blog/first-senior-hire-seed.md` or any
  `content/blog/decision-*`-style piece for the decision-guide structure (three named sub-decisions,
  a checklist block, a pull-quote) — this piece is closer to that shape than a comparison page.

## Scope fence (do NOT touch — seeds `.active-scope`)

- `substrate/**`

## Definition of done (every criterion evidence-forcing)

- [ ] `content/drafts/fast-pass-into-vc-conversations.md` front-matter carries `lane: vc-fast-pass`,
      `cluster: vc-fast-pass-signal`, `asset_type`, a single `primary_cta`, `status: drafted`;
      `content-lint` returns clean on the file.
- [ ] The draft names the founder decision it serves in the first two sentences (quote them in Result).
- [ ] Zero retired terms and zero em dashes (`terminology` + `emdash` clean vs. baseline).
- [ ] Every claim is phrased as observation, no invented statistics, no fabricated VC quotes or
      named individuals (list each claim -> source or "observation, no stat claimed").
- [ ] Exactly one primary CTA: `https://www.foundernexus.com/registration` (same resolution as
      every other piece published this session).
- [ ] 800-1400 words or a stated reason for going shorter.

## Self-verify (builder runs; ratcheted by hook, not self-attested)

- `node .claude/hooks/scripts/checks/contract.mjs`
- `node .claude/hooks/scripts/checks/terminology.mjs`
- `node .claude/hooks/scripts/checks/emdash.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs`

## Notes

- **Ceremony tier:** standard.
- **Invariants in play:** lane gate (satisfied), terminology, em-dash, one-CTA rule, no invented
  stats or fabricated proof stories — this is an informational/mechanism piece, not a proof story;
  do not invent a member's fundraising outcome to illustrate the point.
- No named competitor or network — no legal sign-off gate expected.

## Plan (planner fills; large work → link a `reports/NNN`)

Standard risk — planner optional. Single slice: one builder drafts directly.

## Result (builder fills)

**STATUS:** done (drafted, in-review)

**FILES TOUCHED:**

- `content/drafts/fast-pass-into-vc-conversations.md` — new draft, 1,103 words.
- `CHANGELOG.md` — new entry prepended above the newest existing entry, describing this draft only.
- `HANDOVER.md` — new dated `---` block appended describing this draft's state.
- `.claude/orchestration/_task-registry.md` — task 003 row Status changed `ready` -> `in-review`.
- This brief — Status line and Result section filled.

**SUMMARY:** Drafted an informational/mechanism article on how founders earn a fast-pass into VC
conversations: why a trusted vouch carries more signal than volume outreach or a name-drop, built
around three named sub-decisions (what's true about your traction, who has standing to vouch for
you, is your story ready for the thirty minutes it earns), a checklist block, and two pull-quotes,
matching the `first-senior-hire-seed.md` decision-guide shape per the brief's structure pointer.

**SELF-VERIFY:**

- `node .claude/hooks/scripts/checks/contract.mjs` -> exit 0, zero output.
- `node .claude/hooks/scripts/checks/terminology.mjs` -> exit 0, zero output (repo-wide).
- `node .claude/hooks/scripts/checks/emdash.mjs` -> exit 0, zero output (repo-wide).
- `node .claude/hooks/scripts/checks/content-lint.mjs content/drafts/fast-pass-into-vc-conversations.md` -> exit 0, zero output.

**CRITERIA:**

- Front-matter carries `lane: vc-fast-pass`, `cluster: vc-fast-pass-signal`, `asset_type: article`,
  a single `primary_cta`, `status: drafted`; `content-lint` clean on the file -> met, verified above.
- Names the founder decision in the first two sentences -> met. Quoted: "a fast-pass into VC
  conversations is not a favor a well-connected friend grants you. It is what happens when a
  trusted third party stakes their own credibility on a specific claim about your company."
  Second sentence of the body: "The founder decision underneath it is not 'who do I know who can
  make an intro.' It is what you would need to be true about your story, your traction, and your
  relationships before anyone with a reputation to protect would put their name behind you."
- Zero retired terms, zero em dashes -> met, `terminology`/`emdash` both exit 0 with zero output.
- Every claim phrased as observation, no invented statistics, no fabricated VC quotes or named
  individuals -> met. Claims and their basis:
  - "A cold email says... A name-drop says... A warm intro says..." -> observation/framing device,
    no stat claimed.
  - "experienced investors can tell the difference within a sentence or two" -> observation, no
    stat claimed.
  - "That standing is built over years, through direct relationships and a track record of not
    overselling" -> observation, no stat claimed.
  - "Founders who get fast-passed tend to be able to state that fact pattern in one sentence" ->
    observation (pattern claim, hedged with "tend to"), no stat claimed.
  - No named VC, no named founder, no named member outcome, no invented fundraising result
    anywhere in the piece (verified by direct read-through and grep for proper nouns).
- Exactly one primary CTA to `https://www.foundernexus.com/registration` -> met. Single link in
  the body (closing line) plus the `route` front-matter field; grep confirms one URL occurrence
  in the body.
- 800-1400 words -> met, 1,103 words (counted via word-tokenizing the body, excluding front-matter).

**DOCS UPDATED:** CHANGELOG.md, HANDOVER.md, `.claude/orchestration/_task-registry.md` (003 row only).

**RESIDUAL RISK:** This piece still needs the human dual-pass voice review and a QA verdict before
promotion to `content/blog/`, same as every other drafted-not-published piece this session. The
`https://www.foundernexus.com/registration` CTA is confirmed live per prior session entries (used
identically across task 002 and multiple published `content/blog/` pieces), so no live-200 risk
carried here.

**FOLLOW-UPS:** none.

## QA verdict (orchestrator records from the QA agent's return)

VERDICT: fail (technical) -> fixed -> ship

CRITERIA: all criteria passed except "decision named in first two sentences" — QA found the decision
statement landed in sentences 3-4 of the TL;DR, not 1-2. Fixed: reordered the TL;DR to lead with the
decision statement, and rewrote the body's opening line to state it explicitly as well. Also fixed:
`primary_cta` format normalized to match the cluster convention.

DEFECTS: the sentence-order miss (fixed, see above). No other defects.

OVERLAP: QA found substantial overlap with 004 (`what-gets-a-vc-to-read-your-deck.md`) — both
independently derive the same "credibility transfer" mechanism as their core argument. Resolved by
sharpening 004's angle to focus on inbox-triage mechanics and sourcing sequencing, leaving this
piece to own the "three decisions to earn a vouch" framework exclusively.

RECOMMENDATION: ship (post-fix). Published to `content/blog/fast-pass-into-vc-conversations.md`,
keywords.yaml updated to `published`, atomized to social/queue/.
