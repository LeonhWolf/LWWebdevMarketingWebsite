import { useTranslation } from "react-i18next";

import Card from "../components/Card";
import css from "./About.module.scss";
import signatureLeonhardWolf from "../assets/PNG/signature-leonhardWolf.png";
import leonhardWolfPortraitFrontal from "../assets/PNG/leonhardWolf-portrait-frontal.png";

function About() {
  const { t } = useTranslation();

  return (
    <section
      className="section-wrapper position-relative"
      style={{ overflow: "hidden" }}
    >
      <div className="container">
        <div className="m-auto" style={{ width: "700px", maxWidth: "100%" }}>
          <Card
            title={t("about.title")}
            bodyText={t("about.bodyText")}
            leftImagePath={leonhardWolfPortraitFrontal}
          >
            <img
              src={signatureLeonhardWolf}
              alt=""
              style={{ width: "180px" }}
            />
          </Card>
        </div>
      </div>

      <div id={css["orange-tilted-stripe"]}></div>
    </section>
  );
}

export default About;
