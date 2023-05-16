import { useTranslation } from "react-i18next";

import { sections } from "../../../../router/constants";
import Titles from "../../../../components/Titles";
import CardTool from "./CardTool";
import type { IProps as ICardTool } from "./CardTool";
import css from "./Process.module.scss";
import { technologyIcons } from "../../../../utils/uiHelpers";

interface IIcons {
  frontEnd: ICardTool["icons"];
  backEnd: ICardTool["icons"];
  testing: ICardTool["icons"];
  projectManagement: ICardTool["icons"];
}

const icons: IIcons = {
  frontEnd: [
    technologyIcons.react,
    technologyIcons.typescript,
    technologyIcons.reactRouter,
    technologyIcons.redux,
    technologyIcons.bootstrap,
    technologyIcons.sass,
  ],
  backEnd: [
    technologyIcons.nodeJs,
    technologyIcons.typescript,
    technologyIcons.express,
    technologyIcons.mongoDb,
    technologyIcons.swagger,
    technologyIcons.postman,
  ],
  testing: [
    technologyIcons.jest,
    technologyIcons.reactTestingLibrary,
    technologyIcons.storybook,
  ],
  projectManagement: [
    technologyIcons.gitHub,
    technologyIcons.jira,
    technologyIcons.trello,
  ],
};

function Process() {
  const { t } = useTranslation();

  return (
    <section id={sections.process} className="section-wrapper">
      <Titles
        doCenter={true}
        smallTitle={t("process.smallTitle")}
        bigTitle={t("process.bigTitle")}
      />

      <div className="position-relative">
        <div className="container d-flex justify-content-center">
          <div id={css["cards-wrapper"]}>
            <CardTool
              title={t("process.frontEnd.title")}
              bodyText={t("process.frontEnd.bodyText")}
              icons={icons.frontEnd}
            />
            <CardTool
              title={t("process.backEnd.title")}
              bodyText={t("process.backEnd.bodyText")}
              icons={icons.backEnd}
            />
            <CardTool
              title={t("process.testing.title")}
              bodyText={t("process.testing.bodyText")}
              icons={icons.testing}
            />
            <CardTool
              title={t("process.projectManagement.title")}
              bodyText={t("process.projectManagement.bodyText")}
              icons={icons.projectManagement}
            />
          </div>
        </div>

        <div id={css["blue-stripe"]}></div>
      </div>
    </section>
  );
}

export default Process;
