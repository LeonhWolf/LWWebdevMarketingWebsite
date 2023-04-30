import type Ii18nStrings from "./index.types";
import type { INavbar, IHero, IService } from "./index.types";

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
  smallTitleText: "Service",
  bigTitleText: "MERN Development",
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

const i18nStrings: Ii18nStrings = {
  navbar,
  hero,
  service,
};
export default i18nStrings;
