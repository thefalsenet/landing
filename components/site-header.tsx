"use client";
import Link from "next/link";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Feedback", href: "/feedback" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md transition-[border-color] duration-200 border-b border-transparent`}
    >
      <nav className="w-full max-w-[1360px] mx-auto">
        <div className="mx-auto flex w-full items-center justify-between px-4 sm:px-8 py-4">
          <Link href="/" className="flex items-center">
            <Icons.letterMark className="h-4 w-auto" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-6 md:flex mr-6">
              {navigation.map((item) => {
                const isActive = item.href === pathname;
                return (
                  <Link
                    href={item.href}
                    key={item.name}
                    className={cn(
                      "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                      isActive && "text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <Button
              asChild
              variant={"default"}
              className={cn("h-8 px-3 text-sm")}
            >
              <Link href="/app">Start reading</Link>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
