import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import HowItWorks from "@/components/how-it-works";
import FAQSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";
import { getLandingCopy } from "@/lib/i18n";
import BeliefSection from "@/components/belief-section";
import LibraryAgentSection from "@/components/library-agent-section";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  WordReveal,
} from "@/components/motion/reveal";

export async function generateMetadata() {
  const { copy } = await getLandingCopy();

  return {
    title: copy.meta.homeTitle,
    description: copy.meta.homeDescription,
  };
}

export default async function Home() {
  const { locale, copy } = await getLandingCopy();

  return (
    <>
      <SiteHeader ctaLabel={copy.header.cta} currentLocale={locale} />
      <section className="relative w-full overflow-x-hidden px-4 sm:px-8 pt-28 pb-12 md:pt-32 md:pb-20">
        <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-start space-y-10">
          <StaggerGroup className="flex max-w-[900px] flex-col items-start gap-4" delayChildren={0.05} staggerChildren={0.12}>
            <header className="text-left">
              <StaggerItem>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {copy.home.eyebrow}
                </p>
              </StaggerItem>
              <StaggerItem>
                <WordReveal
                  as="h1"
                  text={copy.home.title}
                  className="mb-2 pb-3 text-[2.25rem] font-serif leading-[1.08] tracking-[-0.02em] wrap-break-word hyphens-auto text-foreground sm:text-[2.75rem] md:text-[3.25rem]"
                />
              </StaggerItem>
              <StaggerItem>
                <p className="text-sm md:text-base md:leading-normal font-normal text-balance wrap-break-word text-muted-foreground max-w-[760px]">
                  <Balancer>{copy.home.description}</Balancer>
                </p>
              </StaggerItem>
            </header>
            <StaggerItem>
              <div className="flex items-center gap-3">
                <Button asChild className="cursor-pointer">
                  <Link href="/mobile">{copy.home.primaryCta}</Link>
                </Button>
                <Button variant={"ghost"} className="cursor-pointer" asChild>
                  <Link href={"#how-it-works"}>{copy.home.secondaryCta}</Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerGroup>
          <Reveal
            className="relative w-full overflow-hidden rounded-xl border bg-card"
            direction="scale"
            amount={0.15}
            duration={0.95}
          >
            <div className="pointer-events-none select-none absolute inset-0 overflow-hidden rounded-xl">
              <Image
                src={"/hero-bg.png"}
                alt="Hero image"
                loading="eager"
                decoding="async"
                fill
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover blur-xs pointer-events-none select-none ambient-drift"
              />
              <div className="absolute inset-0 bg-background/25" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              <div className="absolute inset-x-[8%] top-[12%] h-28 rounded-full bg-primary/10 blur-3xl ambient-shimmer" />
            </div>
            <div className="relative w-full max-w-[900px] mx-auto">
              <div className="py-4">
                <Image
                  src={"/hero-img.svg"}
                  alt="TheFalse Demo"
                  loading="lazy"
                  decoding="async"
                  width={1800}
                  height={1284}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <HowItWorks copy={copy.howItWorks} />
      <BeliefSection copy={copy.beliefSection} />
      <LibraryAgentSection copy={copy.libraryAgent} />
      <FAQSection copy={copy.faq} />
      <CTASection copy={copy.cta} />
      <Footer copy={copy.footer} />
    </>
  );
}
