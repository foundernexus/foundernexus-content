import type { Metadata } from "next";
import Image from "next/image";
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

const collage = [
  {
    src: "/images/blog/how-founders-use-a-peer-room/cover.png",
    alt: "FounderNexus members gathered in front of a session screen",
    className: "translate-y-6",
  },
  {
    src: "/images/blog/fast-pass-into-vc-conversations/cover.png",
    alt: "A founder speaking to a full room against the city skyline",
    className: "-translate-y-2",
  },
  {
    src: "/images/blog/cold-email-to-vcs/cover.png",
    alt: "Founders around a dinner table at a FounderNexus session",
    className: "translate-y-10",
  },
  {
    src: "/images/blog/warm-intro-vs-cold-outreach/cover.png",
    alt: "Founders in conversation beside floor-to-ceiling windows",
    className: "translate-y-2",
  },
];

const beliefs = [
  {
    n: "01",
    title: "Founders learn best from founders.",
    body: "Experience transfers. When someone who has faced your exact situation tells you what they did and what it cost them, you get immediately actionable insight, not theory. No credential substitutes for having lived it.",
  },
  {
    n: "02",
    title: "Judgment is infrastructure, not luck.",
    body: "Decision quality compounds. A community structured around real-time decision support changes outcomes in a way no amount of content, capital, or encouragement can.",
  },
  {
    n: "03",
    title: "Every founder counts, not just the CEO.",
    body: "If you have been a founder in any capacity, the weight you carry is real and your experience is valuable to someone else in the room. Membership is reciprocal by design.",
  },
  {
    n: "04",
    title: "Reducing founder stress is a legitimate goal.",
    body: "We are not an incubator or an accelerator. No cohorts, no timelines, no task assignments. Founders who share the load energize each other, solve problems faster, and build better teams.",
  },
];

const criteria = [
  {
    n: "01",
    title: "At least three years as a founder.",
    body: "Enough time in the seat to have made real decisions and lived with what they cost.",
  },
  {
    n: "02",
    title: "A track record of raising outside capital.",
    body: "You have convinced investors to back you, and you carry the weight that comes with it.",
  },
  {
    n: "03",
    title: "A plan to build a $100M+ business.",
    body: "Venture-scale ambition, not a lifestyle company or a side project.",
  },
];

export default function MissionPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero: mission statement on rich navy, with photo collage */}
      <section className="bg-hero-navy text-white overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 pt-24 pb-8 sm:pt-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            For founders, by founders
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.02]">
            Raise the odds of success for every venture-scale founder.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Not with courses, cohorts, or generic advice. By putting founders
            who have lived your decision in the room at the moment you have to
            make it.
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-start pt-10">
            {collage.map((img) => (
              <div
                key={img.src}
                className={`relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/15 shadow-2xl shadow-black/40 ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-hero-navy/20 mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
        <div className="h-24 bg-gradient-to-b from-transparent to-ink" />
      </section>

      {/* The founding insight */}
      <section className="mx-auto max-w-5xl px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              The insight we are built on
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              The best guidance a founder ever gets comes from other founders.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-fg/90">
            <p>
              FounderNexus started with an uncomfortable observation. The worst
              guidance our founder ever received came from investors, advisors,
              and board members who had never been founders themselves. They
              meant well. They were invested in his success. But they had not
              lived the experience, and being a founder has complexities you
              only understand by carrying them yourself.
            </p>
            <p>
              Every founder knows the feeling of walking around with a bag of
              explosives strapped on: the decisions ahead of you that will
              meaningfully change your outcome, each one ticking at a different
              volume until one demands your attention. Founders rarely lack
              willingness to seek input at that moment. What they lack is
              access to someone who has already defused the same device.
            </p>
            <p className="font-medium text-fg">
              We exist to close that gap. That is the entire company.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote band */}
      <section className="bg-hero-navy text-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <p className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight">
            &ldquo;Once you hear from other experienced founders, you have
            immediately actionable insight into how to make a better
            decision.&rdquo;
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-white/50">
            Court Lorenzini, Founder
          </p>
        </div>
      </section>

      {/* What we believe */}
      <section className="mx-auto max-w-5xl px-4 py-24">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          What we hold true
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
          We exist for our founders. Four commitments back that up.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {beliefs.map((b) => (
            <div
              key={b.n}
              className="rounded-2xl border border-line/70 bg-panel p-8 shadow-sm transition hover:shadow-md"
            >
              <span className="font-product text-sm text-accent">
                {"{" + b.n + "}"}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder's note */}
      <section className="bg-panel2 border-y border-line/60">
        <div className="mx-auto max-w-5xl px-4 py-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              From our founder
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-fg/90">
              <p>
                I have started four technology companies across very different
                industries. I was the founding CEO of DocuSign. I had a couple
                of modest successes, and I watched one of my companies
                catastrophically fail. I have served on dozens of boards and
                advisory roles, and I have seen every possible outcome.
              </p>
              <p>
                I spent my career learning how venture-scale startups actually
                succeed. The single most reliable pattern: founders who borrow
                the scar tissue of other founders make better decisions than
                founders who go it alone. FounderNexus is how I put that
                pattern to work for you.
              </p>
              <p className="font-semibold text-fg">Court Lorenzini, Founder</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-line shadow-xl">
            <Image
              src="/images/blog/founder-decision-quality/inline-1.png"
              alt="A FounderNexus session in progress"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-5xl px-4 py-24">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Who it&apos;s for
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
          The bar to join is high, on purpose.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg/90">
          FounderNexus is built for founders who have already learned how hard a
          venture-scale company is to build, and who know that however many
          times they have been at bat, there is always more to learn. Before you
          sit in a session, we look for three things.
        </p>
        <div className="mt-12 divide-y divide-line/70 rounded-2xl border border-line/70 bg-panel shadow-sm">
          {criteria.map((c) => (
            <div key={c.n} className="flex gap-6 p-8">
              <span className="font-product text-sm text-accent pt-1">
                {"{" + c.n + "}"}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-fg/90">
          And you do not have to be the CEO. If you have been a founder in any
          capacity, the seat is open to you, and the experience you carry is
          valuable to someone else in the room.
        </p>
      </section>

      {/* Single CTA on navy */}
      <section className="bg-hero-navy text-white">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Bring us your hardest problem.
          </h2>
          <p className="mt-5 text-white/70 max-w-xl mx-auto leading-relaxed">
            If this mission sounds like it was written for you, it probably
            was. Apply, and if you meet our criteria you will attend your first
            session free, as our guest.
          </p>
          <a
            href="https://www.foundernexus.com/registration"
            className="inline-flex items-center gap-2 mt-9 rounded-lg bg-accent text-accent-ink px-7 py-3.5 text-sm font-semibold hover:brightness-110 transition"
          >
            Apply to join
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </article>
  );
}
