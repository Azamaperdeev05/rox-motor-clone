"use client";

import { LanguageProvider } from "@/lib/language-context";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
