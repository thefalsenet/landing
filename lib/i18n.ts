import { cookies, headers } from "next/headers";

import {
  landingCopy,
  localeCookieName,
  supportedLocales,
  type SupportedLocale,
} from "@/lib/i18n-shared";

export type {
  LandingDictionary,
  SupportedLocale,
} from "@/lib/i18n-shared";
export { landingCopy, localeCookieName, supportedLocales } from "@/lib/i18n-shared";

export async function getPreferredLocale(): Promise<SupportedLocale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(localeCookieName)?.value;

  if (cookieLocale && supportedLocales.includes(cookieLocale as SupportedLocale)) {
    return cookieLocale as SupportedLocale;
  }

  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language") ?? "";
  const normalized = acceptLanguage.toLowerCase();

  if (normalized.includes("ru")) return "ru";
  if (normalized.includes("uz")) return "uz";
  return "en";
}

export async function getLandingCopy() {
  const locale = await getPreferredLocale();
  return {
    locale,
    copy: landingCopy[locale],
  };
}
