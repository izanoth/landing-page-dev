'use client';
import React from 'react';
import { useClientTranslation } from '@/lib/i18n/use-client-translation';
import { useLang } from "@/lib/i18n/context";
import Loader from '@/components/ui/loader';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useMounted } from '@/lib/use-mounted';
import { Button } from '@/components/ui/button';
import { GradientChars } from '@/components/ui/gradient-chars';

const Hero = () => {
  const { lng } = useLang();
  const { t, ready } = useClientTranslation("hero", lng);
  const { theme } = useTheme();
  const mounted = useMounted();

  const textFrom = theme === "dark" ? "#A7F3D0" : "#E0F7FF";
  const textTo   = theme === "dark" ? "#ECFEFF" : "#FFFFFF";
  
  if (!ready) return <Loader />;

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-purpleStart via-indigoMid to-blueEnd text-white">
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-5xl text-shadow-lg/30 md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up">
          <GradientChars text={t('title')} from={textFrom} to={textTo} />
        </h1>
        <p className="text-xl text-shadow-lg/20 md:text-2xl mb-8 animate-fade-in-up delay-200">
          {t('subtitle')}
        </p>
		  <Button size="lg"
			  asChild
			  className={`	   
			    sm:p-8 p-6
			    rounded-full 
			    font-semibold 
			    text-white 
			    shadow-lg 
			    backdrop-blur-md
			  	 sm:text-xl md:text-md
			    ${theme === "dark" ? `
			      /* DARK THEME */
			      bg-gradient-to-r from-emerald-500 to-green-400
			 		hover:from-emerald-600 hover:to-green-500
			 		transition-all duration-300
			      shadow-[0_0_28px_rgba(0,255,180,0.25)]
			      hover:shadow-[0_0_36px_rgba(0,255,200,0.35)]
			
			    ` : `
			      /* SKY THEME */
			 		bg-gradient-to-r from-blue-500 to-cyan-400
			 		hover:from-blue-600 hover:to-cyan-500
			 		transition-all duration-300
			      shadow-[0_8px_20px_rgba(56,189,248,0.35)]
			      hover:shadow-[0_10px_24px_rgba(56,189,248,0.45)]
			    `}
			  `}
		  >
			  <a href="#projects">
			    <GradientChars text={t("button")} from={textFrom} to={textTo} />
			  </a>
		  </Button>
      </div>
      <div className="absolute inset-0 z-0">
        {mounted && <Image src={`/img/${theme}-theme/hero-banner.png`} alt="background" layout="fill" objectFit="cover" className="w-full h-full grayscale-50" />}
      </div>
    </section>
  );
};

export default Hero;
