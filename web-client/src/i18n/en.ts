import type Ii18nStrings from "./index.types";
import type { INavbar, IHero } from "./index.types";

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

const i18nStrings: Ii18nStrings = {
  navbar,
  hero,
};
export default i18nStrings;
