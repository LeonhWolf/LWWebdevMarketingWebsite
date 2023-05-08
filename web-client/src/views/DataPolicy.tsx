import { useTranslation } from "react-i18next";

import NavbarFooterTemplate from "../templates/NavbarFooterTemplate";
import Titles from "../components/Titles";
import ChooseI18n from "../utils/ChooseI18n";
import { legalData } from "../utils/uiHelpers";

function EN() {
  return (
    <div>
      <p>
        At {legalData.websiteName}, accessible from {legalData.websiteUrl}, one
        of our main priorities is the privacy of our visitors. This Privacy
        Policy document contains types of information that is collected and
        recorded by {legalData.websiteName} and how we use it.
      </p>

      <p>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us. Our Privacy Policy was
        generated with the help of{" "}
        <a href="https://www.termsfeed.com/privacy-policy-generator/">
          GDPR Privacy Policy Generator
        </a>
      </p>

      <h2>General Data Protection Regulation (GDPR)</h2>
      <p>We are a Data Controller of your information.</p>

      <p>
        {legalData.fullName} legal basis for collecting and using the personal
        information described in this Privacy Policy depends on the Personal
        Information we collect and the specific context in which we collect the
        information:
      </p>
      <ul>
        <li>{legalData.fullName} needs to perform a contract with you</li>
        <li>You have given {legalData.fullName} permission to do so</li>
        <li>
          Processing your personal information is in {legalData.fullName}{" "}
          legitimate interests
        </li>
        <li>{legalData.fullName} needs to comply with the law</li>
      </ul>

      <p>
        {legalData.fullName} will retain your personal information only for as
        long as is necessary for the purposes set out in this Privacy Policy. We
        will retain and use your information to the extent necessary to comply
        with our legal obligations, resolve disputes, and enforce our policies.
      </p>

      <p>
        If you are a resident of the European Economic Area (EEA), you have
        certain data protection rights. If you wish to be informed what Personal
        Information we hold about you and if you want it to be removed from our
        systems, please contact us.
      </p>

      <p>
        In certain circumstances, you have the following data protection rights:
      </p>
      <ul>
        <li>
          The right to access, update or to delete the information we have on
          you.
        </li>
        <li>The right of rectification.</li>
        <li>The right to object.</li>
        <li>The right of restriction.</li>
        <li>The right to data portability</li>
        <li>The right to withdraw consent</li>
      </ul>

      <h2>Log Files</h2>

      <p>
        {legalData.websiteName} follows a standard procedure of using log files.
        These files log visitors when they visit websites. All hosting companies
        do this and a part of hosting services' analytics. The information
        collected by log files include internet protocol (IP) addresses, browser
        type, Internet Service Provider (ISP), date and time stamp,
        referring/exit pages, and possibly the number of clicks. These are not
        linked to any information that is personally identifiable. The purpose
        of the information is for analyzing trends, administering the site,
        tracking users' movement on the website, and gathering demographic
        information.
      </p>

      <h2>Privacy Policies</h2>

      <p>
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of {legalData.websiteName}.
      </p>

      <p>
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on {legalData.websiteName}, which
        are sent directly to users' browser. They automatically receive your IP
        address when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on websites that you visit.
      </p>

      <p>
        Note that {legalData.websiteName} has no access to or control over these
        cookies that are used by third-party advertisers.
      </p>

      <h2>Third Party Privacy Policies</h2>

      <p>
        {legalData.websiteName}'s Privacy Policy does not apply to other
        advertisers or websites. Thus, we are advising you to consult the
        respective Privacy Policies of these third-party ad servers for more
        detailed information. It may include their practices and instructions
        about how to opt-out of certain options.{" "}
      </p>

      <p>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers' respective
        websites.
      </p>

      <h2>Children's Information</h2>

      <p>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </p>

      <p>
        {legalData.websiteName} does not knowingly collect any Personal
        Identifiable Information from children under the age of 13. If you think
        that your child provided this kind of information on our website, we
        strongly encourage you to contact us immediately and we will do our best
        efforts to promptly remove such information from our records.
      </p>

      <h2>Online Privacy Policy Only</h2>

      <p>
        Our Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in {legalData.websiteName}. This policy is not
        applicable to any information collected offline or via channels other
        than this website.
      </p>

      <h2>Consent</h2>

      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>
    </div>
  );
}

