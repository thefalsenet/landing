import { Fragment, type ReactNode } from "react";
import type { BlogContentBlock } from "@/lib/blog-types";

function renderBoldSegments(s: string, keyPrefix: string): ReactNode {
  const parts = s.split(/\*\*/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong
            key={`${keyPrefix}-b-${i}`}
            className="font-semibold text-foreground"
          >
            {part}
          </strong>
        ) : (
          <span key={`${keyPrefix}-t-${i}`}>{part}</span>
        ),
      )}
    </>
  );
}

function RichInline({ text }: { text: string }) {
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  const chunks: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) {
      chunks.push(
        <Fragment key={`c-${k++}`}>
          {renderBoldSegments(text.slice(last, m.index), `pre-${k}`)}
        </Fragment>,
      );
    }
    chunks.push(
      <a
        key={`c-${k++}`}
        href={m[2]}
        className="font-sans font-medium text-foreground underline decoration-foreground/35 underline-offset-[3px] transition-colors hover:decoration-foreground"
      >
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    chunks.push(
      <Fragment key={`c-${k++}`}>
        {renderBoldSegments(text.slice(last), `post-${k}`)}
      </Fragment>,
    );
  }
  if (chunks.length === 0) {
    return <>{renderBoldSegments(text, "only")}</>;
  }
  return <>{chunks}</>;
}

export function BlogPostBody({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <div className="mx-auto max-w-2xl font-serif text-[1.0625rem] text-foreground md:text-lg md:leading-[1.7]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i}>
                <RichInline text={block.text} />
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="mb-3 mt-12 scroll-mt-24 font-serif text-[1.375rem] font-medium leading-snug tracking-tight text-foreground md:mb-4 md:text-[1.5rem]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mb-2 mt-8 font-serif text-[1.125rem] font-medium leading-snug tracking-tight text-foreground md:text-xl"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mb-6 list-disc space-y-2 pl-6 marker:text-muted-foreground"
              >
                {block.items.map((item, j) => (
                  <li key={j}>
                    <RichInline text={item} />
                  </li>
                ))}
              </ul>
            );
          case "hr":
            return (
              <hr
                key={i}
                className="my-10 border-0 border-t border-border md:my-12"
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
