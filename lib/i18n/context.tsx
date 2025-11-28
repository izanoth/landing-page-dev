"use client";

import { createContext, useContext, useState, useEffect } from "react";
import i18n from "@/lib/i18n/client";

type LangCtx = { lng: string; setLng: (lng: string) => void };
const LangContext = createContext<LangCtx | null>(null);

export function LangProvider({
  children,
  initialLng,
}: {
  children: React.ReactNode;
  initialLng: string;
}) {
  const [lng, setLng] = useState(initialLng);

  useEffect(() => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);  // sem load de namespace aqui
    }
  }, [lng]);

  return (
    <LangContext.Provider value={{ lng, setLng }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be inside <LangProvider>");
  return ctx;
}
