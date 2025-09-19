import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto relative overflow-hidden">
      <div className="flex py-20 md:py-28 px-6 flex-col items-center justify-center gap-12 max-w-[1440px] w-full text-center mb-32 relative overflow-hidden">
        <div className="flex flex-col items-center max-w-96">
          <h1
            className="text-xl md:text-2xl font-display font-bold font-serif"
          >
            Rethink reading.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-snug text-center">
            Track, annotate, and share your books effortlessly.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center max-w-96 justify-center">
          <Button
            size="lg"
            asChild
          >
            <Link href="/app">Try thefalse</Link>
          </Button>
        </div>
        <div className="absolute inset-0 z-[-1] max-w-[1440px] overflow-hidden mx-auto px-6">
          <div className="relative h-full overflow-hidden bg-background border shadow"><Image src={"/cta-bg.png"} className="object-cover object-top grayscale" alt="" fill /></div>
        </div>
      </div>

    </section>
  );
}
