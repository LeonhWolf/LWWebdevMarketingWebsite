import type { IBottomIcon } from "../components/Card";

import mongoDbLogo from "../assets/PNG/mongo-db-logo.png";
import reactLogo from "../assets/PNG/react-logo.png";
import reduxLogo from "../assets/PNG/redux-logo.png";
import reactRouterLogo from "../assets/PNG/react-router-logo.png";
import i18nextLogo from "../assets/PNG/i18next-logo.png";
import storybookLogo from "../assets/PNG/storybook-logo.png";
import reactTestingLibraryLogo from "../assets/PNG/react-testing-library-logo.png";
import jestLogo from "../assets/PNG/jest-logo.png";
import wordpressLogo from "../assets/PNG/wordpress-logo.png";
import phpLogo from "../assets/PNG/php-logo.png";
import vueJsLogo from "../assets/PNG/vue-js-logo.png";
import typescriptLogo from "../assets/PNG/typescript-logo.png";
import vueRouterLogo from "../assets/PNG/vue-router-logo.png";
import piniaLogo from "../assets/PNG/pinia-logo.png";
import pythonLogo from "../assets/PNG/python-logo.png";
import pyqtLogo from "../assets/PNG/pyqt-logo.png";
import swaggerLogo from "../assets/PNG/swagger-logo.png";
import postmanLogo from "../assets/PNG/postman-logo.png";
import nodeJsLogo from "../assets/PNG/node-js-logo.png";
import expressLogo from "../assets/PNG/express-logo.png";
import bootstrapLogo from "../assets/PNG/bootstrap-logo.png";
import sassLogo from "../assets/PNG/sass-logo.png";
import angularLogo from "../assets/PNG/angular-logo.png";
import dotnetLogo from "../assets/PNG/dotnet-logo.png";
import githubLogo from "../assets/PNG/github-logo.png";
import jiraLogo from "../assets/PNG/jira-logo.png";
import trelloLogo from "../assets/PNG/trello-logo.png";

interface ITechnologyIcons {
  [key: string]: IBottomIcon;
}

export const technologyIcons: ITechnologyIcons = {
  react: {
    iconPath: reactLogo,
    borderColor: "#61DAFB",
    tooltipText: "React.js",
  },
  typescript: {
    iconPath: typescriptLogo,
    borderColor: "#2D79C7",
    tooltipText: "TypeScript",
  },
  reactRouter: {
    iconPath: reactRouterLogo,
    borderColor: "#D10014",
    tooltipText: "React Router",
  },
  redux: {
    iconPath: reduxLogo,
    borderColor: "#764ABC",
    tooltipText: "Redux",
  },

  i18next: {
    iconPath: i18nextLogo,
    borderColor: "#009688",
    tooltipText: "i18next",
  },
  bootstrap: {
    iconPath: bootstrapLogo,
    borderColor: "#8C13FD",
    tooltipText: "Bootstrap 5",
  },
  sass: {
    iconPath: sassLogo,
    borderColor: "#CD6799",
    tooltipText: "Sass",
  },
  jest: {
    iconPath: jestLogo,
    borderColor: "#99425B",
    tooltipText: "Jest",
  },
  reactTestingLibrary: {
    iconPath: reactTestingLibraryLogo,
    borderColor: "#E13231",
    tooltipText: "React Testing Library",
  },
  storybook: {
    iconPath: storybookLogo,
    borderColor: "#FF4785",
    tooltipText: "Storybook",
  },
  nodeJs: {
    iconPath: nodeJsLogo,
    borderColor: "#76B061",
    tooltipText: "Node.js",
  },
  express: {
    iconPath: expressLogo,
    borderColor: "#535353",
    tooltipText: "Express",
  },
  mongoDb: {
    iconPath: mongoDbLogo,
    borderColor: "#10A94F",
    tooltipText: "MongoDB",
  },
  swagger: {
    iconPath: swaggerLogo,
    borderColor: "#85EA2D",
    tooltipText: "Swagger",
  },
  postman: {
    iconPath: postmanLogo,
    borderColor: "#FF6C37",
    tooltipText: "Postman",
  },
  gitHub: {
    iconPath: githubLogo,
    borderColor: "#000000",
    tooltipText: "GitHub",
  },
  jira: {
    iconPath: jiraLogo,
    borderColor: "#2684FF",
    tooltipText: "Jira",
  },
  trello: {
    iconPath: trelloLogo,
    borderColor: "#227FF9",
    tooltipText: "Trello",
  },
  wordpress: {
    iconPath: wordpressLogo,
    borderColor: "#2C9AC9",
    tooltipText: "WordPress",
  },
  php: {
    iconPath: phpLogo,
    borderColor: "#617CBE",
    tooltipText: "PHP",
  },
  vueJs: {
    iconPath: vueJsLogo,
    borderColor: "#40B782",
    tooltipText: "Vue.js",
  },
  vueRouter: {
    iconPath: vueRouterLogo,
    borderColor: "#4EBE8C",
    tooltipText: "Vue Router",
  },
  pinia: {
    iconPath: piniaLogo,
    borderColor: "#FFD552",
    tooltipText: "Pinia",
  },
  angular: {
    iconPath: angularLogo,
    borderColor: "#DD0030",
    tooltipText: "Angular",
  },
  dotnet: {
    iconPath: dotnetLogo,
    borderColor: "#01A1E1",
    tooltipText: ".NET",
  },
  python: {
    iconPath: pythonLogo,
    borderColor: "#FFCD3D",
    tooltipText: "Python",
  },
  pyQt: {
    iconPath: pyqtLogo,
    borderColor: "#7FC240",
    tooltipText: "PyQt",
  },
};
