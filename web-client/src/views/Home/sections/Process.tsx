import { useTranslation } from "react-i18next";

import { sections } from "../../../router/constants";
import Titles from "../../../components/Titles";
import Card from "../../../components/Card";
import type { IProps } from "../../../components/Card";
import css from "./Process.module.scss";
import { technologyIcons } from "../../../utils/uiHelpers";

interface IIcons {
  frontEnd: IProps["bottomIcons"];
  backEnd: IProps["bottomIcons"];
  testing: IProps["bottomIcons"];
  projectManagement: IProps["bottomIcons"];
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
