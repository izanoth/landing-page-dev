// lib/i18n/settings.ts

export const languages = ["en", "pt"] as const;

export type Language = (typeof languages)[number];

export const fallbackLng: Language = "pt";

// nome do cookie usado pelo middleware para lembrar o idioma
export const cookieName = "i18next";

// namespaces usados no seu app
export const namespaces = [
  "common",
  "hero",
  "about",
  "services",
  "projects",
  "contact",
  "footer",
] as const;

export type Namespace = (typeof namespaces)[number];

// diretório base das traduções (CSR)
export const translationBasePath = "/locales";
