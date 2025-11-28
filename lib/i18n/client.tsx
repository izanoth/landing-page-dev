import i18next from "i18next";
import { initReactI18next } from "react-i18next";

let initialized = false;

export function initI18n() {
  if (initialized) return i18next;
  initialized = true;

  i18next.use(initReactI18next).init({
    lng: "pt",
    fallbackLng: "pt",
    ns: [],
    defaultNS: undefined,
    resources: {},
    interpolation: { escapeValue: false }
  });

  return i18next;
}

export default i18next;
