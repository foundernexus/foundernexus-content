// Shared content types for the file-based blog (guide §5). structuredData is kept
// as a loose record (emitted verbatim as JSON-LD) to avoid a schema-dts dependency.

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  canonicalURL: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  metaRobots: string;
  shareImage: { url: string } | null;
  structuredData: Record<string, unknown> | null;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string; // raw markdown body
  shortDescription?: string;
  publishedAt: string;
  updatedAt: string;
  cover?: { url: string; alternativeText?: string | null };
  tags?: Tag[];
  postType?: string;
  readingTime: number;
  author?: string;
  seo: Seo | null;
}

export interface PostsResponse {
  data: Post[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}

export interface BlogHub {
  title: string;
  subtitle: string;
  featuredPost: Post;
  seo: Seo;
}
