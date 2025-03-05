"use client";

import { Toaster } from "@/components/ui/sonner";
import type React from "react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";
import { Provider as JotaiProvider } from "jotai";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <JotaiProvider>
        <NextThemesProvider {...props}>
          <Toaster />
          {children}
        </NextThemesProvider>
      </JotaiProvider>
    </>
  );
}
