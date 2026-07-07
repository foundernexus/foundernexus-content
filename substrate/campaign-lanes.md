# FounderNexus Campaign Lanes

Read by: keyword pipeline, article generator, atomizer, weekly readout
Rule: an article only generates if its keyword cluster maps to one of these five lanes. No lane, no article.

## 1. VC Fast-Pass

**What it is:** Content and outreach supporting the referral path from FounderNexus into VC conversations.
**Audience:** Stage 2 to 3 founders actively fundraising or about to be.
**Primary ask:** Apply for a Fast-Pass intro.
**Content types:** Comparison articles (warm intro vs. cold), proof stories from founders who got funded through the path.
**Success signal:** Fast-Pass applications, VC-side conversations started.

## 2. Founder Nomination

**What it is:** Content that drives existing members to nominate peers, the referral flywheel. Highest-leverage lane, and the one to run manually end to end first.
**Audience:** Current members and their trusted founder network.
**Primary ask:** Nominate a founder.
**Content types:** Peer-advisory comparison content, "what a good room looks like" pieces, member proof stories.
**Success signal:** Nominations submitted, nomination-to-application conversion.

## 3. Event Conversion

**What it is:** Content tied to a specific session that converts attendees into applicants or members.
**Audience:** Session registrants and attendees.
**Primary ask:** RSVP, then apply.
**Content types:** Session landing pages, follow-up recaps, speaker-led proof content.
**Success signal:** RSVPs, post-session applications.

## 4. LinkedIn-Assisted Demand

**What it is:** Content built to be atomized into Court's LinkedIn voice, building authority that pulls inbound interest.
**Audience:** Broad founder audience at Stage 2 to 3, not yet in the funnel.
**Primary ask:** Follow, engage, or land on the newsletter.
**Content types:** Point-of-view pillar articles built to atomize into three to five LinkedIn posts.
**Success signal:** Engagement quality (comments from qualified founders), newsletter signups attributed to LinkedIn.

## 5. Proof Capture

**What it is:** Content whose real job is generating a reusable proof asset (quote, story, data point) for the proof bank, not immediate conversion.
**Audience:** Existing members willing to go on record.
**Primary ask:** Permission to publish their story.
**Content types:** Member interviews, case studies, decision-story writeups.
**Success signal:** Proof assets added to the proof bank with permission on file.

## Gate rule

Every `keywords.yaml` cluster carries exactly one `lane`. If a proposed keyword doesn't fit one of these five, it gets killed or held. It does not get a sixth lane invented on the fly. New lanes require Robroy and Court sign-off, not a generator default.

## Asset-type note: comparison pages

Comparison pages are an asset type, not a sixth lane. A comparison page usually belongs in `linkedin-assisted-demand` because its first job is to clarify the FounderNexus worldview and warm qualified founder demand.

Use `founder-nomination` for a comparison page only when the page is written for members, VCs, advisors, or trusted sources who are being asked to nominate someone else.

See `comparison-page-playbook.md` for routing rules.
