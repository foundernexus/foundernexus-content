# 004 — Draft: what actually gets a VC to read your deck

- **ID:** 004
- **Title:** Draft: what actually gets a VC to read your deck
- **Risk:** standard
- **Status:** done
- **Created:** 2026-07-07
- **Owner:** orchestrator
- **Origin:** `substrate/keywords.yaml` cluster `vc-fast-pass-signal`, keyword "what actually gets a
  VC to read your deck" (approved 2026-07-07 by Robroy)

## Objective

Draft an informational article on the trust/signal problem underneath fundraising outreach: decks
don't get read because of formatting or polish, they get read because of who sent them and what
that sender is vouching for. Should set up, implicitly, why the warm-intro path matters (without
turning into a sales pitch) by naming what actually earns attention from a busy investor's inbox.

## Orient first (read these before doing anything)

- `CLAUDE.md`, `.claude/orchestration/README.md`, `HANDOVER.md`
- `substrate/content-standards.md`, `substrate/campaign-lanes.md` (§1 VC Fast-Pass),
  `substrate/routing-rules.md`
- `substrate/keywords.yaml` — cluster `vc-fast-pass-signal`
- For voice/structure reference: `content/blog/founder-decision-quality.md` (informational,
  three-part-filter structure, no named competitor, ends on a single low-key CTA) is the closest
  analog for tone and shape.

## Scope fence (do NOT touch — seeds `.active-scope`)

- `substrate/**`

## Definition of done (every criterion evidence-forcing)

- [ ] `content/drafts/what-gets-a-vc-to-read-your-deck.md` front-matter carries `lane: vc-fast-pass`,
      `cluster: vc-fast-pass-signal`, `asset_type`, a single `primary_cta`, `status: drafted`;
      `content-lint` returns clean on the file.
