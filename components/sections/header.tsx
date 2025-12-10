import Image from 'next/image';
import React from 'react';
import LanguageSwitcher from '@/components/ui/language-switcher';

const Header = () => {
  return (
	<header className="fixed w-full flex items-center py-4 px-6 bg-white shadow-md z-40">
      {/* Logo centralizada */}
      <div className="sm:flex-grow flex justify-center">
        <Image
          src="/img/logo-horizontal.png"
          alt="Ivan Cilento - Logo"
          width={200}
          height={54}
          priority
        />
      </div>

      {/* Switcher responsivo */}
      <div className="hidden sm:flex absolute sm:top-4 sm:right-4 items-center space-x-2 bg-white p-2 rounded-full shadow-lg z-50">
        <LanguageSwitcher />
      </div>

      {/* Switcher mobile */}
      <div className="flex sm:hidden ml-auto">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
