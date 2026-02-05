import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";

export const metadata = {
  title: "TheFalse · A place to read and think.",
  description: "Track what you read. Keep your thoughts. No algorithms, no noise.",
};

export default async function Home() {
  return (
    <>
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="mx-auto max-w-2xl flex flex-col items-center justify-center text-center min-h-[calc(100vh-8rem)]">
          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-foreground text-balance">
            A place to read and think.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-balance">
            Track the books you read. Write what you think. See how your understanding changes over time.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center">
            <Button size="lg" asChild className="rounded-md">
              <Link href="/app">Create an account</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-md">
              <Link href="#explore">Or just look around</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Actually Happens Here */}
      <section id="explore" className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-balance">
            What actually happens here
          </h2>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              You log books as you read them. It takes three seconds. Title, author, that's the start.
            </p>
            <p>
              Then you add your thoughts whenever you want. Mid-book. After. Days later when something clicks.
            </p>
            <p>
              You come back and see how your thinking changed. Which books mattered. Which ideas stuck with you.
            </p>
            <p>
              That's it. No dashboards. No gamification. No pressure to keep streaks alive.
            </p>
          </div>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="py-20 px-6 border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-balance">
            What this is not
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-foreground font-medium mb-2">Not social media.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your notes are private by default. You control what's visible. No algorithm deciding what you see.
              </p>
            </div>

            <div>
              <h3 className="text-foreground font-medium mb-2">Not gamified.</h3>
              <p className="text-muted-foreground leading-relaxed">
                No points. No levels. No fake urgency to keep you coming back. Reading isn't a performance.
              </p>
            </div>

            <div>
              <h3 className="text-foreground font-medium mb-2">Not a ranking system.</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're not trying to tell you what's worth reading. That's between you and the book.
              </p>
            </div>

            <div>
              <h3 className="text-foreground font-medium mb-2">Not tracking you.</h3>
              <p className="text-muted-foreground leading-relaxed">
                No behavioral analysis. No profiles sold to advertisers. Your reading is yours alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-balance">
            Who it's for
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            TheFalse is for people who read to understand, not to perform. If you care about what you read—if books change how you think—this is for you.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            If you want social validation, trending lists, or quick takes, you might find this quiet and slow. That might be the point.
          </p>
        </div>
      </section>

      {/* Privacy and Ownership */}
      <section className="py-20 px-6 border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-balance">
            Privacy and ownership
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Your notes are yours. We don't publish them by default. You decide what to share, with whom, and when.
            </p>
            <p>
              You can delete your account and all your data at any time. No waiting periods. No tricks.
            </p>
            <p>
              We don't track your reading behavior. We don't use your data to train AI models or sell insights to third parties.
            </p>
            <p>
              We think the books you read and the thoughts you have are sacred. We treat them accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground text-lg mb-8">
            If this resonates, we'd like to have you here.
          </p>
          <Button size="lg" asChild className="rounded-md">
            <Link href="/app">Create an account</Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Or come back whenever you're ready.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
