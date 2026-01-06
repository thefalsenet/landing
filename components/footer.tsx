"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Icons } from "./icons";
import Link from "next/link";
import CTASection from "./cta-section";
import { siteConfig } from "@/config/site";

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

export default function Footer() {
  const ref = useRef(null);

  return (
    <div className="dark overflow-x-hidden bg-primary flex-col items-center justify-center flex">
      <CTASection />
      <div className="relative z-50 mx-auto mb-12 mt-10 md:mt-52 flex max-w-[2900px] flex-col items-start justify-start gap-10 self-stretch px-4">
        <div className="flex w-full flex-col md:flex-row items-start justify-between lg:w-[900px]">
          <div className="inline-flex flex-col items-start justify-between gap-4 mb-10 md:mb-0 self-stretch">
            <div className="inline-flex w-8 items-center justify-start gap-3">
              <a href="/">
                <Icons.logo className="size-11 text-primary-foreground" />
              </a>
            </div>
            <div className="inline-flex items-center justify-start gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-white/10 p-2 backdrop-blur-[20px] transition-colors hover:bg-white/20"
                  >
                    {Icon && (
                      <div className="relative size-4 overflow-hidden">
                        <Icon className="absolute size-4 text-white" />
                      </div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-0.5 self-stretch bg-white/20" />
        <div className="flex flex-col items-start justify-start gap-6 self-stretch">
          <div className="inline-flex items-center justify-between self-stretch flex-col-reverse md:flex-row gap-3">
            <div className="justify-start text-xs font-medium leading-tight text-white opacity-80 sm:text-sm">
              &copy; {new Date().getFullYear()} {" " + siteConfig.name}
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/about"
                className="justify-start text-nowrap text-sm font-normal leading-tight text-white/70 opacity-80 transition-opacity hover:opacity-100"
              >
                About
              </Link>
              <div className="h-5 w-0 outline outline-1 outline-offset-[-0.50px] outline-white/20" />

              <Link
                href="/terms"
                className="justify-start text-nowrap text-sm font-normal leading-tight text-white/70 opacity-80 transition-opacity hover:opacity-100"
              >
                Terms & Conditions
              </Link>
              <div className="h-5 w-0 outline outline-1 outline-offset-[-0.50px] outline-white/20" />
              <Link
                href="/privacy"
                className="justify-start text-nowrap text-sm font-normal leading-tight text-white/70 opacity-80 transition-opacity hover:opacity-100"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
