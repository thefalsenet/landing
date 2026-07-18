"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { LandingDictionary } from "@/lib/i18n-shared";
import {
  StaggerGroup,
  StaggerItem,
  WordReveal,
} from "@/components/motion/reveal";

interface CTASectionProps {
  copy: LandingDictionary["cta"];
}

export default function CTASection({ copy }: CTASectionProps) {
  return (
    <div className="px-4 sm:px-8">
      <section className="md:pt-24 md:pb-6 relative mx-auto flex aspect-[16/9] w-full max-w-[1360px] items-center justify-center overflow-hidden rounded-lg border">
        <Image
          src={"/bg-05.png"}
          alt="TheFalse"
          loading="lazy"
          decoding="async"
          fill
          className="object-cover object-center ambient-drift"
          sizes="(min-width: 1360px) 1360px, 100vw"
        />
        <div className="absolute inset-0 bg-[#1f1a17]/35" />
        <div className="absolute inset-x-[14%] bottom-[18%] h-24 rounded-full bg-white/10 blur-3xl ambient-shimmer" />
        <StaggerGroup
          className="relative z-10 flex flex-col items-center gap-8 px-6 text-center md:gap-10 md:px-12"
          delayChildren={0.1}
        >
          <StaggerItem direction="scale">
            <WordReveal
              as="h2"
              text={copy.title}
              className="text-4xl font-serif tracking-[-0.02em] leading-[1.15] text-white md:text-6xl max-w-[540px]"
              amount={0.5}
            />
          </StaggerItem>
          <StaggerItem direction="up">
            <Button variant={"secondary"} asChild>
              <Link href="/mobile">{copy.button}</Link>
            </Button>
          </StaggerItem>
        </StaggerGroup>
      </section>
    </div>
  );
}
