export interface INavbar {
  [service: string]: string;
  process: string;
  references: string;
  about: string;
}

export default interface Ii18nStrings {
  [navbar: string]: INavbar;
}
