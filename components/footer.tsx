"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Icons } from "./icons";
import Link from "next/link";
import CTASection from "./cta-section";
import { siteConfig } from "@/config/site";
import type { LandingDictionary } from "@/lib/i18n-shared";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/thefalsenet",
    icon: Icons.twitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/thefalse/",
    icon: Icons.linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/thefalsenet",
    icon: Icons.instagram,
  },
];

interface FooterProps {
  copy: LandingDictionary["footer"];
}

export default function Footer({ copy }: FooterProps) {
  const ref = useRef(null);

  return (
    <footer>
      <div className="w-full pt-10 pb-8 px-4 sm:px-8">
        <div className="hidden lg:grid lg:grid-cols-5 gap-x-8 gap-y-10">
          <div className="col-span-2 pr-8 flex flex-col gap-3">
            <a href="/">
              <Icons.logo className="size-8" />
            </a>
            <p className="max-w-[200px] text-xs tracking-[-0.03em] text-muted-foreground font-serif">
              {copy.tagline}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-sm">Social</h3>
            <ul className="space-y-2.5">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-sm">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={"/about"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href={"/blog"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href={"mailto:team@thefalse.net"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href={"/feedback"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-sm">Legal</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={"/terms"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href={"/privacy"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
