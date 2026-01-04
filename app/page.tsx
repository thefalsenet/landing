import Countdown from "@/components/countdown";
import BookCollectionInfinite from "@/components/book-collection-infinite";
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

export const metadata = {
  title: "thefalse · Rethink reading.",
};

const navigation = [
  { name: "about", href: "/about" },
  { name: "terms of service", href: "/terms" },
  { name: "privacy", href: "/privacy" },
  { name: "faq", href: "/faq" },
];

const socialLinks = [
  { name: "x (twitter)", href: "https://twitter.com/thefalsenet" },
  { name: "instagram", href: "https://instagram.com/thefalsenet" },
];

export default async function Home() {
  return (
    <>
      <footer className="bottom-0 left-0 right-0 z-50 w-full fixed">
        <div className="max-w-[1440px] mx-auto flex h-16 px-4 items-center justify-between grow">
          <nav>
            <ul className="flex gap-2">
              {navigation.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
          >
            <Icons.logo className="size-6" />
            <span className="font-bold text-xl ">thefalse</span>
          </Link>
          <div className="md:flex items-center gap-2 hidden">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-bg-primary text-text-primary">
        {/* Grid background */}
        <div
          className="pointer-events-none fixed inset-0 invert dark:invert-0"
          style={{
            backgroundImage: "url(/background-image.jpg)",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-4xl leading-tight md:text-6xl font-semibold">
            Built for readers.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
            Track what you read. Share what you feel. Discover books, thoughts,
            and voices — all in one place.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button size="lg" asChild>
              <Link href="/app">Start reading</Link>
            </Button>

            <span className="text-sm text-text-muted">
              Built for readers who think, feel, and reflect.
            </span>
          </div>
        </div>

        {/* Floating elements */}
        <FloatingElements />
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
              <div className="relative h-full overflow-hidden bg-background border- shadow w-screen lg:w-full">
                <Image
                  sizes="100vw"
                  src={"/screenshot.png"}
                  alt=""
                  width={1302}
                  height={1011}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookshelf Carousel */}
      <BookshelfCarousel />

      {/* What You Can Do Section */}
      <WhatYouCanDo />

      {/* How it Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      <CTASection />
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
      <div className="absolute bottom-40 right-24 hidden md:block pointer-events-none">
        <div
          className="relative rotate-3"
          style={{
            animation: "float-slow 7s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        >
          <Image
            src="/Open Book Emoji.png"
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
