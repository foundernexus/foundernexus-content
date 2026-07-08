# fnx Task Registry

The status board. One row per task; the row stays even after the brief is archived. The
orchestrator keeps this current — it is the fast index a cold session reads via `/orient`.

Status values: `queued · planning · ready · building · in-review · done · archived · blocked · qa-failed`.

| ID  | Date       | Title                                                     | Risk     | Status   | QA                                |
| --- | ---------- | --------------------------------------------------------- | -------- | -------- | --------------------------------- |
| 000 | 2026-07-07 | EXAMPLE — worked comparison-page brief                    | standard | archived | pass                              |
| 001 | 2026-07-07 | Draft: how founders get better feedback on hard decisions | standard | archived | pass                              |
| 002 | 2026-07-07 | Draft: warm intro to VC vs cold outreach                  | standard | archived | pass                              |
| 003 | 2026-07-07 | Draft: how founders get a fast-pass into VC conversations | standard | archived | pass                              |
| 004 | 2026-07-07 | Draft: what actually gets a VC to read your deck          | standard | archived | pass                              |
| 005 | 2026-07-07 | Draft: cold email to VCs, does it ever work               | standard | archived | pass                              |
| 006 | 2026-07-08 | Draft: when to raise a bridge round                       | standard | archived | pass                              |
| 007 | 2026-07-08 | Draft: co-founder conflict and when to split              | standard | archived | pass                              |
| 008 | 2026-07-08 | Draft: pricing your first enterprise deal                 | standard | archived | pass                              |
| 009 | 2026-07-08 | Draft: what makes a founder worth nominating              | standard | archived | pass                              |
| 010 | 2026-07-08 | Draft: how to know if a founder belongs in your room      | standard | archived | pass                              |
| 011 | 2026-07-08 | Draft: FounderNexus vs Vistage                            | standard | blocked  | pass (held: Court+legal sign-off) |
| 012 | 2026-07-08 | Draft: FounderNexus vs Chief                              | standard | blocked  | pass (held: Court+legal sign-off) |
| 013 | 2026-07-08 | Draft: how founders actually use a peer room              | standard | archived | pass                              |
| 014 | 2026-07-08 | Draft: what changes after one good decision conversation  | standard | archived | pass                              |

<!-- Add new rows at the bottom via /new-task. Keep newest activity reflected in Status. -->
