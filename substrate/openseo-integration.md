# OpenSEO integration: keyword driver for the fnx pipeline

**TL;DR.** OpenSEO becomes the driver of our keyword layer, adopted in two decoupled stages.
**Stage one (now) is hosted and repo-anchored:** we keep OpenSEO's compute on the hosted app,
but everything we control lives in this repo under PR review, the connection config, the skills,
and a research log, so all keyword activity is tracked. OpenSEO informs keyword picks; a human
still drops chosen terms into `keywords.yaml` by hand. Stage one touches no machine contract and
no content pipeline. **Stage two (later, only once it earns it) is integration:** wire OpenSEO
into the pipeline so it proposes `keywords.yaml` blocks directly. Our side always owns strategy
and guardrails: lane, terminology, anti-slop, legal sign-off, and the approve-then-publish gate.
No new CMS, no new rendering path, no automation that posts.

Status: approved design 2026-07-21 by Robroy. Standalone-first. Implementation tracked separately.

## Core principle: adoption is not integration

Adoption means the team can use OpenSEO immediately. Integration means OpenSEO writes into our
machine contract. We deliberately separate them. Front-loading schema and contract changes to a
load-bearing, guardrailed repo before the tool has proven its value stacks risk ahead of value.
So we adopt standalone first, keep the human handoff manual, and only wire OpenSEO into
`keywords.yaml` after it has demonstrably improved keyword decisions.

## Why OpenSEO

`substrate/keywords.yaml` is the contract between human strategy and machine execution, but the
keyword data behind it (volume, difficulty, competitor coverage) has been thin and manual. The
gap is real SEO data driving what gets written. OpenSEO (the every-app build at app.openseo.so,
backed by DataForSEO) provides exactly that, and exposes it over an MCP server plus reusable
Agent Skills.

Rejected alternative: standing up a separate visual content studio (the Juliusolsson05/openSEO
block-editor CMS). It carries its own schema and a generate-and-publish model that would bypass
our lane gate, terminology gate, anti-slop, and legal sign-off, and would duplicate an authoring
pipeline we already own. It also contradicts "automation prepares, humans send." Not adopted.

## Roles

- **OpenSEO drives keywords.** Term discovery, volume, difficulty, clustering, competitor and
  SERP gaps, rank tracking. It informs (stage one) then proposes (stage two). It never approves.
- **Humans own strategy and guardrails.** Lane assignment, priority, terminology, anti-slop,
  competitor legal sign-off, and the approve-then-merge gate. Unchanged in both stages.
- **The fnx pipeline writes and verifies.** Orchestrator, `fnx-planner`, `fnx-builder`,
  `fnx-qa`, and the Node hooks operate exactly as today.

## Stage one: hosted, repo-anchored (now)

Hosted compute, but every artifact we control is committed to `foundernexus-content` and passes
through PR review, so activity is tracked. No changes to the machine contract (`keywords.yaml`
schema, `contract.mjs`) and no changes to the content pipeline. Reversible.

1. **Hosted OpenSEO web app** (app.openseo.so) as the shared team tool. The account and project
   already exist. Non-technical people log in and use it directly. On the hosted plan OpenSEO
   supplies the SEO data, so no DataForSEO key is required at this stage.
2. **Committed MCP connection.** `.mcp.json` at the repo root pins the project-scope OpenSEO MCP
   (`https://app.openseo.so/mcp`, http transport). The connection is version-controlled and shared
   with the team and agents. Each person runs the OAuth login once on first use; the config itself
   is in Git, not a personal machine.
3. **Vendored skills.** The core OpenSEO Agent Skills are committed under `.claude/skills/`
   (`keyword-research`, `keyword-clustering`, `competitor-analysis`, `seo-project-setup`), rather
   than installed to a personal `~/.claude`. Workflows are version-controlled and reviewable. More
   skills can be added from `every-app/open-seo` the same way.
4. **Tracked research log.** Each research session commits a dated note under `substrate/research/`
   (see its README), capturing seeds, the OpenSEO output that mattered, the decision, and a link to
   the `keywords.yaml` change. This is the audit trail.
5. **Manual handoff.** OpenSEO informs keyword picks. A human hand-enters chosen terms into
   `keywords.yaml` using the existing flow. Nothing can bypass a guardrail because nothing writes
   to the machine contract automatically.

Exit criteria for stage one: the team has used OpenSEO to inform at least one real keyword
decision that shipped a post, with the research logged and the `keywords.yaml` change reviewed,
and we judge the data good enough to automate.

## Stage two: integration (later, only if stage one earns it)

Wire OpenSEO into the machine contract so it proposes directly. The connection and the research
skills are already committed from stage one; stage two adds the automation and the schema. All
changes land inside `foundernexus-content`.

1. **A proposing skill** at `.claude/skills/keyword-propose/SKILL.md`, distinct from the stage-one
   research skills. The orchestrator runs it (the operating model has the planner request research
   from the orchestrator): given a pillar and candidate lane, call OpenSEO tools, then emit
   `status: proposed` cluster and keyword blocks that conform to the `keywords.yaml` schema. It
   proposes only.
2. **Additive `keywords.yaml` fields**, alongside the existing `gsc_impressions` and `gsc_ctr`:
   - `volume` (integer, monthly search volume)
   - `difficulty` (integer 0 to 100, keyword difficulty)
   - `source` (string, e.g. `openseo`, records provenance)
   - `serp_notes` (string, optional, competitor or SERP observations)
   All optional and backward compatible. Existing clusters validate unchanged.
4. **`contract.mjs` update** to allow and type-check the new keys, so a malformed OpenSEO-sourced
   block fails closed at the contract layer.

## Data flow (stage two)

1. Orchestrator runs the `keyword-propose` skill against a pillar.
2. OpenSEO MCP returns terms, volume, difficulty, clusters, competitor and SERP gaps.
3. The skill writes `status: proposed` clusters and keywords into `keywords.yaml` on a branch.
4. A human reviews and approves lane, priority, and terms (the strategy gate).
5. `/new-task` and `/dispatch-task` run the approved work.
6. `fnx-planner` plans, `fnx-builder` writes MDX in `content/blog/`, `fnx-qa` and the Node hooks
   verify.
7. PR opens, Vercel builds a preview, a human merges, the post ships.
8. OpenSEO rank tracking and Google Search Console feed performance back into cluster priority.

## Invariants preserved (both stages)

OpenSEO never writes content, never publishes, never decides a lane, terminology, anti-slop, or
legal question. All existing load-bearing invariants stand: automation prepares and humans send;
the lane gate; the retired-terminology gate; competitor pages need Court and legal sign-off; CTA
routes must return 200 before publishing.

## Verification (stage two)

Reuse the existing checks (`contract.mjs`, `terminology.mjs`, `emdash.mjs`, `content-lint.mjs`).
Add one contract-check case covering the new optional keyword fields, so an OpenSEO-sourced block
with a bad type or shape blocks at the contract layer.

## Later stages

- **Own the infra.** Self-host `fn-openseo` on Cloudflare (Workers, D1, KV, R2, deploy via
  wrangler), repoint the MCP URL, drop the hosted service markup. At this point a DataForSEO API
  key plus a top-up is required, since self-hosting calls DataForSEO directly.
- **Authoring surface, only if needed.** A thin brief-to-`fnx-builder`-to-compliant-PR surface for
  a non-technical author. Not built speculatively.

## Open questions

- If and when we reach stage two, which pillar is the first integration pilot. Candidate:
  `peer-advisory-alternatives`, since it already has published comparison pages to benchmark
  against.
- Exact OpenSEO tool names and response shapes, to be confirmed against the live MCP.
