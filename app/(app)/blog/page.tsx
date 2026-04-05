import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Product updates, reading culture, and how we are building TheFalse — a social reading platform without the algorithmic feed.",
  openGraph: {
    title: "Blog — TheFalse",
    description:
      "Product updates, reading culture, and how we are building TheFalse.",
  },
  twitter: {
    title: "Blog — TheFalse",
    description:
      "Product updates, reading culture, and how we are building TheFalse.",
  },
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-auto bg-background">
      <div className="relative z-10 flex grow flex-col">
        <div className="mx-auto w-full max-w-[1360px] px-4 pb-16 pt-28 sm:px-8 md:pt-32">
          <header className="mb-12 max-w-2xl md:mb-16">
            <h1 className="font-serif text-[2.25rem] leading-[1.1] tracking-[-0.01em] text-foreground sm:text-[2.75rem] md:text-[3.25rem]">
              Blog
            </h1>
            <p className="mt-4 text-sm text-muted-foreground md:text-base md:leading-normal">
              <Balancer>
                Deep dives, product updates, and notes on building a reading
                network that puts books and people first.
              </Balancer>
            </p>
          </header>

          <ul className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {sorted.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <Image
                      src={post.coverImage}
                      alt={post.coverAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h2 className="mt-4 font-serif text-lg font-medium leading-snug tracking-tight text-foreground decoration-foreground/20 underline-offset-4">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date}
                    className="mt-2 block text-sm text-muted-foreground"
                  >
                    {dateFormatter.format(new Date(post.date))}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
