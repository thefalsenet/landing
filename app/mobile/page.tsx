import { Metadata } from "next";
import { Icons } from "@/components/icons";
import { Toaster } from "@/components/ui/sonner";
import { MobileWaitlistForm } from "./MobileWaitlistForm";
import { getLandingCopy } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

export async function generateMetadata(): Promise<Metadata> {
  const { copy } = await getLandingCopy();

  return {
    title: copy.meta.mobileTitle,
    description: copy.meta.mobileDescription,
  };
}

export default async function Mobile() {
  const { locale, copy } = await getLandingCopy();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
      <Toaster />

      <div className="absolute right-4 top-4 z-50 sm:right-8 sm:top-8">
        {/* Floating chrome is a translucent layer over the page, not an
            opaque chip sitting on it. Goes solid under reduced transparency. */}
        <LanguageSwitcher
          currentLocale={locale}
          className="header-material bg-card/70 backdrop-blur-md"
        />
      </div>

      <div className="flex flex-col items-center gap-6 text-center max-w-lg w-full">
        <div
          className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-450 fill-mode-both"
          style={{ animationDelay: "0ms" }}
        >
          <Icons.logo className="size-11" />
          <span className="text-[1.75rem] font-medium font-serif tracking-[-0.01em]">
            {copy.mobile.label}
          </span>
        </div>

        <div
          className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-450 fill-mode-both"
          style={{ animationDelay: "90ms" }}
        >
          {/* Tracking is size-specific: display serif tightens as it grows,
              body stays at 0 and takes the looser leading instead. */}
          <h1 className="text-[2.5rem] font-medium text-balance text-center font-serif leading-[1.08] tracking-[-0.022em]">
            {copy.mobile.title}
          </h1>
          <p className="text-lg text-muted-foreground text-center text-balance leading-[1.5]">
            {copy.mobile.description}
          </p>
        </div>

        <MobileWaitlistForm
          placeholder={copy.mobile.formPlaceholder}
          ariaLabel={copy.mobile.formAriaLabel}
        />
      </div>
    </div>
  );
}
