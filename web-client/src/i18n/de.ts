import type Ii18nStrings from "./index.types";
import type { INavbar, IHero, IService } from "./index.types";

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

const service: IService = {
  smallTitleText: "Service",
  bigTitleText: "MERN Entwicklung",
  satisfactionGuarantee: {
    title: "Zufriedenheitsgarantie",
    bodyText:
      "Ich bin davon überzeugt, dass qualitativ hochwertige Software das Fundament für erfolgreiche SaaS/PaaS Unternehmen ist. Deshalb entscheiden der Kunde und ich zusammen, wann meine Arbeit den angestrebten Standard erreicht hat.",
  },
  frontEndDevelopment: {
    title: "Front-End Entwicklung",
    bodyText:
      "Ich übersetze Webdesigns präzise in strukturierten Code. Getestete Logik, Responsiveness und das Hinzufügen von aufwertenden Details wie z.B. Animationen sind Teil meines Angebots.",
  },
  backEndDevelopment: {
    title: "Back-End Entwicklung",
    bodyText:
      "Ein getestetes, robustes Back-End ist das Fundament einer guten Web App. Die Dokumentation der API erleichtert deren Verwendung. Berücksichtigung der OWASP Top 10 verringern Sicherheitsrisikos.",
  },
};

const i18nStrings: Ii18nStrings = {
  navbar,
  hero,
  service,
};
export default i18nStrings;
