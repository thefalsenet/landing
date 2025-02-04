"use client";

import { Toaster } from "@/components/ui/sonner";
import type React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
