import type { Metadata } from "next";
import { dir } from 'i18next'
import { languages } from "@/lib/i18n/settings";
import { LangProvider } from "@/lib/i18n/context";
import I18nProvider from '@/lib/i18n/provider';
import "../globals.css";
import WhatsAppButton from '@/components/ui/whatsapp-button';
import React from 'react';

const isDev = process.env.NODE_ENV === "development";

const siteUrl = isDev
  ? "http://localhost:3000"
  : "https://cilento.vercel.app";
  
const languageAlternates = Object.fromEntries(
  languages.map((lng) => [lng, `${siteUrl}/${lng}`])
);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Ivan Cilento - Software Developer",
  description:
    "Portfólio profissional do desenvolvedor de software Ivan Cilento, apresentando experiência técnica, projetos, stack de tecnologias e serviços especializados.",

  keywords: [
    "web development",
    "software developer",
    "full stack",
    "programming",
    "engineering",
  ],

  authors: [{ name: "Ivan Cilento" }],
  creator: "Ivan Pavin Cilento",
  publisher: "Ivan Cilento",

  openGraph: {
    type: "website",
    title: "Ivan Cilento - Software Developer",
    description:
      "Portfólio profissional do desenvolvedor de software Ivan Cilento, apresentando experiência técnica, projetos, stack de tecnologias e serviços especializados.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/img/logo-horizontal.png`,
        width: 1200,
        height: 630,
        alt: "Ivan Cilento - Software Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ivan Cilento - Software Developer",
    description:
      "Portfólio profissional do desenvolvedor de software Ivan Cilento, apresentando experiência técnica, projetos, stack de tecnologias e serviços especializados.",
    images: [`${siteUrl}/img/logo-horizontal.png`],
  },

  robots: {
    index: !isDev,
    follow: !isDev,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
    languages: languageAlternates,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ivan Pavin Cilento",
  url: "https://cilento.vercel.app",
  jobTitle: "Desenvolvedor Full-Stack",
  sameAs: [
    "https://github.com/izanoth",
    "https://linkedin.com/in/icilento",
  ],
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
    	 <script
	      type="application/ld+json"
	      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
	    />
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
