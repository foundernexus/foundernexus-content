import GithubSlugger from "github-slugger";

interface Heading {
  depth: number;
  text: string;
  id: string;
}

// Parse ##/### headings into { text, id }. Uses github-slugger — the same algorithm
// rehype-slug uses to id the rendered headings — so anchors line up.
function extractHeadings(markdown: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  let inFence = false;
  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = line.match(/^(#{2,3})\s+(.*)$/);
    if (m) {
      const text = m[2].replace(/[#*`_]/g, "").trim();
      if (text) headings.push({ depth: m[1].length, text, id: slugger.slug(text) });
    }
  }
  return headings;
}

export default function TableOfContents({ content }: { content: string }) {
  const headings = extractHeadings(content);
  if (headings.length < 2) return null;
  return (
    <nav aria-label="Table of contents" className="text-sm border-l border-line pl-4">
      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-3">
        On this page
      </p>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id} className={h.depth === 3 ? "pl-4" : ""}>
            <a href={`#${h.id}`} className="text-muted hover:text-accent-soft transition-colors">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
