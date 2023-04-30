import type Ii18nStrings from "./index.types";
import type { INavbar, IHero } from "./index.types";

const navbar: INavbar = {
  service: "service",
  process: "prozess",
  references: "referenzen",
  about: "über mich",
};

const hero: IHero = {
  smallTitle: "MERN Entwickler",
  bigTitle: "Leonhard Wolf",
  contactButtonText: "Kontakt",
  bodyText: {
    plain1: "Ich unterstütze",
    bold1: "Tech Startups",
    plain2: "bei der Entwicklung",
    bold2: "zuverlässiger Web Apps",
    plain3: "durch meine",
    bold3: "Zufriedenheitsgarantie",
  },
};

const i18nStrings: Ii18nStrings = {
  navbar,
  hero,
};
export default i18nStrings;
