'use client';

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { translationBasePath } from "./settings";

export function useClientTranslation(ns: string, lng?: string) {
  const { t, i18n } = useTranslation(ns);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!lng) return;

    const bundleLoaded = i18n.hasResourceBundle(lng, ns);
    if (bundleLoaded) {
      setReady(true);
      return;
    }

    async function load() {
      try {
        const res = await fetch(`${translationBasePath}/${lng}/${ns}.json`);
        if (!res.ok) throw new Error("404");

        const json = await res.json();
        if(lng) {
        	i18n.addResourceBundle(lng, ns, json, true, true);
		  }
        setReady(true);
      } catch (err) {
        console.error(`❌ Failed loading namespace "${ns}"`, err);
        setReady(true);
      }
    }

    load();
  }, [lng, ns]);

  return { t, ready, i18n };
}
