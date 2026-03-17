import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TheFalse allows people to control what they read.",
  openGraph: {
    title: "TheFalse allows people to control what they read.",
  },
  twitter: {
    title: "TheFalse allows people to control what they read.",
  },
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-auto bg-background">
      <div className="relative z-10 flex grow flex-col">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <Card className="overflow-hidden border-none bg-muted/30 shadow-none">
            <CardHeader className="space-y-4 px-8 py-8">
              <div className="space-y-4 text-center">
                <CardTitle className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] tracking-[-0.01em] leading-[100%] mb-2 pb-3 text-balance wrap-break-word hyphens-auto font-serif">
                  TheFalse allows people to control what they read.
                </CardTitle>
                <CardDescription>
                  No algorithmic feed deciding what matters. No engagement
                  optimization. Just people, books, and the freedom to shape
                  your own experience.
                </CardDescription>
              </div>
            </CardHeader>

            <div className="space-y-8 p-8">
              {sections.map((section) => (
                <div key={section.title} className="p-6">
                  <h2 className="mb-4 text-xl font-medium tracking-tight font-serif">
                    {section.title}
                  </h2>
                  <div className="prose prose-sm max-w-none text-muted-foreground font-medium">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Why TheFalse exists",
    content: (
      <div className="space-y-4">
        <p>
          Most social platforms are designed to maximize your time on them, not
          the quality of that time.
        </p>
        <p>
          Feeds are engineered. Content is ranked. What you see is chosen for
          you based on what keeps you scrolling.
        </p>
        <p>
          TheFalse exists because we believe social media can be built
          differently — where connection is the goal, not a byproduct.
        </p>
      </div>
    ),
  },
  {
    title: "What makes thefalse different",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Your feed, your rules
          </h3>
          <p>
            Choose chronological or curated. Follow who you want. No algorithm
            deciding for you.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Anonymity when you want it
          </h3>
          <p>
            Use your real name or stay anonymous. The choice is yours, and it
            can change.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Conversations over reactions
          </h3>
          <p>
            Built for thoughtful discussion, not quick takes and viral moments.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            No ads, no tracking
          </h3>
          <p>Your attention isn&apos;t for sale. Neither is your data.</p>
        </div>
      </div>
    ),
  },
  {
    title: "What you can do on TheFalse",
    content: (
      <ul className="ml-4 list-disc space-y-2">
        <li>Share thoughts, images, and links</li>
        <li>Follow people and topics that interest you</li>
        <li>Join or create communities</li>
        <li>Have conversations that matter</li>
        <li>Control who sees your content</li>
      </ul>
    ),
  },
  {
    title: "Who TheFalse is for",
    content: (
      <div className="space-y-4">
        <p>
          thefalse is for people who want social media that respects their time
          and intelligence.
        </p>
        <p>
          People who prefer depth over virality. Who value privacy. Who want to
          connect with others without being manipulated into it.
        </p>
        <p>If that sounds like you, you&apos;re in the right place.</p>
      </div>
    ),
  },
  {
    title: 'Why "TheFalse"',
    content: (
      <div className="space-y-4">
        <p>
          Most of what you see online isn&apos;t real. It&apos;s optimized,
          filtered, performed.
        </p>
        <p>
          thefalse is a reminder that authenticity starts with acknowledging
          what isn&apos;t — and choosing something better.
        </p>
      </div>
    ),
  },
  {
    title: "Contact",
    content: (
      <div className="space-y-4">
        <p className="text-foreground font-semibold">
          TheFalse is still growing.
        </p>
        <p>
          If you&apos;re tired of being optimized, tracked, and algorithmically
          sorted — you&apos;re welcome here.
        </p>
        <p>Want to get in touch? Reach out:</p>
        <div className="flex flex-col space-y-2 pt-2">
          <a
            href="mailto:team@thefalse.net"
            className="inline-flex items-center text-foreground hover:underline"
          >
            team@thefalse.net
          </a>
        </div>
      </div>
    ),
  },
];
