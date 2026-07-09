import type { Metadata } from "next";
import { SITE, BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our mission",
  description:
    "Why FounderNexus exists: the best guidance a founder ever gets comes from other founders. We are built to put that guidance in the room when the decision is live.",
  alternates: { canonical: `${SITE}/mission` },
  openGraph: {
    type: "website",
    url: `${SITE}/mission`,
    title: `Our mission | ${BRAND}`,
    description:
      "Why FounderNexus exists: the best guidance a founder ever gets comes from other founders.",
  },
};

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE}/mission#page`,
  url: `${SITE}/mission`,
  name: `Our mission | ${BRAND}`,
  isPartOf: { "@id": `${SITE}/#website` },
  about: { "@id": `${SITE}/#org` },
};

export default function MissionPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Mission statement */}
      <section className="mx-auto max-w-3xl px-4 pt-28 pb-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Our mission
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight leading-[1.05]">
          Raise the odds of success for every venture-scale founder.
        </h1>
        <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
          Not with courses, cohorts, or generic advice. By putting founders who
          have lived your decision in the room at the moment you have to make
          it.
        </p>
      </section>

      {/* The founding insight */}
      <section className="bg-panel border-y border-line/60">
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Why we exist
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-fg/90">
            <p>
              FounderNexus started with an uncomfortable observation. The best
              guidance our founder ever received came from other founders. The
              worst came from investors, advisors, and board members who had
              never been founders themselves.
            </p>
            <p>
              They meant well. They were invested in his success. But they had
              not lived the experience, and being a founder has complexities you
              only understand by carrying them yourself.
            </p>
            <p>
              Every founder knows the feeling of walking around with a bag of
              explosives strapped on: the decisions ahead of you that will
              meaningfully change your outcome, each one ticking at a different
              volume until one demands your attention. Founders rarely lack
              willingness to seek input at that moment. What they lack is access
              to someone who has already defused the same device.
            </p>
            <p className="font-medium text-fg">
              We exist to close that gap. That is the entire company.
            </p>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">
          What we believe
        </h2>
        <div className="mt-8 space-y-10">
          <div>
            <h3 className="text-lg font-semibold">
              Founders learn best from founders.
            </h3>
            <p className="mt-2 text-muted leading-relaxed">
              Experience transfers. When someone who has faced your exact
              situation tells you what they did and what it cost them, you get
              immediately actionable insight, not theory. No credential
              substitutes for having lived it.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Judgment is infrastructure, not luck.
            </h3>
            <p className="mt-2 text-muted leading-relaxed">
              Decision quality compounds. A community structured around
              real-time decision support changes outcomes in a way no amount of
              content, capital, or encouragement can.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Every founder counts, not just the CEO.
            </h3>
            <p className="mt-2 text-muted leading-relaxed">
              If you have been a founder in any capacity, the weight you carry
              is real and your experience is valuable to someone else in the
              room. Membership is reciprocal by design.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Reducing founder stress is a legitimate goal.
            </h3>
            <p className="mt-2 text-muted leading-relaxed">
              We are not an incubator or an accelerator. No cohorts, no
              timelines, no task assignments. Founders who can share the load
              energize each other, solve problems faster, and build better
              teams. The result is higher odds of success for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's note */}
      <section className="bg-panel2 border-y border-line/60">
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            From our founder
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-fg/90">
            <p>
              I have started four technology companies across very different
              industries. I was the founding CEO of DocuSign. I had a couple of
              modest successes, and I watched one of my companies
              catastrophically fail. I have served on dozens of boards and
              advisory roles, and I have seen every possible outcome.
            </p>
            <p>
              I spent my career learning how venture-scale startups actually
              succeed. The single most reliable pattern: founders who borrow the
              scar tissue of other founders make better decisions than founders
              who go it alone. FounderNexus is how I put that pattern to work
              for you.
            </p>
            <p className="font-medium text-fg">Court Lorenzini, Founder</p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-panel border-y border-line/60">
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Who it&apos;s for
          </h2>
          <p className="mt-6 text-base leading-relaxed text-fg/90">
            The bar to join is high, on purpose. FounderNexus is built for
            founders who have already learned how hard a venture-scale company
            is to build, and who know that however many times they have been at
            bat, there is always more to learn. Before you sit in a session, we
            look for three things.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent"
              />
              <span className="text-base leading-relaxed text-fg/90">
                <span className="font-semibold text-fg">
                  At least three years as a founder.
                </span>{" "}
                Enough time in the seat to have made real decisions and lived
                with what they cost.
              </span>
            </li>
            <li className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent"
              />
              <span className="text-base leading-relaxed text-fg/90">
                <span className="font-semibold text-fg">
                  A track record of raising outside capital.
                </span>{" "}
                You have convinced investors to back you, and you carry the
                weight that comes with it.
              </span>
            </li>
            <li className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent"
              />
              <span className="text-base leading-relaxed text-fg/90">
                <span className="font-semibold text-fg">
                  A plan to build a $100M+ business.
                </span>{" "}
                Venture-scale ambition, not a lifestyle company or a side
                project.
              </span>
            </li>
          </ul>
          <p className="mt-8 text-base leading-relaxed text-fg/90">
            And you do not have to be the CEO. If you have been a founder in any
            capacity, the seat is open to you, and the experience you carry is
            valuable to someone else in the room.
          </p>
        </div>
      </section>

      {/* Single CTA */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Bring us your hardest problem.
        </h2>
        <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed">
          If this mission sounds like it was written for you, it probably was.
          Apply, and if you meet our criteria you will attend your first session
          free, as our guest.
        </p>
        <a
          href="https://www.foundernexus.com/registration"
          className="inline-flex items-center gap-2 mt-8 rounded-lg bg-accent text-accent-ink px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
        >
          Apply to join
          <span aria-hidden>→</span>
        </a>
      </section>
    </article>
  );
}
