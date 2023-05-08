import { useTranslation } from "react-i18next";

import Card from "../../../../components/Card";
import type { IProps as ICard } from "../../../../components/Card";
import udemyLogo from "../../../../assets/SVG/Udemy_logo.svg";
import mongoDbLogo from "../../../../assets/PNG/mongo-db-logo.png";

interface ICertificateCompany {
  iconPath: string;
  iconColor: string;
}
interface ICertificateCompanyStyles {
  udemy: ICertificateCompany;
  mongoDbUniversity: ICertificateCompany;
}
interface ICardCertificateProps extends Pick<ICard, "title" | "bodyText"> {
  link: string;
  certificateCompany: keyof ICertificateCompanyStyles;
}

function CardCertificate(props: ICardCertificateProps) {
  const { t } = useTranslation();

  const certificateCompanyStyles: ICertificateCompanyStyles = {
    udemy: {
      iconPath: udemyLogo,
      iconColor: "#A435F0",
    },
    mongoDbUniversity: {
      iconPath: mongoDbLogo,
      iconColor: "#10A94F",
    },
  };

  return (
    <Card
      title={props.title}
      bodyText={props.bodyText}
      topIconPath={certificateCompanyStyles[props.certificateCompany].iconPath}
      topIconStyle="outline"
      topIconColor={
        certificateCompanyStyles[props.certificateCompany].iconColor
      }
    >
      <a href={props.link} target="_blank" rel="noreferrer">
        {t("references.courses.seeCertificateButton")}
      </a>
    </Card>
  );
}

export default CardCertificate;
