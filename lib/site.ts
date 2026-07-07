// lib/site.ts — the single per-project config. Safe to import ANYWHERE
// (server or client) — plain strings, no `fs` (see §11 of the build guide).
// EDIT THESE THREE when the real domain/branding is confirmed.

export const SITE = "https://foundernexus.com"; // your origin, NO trailing slash (placeholder)
export const BRAND = "FounderNexus";
export const LOGO = `${SITE}/brand/foundernexus-mark-square.jpeg`; // absolute URL to your logo (used in JSON-LD)
