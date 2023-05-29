import { useTranslation } from "react-i18next";

import NavbarFooterTemplate from "../templates/NavbarFooterTemplate";
import Titles from "../components/Titles";
import ChooseI18n from "../utils/ChooseI18n";
import { legalData } from "../utils/uiHelpers";

function EN() {
  return (
    <div>
      <h2>Statements under § 5 TMG:</h2>
      <p>
        {legalData.fullName}
        <br />
        {legalData.address.street}&nbsp;{legalData.address.houseNumber}
        <br />
        {legalData.address.zipCode}&nbsp;{legalData.address.city}
        <br />
        Phone: on request
        <br />
        E-Mail:&nbsp;{legalData.emailAddress}
      </p>
      <h2>Information under § 36 VSBG</h2>
      <p>
        In accordance with § 36 VSBG (Consumer Dispute Settlement Act - Act on
        the alternative dispute resolution in consumer matters) the operator
        declares of this website:
      </p>
      <p>
        We are neither willing nor obligated to participate in dispute
        resolution proceedings before a consumer arbitration board.
      </p>
      <p>
        <em>
          This imprint was generated with the&nbsp;
          <a href="https://www.activemind.de/datenschutz/impressums-generator/">
            imprint generator by activeMind AG
          </a>
        </em>
      </p>
    </div>
  );
}

function DE() {
  return (
    <div>
      <h2>Angaben gemäß § 5 TMG:</h2>
      <p>
        {legalData.fullName}
        <br />
        {legalData.address.street}&nbsp;{legalData.address.houseNumber}
        <br />
        {legalData.address.zipCode}&nbsp;{legalData.address.city}
        <br />
        Telefon: auf Anfrage
        <br />
        E-Mail:&nbsp;{legalData.emailAddress}
      </p>
      <h2>Information gemäß § 36 VSBG</h2>
      <p>
        Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die
        alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber
        dieser Website:
      </p>
      <p>
        Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <p></p>
      <p>
        <em>
          Das Impressum wurde mit dem&nbsp;
          <a href="https://www.activemind.de/datenschutz/impressums-generator/">
            Impressums-Generator der activeMind AG
          </a>{" "}
          erstellt.
        </em>
      </p>
    </div>
  );
}

function Imprint() {
  const { t } = useTranslation();

  return (
    <NavbarFooterTemplate doAddNavbarMargin={true}>
      <div className="container mb-5">
        <Titles
          doCenter={false}
          smallTitle={t("miscellaneous.legal")}
          bigTitle={t("navigation.imprint")}
        />
        <ChooseI18n de={<DE />} en={<EN />} />
      </div>
    </NavbarFooterTemplate>
  );
}

export default Imprint;
