import type { Metadata } from "next";
import { SITE, BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "What FounderNexus membership looks like at each stage: what you are deciding, why a curated stage-specific room helps, and how to step into one.",
  alternates: { canonical: `${SITE}/membership` },
  openGraph: {
    type: "website",
    url: `${SITE}/membership`,
    title: `Membership | ${BRAND}`,
    description:
      "Curated, stage-specific founder rooms for the decisions where the wrong move is expensive.",
  },
};

const pageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE}/membership#page`,
  url: `${SITE}/membership`,
  name: `Membership | ${BRAND}`,
  isPartOf: { "@id": `${SITE}/#website` },
  about: { "@id": `${SITE}/#org` },
};

const whatWhyHow = [
  {
    label: "What it is",
    lead: "The room is the product.",
    body: "Not a networking community. These are curated, stage-specific founder rooms with relevant experience, practical judgment, and enough trust to pressure-test the tradeoffs that matter.",
  },
  {
    label: "Why it exists",
    lead: "Outcomes are shaped by decision environments.",
    body: "Founders rarely fail for lack of ambition. They fail making expensive decisions under pressure, with incomplete context and too little relevant pattern recognition around them.",
  },
  {
    label: "How it works",
    lead: "Organized by stage and decision.",
    body: "Rooms convene around the choice you are actually carrying, and every session ends with a stated, captured next step, followed up within 48 hours, while the decision is still live.",
  },
];

const stages = [
  {
    chip: "Stage 1",
    chipClass: "bg-blue-100 text-fg",
    title: "Finding the wedge",
    band: "First company or new idea → early revenue",
    inRoom:
      "Founders slightly ahead on the same path, through validation, first revenue, and first capital, with nothing to sell you.",
    deciding: [
      "Direction and validation",
      "The first wedge",
      "Cofounder choice",
      "Early capital",
    ],
    whyRoom:
      "Signal before the decision gets expensive. Free advice and broad content are everywhere; relevant judgment is not. The founder one step ahead of your exact problem can see the tradeoff before it becomes obvious, so you don't spend a year on the wrong wedge. And no one in the room has anything to sell you.",
    wayIn: [
      "Start as a guest, in a session or a lightweight gathering. Experience the room before any membership conversation.",
    ],
  },
  {
    chip: "Stage 2",
    chipClass: "bg-blue-200 text-fg",
    title: "Making it repeatable",
    band: "$0-2M ARR · pre-seed to seed",
    inRoom:
      "Same-stage founders mid-flight on GTM, pricing, and early hires. The ones worth learning from are busy; this room puts them at the same table.",
    deciding: [
      "First go-to-market motion",
      "Pricing",
      "Early pilots",
      "Seed extension",
      "First senior hire",
    ],
    whyRoom:
      "A room convened around the decision you are carrying now, not a fixed group on a fixed calendar, and not one retained opinion. Breadth of relevant venture-scale peers matters here: the relevant comparison is not another community fee, it is the cost of an avoidable pricing or GTM mistake.",
    wayIn: [
      "A decision-specific session, a founder dinner, or a fit conversation built around your current problem.",
    ],
  },
  {
    chip: "Stage 3",
    chipClass: "bg-accent text-white",
    title: "Founder-led to team-led",
    band: "$2-10M ARR · Series A and scaling",
    inRoom:
      "Operators who have made the founder-to-team transition, plus an advisor bench of exited founders. Peers this relevant are genuinely scarce; most founders never find this room on their own.",
    deciding: [
      "Founder-led to team-led GTM",
      "The first management layer",
      "Leadership systems",
      "Capital readiness",
    ],
    whyRoom:
      "Operator pattern recognition for your specific problem, this quarter. Many peers one step ahead of the founder-to-team transition, without trading equity for one hired opinion. Your advocate inside FounderNexus surfaces the right room, peer, expert, or resource, so the room comes to you.",
    wayIn: [
      "A stage-matched room or a private dinner.",
      "Founder30, the founding cohort at this stage, is open by invitation.",
    ],
  },
  {
    chip: "Stage 4",
    chipClass: "bg-fg text-white",
    title: "Leading at scale",
    band: "$10M+ ARR · growth stage",
    inRoom:
      "A small number of operators who have carried scale. Peers like this are nearly impossible to assemble yourself; curation is the only way this room exists.",
    deciding: [
      "Strategic capital",
      "Board dynamics",
      "The executive team",
      "Market expansion",
    ],
    whyRoom:
      "The useful contrast is not more advice. It is a small room of operators who have carried comparable tradeoffs, curated for candor. Peers with no board seat, no fund position, and no stake in your answer.",
    wayIn: [
      "By introduction, through a member or an investor partner. Rooms at this stage convene by invitation only.",
    ],
  },
];

