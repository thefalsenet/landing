"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import type { LandingDictionary } from "@/lib/i18n-shared";

interface CTASectionProps {
  copy: LandingDictionary["cta"];
}

export default function CTASection({ copy }: CTASectionProps) {
  return (
    <section className="px-4 sm:px-8 md:pt-24 md:pb-6 relative mx-auto flex aspect-[16/9] w-full max-w-[1360px] items-center justify-center overflow-hidden">
      <Image
        src={"/bg-05.png"}
        alt="TheFalse"
        loading="lazy"
        decoding="async"
        fill
        className="object-cover object-center"
        sizes="(min-width: 1360px) 1360px, 100vw"
      />
      {/* <div className="absolute inset-0 bg-secondary" /> */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center md:gap-10 md:px-12">
        <h2 className="text-4xl font-serif tracking-[-0.01em] leading-[1.1] text-white md:text-6xl max-w-[540px]">
          {copy.title}
        </h2>
        <Button variant={"secondary"} className="h-8 px-2 text-sm" asChild>
          <Link href="/mobile">{copy.button}</Link>
        </Button>
      </div>
    </section>
  );
}
