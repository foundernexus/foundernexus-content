# FounderNexus Anti-Slop Guide

Read by: article generator/builder (orient-first), QA voice pass (content-standards.md §7),
`slop.mjs` advisory check.

Adapted from the **stop-slop** skill by Hardik Pandya (https://hvpandya.com), MIT-licensed. This is
the FounderNexus-tuned version. stop-slop is deliberately absolutist; some of its rules fight the
intentional FounderNexus house voice (the "name the decision" device). This file keeps what makes
writing less AI-sounding and reconciles the rest with `content-standards.md`.

## Part A — Adopt in full (pure slop, no downside)

Every one of these makes prose worse and none conflicts with the house voice. Cut on sight.

### Throat-clearing openers
State the point; delete the announcement. Kill: "Here's the thing," "Here's what/why/how X,"
"The uncomfortable truth is," "It turns out," "Let me be clear," "The truth is," "Make no mistake,"
"Let that sink in," "The real X is," "Can we talk about," "Here's what I find interesting."

### Business jargon
Plain words beat these: game-changer, deep dive, circle back, double down, move the needle,
lean into, unpack (as analysis), leverage (as verb), boil the ocean, low-hanging fruit, synergy,
paradigm shift, "take a step back," "moving forward," "at the end of the day," "when it comes to,"
"in today's X," "in a world where," "at its core," "it's worth noting," "the reality is."

### Meta-commentary
The piece should move, not narrate its own structure. Kill: "in this section," "as we'll see,"
"let me walk you through," "the rest of this piece," "but that's another post," "plot twist,"
"spoiler," "hint:," "you already know this, but."

### Vague declaratives
Name the specific thing or cut the sentence. Kill: "the implications are significant," "the stakes
are high," "the reasons are structural," "this is the deepest problem," "the consequences are real."

### False agency (name the human)
Inanimate things do not do human verbs. "A complaint becomes a fix" → someone fixed it. "The
decision emerges" → someone decides. "The market rewards" → buyers pay for things. "The data tells
us" → someone read it and concluded. If no specific actor fits, use "you" and put the reader in the
seat. This one matters a lot for founder content: name the founder, the board, the investor, the rep.

### Passive voice
Find the actor, put them at the front. "The decision was reached" → "the board decided."

### Empty adverbs and filler
Cut adverbs that add no information: really, just, literally, simply, actually, truly, deeply,
fundamentally, inherently, inevitably, interestingly, importantly, crucially. (See Part B for the
few that carry real meaning and can stay.)

### Quotable-bait
If a sentence sounds engineered to be screenshotted, rewrite it plainer.

## Part B — House-voice exceptions (stop-slop bans these; FounderNexus keeps them, in moderation)

These are deliberate FounderNexus devices. Keep them, but the failure mode is OVERUSE, which reads
as mechanical. QA flags overuse, not use.

### The "name the decision" contrast — KEEP, cap the density
`content-standards.md` §1 requires every piece to name the founder decision it serves, and the
sharpest way to do that is a contrast: "The decision is not X. It is Y." This is the core device and
it stays. **The limit:** at most one or two per piece, and never a whole article built as a chain of
them. If every section header and every paragraph is a "not X, it's Y," it has become a tic. Vary
the framing: sometimes name Y directly, sometimes pose the real question, sometimes show the
tradeoff. A piece with five identical reversals fails the voice pass.

### Three-part structures — KEEP
Decision guides organized around three tests / three decisions are a FounderNexus pattern and are
fine. stop-slop's "use two" rule does not apply. Do not pad to three, and do not force it, but three
real, distinct points is not slop.

### A few adverbs carry meaning — KEEP those
"Genuinely good" (conceding a competitor's real strength in a comparison) or "recently" (a load-
bearing qualifier about pattern relevance) do real work. Cut empty intensifiers; keep the ones that
change the meaning of the sentence.

### Rare short fragments — KEEP, sparingly
One deliberate fragment for emphasis ("Not more impressive. Sharper.") is allowed. Stacking three or
four in a row ("Speed. Quality. Trust. That's it.") is the manufactured-profundity failure. Cap it
at one per piece, and only when it lands.

## Part C — Already covered by content-standards.md

- No em dashes (§3). stop-slop agrees; the `emdash.mjs` check enforces it.
- Be specific, one core argument, conclusion-first (§1, §3, §4). Aligned.
- Put the reader in the room, "you" over "founders" (§3, "one specific founder"). Aligned.

## The voice-pass score (QA aid)

QA rates each dimension 1-10. Below 35/50 total, the piece goes back for a voice revision.

| Dimension | Question |
|---|---|
| Directness | Does it state, or announce and throat-clear? |
| Rhythm | Varied sentence lengths, or metronomic? |
| Trust | Does it respect the reader, or over-explain and soften? |
| Authenticity | Does it read like an operator wrote it, or a model? |
| Density | Is anything cuttable without loss? |

The `slop.mjs` advisory check catches the mechanical Part-A phrases automatically (non-blocking,
surfaced on save and re-run by QA). The judgment calls in Part B stay with the human/QA voice pass.
