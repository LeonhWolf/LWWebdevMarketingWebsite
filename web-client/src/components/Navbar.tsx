import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Offcanvas } from "bootstrap";
import { Link } from "react-router-dom";

import { routes, sections } from "../router/constants";
import { navLinks } from "../utils/uiHelpers";
import Dropdown from "./Dropdown";
import type { IProps as IDropdown } from "./Dropdown";
import logo from "../assets/SVG/logo.svg";
import mailIconSecondary from "../assets/SVG/inbox_secondary.svg";
import mailIconWhite from "../assets/SVG/inbox_white.svg";
import hamburgerIcon from "../assets/SVG/hamburger_menu.svg";
import flagDE from "../assets/PNG/flag-de.png";
import flagUS from "../assets/PNG/flag-us.png";
import css from "./Navbar.module.scss";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const offcanvasElement = useRef<HTMLDivElement | null>(null);
  const offcanvasBootstrapElement = useRef<Offcanvas | null>(null);

  const languageDropdownItems: IDropdown["items"] = [
    {
      type: "icon",
      id: "de",
      path: flagDE,
    },
    {
      type: "icon",
      id: "en",
      path: flagUS,
    },
  ];
  const mailIconElement = (
    <div
      id={css["mail-icon-wrapper"]}
      onClick={() => offcanvasBootstrapElement.current?.hide()}
    >
      <img
        id={css["mail-icon-secondary"]}
        className={css["mail-icon"]}
        src={mailIconSecondary}
      />
      <img
        id={css["mail-icon-white"]}
        className={css["mail-icon"]}
        src={mailIconWhite}
      />
    </div>
  );

  const handleLanguageChange = (id: string) => {
    i18n.changeLanguage(id);
    offcanvasBootstrapElement.current?.hide();
  };

  useEffect(() => {
    if (offcanvasElement.current === null)
      return console.error(
        "The 'offcanvasElement' is 'null'. Consequentially, the Bootstrap class for the offcanvas cannot be instantiated."
      );
    offcanvasBootstrapElement.current = new Offcanvas(offcanvasElement.current);

    return () => {
      offcanvasBootstrapElement.current?.dispose();
    };
  }, []);

  return (
    <div>
      <nav
        id={css["navbar"]}
        className="d-flex container-fluid justify-content-between align-items-center"
      >
        <Link
          className="navbar-brand d-flex align-items-center"
          to={`${routes.home}#${sections.hero}`}
        >
          <img src={logo} alt="" />
        </Link>

        <button
          id={css["hamburger-button"]}
          className="d-lg-none d-block"
          type="button"
          onClick={() => offcanvasBootstrapElement.current?.show()}
        >
          <img src={hamburgerIcon} alt="" />
        </button>

        <ul
          id="desktop-items"
          className="d-lg-flex align-items-center mb-0 d-none"
        >
          {navLinks.map((navLink) => (
            <li
              key={navLink.href}
              className={`nav-item ${css["custom-nav-item"]}`}
            >
              <Link
                className={`nav-link ${css["custom-nav-link"]}`}
                to={`${routes.home}#${navLink.href}`}
              >
                {t(navLink.titleI18nKey)}
              </Link>
            </li>
          ))}

          <li className={`nav-item ${css["custom-nav-item"]}`}>
            <Dropdown
              items={languageDropdownItems}
              onItemClick={handleLanguageChange}
            />
          </li>

          <li className={`nav-item ${css["custom-nav-item"]}`}>
            {mailIconElement}
          </li>
        </ul>
      </nav>

      <div
        ref={offcanvasElement}
        className={`offcanvas offcanvas-start ${css["custom-offcanvas"]}`}
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close ms-auto"
            onClick={() => offcanvasBootstrapElement.current?.hide()}
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div
          className={`offcanvas-body d-flex flex-column ${css["custom-offcanvas-body"]}`}
          style={{ rowGap: "10px" }}
        >
          {navLinks.map((navLink) => (
            <li
              key={navLink.href}
              className={`nav-item ${css["offcanvas-nav-item"]} ${css["custom-nav-item"]}`}
            >
              <Link
                className={`nav-link ${css["custom-nav-link"]}`}
                to={`${routes.home}#${navLink.href}`}
                onClick={() => offcanvasBootstrapElement.current?.hide()}
              >
                {t(navLink.titleI18nKey)}
              </Link>
            </li>
          ))}

          <li
            className={`nav-item ${css["offcanvas-nav-item"]} ${css["custom-nav-item"]}`}
          >
            <Dropdown
              items={languageDropdownItems}
              onItemClick={handleLanguageChange}
            />
          </li>

          {mailIconElement}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
