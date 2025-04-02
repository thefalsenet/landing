import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "our story",
  openGraph: {
    title: "our story",
    images: ["/og-about.jpg"],
  },
  twitter: {
    title: "our story",
    images: ["/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Background Image */}
      <div className="fixed top-0 z-10 w-full h-[60vh] flex flex-col items-center justify-center ">
        <div className="flex flex-[1_0_0px] gap-10 flex-col w-full">
          <div className="flex flex-[1_0_0px] gap-6 flex-col justify-center w-full relative">
            <div className="absolute inset-0 top-0 left-0 bottom-0 right-0">
              <img
                src="/Library in Garden Profile.jpeg"
                alt="Garden Library Background"
                className="object-cover brightness-90 absolute inset-0 w-full h-full"
              />
            </div>
            <h1
              className="text-6xl sm:text-7xl z-10 md:text-8xl font-extrabold tracking-tighter text-center"
              style={{ lineHeight: "0.9em" }}
            >
              our story.
            </h1>
            <div className="flex gap-2.5 items-center justify-center z-10">
              <Image
                src="/profile.png"
                alt="thefalse.net"
                width={36}
                height={36}
              />
              <span>thefalse</span>
              <span>•</span>
              <span>apr 2, 2025</span>
              <span>•</span>
              <span>2 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-16 z-10 relative pt-36 px-6 pb-16 bg-background/80 backdrop-blur-2xl mt-[60vh]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 text-xl text-muted-foreground font-medium">
            <div>
              <p className="text-2xl text-foreground mb-8">Truly Social.</p>
              <p className="mb-4">
                The internet was supposed to bring us together. Instead, it
                built walls. Algorithms decide what you see. Engagement is
                engineered. Conversations are controlled. What if social media
                was different? What if it was real?
              </p>
              <p className="mb-4">
                TheFalse isn’t just another platform—it’s a movement. A
                rebellion against the noise, the fake, the manufactured. Here,
                connection is raw, conversation is unfiltered, and you define
                your own reality.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl text-foreground">why we started</h2>
              <p>
                Social media today isn’t social. It’s a machine—optimized for
                profit, not people. It rewards outrage, not depth. It keeps you
                scrolling, not thinking. We saw what was happening, and we
                decided to build something different.
              </p>
              <p>TheFalse was created for those who want:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>🌀 Authentic conversations, not viral bait.</li>
                <li>
                  🔓 Control over their feed, not algorithmic manipulation.
                </li>
                <li>🕶 Freedom to be anonymous, without losing their voice.</li>
                <li>
                  🌐 A digital space where thoughts matter more than metrics.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-foreground">
                Rewriting Connection.
              </h2>
              <p>We believe in:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  🌀 Authenticity — No forced engagement, no empty trends. Just
                  real thoughts, real voices.
                </li>
                <li>
                  🔓 Freedom — Your feed, your rules. Algorithms don’t dictate
                  what matters.
                </li>
                <li>
                  🕶 Anonymity (When You Want It) — Be yourself or be nameless.
                  The choice is yours.
                </li>
                <li>
                  🌐 A New Digital Society — A space built for meaningful
                  interactions, not just attention.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-foreground">Are You In?</h2>
              <p>
                TheFalse is still evolving, but the idea is simple: a truly
                social experience, built for people, not for profit. No more
                pretending. No more illusions. Just connection, as it was meant
                to be.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-foreground">
                Step into something real.
              </h2>
              <Button size="lg" className="text-lg h-12 mb-12" asChild>
                <a href="https://app.thefalse.net">join us on our journey</a>
              </Button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
