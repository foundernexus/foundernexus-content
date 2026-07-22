# 2026-07-21: GSC keyword clustering. The blog is not live, so there is nothing to cluster

**Workflow:** `keyword-clustering` (GSC-driven), OpenSEO hosted MCP, project Default (`foundernexus.com`).
**Goal it was serving:** non-branded organic clicks that convert to applications.
**Headline:** the exercise returned a null result by design. None of the 22 published-in-repo blog
posts exist on the live domain, so they earn zero impressions and there is no organic demand to map
onto them. The blocker to the stated goal is upstream of all keyword work: the content is not deployed.

## Seeds and scope

- Source: Google Search Console, `sc-domain:foundernexus.com`, last 3 months (2026-04-19 to 2026-07-19),
  dimensions `["query","page"]`, 278 rows (full set, `hasMore:false`).
- Cross-checked against `substrate/keywords.yaml` (6 clusters, 22 posts, all `status: published`).

## OpenSEO output that mattered

**1. Zero blog URLs in GSC.** Across all 278 query-to-page rows, not one `/blog/` URL appears. Every
ranking page is `/`, `/events`, `/event/*`, `/member-login`, `/pre-qualify`, `/registration`.

**2. URL Inspection: blog posts are unknown to Google.** Inspected 4 representative posts
(`ypo-alternatives-for-founders`, `founder-nexus-vs-vistage`, `what-makes-a-founder-worth-nominating`,
`warm-intro-vs-cold-outreach`). All four: `verdict: NEUTRAL`, `coverageState: "URL is unknown to
Google"`, never discovered, not "crawled/not indexed." Homepage by contrast: `PASS / Submitted and
indexed`, Google-canonical equals declared canonical equals non-www.

**3. Live HTTP confirms why.** `https://foundernexus.com/blog` and `.../blog/ypo-alternatives-for-founders`
both return **404**. The live `sitemap.xml` has **124 URLs, zero of them `/blog`**, only homepage,
registration, terms, privacy, events, and event pages. `robots.txt` allows all. The live property is
an events/community platform; the 22 repo posts are not deployed to it.

**4. www/non-www is NOT a problem.** GSC query rows show both hostnames historically, but
`https://www.foundernexus.com/` returns `Page with redirect`, canonical `https://foundernexus.com/`.
The 301 and canonical are correct. No live cannibalization.

**5. What actually earns non-branded impressions (all of it on event pages, none strategic to a lane):**
   - `court lorenzini`: 90 impr @ pos 5.7 on `/event/byot-...`, 60 impr @ pos 7.3 on another event page,
     0 clicks. Founder name has demand; no bio/about page owns it.
   - `joaquin gallardo`, `juaquin gallardo` (24 impr), `two ravens vc`, `tre balchowsky`,
     `pitch deck teardown`, `svb / silicon valley bank venture debt`: speaker/topic terms on event pages,
     pos 5 to 30, 0 clicks.
   - `founder event`: 81 impr @ pos 8.8 on homepage. Weak, generic.
   - Large tail of brand-confusion noise (`biznexus`, `evonexus`, `devnexus`, `foundersuite`,
     `founderscan`, `foundr.com`, `learnexus ... contractors`, `founder's nexus bahadurgarh`): wrong
     company, pos 20 to 100, 0 clicks. No value.

**6. Commercial lane terms are entirely absent.** No impressions for `YPO alternatives`, `Vistage/EO/
Chief/Hampton` comparisons, `peer group for founders`, `executive peer group`, or any buying-intent
term the 6 clusters target. There is no ranking, no near-ranking, no striking distance, because the
pages are not live.

## Decision

- **No `keywords.yaml` change.** Clustering cannot proceed against GSC demand that does not exist.
  Targeting, lane, and priority in `keywords.yaml` are sound; the gap is deployment, not strategy.
- **The gating question is not an SEO-keyword question.** Before clustering, competitor analysis, or
  new keyword research can move the goal, the blog has to exist at a crawlable URL, be listed in
  `sitemap.xml`, and be internally linked from an indexed page. That is a publishing/eng decision
  (and, given `README.md`'s "V0 is manual by design," a deliberate one), not a research output.
- Related funnel note: the conversion destinations the goal depends on are also thin.
  `/apply`, `/nominate`, `/newsletter` are 404 today (`substrate/routing-rules.md` §2a); the live
  apply path appears to be `/pre-qualify` or `/registration`.

## Follow-through

- No PR to `keywords.yaml`.
- Open decision for Robroy/Court: where the blog is meant to live (this Next.js app on a subpath or
  subdomain, vs. the current events platform) and when it ships. Until then, "non-branded organic to
  applications" has no surface to rank.
- Once the blog is live and in the sitemap, re-run this exact clustering pass; the striking-distance
  and cannibalization checks become meaningful at that point. Candidate first pilot for benchmarking:
  the `peer-advisory-alternatives` comparison pages.
- Secondary, independent of the blog: `court lorenzini` has real, repeated search demand landing on
  arbitrary event pages at pos 5 to 7 with 0 clicks. A canonical founder bio/about page would capture
  brand-adjacent demand the events platform is currently wasting. Worth a separate note.

## Credits

GSC performance, URL Inspection, and live HTTP checks used **0 OpenSEO/DataForSEO credits**
(all first-party GSC reads). Balance unchanged at 438.
