import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Offcanvas } from "bootstrap";

import { sections } from "../router";
import logo from "../assets/SVG/logo.svg";
import mailIconSecondary from "../assets/SVG/inbox_secondary.svg";
import mailIconWhite from "../assets/SVG/inbox_white.svg";
import hamburgerIcon from "../assets/SVG/hamburger_menu.svg";
import "./Navbar.scss";

interface INavLink {
  href: string;
  titleI18nKey: string;
}

const Navbar = () => {
  const { t } = useTranslation();
  const offcanvasElement = useRef<HTMLDivElement | null>(null);
  const offcanvasBootstrapElement = useRef<Offcanvas | null>(null);

  const navLinks: INavLink[] = [
    {
      href: sections.service,
      titleI18nKey: "navbar.service",
    },
    {
      href: sections.process,
      titleI18nKey: "navbar.process",
    },
    {
      href: sections.references,
      titleI18nKey: "navbar.references",
    },
    {
      href: sections.about,
      titleI18nKey: "navbar.about",
    },
  ];

  const mailIconElement = (
    <div id="navbar-mail-icon-wrapper">
      <img
        id="navbar-mail-icon-secondary"
        className="navbar-mail-icon"
        src={mailIconSecondary}
      />
      <img
        id="navbar-mail-icon-white"
        className="navbar-mail-icon"
        src={mailIconWhite}
      />
    </div>
  );

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
        id="navbar"
        className="d-flex container-fluid justify-content-between align-items-center"
      >
        <a
          className="navbar-brand d-flex align-items-center"
          href={`/#${sections.hero}`}
        >
          <img src={logo} alt="" />
        </a>

        <button
          id="navbar-hamburger-button"
          className="d-lg-none d-block"
          type="button"
          onClick={() => offcanvasBootstrapElement.current?.show()}
        >
          <img src={hamburgerIcon} alt="" />
        </button>

        <ul
          id="navbar-desktop-items"
          className="d-lg-flex align-items-center mb-0 d-none"
        >
          {navLinks.map((navLink) => (
            <li key={navLink.href} className="nav-item">
              <a className="nav-link" href={`/#${navLink.href}`}>
                {t(navLink.titleI18nKey)}
              </a>
            </li>
          ))}
          <li className="nav-item">{mailIconElement}</li>
        </ul>
      </nav>

      <div ref={offcanvasElement} className="offcanvas offcanvas-start">
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close ms-auto"
            onClick={() => offcanvasBootstrapElement.current?.hide()}
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div
          className="offcanvas-body d-flex flex-column"
          style={{ rowGap: "10px" }}
        >
          {navLinks.map((navLink) => (
            <li key={navLink.href} className="offcanvas-nav-item">
              <a
                className="nav-link"
                href={`/#${navLink.href}`}
                onClick={() => offcanvasBootstrapElement.current?.hide()}
              >
                {t(navLink.titleI18nKey)}
              </a>
            </li>
          ))}
          {mailIconElement}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
