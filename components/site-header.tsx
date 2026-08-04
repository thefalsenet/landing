"use client";
import Link from "next/link";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { SupportedLocale } from "@/lib/i18n-shared";
import { motion } from "framer-motion";

interface SiteHeaderProps {
  ctaLabel?: string;
  currentLocale?: SupportedLocale;
}

export function SiteHeader({
  ctaLabel = "Join early access",
  currentLocale = "en",
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ type: "spring", bounce: 0, duration: 0.7 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300",
        scrolled
          ? "header-material bg-background/75 backdrop-blur-md shadow-[0_12px_24px_-20px_rgba(30,25,21,0.25)]"
          : "bg-transparent",
      )}
    >
      <nav className="w-full max-w-[1360px] mx-auto">
        <div className="mx-auto flex w-full items-center justify-between px-4 sm:px-8 py-4">
          <Link href="/" className="flex items-center">
            <Icons.letterMark className="h-5 w-auto" />
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher currentLocale={currentLocale} />
            <Button asChild variant={"default"} size={"sm"}>
              <Link href="/mobile">{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
