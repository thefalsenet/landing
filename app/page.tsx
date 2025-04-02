import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
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
        {/* Header */}
        <div className="text-center mb-16 mix-blend-difference">
          <h1 className="text-6xl md:text-9xl font-black text-white mb-2.5 mix-blend-difference tracking-tighter">
            thefalse
          </h1>
          <h2 className="text-2xl md:text-3xl text-white font-light mix-blend-difference tracking-tighter">
            Truly Social. The way it was meant to be
          </h2>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-12 mix-blend-difference">
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto tracking-tighter">
            A social network for book lovers. Share your reading experience with
            friends and family. Keep track of your progress and discover new
            books worth your time.
          </p>
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
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-none"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-black/70 backdrop-blur-sm rounded-none p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Track Your Reading</h3>
            <p>
              Keep a digital bookshelf of what you&apos;ve read, are currently
              reading, and want to read next.
            </p>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-none p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Connect with Friends</h3>
            <p>
              Follow friends and see what they&apos;re reading. Share
              recommendations and discuss your favorite books.
            </p>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-none p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Discover New Titles</h3>
            <p>
              Get personalized recommendations based on your reading history and
              interests.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
