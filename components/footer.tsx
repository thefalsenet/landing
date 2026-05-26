"use client";
import { useRef } from "react";
import { Icons } from "./icons";
import type { LandingDictionary } from "@/lib/i18n-shared";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

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
      <Reveal
        className="relative overflow-hidden px-6 pt-20 pb-20 md:px-12 md:pt-[120px] md:pb-[120px]"
        direction="up"
        amount={0.1}
      >
        <StaggerGroup
          className="hidden lg:grid lg:grid-cols-5 gap-x-8 gap-y-10"
          delayChildren={0.05}
          staggerChildren={0.08}
        >
          <StaggerItem className="col-span-2 pr-8 flex flex-col gap-3">
            <a href="/" className="transition-transform duration-300 ease-out hover:-translate-y-1">
              <Icons.logo className="size-8" />
            </a>
            <p className="max-w-[200px] text-xs tracking-[-0.03em] text-muted-foreground font-serif">
              {copy.tagline}
            </p>
          </StaggerItem>
          <StaggerItem className="space-y-4">
            <h3 className="font-medium text-sm font-serif">
              {copy.socialTitle}
            </h3>
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
          </StaggerItem>
          <StaggerItem className="space-y-4">
            <h3 className="font-medium text-sm font-serif">
              {copy.companyTitle}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={"/about"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {copy.about}
                </a>
              </li>
              <li>
                <a
                  href={"/blog"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {copy.blog}
                </a>
              </li>
              <li>
                <a
                  href={"mailto:team@thefalse.net"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {copy.contactUs}
                </a>
              </li>
              <li>
                <a
                  href={"/feedback"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {copy.feedback}
                </a>
              </li>
            </ul>
          </StaggerItem>
          <StaggerItem className="space-y-4">
            <h3 className="font-medium text-sm font-serif">
              {copy.legalTitle}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={"/terms"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {copy.terms}
                </a>
              </li>
              <li>
                <a
                  href={"/privacy"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {copy.privacy}
                </a>
              </li>
            </ul>
          </StaggerItem>
        </StaggerGroup>
        <div
          ref={ref}
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0"
        />
      </Reveal>
    </footer>
  );
}
