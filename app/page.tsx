import ComingSoon from "@/components/coming-soon";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "it's time to share your story",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex max-w-[1440px] w-full flex-none items-start justify-center ">
        <div className="flex flex-col h-min items-center flex-1 z-0">
          <div className="p-6 pr-24 h-screen gap-16 flex flex-col justify-center items-start flex-none w-full relative">
            <div className="space-y-6">
              <div className="inline-block border p-2 text-sm text-muted-foreground">
                launches mar 20
              </div>
              <h1
                className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter"
                style={{ lineHeight: "0.9em" }}
              >
                it&apos;s time to share
                <br />
                your story.
              </h1>
            </div>
            <div className="flex flex-col gap-4 pt-4">
              <form className="flex flex-col sm:flex-row gap-2 w-full">
                <Input
                  type="email"
                  placeholder="enter your email"
                  className="h-auto w-full"
                  required
                />
                <Button type="submit" className="py-3 px-6 h-auto">
                  get early access
                </Button>
              </form>
            </div>
          </div>
          <div className="p-6 pr-24 h-screen gap-16 flex flex-col justify-center items-start flex-none w-full relative">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8">
              it all begins with a book. one page at a time.
            </h2>
            <p className="text-muted-foreground text-2xl mb-8 max-w-3xl font-medium leading-snug">
              this is where you&apos;ll discover your next favorite read,
              connect with fellow book lovers, and build a community around the
              stories that move you — alongside thousands of other readers.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="inline-block border !border-red/35 p-3 text-red bg-red/5">
                ai recommendations
              </div>
              <div className="inline-block border !border-blue/35 p-3 text-blue bg-blue/5">
                reading tracker
              </div>
              <div className="inline-block border !border-green/35 p-3 text-green bg-green/5">
                social notes
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-0 h-screen hidden flex-[.7_0_0px] justify-center items-center lg:flex">
          <div className="px-4 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iVtwV5HcqoDVD4S0qF0ENCjiifpUAG.png"
              alt="thefalse.net typographic design with colored halftone images"
              width={800}
              height={533}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