function DE() {
  return (
    <div>
      <p>
        Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der
        EU-Datenschutzgrundverordnung (DSGVO), ist:
      </p>
      <p>{legalData.fullName}</p>
      <h2>Ihre Betroffenenrechte</h2>
      <p>
        Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten
        können Sie jederzeit folgende Rechte ausüben:
      </p>
      <ul>
        <li>
          Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung
          (Art. 15 DSGVO),
        </li>
        <li>
          Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),
        </li>
        <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
        <li>
          Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund
          gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),
        </li>
        <li>
          Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)
          und
        </li>
        <li>
          Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt
          haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).
        </li>
      </ul>
      <p>
        Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
        jederzeit mit Wirkung für die Zukunft widerrufen.
      </p>
      <p>
        Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde
        wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres
        Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige
        Behörde.
      </p>
      <p>
        Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit
        Anschrift finden Sie unter:{" "}
        <a
          href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
          target="_blank"
          rel="noopener nofollow"
        >
          https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html
        </a>
        .
      </p>
      <p></p>
      <h2>Kontaktformular</h2>
      <h3>Art und Zweck der Verarbeitung:</h3>
      <p>
        Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen
        Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer
        validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der
        Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die
        Angabe weiterer Daten ist optional.
      </p>
      <h3>Rechtsgrundlage:</h3>
      <p>
        Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
        auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f
        DSGVO).
      </p>
      <p>
        Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine
        unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben
        werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche
        Anschlussfragen gespeichert.
      </p>
      <p>
        Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen,
        erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten
        zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b
        DSGVO).
      </p>
      <h3>Empfänger:</h3>
      <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
      <p></p>
      <h3>Speicherdauer:</h3>
      <p>
        Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.
      </p>
      <p>
        Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den
        gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach
        Ablauf dieser Fristen.
      </p>
      <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
      <p>
        Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir
        können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen,
        Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.
      </p>
      <p></p>
      <h2>SSL-Verschlüsselung</h2>
      <p>
        Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden
        wir dem aktuellen Stand der Technik entsprechende
        Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
      </p>
      <p></p>
      <hr />
      <h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
      <h3>Einzelfallbezogenes Widerspruchsrecht</h3>
      <p>
        Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
        Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender
        personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO
        (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt,
        Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung
        gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.
      </p>
      <p>
        Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht
        mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe
        für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
        Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung,
        Ausübung oder Verteidigung von Rechtsansprüchen.
      </p>
      <h3>Empfänger eines Widerspruchs</h3>
      <p>{legalData.fullName}</p>
      <hr />
      <h2>Änderung unserer Datenschutzbestimmungen</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
        stets den aktuellen rechtlichen Anforderungen entspricht oder um
        Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
        z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt
        dann die neue Datenschutzerklärung.
      </p>
      <h2>Fragen an den Datenschutzbeauftragten</h2>
      <p>
        Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
        E-Mail oder wenden Sie sich direkt an die für den Datenschutz
        verantwortliche Person in unserer Organisation:
      </p>
      <p></p>
      <p>
        <em>
          Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt,
          den Experten für{" "}
          <a
            href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/"
            target="_blank"
            rel="noopener"
          >
            externe Datenschutzbeauftragte
          </a>{" "}
          (Version #2020-09-30).
        </em>
      </p>
    </div>
  );
}

function DataPolicy() {
  const { t } = useTranslation();

  return (
    <NavbarFooterTemplate doAddNavbarMargin={true}>
      <div className="container mb-5">
        <Titles
          doCenter={false}
          smallTitle={t("miscellaneous.legal")}
          bigTitle={t("navigation.privacyPolicy")}
        />
        <ChooseI18n de={<DE />} en={<EN />} />
      </div>
    </NavbarFooterTemplate>
  );
}

export default DataPolicy;
