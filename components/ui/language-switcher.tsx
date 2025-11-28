'use client';

import { useClientTranslation } from "@/lib/i18n/use-client-translation";
import { useRouter, usePathname } from 'next/navigation';
import { languages } from '@/lib/i18n/settings';
import React from 'react';
import { useLang } from "@/lib/i18n/context";

type SvgProps = {
  size?: number;
  className?: string;
  title?: string;
};

export const USFlag: React.FC<SvgProps> = ({ size = 24, className, title = 'US' }) => (
  <svg
    width={size}
    height={(size * 2) / 3}
    viewBox="0 0 300 200"
    className={className}
    role="img"
    aria-label={title}
  >
    <title>{title}</title>

    {/* 13 stripes */}
    <rect width="300" height="200" fill="#b22234" />
    {[...Array(6)].map((_, i) => (
      <rect
        key={i}
        y={(i * 2 + 1) * (200 / 13)}
        width="300"
        height={200 / 13}
        fill="#fff"
      />
    ))}

    {/* Blue canton */}
    <rect width="120" height={(200 / 13) * 7} fill="#3c3b6e" />

    {/* Simplified stars (clearer at small sizes) */}
    <g fill="#fff">
      {[...Array(6)].map((_, row) =>
        [...Array(row % 2 === 0 ? 6 : 5)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={10 + col * 20 + (row % 2 ? 10 : 0)}
            cy={10 + row * 15}
            r={2.5}
          />
        ))
      )}
    </g>
  </svg>
);


export const BRFlag: React.FC<SvgProps> = ({ size = 24, className, title = 'BR' }) => (
  <svg
    width={size}
    height={(size * 2) / 3}
    viewBox="0 0 300 200"
    className={className}
    role="img"
    aria-label={title}
  >
    <title>{title}</title>

    {/* Green background */}
    <rect width="300" height="200" fill="#009b3a" />

    {/* Yellow rhombus */}
    <polygon
      points="
        150,40
        260,100
        150,160
        40,100
      "
      fill="#ffdf00"
    />

    {/* Blue circle */}
    <circle cx="150" cy="100" r="50" fill="#002776" />

    {/* White band (simplified arc) */}
    <ellipse
      cx="150"
      cy="100"
      rx="60"
      ry="10"
      fill="#fff"
      transform="rotate(-12 150 100)"
    />
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
    router.push(newUrl);
  }

  const baseClass =
    "cursor-pointer transition-all p-1";
  const activeClass =
    "opacity-100 scale-110";
  const inactiveClass =
    "opacity-30 hover:opacity-80 hover:scale-105";

  return (
    <div className="fixed top-4 right-4 flex items-center space-x-2 bg-white p-2 rounded-full shadow-lg z-50">
      
      <button
        className={`${baseClass} ${
          lng === "en" ? activeClass : inactiveClass
        }`}
        onClick={() => switchTo("en")}
      >
        <USFlag />
      </button>

      <button
        className={`${baseClass} ${
          lng === "pt" ? activeClass : inactiveClass
        }`}
        onClick={() => switchTo("pt")}
      >
        <BRFlag />
      </button>

    </div>
  );
}