const roomCards = [
  {
    title: "The closing ritual",
    body: "Every standard session ends with each member stating their actionable next step aloud, captured on the record.",
    why: "you leave with a decision advanced, not just a good conversation. It is why the hour keeps earning its place on your calendar.",
  },
  {
    title: "Your advocate inside FounderNexus",
    body: "A dedicated point of contact who knows your stage and current decision, and connects you to the right room, peer, expert, or resource.",
    why: "when you are busiest and the stakes are highest, the right room finds you instead of the other way around.",
  },
  {
    title: "Purpose-built subgroups",
    body: "Small, temporary, off-record rooms convened around one live decision, composed for relevance and trust, and disbanded once the issue is addressed.",
    why: "some decisions cannot be discussed in a standing group. This is where they get pressure-tested safely.",
  },
  {
    title: "A seat that's earned",
    body: "Entry is nomination-driven and invitation-only, and fit is mutual: you decide whether this is your room, and the room forms a view on fit.",
    why: "curation is the quality guarantee. Every seat filled carefully protects the value of yours.",
  },
];

const benefitCards = [
  {
    title: "Dedicated 1:1 sessions",
    body: "Strategic one-on-one sessions with senior FounderNexus leaders, including a working session on your core strengths and how to put them to work.",
    why: "an experienced outside read on you as a leader, not just your company.",
  },
  {
    title: "Direct access to experts",
    body: "Industry and topical experts, reachable directly through the member portal when a decision calls for a specialist.",
    why: "specialist answers in days, without hiring for a question or searching for a quarter.",
  },
  {
    title: "Partner benefits and preferred terms",
    body: "Member pricing and offers from vetted service partners: legal, accounting, tax, recruiting, and the tools every company buys, claimable directly in the portal.",
    why: "practical savings on what you are buying anyway, vetted so you don't have to.",
  },
  {
    title: "Advisors without dependency",
    body: "Exited founders and vetted operators deepen the room when a decision calls for them. Matching is member-need driven; partners never influence invitations.",
    why: "depth when a decision calls for it, with no equity cost and no one selling to the room.",
  },
  {
    title: "Membership that compounds",
    body: "Founders who exit return as senior advisors; founders who start again re-enter at the right stage.",
    why: "the network keeps paying across companies, yours, and everyone else's in the room.",
  },
];

function WhyItMatters({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-auto border-t border-line/60 pt-3 text-[13.5px] leading-snug text-muted">
      <strong className="font-semibold text-fg">Why it matters: </strong>
      {children}
    </div>
  );
}

