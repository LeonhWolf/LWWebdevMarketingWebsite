export interface INavbar {
  [service: string]: string;
  process: string;
  references: string;
  about: string;
}

interface IHeadings {
  smallTitle: string;
  bigTitle: string;
}

export interface IHero extends IHeadings {
  [key: string]: string | Object;
  contactButtonText: string;
  bodyText: {
    [key: string]: string;
    plain1: string;
    bold1: string;
    plain2: string;
    bold2: string;
    plain3: string;
    bold3: string;
  };
}

interface ICard {
  [key: string]: string;
  title: string;
  bodyText: string;
}
export interface IService extends IHeadings {
  [key: string]: string | Object;
  satisfactionGuarantee: ICard;
  frontEndDevelopment: ICard;
  backEndDevelopment: ICard;
}

export interface IProcess extends IHeadings {
  [key: string]: string | Object;
  frontEnd: ICard;
  backEnd: ICard;
  testing: ICard;
  projectManagement: ICard;
}

export default interface Ii18nStrings {
  [key: string]: Object;
  navbar: INavbar;
  hero: IHero;
  service: IService;
  process: IProcess;
}
