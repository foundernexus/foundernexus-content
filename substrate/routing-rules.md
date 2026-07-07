# FounderNexus Routing Rules

Read by: article generator (CTA insertion), atomizer, Mailchimp assembly script
Depends on: `campaign-lanes.md` for lane definitions, Attio for suppression status

## 1. Suppression check comes first

Before any routing decision, check Attio suppression status. Suppressed contacts and suppressed content targeting are excluded from every lane, every asset, every send. This check happens before CTA selection, not after.

## 2. Lane to CTA map

| Lane | Primary CTA | Secondary CTA | Routes to |
|---|---|---|---|
| VC Fast-Pass | Apply for Fast-Pass | Newsletter signup | /fast-pass |
| Founder Nomination | Nominate a founder | Learn about membership | /nominate |
| Event Conversion | RSVP to session | Apply for membership | session page, then /apply |
| LinkedIn-Assisted Demand | Newsletter signup | Follow on LinkedIn | /newsletter |
| Proof Capture | Request permission to feature | (none, internal asset) | proof-bank intake |

## 2a. Comparison page override

Comparison pages may use the lane map as a starting point, but they need one extra decision: who is the reader?

Default comparison-page primary CTA:

- `Explore whether FounderNexus fits your stage`

Optional secondary paths:

- `Nominate a founder` when the page is being shared with members, VCs, advisors, or trusted sources.
- `Stay close` when the reader is qualified but not carrying a live decision.

Do not publish broken placeholder routes. As of the first manual lane test, `/nominate`, `/apply`, and `/newsletter` returned 404 on the live site. Use the homepage only as a temporary link if a live link is required before the real destination exists.

## 3. One CTA per asset

Every article, post, or email carries exactly one primary CTA from the table above, matched to its lane. Never stack multiple asks in a single asset. If an asset seems to need two CTAs, it's two assets.

## 4. Fallback rule

If a keyword cluster's lane is ambiguous, or an asset doesn't cleanly fit a lane, default to the lowest-commitment ask: newsletter signup. Never default to Apply or Nominate. Those are earned asks.

## 5. Owner of record

Court owns routing decisions where a lane's CTA needs a judgment call (for example, an Event Conversion piece that could arguably route to Nomination instead). The generator picks the table default. A human can override it, and the override doesn't silently become the new default without an update to this file.
