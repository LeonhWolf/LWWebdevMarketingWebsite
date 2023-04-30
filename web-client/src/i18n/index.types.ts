export interface INavbar {
  [service: string]: string;
  process: string;
  references: string;
  about: string;
}

export interface IHero {
  [key: string]: string | Object;
  smallTitle: string;
  bigTitle: string;
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
export interface IService {
  [key: string]: string | Object;
  smallTitleText: string;
  bigTitleText: string;
  satisfactionGuarantee: ICard;
  frontEndDevelopment: ICard;
  backEndDevelopment: ICard;
}

export default interface Ii18nStrings {
  [key: string]: Object;
  navbar: INavbar;
  hero: IHero;
  service: IService;
}
