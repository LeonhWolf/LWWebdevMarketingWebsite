import { useTranslation } from "react-i18next";

import HeadingsSection from "../components/HeadingsSection";
import Card from "../components/Card";
import type { IProps } from "../components/Card";
import css from "./Process.module.scss";

import reactJsLogo from "../assets/PNG/react-logo.png";
import typescriptLogo from "../assets/PNG/typescript-logo.png";
import reactRouterLogo from "../assets/PNG/react-router-logo.png";
import reduxLogo from "../assets/PNG/redux-logo.png";
import bootstrapLogo from "../assets/PNG/bootstrap.png";
import sassLogo from "../assets/PNG/sass.png";
import nodeJsLogo from "../assets/PNG/nodeJS.png";
import expressLogo from "../assets/PNG/express-logo.png";
import mongoDbLogo from "../assets/PNG/mongoDB-logo.png";
import swaggerLogo from "../assets/PNG/swagger-logo.png";
import postmanLogo from "../assets/PNG/postman-logo.png";
import jestLogo from "../assets/PNG/jest.png";
import reactTestingLibraryLogo from "../assets/PNG/react-testing-library-logo.png";
import storybookLogo from "../assets/PNG/storybook-logo.png";
import githubLogo from "../assets/PNG/github-logo.png";
import jiraLogo from "../assets/PNG/jira-logo.png";
import trelloLogo from "../assets/PNG/trello.png";

interface IIcons {
  frontEnd: IProps["bottomIcons"];
  backEnd: IProps["bottomIcons"];
  testing: IProps["bottomIcons"];
  projectManagement: IProps["bottomIcons"];
}

const icons: IIcons = {
  frontEnd: [
    {
      iconPath: reactJsLogo,
      borderColor: "#61DAFB",
      tooltipText: "React.js",
    },
    {
      iconPath: typescriptLogo,
      borderColor: "#2D79C7",
      tooltipText: "TypeScript",
    },
    {
      iconPath: reactRouterLogo,
      borderColor: "#D10014",
      tooltipText: "React Router",
    },
    {
      iconPath: reduxLogo,
      borderColor: "#764ABC",
      tooltipText: "Redux",
    },
    {
      iconPath: bootstrapLogo,
      borderColor: "#8C13FD",
      tooltipText: "Bootstrap 5",
    },
    {
      iconPath: sassLogo,
      borderColor: "#CD6799",
      tooltipText: "Sass",
    },
  ],
  backEnd: [
    {
      iconPath: nodeJsLogo,
      borderColor: "#76B061",
      tooltipText: "Node.js",
    },
    {
      iconPath: typescriptLogo,
      borderColor: "#2D79C7",
      tooltipText: "TypeScript",
    },
    {
      iconPath: expressLogo,
      borderColor: "#535353",
      tooltipText: "Express",
    },
    {
      iconPath: mongoDbLogo,
      borderColor: "#10A94F",
      tooltipText: "MongoDB",
    },
    {
      iconPath: swaggerLogo,
      borderColor: "#85EA2D",
      tooltipText: "Swagger",
    },
    {
      iconPath: postmanLogo,
      borderColor: "#FF6C37",
      tooltipText: "Postman",
    },
  ],
  testing: [
    {
      iconPath: jestLogo,
      borderColor: "#99425B",
      tooltipText: "Jest",
    },
    {
      iconPath: reactTestingLibraryLogo,
      borderColor: "#E13231",
      tooltipText: "React Testing Library",
    },
    {
      iconPath: storybookLogo,
      borderColor: "#FF4785",
      tooltipText: "Storybook",
    },
  ],
  projectManagement: [
    {
      iconPath: githubLogo,
      borderColor: "#000000",
      tooltipText: "GitHub",
    },
    {
      iconPath: jiraLogo,
      borderColor: "#2684FF",
      tooltipText: "Jira",
    },
    {
      iconPath: trelloLogo,
      borderColor: "#227FF9",
      tooltipText: "Trello",
    },
  ],
};

function Process() {
  const { t } = useTranslation();

  return (
    <section className="section-wrapper">
      <HeadingsSection
        smallTitleText={t("process.smallTitle")}
        bigTitleText={t("process.bigTitle")}
      />

      <div className="position-relative">
        <div className="container d-flex justify-content-center">
          <div id={css["cards-wrapper"]}>
            <Card
              title={t("process.frontEnd.title")}
              bodyText={t("process.frontEnd.bodyText")}
              bottomIcons={icons.frontEnd}
            />
            <Card
              title={t("process.backEnd.title")}
              bodyText={t("process.backEnd.bodyText")}
              bottomIcons={icons.backEnd}
            />
            <Card
              title={t("process.testing.title")}
              bodyText={t("process.testing.bodyText")}
              bottomIcons={icons.testing}
            />
            <Card
              title={t("process.projectManagement.title")}
              bodyText={t("process.projectManagement.bodyText")}
              bottomIcons={icons.projectManagement}
            />
          </div>
        </div>

        <div id={css["blue-stripe"]}></div>
      </div>
    </section>
  );
}

export default Process;
