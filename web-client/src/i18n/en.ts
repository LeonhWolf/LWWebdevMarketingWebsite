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
  process: "process",
  references: "references",
  about: "about",
  imprint: "imprint",
  privacyPolicy: "privacy policy",
};

const hero: IHero = {
  smallTitle: "MERN Developer",
  bigTitle: "Leonhard Wolf",
  contactButtonText: "Contact",
  bodyText: {
    plain1: "I aim to develop ",
    bold1: "web apps",
    plain2: " that are ",
    bold2: "effortless",
    plain3: " to use. Both for ",
    bold3: "users",
    plain4: " and ",
    bold4: "developers",
  },
};

const service: IService = {
  smallTitle: "Service",
  bigTitle: "MERN Development",
  effortlessWebApps: {
    title: "Effortless Web Apps",
    bodyText:
      "I am convinced that SaaS/PaaS business success is grounded on great-quality software. So I focus on testing code and improving UX as well as writing clean code.",
  },
  frontEndDevelopment: {
    title: "Front-End Development",
    bodyText:
      "I translate beautiful web designs precisely into organized code. Tested logic, responsiveness and adding finishing touches like animations are part of my service.",
  },
  backEndDevelopment: {
    title: "Back-End Development",
    bodyText:
      "A tested, robust back-end is the foundation of a good web app. A well documented API is easier to use. Considering the OWASP top 10 will reduce security threats in your application.",
  },
};

const process: IProcess = {
  smallTitle: "Process",
  bigTitle: "Tools",
  frontEnd: {
    title: "Front-End",
    bodyText:
      "Alongside HTML, CSS, TypeScript and React.js I use other tools to deliver efficient and organized code fast. These include Bootstrap 5 and Sass.",
  },
  backEnd: {
    title: "Back-End",
    bodyText:
      "Express.js is my back-end framework of choice. MongoDB offers the flexibility of NoSQL databases as well as schemas.",
  },
  testing: {
    title: "Testing",
    bodyText:
      "An integral part of my service is the practice of TDD. I want to develop software in a way that ensures that bugs only happen once if at all.",
  },
  projectManagement: {
    title: "Project Management",
    bodyText:
      "Working in an organized way is very important to me. It also makes for a more transparent communication.",
  },
};

const references: IReferences = {
  smallTitle: "References",
  bigTitle: "Projects & Courses",
  tabTitles: {
    projects: "Projects",
    courses: "Courses",
  },
  projects: {
    seeRepository: "Repository",
    seeEmploymentReferenceLetter: "Employment reference letter",
    seeUiDesign: "UI design",
    seeSoftwareRequirementsSpecification: "Software requirements specification",
    seeEntityRelationshipDiagram: "Entity relationship diagram",
    seeDesignDocument: "Design document",
    technologies: "Technologies",
    links: "Links",
    projectTypes: {
      freelancing: "Freelancing",
      employment: "Employment",
      portfolio: "Portfolio",
      education: "Education",
    },
    marketingWebsite: {
      title: "Portfolio Website",
      bodyText:
        "This very portfolio website. It includes i18n, custom front-end components like this carousel, loading time optimization.",
    },
    songwritingTool: {
      title: "Songwriting Tool",
      bodyText:
        "Tool to assist in multiple chores for songwriting training, including authentication, high test coverage (TDD).",
    },
    senacor: {
      title: "Double Opt-In",
      bodyText:
        "Implementing a double-opt in and connecting the CRM Pipedrive.",
    },
    ndaProject: {
      title: "NDA Vue.js Project",
      bodyText:
        "Development of the whole Vue.js front-end, used in WordPress pages. Connecting to a complex REST API, UI Responsiveness, loading placeholders.",
    },
    spacific: {
      title: "Jr. Software Engineer",
      bodyText:
        "Redesign of the application, adjustments/extensions to existing features, implementing multiple guided tours and i18n in .NET Razor. Working based on scrum.",
    },
    objectWritingTool: {
      title: "Object Writing Tool",
      bodyText:
        "Tool to assist with a songwriting exercise called Object Writing, high test coverage (TDD).",
    },
    tutoring: {
      title: "Tutoring in Python",
      bodyText:
        "Tutoring for an undergraduate, development of an app to display Covid statistics, writing unit tests.",
    },
  },
  courses: {
    seeCertificateButton: "See certificate",
    javascriptAdvancedConcepts: {
      body: "JavaScript engine, event loop, callback & job queue, OOP & FP, error handling.",
    },
    dataStructuresAndAlgorithms: {
      body: "Big O notation, arrays, hash tables, linked lists, stacks & queues, trees, graphs, recursion, sorting, searching, dynamic programming.",
    },
    mongoDbBasics: {
      body: "CRUD operations, introduction to the Aggregation Pipeline.",
    },
    mongoDbAggregationFramework: {
      body: "Introduction of many different pipeline stages, the practical application and combination of them in labs, aggregation performance.",
    },
    mongoDbDataModeling: {
      body: "Entity relationships (one-to-one, one-to-many, etc.), simplicity vs performance, introduction to many patterns to design schemas for a desired outcome.",
    },
    owaspTopTen: {
      body: "An introduction to the OWASP Top 10.",
    },
    cleanCode: {
      body: "Clean Code with naming, formatting, in functions, in control structures, with objects and the SOLID principles.",
    },
  },
};

const about: IAbout = {
  title: "Let's build successful web apps together!",
  bodyText: `A high standard is a requirement I set for my own work. This "passion for precision" is something that is of importance for myself. I want to understand the software requirements and do my best to meet them fully. A professional and open way of communicating goes without saying.`,
};

const modalContact: IModalContact = {
  title: "Get in Touch",
  buttons: {
    close: "close",
    send: "send",
  },
  form: {
    name: {
      label: "Name",
      placeholder: "John Doe",
    },
    email: {
      label: "Email",
      placeholder: "johndoe@gmail.com",
    },
    subject: {
      label: "Subject",
      placeholder: "Reason for Reaching Out",
    },
    message: {
      label: "Message",
      placeholder: "Your message...",
    },
  },
  request: {
    success: "Your message has been sent successfully.",
    error:
      "There was an error when trying to send your message. Try again or contact via the imprint instead.",
  },
};

const forms: IForms = {
  requiredMessage: 'The field "{{field}}" is required.',
};

const monthsShort: IMonths = {
  january: "Jan",
  february: "Feb",
  march: "Mar",
  april: "Apr",
  may: "May",
  june: "Jun",
  july: "Jul",
  august: "Aug",
  september: "Sep",
  october: "Oct",
  november: "Nov",
  december: "Dec",
};

const miscellaneous: IMiscellaneous = {
  monthsShort,
  allRightsReserved: "All rights reserved",
  legal: "Legal",
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
