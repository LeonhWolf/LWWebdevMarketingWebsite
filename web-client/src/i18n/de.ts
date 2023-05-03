import type Ii18nStrings from "./index.types";
import type {
  INavbar,
  IHero,
  IService,
  IProcess,
  IReferences,
} from "./index.types";

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
  smallTitle: "Service",
  bigTitle: "MERN Entwicklung",
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

const process: IProcess = {
  smallTitle: "Prozess",
  bigTitle: "Werkzeuge",
  frontEnd: {
    title: "Front-End",
    bodyText:
      "Neben HTML, CSS, TypeScript und React.js benutze ich andere Werkzeuge, um effizient und strukturiert zu entwickeln. Dazu gehören u.a. Bootstrap 5 und Sass.",
  },
  backEnd: {
    title: "Back-End",
    bodyText:
      "Express.js ist das Back-End Framework meiner Wahl. MongoDB vereint die Flexibilität von NoSQL Datenbanken mit Schemas.",
  },
  testing: {
    title: "Tests",
    bodyText:
      "Ein integraler Bestandteil meines Angebots ist TDD. Ich möchte Software so entwickeln, dass Bugs, wenn überhaupt, nur ein einziges Mal auftreten.",
  },
  projectManagement: {
    title: "Projekt Management",
    bodyText:
      "Gut organisiert zu arbeiten ist wichtig für mich. Dies führt auch zu einer transparenteren Kommunikation.",
  },
};

const references: IReferences = {
  smallTitle: "Referenzen",
  bigTitle: "Projekte & Kurse",
  tabTitles: {
    projects: "Projekte",
    courses: "Kurse",
  },
  courses: {
    seeCertificateButton: "Zertifikat ansehen",
    javascriptAdvancedConcepts: {
      body: "JavaScript Engine, Event Loop, Callback & Job Queue, OOP & FP, Error Handling.",
    },
    dataStructuresAndAlgorithms: {
      body: "Big O Notation, Arrays, Hash Tables, Linked Lists, Stacks & Queues, Trees, Graphs, Recursion, Sorting, Searching, Dynamic Programming",
    },
    mongoDbBasics: {
      body: "CRUD Operationen, Einführung Aggregation Pipeline.",
    },
    mongoDbAggregationFramework: {
      body: "Kennenlernen vieler verschiedener Pipeline Stages, praktische Anwendung von Kombinationen der Pipeline Stages in Übungen, Aggregation Performance.",
    },
    mongoDbDataModeling: {
      body: "Entity Relationships (one-to-one, one-to-many, etc.), Simplicity vs Performance, Vorstellung vieler verschiedener Patterns, um Schemas zielorientiert zu gestalten.",
    },
    owaspTopTen: {
      body: "Eine Einführung in die OWASP Top 10.",
    },
    cleanCode: {
      body: "Clean Code bei der Namensgebung, beim Formatieren, in Funktionen, in Kontrollstrukturen, bei Objekten und die SOLID Prinzipien.",
    },
  },
};

const i18nStrings: Ii18nStrings = {
  navbar,
  hero,
  service,
  process,
  references,
};
export default i18nStrings;
