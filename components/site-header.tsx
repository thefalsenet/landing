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
      const threshold = 10;

      if (scrollPosition > threshold && !scrolled) {
        setScrolled(true);
      } else if (scrollPosition <= threshold && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 h-16 flex items-center transition-all duration-200",
        scrolled ? "bg-background/80 border-b border-border backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-2xl px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="size-6" />
          <span className="text-sm font-medium text-foreground hidden sm:inline">TheFalse</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#explore" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        <Button asChild size="sm" className="rounded-md">
          <Link href="/app">Start reading</Link>
        </Button>
      </div>
    </header>
  );
}
