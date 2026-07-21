# OpenSEO integration: keyword driver for the fnx pipeline

**TL;DR.** OpenSEO becomes the driver of our keyword layer. It supplies the term universe,
search volume, difficulty, clustering, and competitor and SERP gaps over an MCP connection.
Our side keeps owning strategy and guardrails: which lane a cluster gets, terminology,
anti-slop, legal sign-off, and the human approve-then-publish gate. `keywords.yaml` shifts
from hand-authored to OpenSEO-populated and human-ratified. Nothing about how content ships
changes: no new CMS, no new rendering path, no automation that posts.

Status: approved design 2026-07-21 by Robroy. Implementation tracked separately.

## Why

`substrate/keywords.yaml` is the contract between human strategy and machine execution, but the
keyword data behind it (volume, difficulty, competitor coverage) has been thin and manual. The
gap is real SEO data driving what gets written. OpenSEO (the every-app build at app.openseo.so,
backed by DataForSEO) provides exactly that, and exposes it over an MCP server plus reusable
Agent Skills. It slots in as a data feed to the pipeline we already run. It replaces nothing.

Rejected alternative: standing up a separate visual content studio (the Juliusolsson05/openSEO
block-editor CMS). It carries its own schema and a generate-and-publish model that would bypass
our lane gate, terminology gate, anti-slop, and legal sign-off, and would duplicate an authoring
pipeline we already own. It also contradicts "automation prepares, humans send." Not adopted.

## Roles after this change

- **OpenSEO drives keywords.** Term discovery, volume, difficulty, clustering, competitor and
  SERP gaps, and rank tracking. Proposes clusters and keywords; never approves them.
- **Humans own strategy and guardrails.** Lane assignment, priority, terminology, anti-slop,
  competitor legal sign-off, and the approve-then-merge gate. Unchanged.
- **The fnx pipeline writes and verifies.** Orchestrator, `fnx-planner`, `fnx-builder`,
  `fnx-qa`, and the Node hooks operate exactly as today.

## Architecture

Hosted OpenSEO connects to `foundernexus-content` as an MCP research source. The orchestrator
runs research (the operating model has the planner request research from the orchestrator),
turns OpenSEO output into proposed `keywords.yaml` blocks, and hands approved work into the
existing dispatch flow.

## Components (all inside foundernexus-content)

1. **MCP connection.** `https://app.openseo.so/mcp`, added at project scope so the team and
   agents share it. First use runs an OAuth login through the browser (account already exists).
   Command: `claude mcp add --transport http --scope project openseo https://app.openseo.so/mcp`.
   The resulting `.mcp.json` is committed.

2. **A `keyword-research` skill** at `.claude/skills/keyword-research/SKILL.md`. It defines the
   repeatable procedure the orchestrator follows: given a pillar and candidate lane, call OpenSEO
   tools for volume, difficulty, clustering, and competitor and SERP gaps, then emit
   `status: proposed` cluster and keyword blocks that conform to the `keywords.yaml` schema. The
   skill proposes only. It never sets a lane, never marks a cluster approved, never writes content.

3. **Additive `keywords.yaml` fields.** New optional keys on a keyword entry, alongside the
   existing `gsc_impressions` and `gsc_ctr`:
   - `volume` (integer, monthly search volume from OpenSEO)
   - `difficulty` (integer 0 to 100, keyword difficulty from OpenSEO)
   - `source` (string, e.g. `openseo`, records provenance)
   - `serp_notes` (string, optional, competitor or SERP observations)
   All optional and backward compatible. Existing clusters validate unchanged.

4. **`contract.mjs` update.** Teach the contract check to allow and type-check the new optional
   keys, so a malformed OpenSEO-sourced block fails closed at the contract layer rather than
   slipping through.

## Data flow

1. Orchestrator runs the `keyword-research` skill against a pillar.
2. OpenSEO MCP returns terms, volume, difficulty, clusters, competitor and SERP gaps.
3. The skill writes `status: proposed` clusters and keywords into `keywords.yaml` on a branch.
4. A human reviews and approves lane, priority, and terms (the strategy gate).
5. `/new-task` and `/dispatch-task` run the approved work.
6. `fnx-planner` plans, `fnx-builder` writes MDX in `content/blog/`, `fnx-qa` and the Node hooks
   verify.
7. PR opens, Vercel builds a preview, a human merges, the post ships.
8. Later, OpenSEO rank tracking and Google Search Console feed performance back into cluster
   priority.

## Invariants preserved

OpenSEO only proposes research. It never writes content, never publishes, never decides a lane,
terminology, anti-slop, or legal question. All existing load-bearing invariants stand:
automation prepares and humans send; the lane gate; the retired-terminology gate; competitor
pages need Court and legal sign-off; CTA routes must return 200 before publishing.

## Verification

Reuse the existing checks (`contract.mjs`, `terminology.mjs`, `emdash.mjs`, `content-lint.mjs`).
Add one contract-check case covering the new optional keyword fields, so an OpenSEO-sourced block
with a bad type or shape blocks at the contract layer.

## Phasing

- **Phase 0 (owner-run, external accounts).** Obtain a DataForSEO API key. Confirm the
  app.openseo.so project targets `foundernexus.com`. Run the `claude mcp add` OAuth once in an
  interactive Claude Code session.
- **Phase 1 (build).** Commit `.mcp.json` and the `keyword-research` skill. Land the
  `keywords.yaml` schema fields and the `contract.mjs` update. Pilot one existing pillar with real
  OpenSEO data. Run one post end to end. Success: a merged, guardrail-passing post whose keyword
  choice came from OpenSEO data.
- **Phase 2 (scale).** Add a rank-tracking line to `weekly-readout-format.md`. Set a monthly
  research cadence.
- **Phase 3 (own infra).** Self-host `fn-openseo` on Cloudflare, repoint the MCP URL, drop the
  hosted service markup.
- **Phase 4 (only if needed).** A thin brief-to-`fnx-builder`-to-compliant-PR authoring surface
  for a non-technical author. Not built speculatively.

## Open questions

- Which pillar is the Phase 1 pilot. Recommend the `peer-advisory-alternatives` cluster, since it
  already has published comparison pages to benchmark against.
- Exact OpenSEO tool names and response shapes, to be confirmed against the live MCP during Phase 1.
