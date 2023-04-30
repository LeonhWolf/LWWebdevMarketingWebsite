import { useTranslation } from "react-i18next";

import HeadingsSection from "../components/HeadingsSection";
import Card from "../components/Card";
import rocketIcon from "../assets/SVG/rocket-takeoff.svg";
import brushIcon from "../assets/SVG/brush.svg";
import serverIcon from "../assets/SVG/server.svg";

import css from "./Service.module.scss";

function Service() {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <div className="section-wrapper container">
        <HeadingsSection
          smallTitleText={t("service.smallTitleText")}
          bigTitleText={t("service.bigTitleText")}
        />
        <div id={css["cards-wrapper"]}>
          <Card
            title={t("service.satisfactionGuarantee.title")}
            bodyText={t("service.satisfactionGuarantee.bodyText")}
            titleAndIconBackgroundColor="#0088F1"
            iconPath={rocketIcon}
          />
          <Card
            title={t("service.frontEndDevelopment.title")}
            bodyText={t("service.frontEndDevelopment.bodyText")}
            titleAndIconBackgroundColor="#006ec2"
            iconPath={brushIcon}
          />
          <Card
            title={t("service.backEndDevelopment.title")}
            bodyText={t("service.backEndDevelopment.bodyText")}
            titleAndIconBackgroundColor="#004f8d"
            iconPath={serverIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
