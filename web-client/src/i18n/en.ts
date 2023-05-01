import type Ii18nStrings from "./index.types";
import type { INavbar, IHero, IService, IProcess } from "./index.types";

const navbar: INavbar = {
  service: "service",
  process: "process",
  references: "references",
  about: "about",
};

const hero: IHero = {
  smallTitle: "MERN Developer",
  bigTitle: "Leonhard Wolf",
  contactButtonText: "Contact",
  bodyText: {
    plain1: "I support",
    bold1: "tech startups",
    plain2: "to develop",
    bold2: "reliable web apps",
    plain3: "with my",
    bold3: "satisfaction guarantee",
  },
};

const service: IService = {
  smallTitle: "Service",
  bigTitle: "MERN Development",
  satisfactionGuarantee: {
    title: "Satisfaction Guarantee",
    bodyText:
      "I am convinced that SaaS/PaaS business success is grounded on great quality software. So I won't cut corners. The client and me decide together when my work has reached the standard we strive for.",
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

const i18nStrings: Ii18nStrings = {
  navbar,
  hero,
  service,
  process,
};
export default i18nStrings;
