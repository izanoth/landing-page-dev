'use client';
import Image from 'next/image';
import React from 'react';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { ThemeSwitcher } from '../ui/theme-switcher';
import { useTheme } from 'next-themes';
import { useMounted } from '@/lib/use-mounted';

const Header = () => {
  const { theme } = useTheme();
  const mounted = useMounted();
  
  console.log('theme: ', theme);

  const headerClass = mounted
    ? theme === "dark"
      ? "bg-black shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]"
      : "bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
    : "bg-transparent";

  return (
	<header className={`${headerClass} fixed w-full flex items-center py-4 px-6 z-40`}>
      {/* Logo centralizada */}
      <div className="sm:flex-grow flex justify-center">
        {mounted && <Image
          src={`/img/${theme}-theme/logo-horizontal.png`}
          alt="Ivan Cilento - Logo"
          width={200}
          height={54}
          priority
        />}
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
