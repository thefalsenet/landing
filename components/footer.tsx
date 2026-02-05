"use client";
import { Icons } from "./icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/thefalsenet",
    icon: Icons.twitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/thefalsenet",
    icon: Icons.instagram,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="flex flex-col gap-8">
          {/* Logo and Social */}
          <div className="flex items-start justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="size-6" />
              <span className="text-sm font-medium text-muted-foreground">TheFalse</span>
            </Link>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="size-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Links and Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
            <p className="text-xs">
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>

          {/* Closing statement */}
          <p className="text-xs text-muted-foreground pt-4 border-t border-border">
            You can delete your account at any time. — The TheFalse team
          </p>
        </div>
      </div>
    </footer>
  );
}
