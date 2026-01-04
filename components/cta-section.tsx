import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto relative">
      {/* Optional subtle divider line */}
      <div className="border-t border-border/30 mb-24"></div>

      <div className="flex flex-col items-center text-center space-y-8">
        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-tight">
          Start your reading space
        </h2>

        {/* Supporting text */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Create a quiet place for your books, thoughts, and conversations. Join
          readers who care more about meaning than metrics.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Button size="lg" asChild>
            <Link href="/app">Start reading</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
