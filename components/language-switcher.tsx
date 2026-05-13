"use client";

import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  localeCookieName,
  supportedLocales,
  type SupportedLocale,
} from "@/lib/i18n-shared";

interface LanguageSwitcherProps {
  currentLocale: SupportedLocale;
  className?: string;
}

export function LanguageSwitcher({
  currentLocale,
  className,
}: LanguageSwitcherProps) {
  const router = useRouter();

  function setLocale(locale: SupportedLocale) {
    document.cookie = `${localeCookieName}=${locale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn("uppercase", className)}
          aria-label="Language switcher"
        >
          {currentLocale}
          <ChevronDown data-icon="inline-end" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-32">
        <DropdownMenuRadioGroup
          value={currentLocale}
          onValueChange={(value) => setLocale(value as SupportedLocale)}
        >
          {supportedLocales.map((locale) => (
            <DropdownMenuRadioItem
              key={locale}
              value={locale}
              className="uppercase"
            >
              {locale}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
