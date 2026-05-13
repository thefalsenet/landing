import { Metadata } from "next";
import { Icons } from "@/components/icons";
import LightRays from "@/components/LightRays/LightRays";
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
    <div className="">
      <Toaster />
      <div className="absolute right-4 top-4 z-50 sm:right-8 sm:top-8">
        <LanguageSwitcher currentLocale={locale} />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4">
        <div className="flex items-center gap-2">
          <Icons.logo className="size-12" />
          <span className="text-3xl font-medium font-serif">{copy.mobile.label}</span>
        </div>

        <div>
          <h1 className="text-4xl font-medium text-balance text-center font-serif">
            {copy.mobile.title}
          </h1>
          <p className="text-2xl text-muted-foreground text-center">
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
