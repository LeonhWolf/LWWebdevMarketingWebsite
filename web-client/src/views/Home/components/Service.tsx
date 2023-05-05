import { useTranslation } from "react-i18next";

import HeadingsSection from "../../../components/HeadingsSection";
import Card from "../../../components/Card";
import rocketIcon from "../../../assets/SVG/rocket-takeoff.svg";
import brushIcon from "../../../assets/SVG/brush.svg";
import serverIcon from "../../../assets/SVG/server.svg";

import css from "./Service.module.scss";

function Service() {
  const { t } = useTranslation();

  return (
    <section style={{ backgroundColor: "#f1f1f1" }}>
      <div className="section-wrapper container">
        <HeadingsSection
          smallTitleText={t("service.smallTitle")}
          bigTitleText={t("service.bigTitle")}
        />
        <div id={css["cards-wrapper"]}>
          <Card
            title={t("service.satisfactionGuarantee.title")}
            bodyText={t("service.satisfactionGuarantee.bodyText")}
            titleColor="#0088F1"
            topIconColor="#0088F1"
            topIconPath={rocketIcon}
          />
          <Card
            title={t("service.frontEndDevelopment.title")}
            bodyText={t("service.frontEndDevelopment.bodyText")}
            titleColor="#006ec2"
            topIconColor="#006ec2"
            topIconPath={brushIcon}
          />
          <Card
            title={t("service.backEndDevelopment.title")}
            bodyText={t("service.backEndDevelopment.bodyText")}
            titleColor="#004f8d"
            topIconColor="#004f8d"
            topIconPath={serverIcon}
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
