import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en";
import de from "./de";

export type AvailableTranslations = "de" | "en";

i18next.use(initReactI18next).init({
  lng: "de",
  resources: {
    en: {
      translation: en,
    },
    de: {
      translation: de,
    },
  },
});
