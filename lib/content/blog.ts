// Server-only content layer (guide §6). Reads files with fs + gray-matter and
// returns the shared types. Wrapped in React cache() so the filesystem is read
// once per request. MUST be imported only from Server Components / Route Handlers
// / generateMetadata / generateStaticParams / sitemap — never from a client import
// graph (§11), or the bundler tries to put `fs` in the browser bundle.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import type { Post, PostsResponse, Seo, Tag, BlogHub } from "@/lib/types";
import { SITE } from "@/lib/site";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const META_FILE = path.join(process.cwd(), "content", "_meta", "blog.md");
const NON_POST_FILES = new Set(["_TEMPLATE.md"]);

interface RawSeo {
  metaTitle: string;
  metaDescription: string;
  canonicalURL: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  shareImage: string;
  metaRobots: string;
  structuredData: unknown;
}

interface PostFrontmatter {
  title: string;
  slug: string;
  shortDescription?: string;
  publishedAt?: string;
  updatedAt?: string;
  cover?: string;
  coverAlt?: string;
  tags?: string[];
  postType?: string;
  readingTime?: number;
  author?: string;
  seo?: Partial<RawSeo>;
}

function mapSeo(raw: Partial<RawSeo> | undefined, fallbackCanonical: string): Seo {
  return {
    metaTitle: raw?.metaTitle ?? "",
    metaDescription: raw?.metaDescription ?? "",
    canonicalURL: raw?.canonicalURL || fallbackCanonical,
    ogTitle: raw?.ogTitle ?? "",
    ogDescription: raw?.ogDescription ?? "",
    ogType: raw?.ogType ?? "article",
    metaRobots: raw?.metaRobots ?? "",
    shareImage: raw?.shareImage ? { url: raw.shareImage } : null,
    structuredData: (raw?.structuredData ?? null) as Seo["structuredData"],
  };
}

function mapTags(tags: string[] | undefined): Tag[] | undefined {
  return tags?.length ? tags.map((name, id) => ({ id, name })) : undefined;
}

// UI convenience: if a post omits readingTime, estimate from the body (~200 wpm).
function estimateReadingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function fileToPost(fileName: string, index: number): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  const slug = fm.slug || fileName.replace(/\.md$/, "");
  return {
    id: index,
    slug,
    title: fm.title ?? "",
    content,
    shortDescription: fm.shortDescription,
    publishedAt: fm.publishedAt ?? "",
    updatedAt: fm.updatedAt ?? fm.publishedAt ?? "",
    cover: fm.cover ? { url: fm.cover, alternativeText: fm.coverAlt ?? null } : undefined,
    tags: mapTags(fm.tags),
    postType: fm.postType,
    readingTime: fm.readingTime && fm.readingTime > 0 ? fm.readingTime : estimateReadingTime(content),
    author: fm.author,
    seo: mapSeo(fm.seo, `${SITE}/blog/${slug}`),
  };
}

function listPostFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !NON_POST_FILES.has(f))
    .sort();
}

const getAllPosts = cache((): Post[] => {
  const posts = listPostFiles().map(fileToPost);
  posts.sort((a, b) => {
    const da = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const db = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return db - da; // newest first
  });
  return posts;
});

export function getPosts(params?: {
  page?: number | string;
  pageSize?: number | string;
}): PostsResponse {
  const all = getAllPosts();
  const total = all.length;
  const pageSize = Number(params?.pageSize) > 0 ? Number(params!.pageSize) : Math.max(1, total);
  const page = Number(params?.page) > 0 ? Number(params!.page) : 1;
  const start = (page - 1) * pageSize;
  return {
    data: all.slice(start, start + pageSize),
    meta: {
      pagination: {
        page,
        pageSize,
        pageCount: Math.max(1, Math.ceil(total / pageSize)),
        total,
      },
    },
  };
}

export function getPost(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}

export function getBlogHub(): BlogHub | undefined {
  if (!fs.existsSync(META_FILE)) return undefined;
  const { data } = matter(fs.readFileSync(META_FILE, "utf8"));
  const fm = data as {
    title?: string;
    subtitle?: string;
    featuredPostSlug?: string;
    seo?: Partial<RawSeo>;
  };
  const posts = getAllPosts();
  const featuredPost =
    (fm.featuredPostSlug && posts.find((p) => p.slug === fm.featuredPostSlug)) || posts[0];
  if (!featuredPost) return undefined;
  return {
    title: fm.title ?? "",
    subtitle: fm.subtitle ?? "",
    featuredPost,
    seo: mapSeo(fm.seo, `${SITE}/blog`),
  };
}
