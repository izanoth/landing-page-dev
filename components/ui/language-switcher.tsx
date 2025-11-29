'use client';

import { useRouter, usePathname } from 'next/navigation';
import React from 'react';
import { useLang } from "@/lib/i18n/context";

type SvgProps = {
  size?: number;
  className?: string;
  title?: string;
};

export const UKFlag: React.FC<SvgProps> = ({
  size = 24,
  className = "",
  title = "UK",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    aria-label={title}
    role="img"
    {...props}
    viewBox="0 0 512 512"
  >
<mask id="a">
      <circle cx={256} cy={256} r={256} fill="#fff" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#eee"
        d="m0 0 8 22-8 23v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-22 8-23-8h-23l-54 32-54-32h-32l-48 32-48-32h-32l-54 32L68 0H0z"
      />
      <path
        fill="#0052b4"
        d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"
      />
      <path
        fill="#d80027"
        d="M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"
      />
    </g>
  </svg>
);

export const CNFlag: React.FC<SvgProps> = ({
  size = 24,
  className = "",
  title = "CN",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    aria-label={title}
    role="img"
    {...props}
    viewBox="0 0 512 512"
  >
  	 <mask id="a">
      <circle cx={256} cy={256} r={256} fill="#fff" />
    </mask>
    <g mask="url(#a)">
      <path fill="#d80027" d="M0 0h512v512H0z" />
      <path
        fill="#ffda44"
        d="m140.1 155.8 22.1 68h71.5l-57.8 42.1 22.1 68-57.9-42-57.9 42 22.2-68-57.9-42.1H118zm163.4 240.7-16.9-20.8-25 9.7 14.5-22.5-16.9-20.9 25.9 6.9 14.6-22.5 1.4 26.8 26 6.9-25.1 9.6zm33.6-61 8-25.6-21.9-15.5 26.8-.4 7.9-25.6 8.7 25.4 26.8-.3-21.5 16 8.6 25.4-21.9-15.5zm45.3-147.6L370.6 212l19.2 18.7-26.5-3.8-11.8 24-4.6-26.4-26.6-3.8 23.8-12.5-4.6-26.5 19.2 18.7zm-78.2-73-2 26.7 24.9 10.1-26.1 6.4-1.9 26.8-14.1-22.8-26.1 6.4 17.3-20.5-14.2-22.7 24.9 10.1z"
      />
    </g>
  </svg>
);


export const BRFlag: React.FC<SvgProps> = ({
  size = 24,
  className = "",
  title = "BR",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    aria-label={title}
    role="img"
    {...props}
    viewBox="0 0 512 512"
  >
    <mask id="a">
      <circle cx={256} cy={256} r={256} fill="#fff" />
    </mask>
    <g mask="url(#a)">
      <path fill="#6da544" d="M0 0h512v512H0z" />
      <path fill="#ffda44" d="M256 100.2 467.5 256 256 411.8 44.5 256z" />
      <path
        fill="#eee"
        d="M174.2 221a87 87 0 0 0-7.2 36.3l162 49.8a88.5 88.5 0 0 0 14.4-34c-40.6-65.3-119.7-80.3-169.1-52z"
      />
      <path
        fill="#0052b4"
        d="M255.7 167a89 89 0 0 0-41.9 10.6 89 89 0 0 0-39.6 43.4 181.7 181.7 0 0 1 169.1 52.2 89 89 0 0 0-9-59.4 89 89 0 0 0-78.6-46.8zM212 250.5a149 149 0 0 0-45 6.8 89 89 0 0 0 10.5 40.9 89 89 0 0 0 120.6 36.2 89 89 0 0 0 30.7-27.3A151 151 0 0 0 212 250.5z"
      />
    </g>
  </svg>
);


export default function LanguageSwitcher() {
  const { lng, setLng } = useLang();
  const router = useRouter();
  const pathname = usePathname();
 
  function switchTo(newLng: string) {
    if (newLng === lng) return;
    setLng(newLng);
    const segments = pathname.split("/");
    segments[1] = newLng;
    const newUrl = segments.join("/");
    router.push(newUrl, { scroll: false });
  }

  const baseClass =
    "cursor-pointer transition-all p-1";
  const activeClass =
    "opacity-100 scale-110";
  const inactiveClass =
    "opacity-50 hover:opacity-80 hover:scale-105";

  return (
    <div className="">
      <button
        className={`text-[24px] ${baseClass} ${
          lng === "pt" ? activeClass : inactiveClass
        }`}
        onClick={() => switchTo("pt")}
      >
        <BRFlag />
      </button>
      
       <button
        className={`text-[24px] ${baseClass} ${
          lng === "en" ? activeClass : inactiveClass
        }`}
        onClick={() => switchTo("en")}
      >
        <UKFlag />
      </button>
        
      <button
        className={`text-[24px] ${baseClass} ${
          lng === "zh" ? activeClass : inactiveClass
        }`}
        onClick={() => switchTo("zh")}
      >
        <CNFlag />
      </button>

    </div>
  );
}