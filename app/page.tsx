import Countdown from "@/components/countdown";
import BookCollectionInfinite from "@/components/book-collection-infinite";
import { Button } from "@/components/ui/button";
import FeaturesSection from "@/components/features-section";
import HowItWorks from "@/components/how-it-works";
import FAQSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";
import MobileBookCollection from "@/components/mobile-book-collection";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";
import Image from "next/image";
import axios from "axios";
import { TestimonialCard } from "@/components/testimonial-card";

export const metadata = {
  title: "Feel your next favorite book",
};

export default async function Home() {
  const testimonialData = await axios
    .get("https://app.thefalse.net/api/feedbacks/top").then((res) => res.data) as any
  const { feedback: testimonial } = testimonialData

  return (
    <>
      <SiteHeader />
      {/* Hero Section */}
      <section className="flex max-w-[1440px] w-full flex-none items-start justify-center mx-auto">
        <div className="flex flex-col h-min items-center flex-1 z-0">
          <div className="p-6 lg:pr-24 pt-32 lg:pt-6 lg:h-screen lg:gap-16 gap-12 flex flex-col justify-center items-start flex-none w-full relative">
            <div className="flex flex-col gap-6 lg:items-start items-center w-full lg:w-fit">
              {/* <div className="inline-block border p-2 text-muted-foreground">
                launches mar 20
              </div> */}
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-display font-medium font-serif tracking-tighter lg:text-left text-center"
                style={{ lineHeight: "0.9em" }}
              >
                Feel your next
                <br />
                <span className="italic">favorite book</span>
              </h1>
              <div className="text-2xl max-w-3xl text-muted-foreground leading-snug lg:text-left text-center">
                Not just a library. A living space for books, ideas, and emotions.
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-4 w-full">
              <Button
                className="text-xl font-bold lg:w-fit w-full"
                size={"lg"}
                asChild
              >
                <Link href="/app">Join free</Link>
              </Button>
              {
                testimonial && <TestimonialCard testimonial={testimonial} />
              }
            </div>
            <div className="lg:hidden w-screen -mx-6 touch-scroll overflow-hidden">
              <div className="w-full">
                <MobileBookCollection />
              </div>
            </div>
          </div>
          <div className="p-6 py-16 lg:py-6 lg:pr-24 lg:h-screen gap-12 lg:gap-16 flex flex-col justify-center items-start flex-none w-full relative">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium font-serif tracking-tighter mb-8 lg:text-left text-center">
              It all begins with a book. One page at a time.
            </h2>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl leading-snug lg:text-left text-center">
              This is where you&apos;ll discover your next favorite read,
              connect with fellow book lovers, and build a community around the
              stories that move you — alongside thousands of other readers.
            </p>
            <div className="flex flex-wrap gap-4 lg:flex-row flex-col w-full">
              <div className="inline-block border !border-red/35 p-3 text-red bg-red/5 lg:text-left text-center text-xl">
                AI recommendations
              </div>
              <div className="inline-block border !border-blue/35 p-3 text-blue bg-blue/5 lg:text-left text-center text-xl">
                Reading tracker
              </div>
              <div className="inline-block border !border-green/35 p-3 text-green bg-green/5 lg:text-left text-center text-xl">
                Social notes
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-0 h-screen hidden flex-[.7_0_0px] justify-center items-center lg:flex flex-col">
          <div className="pl-4 relative h-full w-full">
            <BookCollectionInfinite />
          </div>
        </div>
      </section>

      <section className="relative after:w-full after:h-full after:absolute after:left-0 after:top-0 after:border after:border-border max-w-[1440px] mx-auto w-full">
        <div className="flex w-full min-h-[700px] flex-col xl:flex-row">
          <div className="p-20 flex justify-center flex-[1_0_0px] flex-col gap-12 xl:w-px w-full">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium font-serif tracking-tighter text-center">
              Talk Beyond the Page
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl leading-snug text-center">
              Your bookmarks, thoughts, and questions deserve an audience. thefalse helps them find one.
            </p>
          </div>
          <div className="flex flex-none xl:flex-[1_0_0px] flex-col xl:w-px w-full h-[400px] lg:h-[700px] xl:h-auto p-6 lg:p-0">
            <div className="relative w-full h-px flex-[1_0_0px] after:h-full after:absolute after:left-0 after:top-0 after:border after:border-border">
              <Image sizes="max((min(100vw - 48px, 1440px) - 48px) / 2, 1px)" src={"/screenshot.png"} className="object-left-top object-cover grayscale hover:grayscale-0 transition-all duration-200 ease-in-out" alt="" fill />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* How it Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </>
  );
}
