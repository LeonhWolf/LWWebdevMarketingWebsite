import { ITextInput, IEmailInput, ITextarea } from "../components/Form";

export interface INavigation {
  [service: string]: string;
  process: string;
  references: string;
  about: string;
  imprint: string;
  privacyPolicy: string;
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

export interface IProjectTypes {
  freelancing: string;
  employment: string;
  portfolio: string;
  education: string;
}
interface ICourseCard {
  [key: string]: string;
  body: string;
}
export interface IReferences extends IHeadings {
  [key: string]: string | Object;
  tabTitles: {
    [key: string]: string;
    projects: string;
    courses: string;
  };
  projects: {
    [key: string]: Object;
    seeCodeButton: string;
    projectTypes: IProjectTypes;
    marketingWebsite: ICard;
    songwritingTool: ICard;
    senacor: ICard;
    ndaProject: ICard;
    spacific: ICard;
    objectWritingTool: ICard;
    tutoring: ICard;
  };
  courses: {
    [key: string]: string | Object;
    seeCertificateButton: string;
    javascriptAdvancedConcepts: ICourseCard;
    dataStructuresAndAlgorithms: ICourseCard;
    mongoDbBasics: ICourseCard;
    mongoDbAggregationFramework: ICourseCard;
    mongoDbDataModeling: ICourseCard;
    owaspTopTen: ICourseCard;
    cleanCode: ICourseCard;
  };
}

export interface IAbout extends ICard {}

type TextField = Omit<ITextInput, "id" | "isRequired" | "type" | "value">;
type EmailField = Omit<IEmailInput, "id" | "isRequired" | "type" | "value">;
type TextareaField = Omit<ITextarea, "id" | "isRequired" | "type" | "value">;
export interface IModalContact {
  title: string;
  buttons: {
    close: string;
    send: string;
  };
  form: {
    name: TextField;
    email: EmailField;
    subject: TextField;
    message: TextareaField;
  };
  request: {
    success: string;
    error: string;
  };
}

export interface IForms {
  requiredMessage: string;
}

export interface IMonths {
  january: string;
  february: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  september: string;
  october: string;
  november: string;
  december: string;
}

export interface IMiscellaneous {
  monthsShort: IMonths;
  allRightsReserved: string;
  legal: string;
}
export default interface Ii18nStrings {
  [key: string]: Object;
  navigation: INavigation;
  hero: IHero;
  service: IService;
  process: IProcess;
  references: IReferences;
  about: IAbout;
  modalContact: IModalContact;
  forms: IForms;
  miscellaneous: IMiscellaneous;
}
