"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-28 px-6 w-full relative">
      {/* Optional subtle divider line */}

      <div className="flex flex-col items-center text-center space-y-7">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif leading-tight lg:to-primary inline-block text-center text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:bg-linear-to-b lg:from-[#84878D] lg:via-[#84878D] lg:bg-clip-text lg:text-7xl lg:text-transparent"
        >
          <span>Start your </span> <br />
          reading space
        </motion.div>

        {/* Supporting text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden flex-col items-center justify-start md:flex"
        >
          <div className="justify-start text-center text-lg font-normal leading-7 text-white lg:text-xl">
            Create a quiet place for your books, thoughts, and conversations.
            <br />
            Join readers who care more about meaning than metrics.
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <Button size="lg" variant={"secondary"} asChild>
            <Link href="/app">Start reading</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
