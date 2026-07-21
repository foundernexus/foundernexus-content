# SEO research log

Every OpenSEO research session leaves a tracked artifact here, so keyword activity and the
reasoning behind it live in Git and pass through PR review. This is the audit trail: the hosted
OpenSEO app does the compute, but the decisions and their provenance are version-controlled.

## What to commit

One dated note per research session, named `YYYY-MM-DD-<topic>.md`, capturing:

- **Seeds and scope.** Topics, pages, competitors, market/location/language.
- **OpenSEO output that mattered.** The candidate terms with `volume`, `difficulty`, intent, and
  any SERP or competitor observations. Paste the shortlist, not the raw dump.
- **Decision.** Which terms we are targeting, which lane they map to, and why. Which we are
  dropping and why.
- **Follow-through.** The `keywords.yaml` change (link the PR) and any post briefs it seeds.

## Flow

1. Run an OpenSEO skill (`/keyword-research`, `/keyword-clustering`, `/competitor-analysis`) in
   Claude Code, connected via the project `.mcp.json`.
2. Write the dated note here.
3. Make the `keywords.yaml` change on a branch. A human approves lane and priority.
4. Open a PR. The note and the `keywords.yaml` diff review together.

Nothing here changes the guardrails: OpenSEO informs, a human decides, and the existing lane,
terminology, anti-slop, and legal gates still apply before anything publishes.
