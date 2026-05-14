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
    <section className="w-full px-4 sm:px-8 pt-16 pb-4 md:pt-24 md:pb-6">
      <div className="relative mx-auto w-full max-w-[1360px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={"/bg-05.png"}
            alt="TheFalse"
            loading="lazy"
            decoding="async"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1360px) 100vw, 1360px"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center space-y-6 text-center py-28 md:py-40">
          <h2 className="text-4xl font-serif tracking-[-0.01em] leading-[1.1] text-white md:text-6xl">
            {copy.title}
          </h2>
          <Button variant={"secondary"} className="h-8 px-2 text-sm" asChild>
            <Link href="/mobile">{copy.button}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
