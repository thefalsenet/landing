import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { LandingDictionary } from "@/lib/i18n-shared";

interface BeliefSectionProps {
  copy: LandingDictionary["beliefSection"];
}

export default function BeliefSection({ copy }: BeliefSectionProps) {
  return (
    <section className="w-full px-4 sm:px-8 py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1360px] gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:gap-16">
        <div>
          <blockquote className="max-w-[820px] font-serif text-2xl leading-[1.12] tracking-[-0.03em] text-foreground">
            <span className="italic">{copy.quote}</span>
          </blockquote>
        </div>
        <div className="max-w-xl space-y-6 lg:pt-2">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {copy.description}
          </p>
          <Button asChild variant="outline">
            <Link href="/mobile">{copy.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
