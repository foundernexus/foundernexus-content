import Link from "next/link";
import { BRAND } from "@/lib/site";

export default function Home() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-28">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        For venture-scale founders
      </p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight leading-[1.05]">{BRAND}</h1>
      <p className="mt-5 text-lg text-muted max-w-xl leading-relaxed">
        Judgment infrastructure for venture-scale founders. The best room is not the biggest
        network. It is the one that makes the next decision clearer.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 mt-9 rounded-lg bg-accent text-accent-ink px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition"
      >
        Read the blog
        <span aria-hidden>→</span>
      </Link>
    </section>
  );
}
