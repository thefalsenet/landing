import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import FeaturesSection from "@/components/features-section";
import HowItWorks from "@/components/how-it-works";
import FAQSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";
import MobileBookCollection from "@/components/mobile-book-collection";
import BookshelfCarousel from "@/components/bookshelf-carousel";
import WhatYouCanDo from "@/components/what-you-can-do";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { TestimonialCard } from "@/components/testimonial-card";
import GradientBlinds from "@/components/GradientBlinds";
import Silk from "@/components/Silk";
import { Icons } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";

export const metadata = {
  title: "thefalse · Rethink reading.",
};

export default async function Home() {
  return (
    <>
      <SiteHeader />
      {/* Hero Section */}
      <section className="relative w-full overflow-x-hidden px-4 sm:px-8 pt-28 pb-12 md:pt-32 md:pb-20">
        {/* Content */}
        <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-start space-y-10">
          <div className="flex max-w-[900px] flex-col items-start gap-4">
            <header className="overflow-hidden text-left">
              <h1 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] tracking-[-0.01em] leading-[105%] mb-2 pb-3 text-balance font-serif wrap-break-word hyphens-auto text-foreground">
                <Balancer>
                  Reading platform for{" "}
                  <span className="text-primary">thoughtful</span> readers.
                </Balancer>
              </h1>
              <p className="text-sm md:text-base md:leading-normal font-normal text-balance wrap-break-word text-muted-foreground">
                <Balancer>
                  Track what you read. Share what you feel. Discover books
                  through people — not algorithms. No ads, no streak pressure.
                </Balancer>
              </p>
            </header>
            <div className="flex items-center gap-3">
              <Button className="h-8 px-3 text-sm cursor-pointer">
                Start reading
              </Button>
              <Button
                variant={"ghost"}
                className="h-8 px-3 text-sm cursor-pointer"
                asChild
              >
                <Link href={"#how-it-works"}>See how it works</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full">
            <div className="pointer-events-none select-none absolute inset-0 overflow-hidden">
              <Image
                src={"/hero-bg.png"}
                alt="Hero image"
                loading="lazy"
                decoding="async"
                fill
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      <Footer />
    </>
  );
}

function FloatingElements() {
  return (
    <>
      {/* Top-left: Single Book */}
      <div className="absolute left-24 top-24 hidden md:block pointer-events-none">
        <div
          className="relative rotate-12"
          style={{
            animation: "float-slow 6s ease-in-out infinite",
          }}
        >
          <Image
            src="/books_1f4da.png"
            alt="Book"
            width={180}
            height={240}
            className="image-border"
            priority={false}
          />
        </div>
      </div>

      {/* Bottom-left: Stack of Books */}
      <div className="absolute bottom-40 left-24 hidden md:block pointer-events-none">
        <div
          className="relative -rotate-6 dark:opacity-40"
          style={{
            animation: "float 8s ease-in-out infinite",
            animationDelay: "1s",
          }}
        >
          <Image
            src="/pngwing.com.png"
            alt="Stack of books"
            width={200}
            height={170}
            className="drop-shadow-2xl"
            priority={false}
          />
        </div>
      </div>

      {/* Top-right: Glasses */}
      <div className="absolute right-24 top-24 hidden md:block pointer-events-none">
        <div
          className="relative rotate-6"
          style={{
            animation: "float-fast 5s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        >
          <Image
            src="/Open Book Emoji.png"
            alt="Reading glasses"
            width={100}
            height={60}
            className="image-border"
            priority={false}
          />
        </div>
      </div>

      {/* Bottom-right: Library Card */}
      <div className="absolute bottom-12 right-24 hidden md:block pointer-events-none">
        <div
          className="relative -rotate-5 book-cover"
          style={{
            animation: "float-slow 7s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        >
          <Image
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg"
            alt="Library card"
            width={200}
            height={130}
            className="drop-shadow-2xl"
            priority={false}
          />
        </div>
      </div>
    </>
  );
}
