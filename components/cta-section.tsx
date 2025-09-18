import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";

export default function CTASection() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto relative">
      <div className="flex py-40 px-6 flex-col items-center justify-center gap-12 max-w-[1440px] w-full text-center">
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
      </div>
      <div className="absolute inset-0 z-[-1] w-full overflow-hidden mask-t-from-50% max-w-[1440px]">
        <Image src={"/cta-bg.png"} className="object-cover object-top grayscale" alt="" fill /></div>
      <Footer className="bg-background/25 backdrop-blur-xl mt-20" />
    </section>
  );
}
