'use client';
import React, { useState, useEffect } from 'react';
import { useClientTranslation } from '@/lib/i18n/use-client-translation';
import { useLang } from "@/lib/i18n/context";
import Loader from '@/components/ui/loader';

const Hero = () => {
  const { lng } = useLang();
  const { t, ready, i18n } = useClientTranslation("hero", lng);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ready) {
      setLoading(false);
    }
  }, [ready]);

  if (loading) return <Loader />;

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-purpleStart via-indigoMid to-blueEnd text-white">
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-5xl text-shadow-lg/30 md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up">
          {t('title')}
        </h1>
        <p className="text-xl text-shadow-lg/20 md:text-2xl mb-8 animate-fade-in-up delay-200">
          {t('subtitle')}
        </p>
        <a href="#projects">
        	<button className="px-8 py-3 shadow-lg/30 cursor-pointer bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-400 rounded-full text-lg font-semibold shadow-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400">
          {t('button')}
			</button>        
        </a>
      </div>
      <div className="absolute inset-0 z-0">
        <img src="/img/hero-banner.png" alt="background" className="w-full h-full grayscale-50 object-cover" />
      </div>
    </section>
  );
};

export default Hero;
