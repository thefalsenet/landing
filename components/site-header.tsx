"use client";
import Link from "next/link";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.6; // 60vh

      if (scrollPosition > threshold && !scrolled) {
        setScrolled(true);
      } else if (scrollPosition <= threshold && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`flex-none left-1/2 fixed top-0 -translate-x-1/2 w-full flex items-center content-center z-50 h-16 transition-colors duration-200 ${scrolled ? "bg-background border-b" : "mix-blend-difference"}`}
    >
      <header className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-[1440px]">
        <div>
          <Link href="/" className="flex items-center gap-2 ">
            <Icons.logo className="h-6 w-6 " />
            <span className="font-bold text-xl ">thefalse</span>
          </Link>
        </div>
        <Button
          asChild
          size={"lg"}
          variant={scrolled ? "default" : "link"}
          className="rounded-none font-semibold text-base"
        >
          <Link href="/app">Step Into Reality</Link>
        </Button>
      </header>
    </div>
  );
}
