import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="flex flex-col max-w-[1440px] w-full items-center justify-center pt-36 pb-24 px-6 text-center border gap-12 mb-32 mx-auto">
      <div className="flex flex-col gap-3 w-full">
        <div>
          {/* <div className="inline-block border p-2 text-sm text-muted-foreground mb-6">
            launches mar 20
          </div> */}
        </div>
        <h1
          className="text-4xl md:text-7xl lg:text-8xl font-medium font-serif tracking-tighter"
          style={{ lineHeight: "0.9em" }}
        >
          Tell us what you love,
          <br />
          we’ll do the rest.
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center">
        <Button
          size="lg"
          className="py-6 font-bold text-xl lg:w-fit w-full"
          asChild
        >
          <Link href="/app">Get Personalized Picks</Link>
        </Button>
      </div>
      <div className="absolute inset-0 z-[-1] w-full">
        <Image sizes="max((min(100vw - 48px, 1440px) - 48px) / 2, 1px)" src={"/screenshot.png"} className="object-cover grayscale hover:grayscale-0 transition-all duration-200 ease-in-out" alt="" fill /></div>
    </section>
  );
}
