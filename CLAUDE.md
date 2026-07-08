# CLAUDE.md — FounderNexus Content

## What this repo is

The working surface for the FounderNexus signal-to-room marketing system. **V0 is manual by
design** (README.md): the judgment substrate and review surfaces come before any generator or
posting automation. The "source" is markdown prose plus one machine contract, `substrate/keywords.yaml`.

## How we work

This repo runs the agent OS in `.claude/orchestration/README.md`. Three agents:
`fnx-planner` (plans, read-only), `fnx-builder` (writes content), `fnx-qa` (verifies, can't edit).

- **Golden rule:** durable state lives in repo artifacts, not the context window. Externalize to
  `HANDOVER.md` / `DECISIONS.md` before you compact. The failure we defend against is **goal drift**.
- **Gates ratchet:** they block regressions vs the task baseline, never demand a green baseline.
- **Layering:** facts here → procedures in `.claude/skills/` → must-hold rules in hooks
  (`.claude/settings.json`, driven by `.claude/verify-manifest.json`) → isolation in subagents + worktrees.
- **Hooks are Node** (`node .claude/hooks/scripts/*.mjs`) — no jq/python/prettier on this machine.

## Load-bearing invariants (a change must never break these)

- **Retired terminology never ships.** Use Stage 1–4 (never Tier), Nexus Partner (never Chapter chair),
  Stage-based room (never Chapter), Session (never Event). See `substrate/content-standards.md` §2.
- **No em dashes.** Periods or commas (§3).
- **The lane gate:** every `substrate/keywords.yaml` cluster carries exactly one of the five approved
  lanes; no article without an approved lane (`substrate/campaign-lanes.md`).
- **Automation prepares, humans send.** Nothing posts, comments, messages, or emails on anyone's behalf
  (`substrate/engagement-guardrails.md` §1). Suppression (Attio) is absolute.
- **CTA routes must return a live 200 before publishing.** `/apply`, `/nominate`, `/newsletter` are 404
  today (`substrate/routing-rules.md` §2a).
- **Named-network/competitor content needs Court + legal sign-off** (§6, comparison-page-playbook).

## Verify (Node scripts; ratcheted at hand-off, not self-attested)

```
node .claude/hooks/scripts/checks/contract.mjs      # keywords.yaml machine contract
node .claude/hooks/scripts/checks/terminology.mjs   # retired terms in content/ + social/
node .claude/hooks/scripts/checks/emdash.mjs         # em dashes
node .claude/hooks/scripts/checks/content-lint.mjs   # draft front-matter / lane / TL;DR
```

No typecheck/test/build exist; these are the checks. `named-entity`, `links`, and `slop` are advisory
(`slop` = `substrate/anti-slop.md` Part-A mechanical patterns); live-200, the dual-pass voice review
(which runs the full `anti-slop.md`, Part-A + Part-B), and sign-off are manual SMOKE steps.

## Drive it

`/orient` (re-orient a cold session) · `/new-task` (scaffold a brief) · `/dispatch-task NNN` (run it).
