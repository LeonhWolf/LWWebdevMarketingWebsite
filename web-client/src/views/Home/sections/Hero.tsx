import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { sections } from "../../../router/constants";
import { open as openContactModal } from "../../../store/modalSlice";
import css from "./Hero.module.scss";
import portraitImage from "../../../assets/PNG/LWWebdev_Portraits_Angled.png";
import linkedInIcon from "../../../assets/SVG/linkedin.svg";

interface IOrangeTiltedStripeDimensions {
  height: number;
  width: number;
}

function Hero() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const orangeTiltedStripeSvg = useRef<SVGSVGElement | null>(null);
  const [orangeTiltedStripeDimensions, setOrangeTiltedStripeDimensions] =
    useState<IOrangeTiltedStripeDimensions>({
      height: 0,
      width: 0,
    });

  const updateOrangeTiltedStripeDimensions = (): void => {
    if (orangeTiltedStripeSvg.current === null)
      return console.error(
        "The SVG viewbox could not be set. This is because the 'ref' for the HTML element is 'null'."
      );
    const height = orangeTiltedStripeSvg.current.height.baseVal.value;
    const width = orangeTiltedStripeSvg.current.width.baseVal.value;

    setOrangeTiltedStripeDimensions({
      height: Math.round(height),
      width: Math.round(width),
    });
  };
  const getOrangeTiltedStripeDimensions = (): string => {
    const height = orangeTiltedStripeDimensions.height;
    const width = orangeTiltedStripeDimensions.width;
    const thickness = 50;

    return `M 0 ${
      height - thickness
    } L 0 ${height} L ${width} ${thickness} L ${width} 0 Z`;
  };

  useEffect(() => {
    updateOrangeTiltedStripeDimensions();
    window.addEventListener("resize", updateOrangeTiltedStripeDimensions);

    return () => {
      window.removeEventListener("resize", updateOrangeTiltedStripeDimensions);
    };
  }, []);

  return (
    <section id={sections.hero} className="position-relative">
      <div>
        <div
          id={css["wrapper"]}
          className="d-flex flex-lg-row flex-column"
          style={{ height: "100vh" }}
        >
          <svg
            ref={orangeTiltedStripeSvg}
            className="d-block d-lg-none"
            height="100%"
            width="100%"
          >
            <path
              id={css["orange-tilted-stripe"]}
              d={getOrangeTiltedStripeDimensions()}
            />
          </svg>
          <div className="container d-flex">
            <div
              id={css["hero-text-block-wrapper"]}
              className="d-flex flex-grow-1 justify-content-center align-items-center"
              style={{ flexBasis: "0" }}
            >
              <div
                id={css["hero-text-block"]}
                className="d-flex flex-column align-items-lg-start align-items-center"
              >
                <p className="small-title">{t("hero.smallTitle")}</p>
                <h1 id={css["hero-big-title"]} className="big-title">
                  {t("hero.bigTitle")}
                </h1>
                <div id={css["hero-description-text"]}>
                  <span className={css["hero-regular-text"]}>
                    {t("hero.bodyText.plain1")}
                  </span>
                  <span className={css["hero-bold-text"]}>
                    {t("hero.bodyText.bold1")}
                  </span>
                  <span className={css["hero-regular-text"]}>
                    {t("hero.bodyText.plain2")}
                  </span>
                  <span className={css["hero-bold-text"]}>
                    {t("hero.bodyText.bold2")}
                  </span>
                  <span className={css["hero-regular-text"]}>
                    {t("hero.bodyText.plain3")}
                  </span>
                  <span className={css["hero-bold-text"]}>
                    {t("hero.bodyText.bold3")}
                  </span>
                  <span className={css["hero-regular-text"]}>
                    {t("hero.bodyText.plain4")}
                  </span>
                  <span className={css["hero-bold-text"]}>
                    {t("hero.bodyText.bold4")}
                  </span>
                  <span className={css["hero-regular-text"]}>.</span>
                </div>

                <button
                  className="btn btn-primary shadow mt-3"
                  onClick={() => dispatch(openContactModal())}
                >
                  {t("hero.contactButtonText")}
                </button>
              </div>
            </div>
            <div
              id="hero-img-wrapper"
              className="d-lg-flex d-none flex-grow-1 justify-content-center align-items-end mt-3"
              style={{ flexBasis: "0" }}
            >
              <img
                src={portraitImage}
                alt=""
                style={{
                  height: "auto",
                  maxHeight: "100%",
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://www.linkedin.com/in/leonhard-wolf-lw-webdev"
        target="_blank"
        rel="noreferrer"
        className="m-3"
        style={{ position: "absolute", bottom: "0", left: "0" }}
      >
        <img id={css["linkedin-icon"]} src={linkedInIcon} alt="" />
      </a>

      <div id={css["orange-stripe"]} className="d-none d-lg-block"></div>
    </section>
  );
}

export default Hero;
