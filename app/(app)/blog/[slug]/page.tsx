import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostBody } from "@/components/blog-post-body";
import { getAllSlugs, getPostBySlug } from "@/lib/blog-posts";
import { siteConfig } from "@/config/site";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${siteConfig.url}/blog/${post.slug}`,
      authors: post.authors.map((author) => author.name),
      images: [post.coverImage],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="relative flex min-h-screen w-full flex-col overflow-auto bg-background">
      <div className="relative z-10 flex grow flex-col">
        <div className="mx-auto w-full max-w-[1360px] px-4 pb-20 pt-28 sm:px-8 md:pt-32">
          <div className="mb-10 grid gap-8 lg:mb-14 lg:grid-cols-[minmax(0,200px)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,220px)_1fr]">
            <aside className="order-2 flex flex-row items-center gap-4 lg:order-1 lg:flex-col lg:items-start lg:gap-4 text-sm text-muted-foreground lg:pt-1">
              <time dateTime={post.date}>
                {dateFormatter.format(new Date(post.date))}
              </time>
              {post.authors.map((author) => (
                <div className="flex flex-row items-center gap-2 lg:gap-2.5" key={author.name}>
                  {author.avatar ? (
                    <Image
                      src={author.avatar}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 rounded-full object-cover"
                    />
                  ) : null}
                  <span className="hidden lg:block leading-tight text-sm">{author.name}</span>
                </div>
              ))}
            </aside>
            <div className="order-1 min-w-0 lg:order-2">
              <h1 className="font-serif text-[1.875rem] leading-[1.12] tracking-[-0.01em] text-foreground sm:text-[2.25rem] md:text-[2.75rem]">
                {post.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>

          <figure className="mb-12 lg:mb-14">
            <div className="relative aspect-[21/9] w-full max-h-[min(70vh,520px)] overflow-hidden bg-muted sm:aspect-[2/1] md:max-h-none md:aspect-[21/9]">
              <Image
                src={post.coverImage}
                alt={post.coverAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1360px) 100vw, 1360px"
              />
            </div>
          </figure>

          <BlogPostBody blocks={post.content} />
        </div>
      </div>
    </article>
  );
}
