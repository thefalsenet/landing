import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";

export const metadata = {
  title: "TheFalse · A place to read and think.",
  description: "Track what you read. Keep your thoughts. No algorithms, no noise. A minimal, honest platform for readers who care about understanding, not performing.",
};

export default async function Home() {
  // Generate random avatar colors
  const avatarGradients = [
    'from-blue to-violet',
    'from-blue to-blue',
    'from-rose to-orange',
    'from-orange to-yellow',
    'from-green to-blue',
    'from-violet to-rose',
    'from-orange to-rose',
    'from-blue to-green',
    'from-yellow to-orange',
    'from-rose to-violet',
    'from-green to-emerald',
    'from-indigo to-blue',
  ];

  return (
    <>
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-gradient-to-br from-blue via-background to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-multiply">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-violet rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-tight text-foreground mb-6 text-balance">
              A place to read and think.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              Track what you read. Keep your thoughts. Connect with readers who actually care about understanding, not performing.
            </p>
          </div>

          {/* Community Proof - Avatar Grid */}
          <div className="mb-12 flex flex-col items-center">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {avatarGradients.slice(0, 12).map((gradient, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} shadow-lg ring-2 ring-background`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Join readers already discovering what books truly mean to them
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button size="lg" asChild className="rounded-lg px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/app">Get started free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-lg px-8 py-6 text-base font-semibold border-2">
              <Link href="#features">See what's possible</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-secondary/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance">
              What actually happens here
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, honest approach to tracking what you read and what it means to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Feature Card 1 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue to-blue-600/20 border border-blue/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 w-12 h-12 rounded-lg bg-blue/20 flex items-center justify-center text-xl">📚</div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Log What You Read</h3>
              <p className="text-muted-foreground leading-relaxed">
                Add books in seconds. Title, author, and you're done. No friction. No required fields. Pure simplicity.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-rose to-rose-600/20 border border-rose/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 w-12 h-12 rounded-lg bg-rose/20 flex items-center justify-center text-xl">✍️</div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Capture Your Thoughts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Write whenever it matters. During reading, after finishing, or months later when an idea connects. Your timing, your words.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-green to-green-600/20 border border-green/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 w-12 h-12 rounded-lg bg-green/20 flex items-center justify-center text-xl">🎯</div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">See Your Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Watch how your thinking evolves. Which books shaped you. Which ideas became part of how you see the world.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-violet to-violet-600/20 border border-violet/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 w-12 h-12 rounded-lg bg-violet/20 flex items-center justify-center text-xl">🚫</div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">No Noise</h3>
              <p className="text-muted-foreground leading-relaxed">
                No dashboards. No gamification. No streaks. No pressure. Just you, the books, and what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance">
              What this is not
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We built TheFalse with different values. Here's what you won't find.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-red/5 border border-red/20 hover:border-red/40 transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-3">Not social media.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your notes are private by default. You control what's visible. No algorithm deciding what you see or what matters.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-orange/5 border border-orange/20 hover:border-orange/40 transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-3">Not gamified.</h3>
              <p className="text-muted-foreground leading-relaxed">
                No points, levels, badges, or streaks. Reading isn't a game to be won. It's about growth and understanding.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-yellow/5 border border-yellow/20 hover:border-yellow/40 transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-3">Not a ranking system.</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't tell you what's worth reading. That's between you and the book. Your taste is yours alone.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green/5 border border-green/20 hover:border-green/40 transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-3">Not tracking you.</h3>
              <p className="text-muted-foreground leading-relaxed">
                No behavioral analysis. No data sold to advertisers. Your reading habits are sacred and yours alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance">
              Who it's for
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-green mb-4">You should join if...</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>You read to understand, not to perform</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Books genuinely change how you think</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>You want to track your intellectual journey</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>You value privacy and control</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>You prefer depth over noise</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-red mb-4">This isn't for you if...</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-red font-bold">✗</span>
                  <span>You want social validation or likes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red font-bold">✗</span>
                  <span>You read to say you read (for status)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red font-bold">✗</span>
                  <span>You need trending lists to decide what's good</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red font-bold">✗</span>
                  <span>You want gamification and streaks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red font-bold">✗</span>
                  <span>You prefer quick takes over deep thought</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and Ownership */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance">
              Privacy and ownership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your data is yours. We're not in the business of selling you or your information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <div className="p-8 rounded-xl bg-blue/5 border border-blue/20">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Your data, your control</h3>
              <p className="text-muted-foreground leading-relaxed">
                Notes are private by default. You choose what to share, with whom, and when. Download or delete everything whenever you want.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-rose/5 border border-rose/20">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">No tracking. No selling.</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't track behavior. We don't sell data. We don't train AI on your thoughts. Your reading is sacred.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-green/5 border border-green/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Delete anytime, no tricks</h3>
              <p className="text-muted-foreground leading-relaxed">
                You can delete your account and all your data instantly. No waiting period. No corporate double-speak. Just gone.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-violet/5 border border-violet/20">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">We respect your mind</h3>
              <p className="text-muted-foreground leading-relaxed">
                The books you read and the thoughts you have are deeply personal. We treat them with the respect they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-primary/5 via-background to-violet/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 mix-blend-multiply">
          <div className="absolute top-10 right-20 w-72 h-72 bg-rose rounded-full blur-3xl"></div>
          <div className="absolute bottom-5 left-20 w-96 h-96 bg-blue rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8 text-balance">
            Ready to read differently?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            Join readers who are building genuine relationships with books and ideas. Start your reading journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
            <Button size="lg" asChild className="rounded-lg px-10 py-7 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/app">Create free account</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-lg px-10 py-7 text-lg font-semibold border-2">
              <Link href="#features">See features</Link>
            </Button>
          </div>

          <p className="text-muted-foreground text-sm">
            No credit card required. Invite-only early access.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
