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
          <div className="flex max-w-[900px] flex-col items-start gap-4">
            <header className="overflow-hidden text-left">
              <h1 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] tracking-[-0.01em] leading-[105%] mb-2 pb-3 text-balance font-serif wrap-break-word hyphens-auto text-foreground">
                <Balancer>{copy.home.title}</Balancer>
              </h1>
              <p className="text-sm md:text-base md:leading-normal font-normal text-balance wrap-break-word text-muted-foreground">
                <Balancer>{copy.home.description}</Balancer>
              </p>
            </header>
            <div className="flex items-center gap-3">
              <Button asChild className="h-8 px-3 text-sm cursor-pointer">
                <Link href="/mobile">{copy.home.primaryCta}</Link>
              </Button>
              <Button
                variant={"ghost"}
                className="h-8 px-3 text-sm cursor-pointer"
                asChild
              >
                <Link href={"#how-it-works"}>{copy.home.secondaryCta}</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full">
            <div className="pointer-events-none select-none absolute inset-0 overflow-hidden">
              <Image
                src={"/hero-bg.png"}
                alt="Hero image"
                loading="eager"
                decoding="async"
                fill
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover blur-xs pointer-events-none select-none"
              />
            </div>
            <div className="relative w-full max-w-[900px] mx-auto">
              <div className="py-4">
                <Image
                  src={"/hero-img.png"}
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
          </div>
        </div>
      </section>

      <HowItWorks copy={copy.howItWorks} />
      <FAQSection copy={copy.faq} />
      <CTASection copy={copy.cta} />
      <Footer />
    </>
  );
}
