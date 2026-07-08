// Server-only content layer for the internal /social review surface (social/queue/).
// Mirrors lib/content/blog.ts's shape. MUST be imported only from Server Components /
// generateMetadata / generateStaticParams — never from a client import graph.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import type { SocialDerivative } from "@/lib/types";
import { getPost } from "@/lib/content/blog";

const QUEUE_DIR = path.join(process.cwd(), "social", "queue");
const SUFFIX = "-derivatives.md";

interface RawFrontmatter {
  source_article?: string;
  lane?: string;
  asset_type?: string;
  status?: string;
  primary_cta?: string;
  route?: string;
}

function humanize(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function fileToDerivative(fileName: string): SocialDerivative {
  const raw = fs.readFileSync(path.join(QUEUE_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const fm = data as RawFrontmatter;
  const slug = fileName.replace(SUFFIX, "");
  const sourcePost = getPost(slug);
  return {
    slug,
    title: sourcePost?.title ?? humanize(slug),
    sourceArticle: fm.source_article ?? "",
    lane: fm.lane,
    assetType: fm.asset_type,
    status: fm.status,
    primaryCta: fm.primary_cta,
    route: fm.route,
    content,
  };
}

function listDerivativeFiles(): string[] {
  if (!fs.existsSync(QUEUE_DIR)) return [];
  return fs
    .readdirSync(QUEUE_DIR)
    .filter((f) => f.endsWith(SUFFIX))
    .sort();
}

const getAllSocialDerivatives = cache((): SocialDerivative[] => {
  return listDerivativeFiles().map(fileToDerivative);
});

export function getSocialDerivatives(): SocialDerivative[] {
  return getAllSocialDerivatives();
}

export function getSocialDerivative(slug: string): SocialDerivative | null {
  return getAllSocialDerivatives().find((d) => d.slug === slug) ?? null;
}
