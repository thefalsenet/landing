import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="flex flex-col max-w-[1440px] w-full items-center justify-center pt-36 pb-24 px-6 text-center border gap-12 mb-32">
      <div className="flex flex-col gap-3 w-full">
        <div>
          <div className="inline-block border p-2 text-sm text-muted-foreground mb-6">
            launches mar 20
          </div>
        </div>
        <h1
          className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter"
          style={{ lineHeight: "0.9em" }}
        >
          I wanna dive into
          <br />
          the next story
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center">
        <Button
          size="lg"
          className="py-6 font-bold text-xl lg:w-fit w-full"
          asChild
        >
          <Link href="/app">pre-register</Link>
        </Button>
      </div>
    </section>
  );
}
