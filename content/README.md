# Content authoring kit (blog)

No CMS. A post is one Markdown file in git. This is exactly how a human _and_ an AI
agent author a post: write the `.md`, drop images, open a PR.

## Structure

```
content/
├── README.md                 ← this file
├── blog/
│   ├── _TEMPLATE.md          ← copy to start a post; never publishes
│   └── <slug>.md             ← one file per post → /blog/<slug>
└── _meta/
    └── blog.md               ← the /blog hub singleton (title, subtitle, featured, SEO)

public/images/blog/<slug>/…   ← post images (cover + inline), referenced as /images/blog/<slug>/x.png
```

## Workflow

1. Copy `content/blog/_TEMPLATE.md` → `content/blog/<slug>.md`.
2. Drop the cover at `public/images/blog/<slug>/cover.png`; point `cover` + `seo.shareImage` at it.
   (No cover art yet? Run `node scripts/make-placeholders.mjs <slug>` to generate a placeholder.)
3. Fill in the frontmatter (all SEO fields) and write the Markdown body.
4. Run `node scripts/optimize-images.mjs` (optional; no-op until `sharp` is installed).
5. `npm run build` (or `npm run dev`) → open `/blog` and `/blog/<slug>`; view source and confirm
   `<title>`, `<link rel="canonical">`, `og:*`, and the `application/ld+json` block are present.
6. Commit the `.md` + images and open a PR. It ships on the next deploy.

## House style (from `substrate/content-standards.md`)

Conclusion first (lead with a TL;DR), no em dashes, no filler, one core argument, one CTA
matched to the lane. Name the founder decision the piece helps someone make. Never use retired
terms (Stage 1-4 not Tier; Nexus Partner not the old chapter-lead title; Session not Event).

The `seo.canonicalURL`, `cover`, and per-project origin all assume `https://foundernexus.com`
via `lib/site.ts`. Change `SITE`/`BRAND`/`LOGO` there if the domain changes.
