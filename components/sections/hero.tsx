'use client';
import React from 'react';
import Image from 'next/image';
import { useClientTranslation } from '@/lib/i18n/use-client-translation';
import { useEffect } from "react";
import { useLang } from "@/lib/i18n/context";

const Hero = () => {
  const { lng } = useLang();
  const { t, ready, i18n } = useClientTranslation("hero", lng);

  // Depuração assim que `ready` mudar
  /*useEffect(() => {
    console.log("=== HERO DEBUG ===");
    console.log("lng:", lng);
    console.log("i18n.language:", i18n.language);
    console.log("ready:", ready);
    console.log("t('title'):", t("title"));
    console.log("All keys:", i18n.getResourceBundle(lng, "hero"));
    console.log("==================");
  }, [ready, lng, i18n, t]);*/

  if (!ready) return <p>Carregando traduções…</p>;

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-purpleStart via-indigoMid to-blueEnd text-white">
      <div className="container mx-auto px-4 z-10">
        <Image src="/img/logo-horizontal.png" className="" width={179} height={100} alt="Logo"/>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200">
          {t('subtitle')}
        </p>
        <button className="px-8 py-3 bg-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up animate-delay-400">
          {t('button')}
        </button>
      </div>
      {/* Placeholder for tech illustration/image */}
      <div className="absolute inset-0 z-0">
        <img src="/img/hero-banner.png" alt="background" className="w-full h-full grayscale-70 object-cover" />
      </div>
    </section>
  );
};

export default Hero;
