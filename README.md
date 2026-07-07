# FounderNexus Content

This repo is the working surface for the FounderNexus signal-to-room marketing system.

## Current Scope

V0 is manual by design. The repo holds the judgment substrate and review surfaces before any generator, workflow, or posting automation is added.

## Structure

- `substrate/` - source-of-truth operating files for lanes, standards, routing, keywords, guardrails, and readouts.
- `content/` - future article drafts and approved content.
- `social/` - future approved social derivatives and queue artifacts.
- `briefs/` - future engagement briefs and weekly summaries.
- `scripts/` - parked until two manual pieces prove the loop.

## Manual V0

1. Pick one lane and asset type. For comparison pages, use `substrate/comparison-page-playbook.md`.
2. Pick one approved unwritten keyword from `substrate/keywords.yaml`.
3. Draft the article by hand using `substrate/content-standards.md`.
4. Run the two manual review passes: structure, then voice.
5. Atomize the approved draft by hand.
6. Log the result in the four-field format from `substrate/weekly-readout-format.md`.
7. Repeat once before adding scripts or GitHub Actions.

## Open Items

- Sync or copy the current `messaging-framework.md` from the canonical FounderNexus skill repo when ready.
- Add `proof-bank.md` after ownership and permission standards are confirmed.
- Do not automate posting, messaging, commenting, or Mailchimp sending.
