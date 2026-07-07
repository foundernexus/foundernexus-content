# Comparison Page Routing Plan

Status: active working note
Source draft: `content/drafts/ypo-alternatives-for-founders.md`

## Decision

Comparison pages are founder-evaluation assets first. They can support nomination, but they should not default to nomination unless the page is written for members, VCs, advisors, or trusted sources.

## Current routing problem

The likely destination routes are not live yet:

- `/apply`: 404
- `/nominate`: 404
- `/newsletter`: 404

The homepage is live and can be used as a temporary destination, but it is not a clean conversion path for this page.

## Recommended CTA stack for comparison pages

Primary CTA:

- Explore whether FounderNexus fits your stage

Secondary paths:

- Nominate a founder who would make the room sharper
- Stay close if the timing is not live yet

Do not show all three as equal buttons. The page should have one primary action and lower-friction secondary text links only if the destination exists.

## What to build next

1. Founder evaluation destination.
   A page or form for founders who are considering FounderNexus for themselves. It should collect stage, company, current decision, source path, and whether they want a fit conversation.

2. Nomination destination.
   A page or form for members, VCs, advisors, and trusted sources. It should collect nominator, founder, company, stage, why this founder, decision context, trust path, and whether the nominator can intro.

3. Relationship reservoir destination.
   A lightweight stay-close path for qualified founders without a live decision. This can be newsletter, event interest, or a simple "send me the next relevant session" form.

## Publishing rule

Do not publish a comparison page with dead CTA links. If the page must ship before the destination pages exist, use the homepage as a temporary link and mark the readout as route-incomplete.
