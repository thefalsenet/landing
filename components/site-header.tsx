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
      className={`flex-none left-1/2 fixed top-0 -translate-x-1/2 w-full flex items-center content-center z-50 h-16 transition-all duration-200 ${
        scrolled
          ? "bg-background border-b"
          : "dark:mix-blend-difference text-foreground/70"
      }`}
    >
      <header className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-[1440px]">
        <div>
          <Link href="/" className="relative bottom-1.5 cursor-pointer">
            <Icons.logo className="size-8" />
            <span className="text-muted-foreground absolute -right-[-2px] text-[13px]">
              beta
            </span>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-8">
            {navigation.map((item) => {
              const isActive = item.href === pathname;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium text-muted-foreground/70 hover:text-muted-foreground transition-colors",
                      isActive && "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button
          asChild
          variant={scrolled ? "default" : "link"}
          className={cn(
            "rounded-none font-semibold",
            scrolled ? "" : "text-inherit"
          )}
        >
          <Link href="/app">Start reading</Link>
        </Button>
      </header>
    </div>
  );
}
