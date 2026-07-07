import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Link from "next/link";

// Server component. remark-gfm = tables/strikethrough/task lists; rehype-raw = inline
// HTML; rehype-slug = heading ids (powers anchors + the in-page TOC).
export default function PostContent({ content }: { content: string }) {
  return (
    <div className="markdown-body [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          a: ({ href, children }) => {
            const url = href || "/";
            return url.startsWith("/") ? (
              <Link href={url}>{children}</Link>
            ) : (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