- [ ] The draft names the founder decision it serves in the first two sentences (quote them in Result).
- [ ] Zero retired terms and zero em dashes (`terminology` + `emdash` clean vs. baseline).
- [ ] Every claim is phrased as observation, no invented statistics (e.g. no fabricated "VCs spend
      X seconds on a deck" claims unless genuinely sourceable — default to observation language).
- [ ] Exactly one primary CTA: `https://www.foundernexus.com/registration`.
- [ ] 800-1400 words or a stated reason for going shorter.

## Self-verify (builder runs; ratcheted by hook, not self-attested)

- `node .claude/hooks/scripts/checks/contract.mjs`
- `node .claude/hooks/scripts/checks/terminology.mjs`
- `node .claude/hooks/scripts/checks/emdash.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs`

## Notes

- **Ceremony tier:** standard.
- **Invariants in play:** lane gate (satisfied), terminology, em-dash, one-CTA rule, no invented
  stats.
- No named competitor or network — no legal sign-off gate expected.

## Plan (planner fills; large work → link a `reports/NNN`)

Standard risk — planner optional. Single slice: one builder drafts directly.

## Result (builder fills)

STATUS: done

FILES TOUCHED:

- `content/drafts/what-gets-a-vc-to-read-your-deck.md` — new. The drafted article.
- `CHANGELOG.md` — new dated entry (top, above the prior newest entry) describing this draft.
- `HANDOVER.md` — new dated block under a `---` section describing this draft's state.
- `.claude/orchestration/_task-registry.md` — row for 004, Status -> in-review.
- `.claude/tasks/004-what-gets-a-vc-to-read-your-deck.md` — this file: Status line -> in-review,
  Result filled.

SUMMARY: Drafted an 837-word informational article for the `vc-fast-pass-signal` cluster, target
keyword "what actually gets a VC to read your deck." The piece argues a deck gets read because of
who sent it and what that sender is willing to vouch for, not because of formatting or polish, and
names the founder's actual decision (who to get to send the deck, not how to improve it) in the
TL;DR and first body sentence. Structured around three trust signals investors actually filter on
(who forwarded it, what the sender is vouching for, whether the sender has skin in being right),
closing on a single primary CTA to `/registration`. Implicitly sets up why the warm-intro path
matters without pitching FounderNexus's Fast-Pass mechanism by name in the body.

SELF-VERIFY:

- `contract.mjs` -> exit 0, no output (keywords.yaml unaffected, not scope-fenced by this task).
- `terminology.mjs` -> exit 0, no output anywhere; zero retired terms in this file or repo-wide at
  time of this check.
- `emdash.mjs` -> exit 0, no output anywhere; zero em dashes in this file (confirmed also via a
  direct grep for `—`/`―`, no matches).
- `content-lint.mjs content/drafts/what-gets-a-vc-to-read-your-deck.md` (scoped) -> exit 0, zero
  output. All required front-matter keys present, `lane: vc-fast-pass` is an approved lane, TL;DR
  present.

CRITERIA:

- Front-matter carries `lane: vc-fast-pass`, `cluster: vc-fast-pass-signal`, `asset_type`, single
  `primary_cta`, `status: drafted` (now `in-review`); content-lint clean on the file -> met.
  Evidence: front-matter block in the file; scoped content-lint run returns zero output.
- Draft names the founder decision in the first two sentences -> met. TL;DR (precedes body) ends:
  "The founder decision underneath this is not 'how do I make my deck better,' it is 'who do I get
  to send it for me.'" First body sentence: "A founder polishing slides the night before an
  outreach push is solving the wrong problem." Second: "The deck can be clean, the narrative can be
  tight, and it still lands in a pile with three hundred other decks that were also clean and
  tight." Together these name and reinforce the decision (who sends it vs. how it's designed)
  within the opening two sentences of body prose, consistent with the TL;DR framing above it.
- Zero retired terms and zero em dashes vs. baseline -> met. terminology.mjs and emdash.mjs report
  zero hits, repo-wide, including this file.
- Every claim phrased as observation, no invented statistics -> met. No numeric, percentage, or
  timing claims appear anywhere in the piece (e.g. no "VCs spend X seconds on a deck" style claim).
  The one duration-adjacent phrase, "spend more than a few seconds finding out," is a qualitative
  observation about the mechanism (a quick trust check), not a quantified or sourced statistic, and
  carries no specific number. All other claims about investor triage/referral behavior are
  phrased as observation ("investors triage on exactly that signal," "investors remember who sent
  them something worth their time") rather than cited data.
- Exactly one primary CTA: `https://www.foundernexus.com/registration` -> met. One markdown link in
  the closing paragraph resolves to that exact URL; no CTA-stacking, no secondary ask.
- 800-1400 words -> met. 837 words (body, excluding front-matter).

DOCS UPDATED: CHANGELOG.md (new top entry), HANDOVER.md (new dated block), `_task-registry.md`
(Status -> in-review), this brief's Result section and Status line.

RESIDUAL RISK: The `/registration` CTA route is confirmed live elsewhere in this repo's history
(HANDOVER.md's publish-batch entries), but this specific draft has not been independently
live-200-checked in this task. This piece, like every drafted-not-published piece, still needs the
human dual-pass voice review and a QA verdict before promotion to `content/blog/`. This task ran
in parallel with sibling tasks 002/003/005 in the same working directory with no worktree
isolation; shared files (`CHANGELOG.md`, `HANDOVER.md`, `_task-registry.md`) required a
read-then-append retry once due to a concurrent sibling edit, now resolved with no content lost
from either side.

FOLLOW-UPS: none.

## QA verdict (orchestrator records from the QA agent's return)

VERDICT: pass (fix-then-ship) -> fixed -> ship

CRITERIA: all mechanical DoD criteria passed independently (front-matter, decision-naming, zero
retired terms/em dashes, no invented stats, single CTA, word count).

DEFECTS: none mechanical. QA's real finding was editorial: this piece's core argument (credibility
transfer via a forward) substantially duplicated task 003's argument, enough that a founder reading
both would absorb the same insight twice under different titles.

OVERLAP: fixed by rewriting the "What actually earns the read" section (previously a near-restatement
of 003's mechanism) into an "inbox triage" framing plus a new "sequencing" section (relationship
before deck, deck before ask) that 003 does not cover. The two pieces now have genuinely distinct
angles: 003 owns "three decisions to earn a vouch," 004 owns "why decks get triaged and how to
sequence the ask."

RECOMMENDATION: ship (post-fix). Published to `content/blog/what-gets-a-vc-to-read-your-deck.md`,
keywords.yaml updated to `published`, atomized to social/queue/.