export default function MembershipPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="bg-hero-navy text-white">
        <div className="mx-auto max-w-5xl px-4 pt-24 pb-20 sm:pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
            For founders making decisions where the wrong move is expensive
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl font-bold tracking-tight leading-[1.06]">
            Better decisions start with the right room.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            FounderNexus is judgment infrastructure for venture-scale founders.
            Through curated, stage-specific rooms, members pressure-test their
            highest-stakes decisions with peers who have seen the same patterns
            before, and leave with a practical next step.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">
            This overview explains what membership looks like at each stage:
            what you are deciding, why the room helps, and how to step into one.
          </p>
        </div>
      </section>

      {/* What / Why / How */}
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-2">
        <div className="grid gap-5 sm:grid-cols-3">
          {whatWhyHow.map((c) => (
            <div
              key={c.label}
              className="flex flex-col gap-2.5 rounded-xl border border-line/70 bg-panel p-7 shadow-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.09em] text-accent">
                {c.label}
              </div>
              <p className="text-[15px] leading-relaxed text-muted">
                <strong className="font-semibold text-fg">{c.lead}</strong>{" "}
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The four stages */}
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.09em] text-muted">
            The four stages
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight leading-[1.15]">
            Stage determines relevance. Not industry, not city.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The most useful experience for your decision is a founder one step
            ahead of that exact problem. Same-stage rooms work because timelines
            are desynchronized: someone in the room is always slightly ahead of
            the problem you are carrying now.
          </p>
        </div>

        <div className="mt-7 rounded-xl border border-blue-200 bg-panel2 px-8 py-7">
          <div className="text-[15.5px] font-bold tracking-tight">
            The air gets thinner as you climb.
          </div>
          <p className="mt-2 text-[15px] leading-relaxed text-muted text-pretty">
            Each stage up, founders who have carried your exact tradeoffs get
            scarcer, and harder to reach. A curated seat among them is worth
            more at every step, because it becomes less possible to assemble on
            your own. That is the compounding value of membership: the network
            builds with you, stage after stage.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-6">
          {stages.map((s) => (
            <article
              key={s.chip}
              className="rounded-xl border border-line/70 bg-panel p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3.5">
                <span
                  className={`inline-flex h-7 items-center rounded-full px-3.5 text-[13px] font-semibold ${s.chipClass}`}
                >
                  {s.chip}
                </span>
                <h3 className="text-[22px] font-bold tracking-tight">
                  {s.title}
                </h3>
                <span className="sm:ml-auto text-sm font-medium text-muted">
                  {s.band}
                </span>
              </div>

              <div className="my-6 h-px bg-line/70" />

              <div className="flex items-baseline gap-3">
                <span className="flex-none text-[11px] font-semibold uppercase tracking-[0.09em] text-accent-soft">
                  In the room
                </span>
                <span className="text-[14.5px] leading-snug text-muted">
                  {s.inRoom}
                </span>
              </div>

              <div className="mt-6 grid gap-8 sm:grid-cols-3">
                <div className="flex flex-col gap-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.09em] text-muted">
                    What you&apos;re deciding
                  </div>
                  <ul className="flex flex-col gap-2">
                    {s.deciding.map((d) => (
                      <li
                        key={d}
                        className="flex items-baseline gap-2.5 text-[15px] leading-snug text-fg"
                      >
                        <span className="flex-none translate-y-[5px] h-[5px] w-[5px] rounded-full bg-blue-400" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.09em] text-muted">
                    Why this room
                  </div>
                  <p className="text-[15px] leading-relaxed text-muted text-pretty">
                    {s.whyRoom}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.09em] text-muted">
                    The way in
                  </div>
                  {s.wayIn.map((w) => (
                    <p
                      key={w}
                      className="text-[15px] leading-relaxed text-muted text-pretty"
                    >
                      {w}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* What's in it for you */}
      <section className="mx-auto max-w-5xl px-4 pt-14 pb-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.09em] text-muted">
            Membership
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight leading-[1.15]">
            What&apos;s in it for you
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Membership value comes in two layers: a room you could not assemble
            yourself, and the member benefits built around it.
          </p>
        </div>

        <h3 className="mt-8 text-xl font-bold tracking-tight">
          The room: what you can&apos;t build alone
        </h3>

        <div className="mt-5 rounded-xl border border-blue-200 bg-panel2 p-8">
          <div className="text-[17px] font-bold tracking-tight">
            A stage-specific peer room
          </div>
          <p className="mt-2.5 max-w-3xl text-[15.5px] leading-relaxed text-muted text-pretty">
            The product itself. Members are selected by stage and decision
            context, and fit is observed by peers, not just approved internally.
            Because timelines in a same-stage room are desynchronized, someone
            is always slightly ahead of your current problem, with no equity
            stake, vendor agenda, or investor incentive in your answer.
          </p>
          <div className="mt-4 max-w-3xl border-t border-blue-200 pt-3 text-[13.5px] leading-snug text-muted">
            <strong className="font-semibold text-fg">Why it matters: </strong>
            a network of founders at exactly your stage is the hardest network
            to build on your own, and the one that actually moves your next
            decision.
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {roomCards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-2 rounded-xl border border-line/70 bg-panel p-6 shadow-sm"
            >
              <div className="text-[15.5px] font-bold tracking-tight">
                {c.title}
              </div>
              <p className="text-[14.5px] leading-relaxed text-muted text-pretty">
                {c.body}
              </p>
              <WhyItMatters>{c.why}</WhyItMatters>
            </div>
          ))}
        </div>

        <h3 className="mt-10 text-xl font-bold tracking-tight">
          Beyond the room: member benefits
        </h3>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefitCards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-2 rounded-xl border border-line/70 bg-panel p-6 shadow-sm"
            >
              <div className="text-[15.5px] font-bold tracking-tight">
                {c.title}
              </div>
              <p className="text-[14.5px] leading-relaxed text-muted text-pretty">
                {c.body}
              </p>
              <WhyItMatters>{c.why}</WhyItMatters>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 pt-12 pb-24">
        <div className="rounded-2xl bg-gradient-to-br from-accent to-blue-action p-10 sm:p-12 text-white">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight leading-[1.15]">
            Start with the decision you are carrying.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 text-pretty">
            FounderNexus is invitation-only and organized by stage. The next
            step is not to sell you a membership. It is to place you in a
            relevant room, so you can decide whether this is your room and the
            room can form a view on fit.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="https://www.foundernexus.com/registration"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-accent hover:brightness-95 transition"
            >
              Request an invitation
              <span aria-hidden>&rarr;</span>
            </a>
            <a
              href="https://cal.com/karink/nexus-partner-intro-call"
              className="text-sm font-semibold text-white underline underline-offset-4 hover:text-white/80 transition-colors"
            >
              Nominate a founder
            </a>
          </div>
          <p className="mt-6 text-[13px] leading-normal text-white/65">
            Membership dues are stage-specific and shared during the fit
            conversation.
          </p>
        </div>
      </section>
    </article>
  );
}
