import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <SiteHeader />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="flex-none h-screen pointer-events-none fixed left-[calc(50.00000000000002%-100%/2)] top-[calc(50.00000000000002%-100%/2)] w-full z-[200]">
          <div className="noise" />
        </div>
        <img
          src="/Library in Garden Profile.jpeg"
          alt="Garden Library Background"
          className="object-cover brightness-90 absolute inset-0 w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto p-4 lg:p-20 flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col justify-end items-center text-center px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 mix-blend-difference">
              <h1 className="text-4xl md:text-7xl text-white mb-6 tracking-tighter leading-tight text-balance">
                Make your reading experience truly social
              </h1>
              <p className="text-white text-xl max-w-2xl mx-auto mb-12 tracking-tighter">
                theFalse connects book lovers through a genuine social
                experience. Share your reading journey, discover new books, and
                build meaningful connections.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 rounded-none"
                asChild
              >
                <Link href="/app/register">Step in the reality</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-background/60 backdrop-blur-3xl hover:bg-background rounded-none"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
