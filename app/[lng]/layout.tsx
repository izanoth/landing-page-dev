import type { Metadata } from "next";
import { dir } from 'i18next'
import { languages } from "@/lib/i18n/settings";
import { LangProvider } from "@/lib/i18n/context";
import I18nProvider from '@/lib/i18n/provider';
import "../globals.css";
import WhatsAppButton from '@/components/ui/whatsapp-button';
import LanguageSwitcher from "@/components/ui/language-switcher";
import React from 'react';


export const metadata: Metadata = {
  title: "Ivan Cilento - Software Developer",
  description: "Landing page for software developer Ivan Cilento, showcasing experience, projects, and services.",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{lng: string}>;
}>) {
  const resolvedParams = await params;
  const { lng } = resolvedParams;

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className="bg-background text-foreground font-manrope antialiased">
        <LangProvider initialLng={lng}>
           <LanguageSwitcher lng={lng} />
	        <I18nProvider>
	          {children}
	        </I18nProvider>
        </LangProvider>
        <WhatsAppButton phoneNumber="+5511999999999" />
      </body>
    </html>
  );
}
