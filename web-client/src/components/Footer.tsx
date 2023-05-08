import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { sections, routes } from "../router/constants";
import { navLinks } from "../utils/uiHelpers";
import css from "./Footer.module.scss";
import logoWhite from "../assets/SVG/logo_white.svg";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div id={css["navigation"]}>
        <Link to={`${routes.home}#${sections.hero}`}>
          <img src={logoWhite} alt="" />
        </Link>
        <div id={css["link-wrapper"]}>
          {navLinks.map((navLink) => (
            <Link
              key={navLink.href}
              className={css["nav-link"]}
              to={`${routes.home}#${navLink.href}`}
            >
              {t(navLink.titleI18nKey)}
            </Link>
          ))}
        </div>
      </div>

      <div id={css["legal"]}>
        <div id={css["copyright"]}>
          © {new Date().getFullYear()} LW Webdev -{" "}
          {t("miscellaneous.allRightsReserved")}.
        </div>

        <Link
          className={`${css["nav-link"]} ${css["legal-link"]}`}
          to={routes.imprint}
        >
          {t("navigation.imprint")}
        </Link>
        <Link
          className={`${css["nav-link"]} ${css["legal-link"]}`}
          to={routes.dataPolicy}
        >
          {t("navigation.privacyPolicy")}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
