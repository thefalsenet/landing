import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-foreground font-semibold">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center py-12">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-6 justify-around w-full">
            <h1 className="text-6xl sm:text-7xl tracking-tighter text-center font-serif mt-20">
              Our Story
            </h1>
            <div className="flex gap-2.5 py-3 items-center justify-center mb-auto text-sm text-muted-foreground font-medium">
              <img
                src="https://pic.thefalse.net/u/f1207d83-9311-49a9-b41a-addf2631a45f/493832554.jpeg"
                alt="thefalse.net"
                className="size-7"
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
      <div className="flex flex-col gap-16 z-10 relative py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-12 text-lg leading-relaxed text-muted-foreground font-medium">
            {/* Opening */}
            <div className="space-y-6">
              <p className="text-2xl font-semibold text-foreground font-serif leading-snug">
                thefalse is a social platform built on a simple idea: you should
                control what you see.
              </p>
              <p>
                No algorithmic feed deciding what matters. No engagement
                optimization. No one telling you who to follow or what to care
                about.
              </p>
              <p>
                Just people, conversations, and the freedom to shape your own
                experience.
              </p>
            </div>

            {/* Why It Exists */}
            <section className="space-y-6 border-t  pt-12">
              <h2 className="text-2xl text-foreground font-semibold font-serif">
                Why thefalse exists
              </h2>
              <p>
                Most social platforms are designed to maximize your time on
                them, not the quality of that time.
              </p>
              <p>
                Feeds are engineered. Content is ranked. What you see is chosen
                for you based on what keeps you scrolling.
              </p>
              <p>
                thefalse exists because we believe social media can be built
                differently — where connection is the goal, not a byproduct.
              </p>
            </section>

            {/* What Makes It Different */}
            <section className="space-y-6 border-t  pt-12">
              <h2 className="text-2xl text-foreground font-semibold font-serif">
                What makes thefalse different
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    Your feed, your rules
                  </h3>
                  <p>
                    Choose chronological or curated. Follow who you want. No
                    algorithm deciding for you.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    Anonymity when you want it
                  </h3>
                  <p>
                    Use your real name or stay anonymous. The choice is yours,
                    and it can change.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    Conversations over reactions
                  </h3>
                  <p>
                    Built for thoughtful discussion, not quick takes and viral
                    moments.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    No ads, no tracking
                  </h3>
                  <p>
                    Your attention isn&apos;t for sale. Neither is your data.
                  </p>
                </div>
              </div>
            </section>

            {/* What You Can Do */}
            <section className="space-y-6 border-t pt-12">
              <h2 className="text-2xl text-foreground font-semibold font-serif">
                What you can do on thefalse
              </h2>
              <ul className="space-y-3">
                <li>Share thoughts, images, and links</li>
                <li>Follow people and topics that interest you</li>
                <li>Join or create communities</li>
                <li>Have conversations that matter</li>
                <li>Control who sees your content</li>
              </ul>
            </section>

            {/* Who It's For */}
            <section className="space-y-6 border-t pt-12">
              <h2 className="text-2xl text-foreground font-semibold font-serif">
                Who thefalse is for
              </h2>
              <p>
                thefalse is for people who want social media that respects their
                time and intelligence.
              </p>
              <p>
                People who prefer depth over virality. Who value privacy. Who
                want to connect with others without being manipulated into it.
              </p>
              <p>If that sounds like you, you&apos;re in the right place.</p>
            </section>

            {/* The Name */}
            <section className="space-y-6 border-t  pt-12">
              <h2 className="text-2xl text-foreground font-semibold font-serif">
                Why &quot;thefalse&quot;
              </h2>
              <p>
                Most of what you see online isn&apos;t real. It&apos;s
                optimized, filtered, performed.
              </p>
              <p>
                thefalse is a reminder that authenticity starts with
                acknowledging what isn&apos;t — and choosing something better.
              </p>
            </section>

            {/* Closing */}
            <section className="space-y-6 border-t  pt-12">
              <p className="text-xl text-foreground font-semibold">
                TheFalse is still growing.
              </p>
              <p>
                If you&apos;re tired of being optimized, tracked, and
                algorithmically sorted — you&apos;re welcome here.
              </p>

              <div className="pt-6">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Join TheFalse
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
