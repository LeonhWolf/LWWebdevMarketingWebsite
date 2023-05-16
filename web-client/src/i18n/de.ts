import type Ii18nStrings from "./index.types";
import type {
  INavigation,
  IHero,
  IService,
  IProcess,
  IReferences,
  IAbout,
  IModalContact,
  IForms,
  IMonths,
  IMiscellaneous,
} from "./index.types";

const navigation: INavigation = {
  service: "service",
  process: "prozess",
  references: "referenzen",
  about: "über mich",
  imprint: "impressum",
  privacyPolicy: "datenschutz",
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
  projects: {
    seeCode: "Code",
    seeEmploymentReferenceLetter: "Arbeitszeugnis",
    seeUiDesign: "UI Design",
    seeSoftwareRequirementsSpecification: "Software Requirements Specification",
    technologies: "Technologien",
    links: "Links",
    projectTypes: {
      freelancing: "Freelancing",
      employment: "Festanstellung",
      portfolio: "Portfolio",
      education: "Unterricht",
    },
    marketingWebsite: {
      title: "Marketing Website",
      bodyText:
        "Diese Marketing Webseite. Features sind i18n, selbst erstellte Components wie dieses Carousel, Ladezeitenoptimierung.",
    },
    songwritingTool: {
      title: "Songwriting Tool",
      bodyText:
        "Tool zur Unterstützung bei repetitiven Aufgaben beim Songwriting Training, inkl. Authentifizierung, hohe Testabdeckung (TDD).",
    },
    senacor: {
      title: "Double Opt-In",
      bodyText: "Implementierung Double Opt-In, Anbindung an Pipedrive CRM.",
    },
    ndaProject: {
      title: "NDA Vue.js Projekt",
      bodyText:
        "Komplette Entwicklung des Vue.js Front-Ends zur Benutzung in WordPress, Anbindung an komplexe REST API, UI Responsiveness, Loading Placeholders.",
    },
    spacific: {
      title: "Jr. Software Entwickler",
      bodyText:
        "Redesign der Applikation, Anpassungen/Erweiterung bestehender Features, Umsetzung mehrerer Guided Tours und i18n in .NET Razor. Arbeit angelehnt an Scrum.",
    },
    objectWritingTool: {
      title: "Object Writing Tool",
      bodyText:
        "Tool zur Unterstützung bei einer Songwriting Übung namens Object Writing, hohe Testabdeckung (TDD).",
    },
    tutoring: {
      title: "Nachhilfe in Python",
      bodyText:
        "Nachhilfe für eine Kommilitonin, Entwicklung einer App für die Darstellung von Corona-Statistiken, Schreiben von Unit-Tests.",
    },
  },
  courses: {
    seeCertificateButton: "Zertifikat ansehen",
    javascriptAdvancedConcepts: {
      body: "JavaScript Engine, Event Loop, Callback & Job Queue, OOP & FP, Error Handling.",
    },
    dataStructuresAndAlgorithms: {
      body: "Big O Notation, Arrays, Hash Tables, Linked Lists, Stacks & Queues, Trees, Graphs, Recursion, Sorting, Searching, Dynamic Programming.",
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

const about: IAbout = {
  title: "Erfolgreiche Web Apps zusammen entwickeln!",
  bodyText: `Ein hoher Standard ist eine Voraussetzung, die ich an meine eigene Arbeit stelle. Diese "Leidenschaft für Präzision" ist mir persönlich wichtig. Ich möchte die Bedürfnisse meiner Kunden verstehen, um eine Web App liefern zu können, welche eben diese Ansprüche voll erfüllt. Ein professioneller und offener Umgang ist selbstverständlich.`,
};

const modalContact: IModalContact = {
  title: "Kontakt aufnehmen",
  buttons: {
    close: "schließen",
    send: "absenden",
  },
  form: {
    name: {
      label: "Name",
      placeholder: "Max Mustermann",
    },
    email: {
      label: "Email",
      placeholder: "maxmustermann@gmail.com",
    },
    subject: {
      label: "Betreff",
      placeholder: "Grund des Kontakts",
    },
    message: {
      label: "Nachricht",
      placeholder: "Ihre Nachricht...",
    },
  },
  request: {
    success: "Ihre Nachricht wurde erfolgreich versendet.",
    error:
      "Beim Versenden Ihrer Nachricht ist ein Fehler aufgetreten. Versuchen Sie es gerne erneut, oder nehmen Sie Kontakt über das Impressum auf.",
  },
};

const forms: IForms = {
  requiredMessage: 'Das Feld "{{field}}" ist erforderlich.',
};

const monthsShort: IMonths = {
  january: "Jan",
  february: "Feb",
  march: "Mär",
  april: "Apr",
  may: "Mai",
  june: "Jun",
  july: "Jul",
  august: "Aug",
  september: "Sep",
  october: "Okt",
  november: "Nov",
  december: "Dez",
};

const miscellaneous: IMiscellaneous = {
  monthsShort,
  allRightsReserved: "Alle Rechte vorbehalten",
  legal: "Rechtliches",
};

const i18nStrings: Ii18nStrings = {
  navigation,
  hero,
  service,
  process,
  references,
  about,
  modalContact,
  forms,
  miscellaneous,
};
export default i18nStrings;
