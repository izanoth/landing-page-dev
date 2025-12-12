'use client';
import Image from 'next/image';
import React from 'react';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { useClientTranslation } from '@/lib/i18n/use-client-translation';
import { useLang } from "@/lib/i18n/context";
import { ThemeSwitcher } from '../ui/theme-switcher';
import { useTheme } from 'next-themes';
import { useMounted } from '@/lib/use-mounted';
import { GradientChars } from '@/components/ui/gradient-chars';

const Header = () => {
  const { lng } = useLang();
  const { t } = useClientTranslation('about', lng);
  const { theme } = useTheme();
  const mounted = useMounted();

  const headerClass = mounted
    ? theme === "dark"
      ? "bg-black shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]"
      : "bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
    : "bg-transparent";
    
  const textFrom = theme === "dark" ? "#A7F3D0" : "#552783";
  const textTo   = theme === "dark" ? "#51a86a" : "#199de3";
  
  //from="#004f6a" to="#51a86a"

  return (
	<header className={`${headerClass} fixed w-full flex items-center py-4 px-6 z-40`}>
      {/* Logo centralizada */}
      <div className="sm:flex-grow flex justify-center">
      	<div className="flex flex-row justify-center">
	        {mounted && <Image
	          src={`/img/${theme}-theme/logo.png`}
	          alt="Ivan Cilento - Logo"
	          width={54}
	          height={54}
	          priority
	        />}
	        {mounted && <div className="flex flex-col justify-center ml-2 leading-tight">
	        	<GradientChars text="IVAN CILENTO" from={textFrom} to={textTo} className="text-lg font-bold tracking-wide leading-tight" />
	        	<GradientChars text={t('role')} from={textFrom} to={textTo} className="text-[9px] font-bold leading-none" />
	        </div>}
        	
        </div>
      </div>

      {/* Switcher responsivo */}
		<div className={`hidden sm:flex absolute sm:top-4 sm:right-4 items-center space-x-2 p-2 rounded-full ${headerClass} z-100`}>

        <LanguageSwitcher />
		  <ThemeSwitcher />
      </div>

      {/* Switcher mobile */}
      <div className="flex sm:hidden ml-auto">
        <LanguageSwitcher />
		  <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
