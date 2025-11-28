import type { Metadata } from "next";
import { dir } from 'i18next'
import { languages } from "@/lib/i18n/settings";
import { LangProvider } from "@/lib/i18n/context";
import I18nProvider from '@/lib/i18n/provider';
import "../globals.css";
import WhatsAppButton from '@/components/ui/whatsapp-button';
import React from 'react';


export const metadata: Metadata = {
  title: "Ivan Cilento - Software Developer",
  description: "Landing page for software developer Ivan Cilento, showcasing experience, projects, and services.",
  openGraph: {
    type: "website",
    url: "https://ivancilento.com",
    title: "Ivan Cilento - Software Developer",
    description: "Landing page for software developer Ivan Cilento, showcasing experience, projects, and services.",
    images: [
      {
        url: "https://cilento.vercel.app/img/logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Ivan Cilento - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Cilento - Software Developer",
    description: "Landing page for software developer Ivan Cilento, showcasing experience, projects, and services.",
    images: ["https://cilento.vercel.app/img/logo-horizontal.png"],
  },
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
    	<head>
    	</head>
      <body className="bg-background text-foreground font-manrope antialiased">
        <LangProvider initialLng={lng}>
	        <I18nProvider>
	          {children}
	        </I18nProvider>
        </LangProvider>
        <WhatsAppButton phoneNumber="+551163272784" />
      </body>
    </html>
  );
}
