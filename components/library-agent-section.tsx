import type { LandingDictionary } from "@/lib/i18n-shared";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

interface LibraryAgentSectionProps {
  copy: LandingDictionary["libraryAgent"];
}

export default function LibraryAgentSection({
  copy,
}: LibraryAgentSectionProps) {
  return (
    <section className="w-full px-4 py-16 sm:px-8 md:py-24 bg-secondary">
      <div className="mx-auto grid w-full max-w-[1360px] gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal className="max-w-2xl self-center space-y-5" direction="left">
          <h2 className="font-serif text-2xl leading-[1.02] tracking-[-0.03em] text-foreground">
            {copy.title}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {copy.description}
          </p>
        </Reveal>

        <StaggerGroup className="space-y-4" delayChildren={0.1} staggerChildren={0.12}>
          {copy.cards.map((card) => (
            <StaggerItem
              key={card.label}
              direction="right"
            >
              <article className="section-hover-lift rounded-lg border bg-card px-5 py-4 text-card-foreground">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {card.label}
                </p>
                <p className="font-serif text-sm leading-[1.45] tracking-[-0.02em] text-foreground">
                  <span className="italic">{card.quote}</span>
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
