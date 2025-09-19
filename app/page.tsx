
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
import GradientBlinds from "@/components/GradientBlinds";
import Silk from "@/components/Silk";

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
      <section className="flex flex-col items-center justify-center relative mb-24 md:mb-56 py-64 md:py-80">
        <div className="flex flex-col items-center gap-8 max-w-3xl px-4 pb-36 md:pb-52">
          <div className="flex flex-col gap-6 items-center w-full">
            {/* <div className="inline-block border p-2 text-muted-foreground">
                launches mar 20
              </div> */}
            <h1
              className="text-5xl md:text-6xl md:max-w-lg font-display font-bold font-serif text-center"
              style={{ lineHeight: "110%" }}
            >
              Rethink reading.
            </h1>
            <div className="text-sm max-w-3xl md:text-lg leading-normal text-center">
              Not just a library — a new way to experience stories and knowledge.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-4 items-center max-w-3xl px-4 pb-6 md:pb-10">
          <Button
            size={"lg"}
            asChild
          >
            <Link href="/app">Explore now</Link>
          </Button>
          {/* {
            testimonial && <TestimonialCard testimonial={testimonial} />
          } */}
        </div>
        <div className="absolute inset-0 z-[-1] w-full">
          <Silk
            speed={5}
            scale={0.75}
            color="#2e2e2e"
            noiseIntensity={1}
            rotation={0}
          />
        </div>

        {/* <div className="sticky top-0 h-screen hidden flex-[.7_0_0px] justify-center items-center lg:flex flex-col">
          <div className="pl-4 relative h-full w-full">
            <BookCollectionInfinite />
          </div>
        </div> */}
      </section>

      <section className="relative max-w-screen overflow-x-hidden px-6 py-40 md:py-56">
        <div className="flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-2xl font-display font-bold font-serif">
              Talk Beyond the Page
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-snug text-center">
              Your bookmarks, thoughts, and questions deserve an audience.
            </p>
          </div>
          <div className="relative select-none">
            <div className="frame-outer">
              <div className="relative h-full overflow-hidden bg-background border shadow">
                <div className="w-full max-w-full h-full pb-[102px]">
                  <Image sizes="100vw" src={"/screenshot.png"} className="object-cover" alt="" fill />
                </div>
              </div>
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
