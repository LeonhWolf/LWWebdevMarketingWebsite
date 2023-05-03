import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import HeadingsSection from "../components/HeadingsSection";
import Carousel from "../components/Carousel";
import type { IProps as ICarousel } from "../components/Carousel";
import Card from "../components/Card";
import { IProps as ICard } from "../components/Card";
import udemyLogo from "../assets/SVG/Udemy_logo.svg";
import mongoDbLogo from "../assets/PNG/mongoDB-logo.png";

interface ICertificateCompany {
  iconPath: string;
  iconColor: string;
}
interface ICertificateCompanyStyles {
  udemy: ICertificateCompany;
  mongoDbUniversity: ICertificateCompany;
}
interface ICertificateCardProps extends Pick<ICard, "title" | "bodyText"> {
  link: string;
  certificateCompany: keyof ICertificateCompanyStyles;
}

function CertificateCard(props: ICertificateCardProps) {
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
      <a href={props.link} target="_blank">
        {t("references.courses.seeCertificateButton")}
      </a>
    </Card>
  );
}

function References() {
  const { t } = useTranslation();

  const [projectCards] = useState<ICarousel["elements"]>([
    {
      key: "card1",
      element: <Card title="Card1" bodyText="BodyText1" />,
    },
    {
      key: "card2",
      element: <Card title="Card2" bodyText="BodyText2" />,
    },
    {
      key: "card3",
      element: <Card title="Card3" bodyText="BodyText3" />,
    },
    {
      key: "card4",
      element: <Card title="Card4" bodyText="BodyText4" />,
    },
  ]);

  const [courseCards] = useState<ICarousel["elements"]>([
    {
      key: "JavaScript: The Advanced Concepts",
      element: (
        <CertificateCard
          title="JavaScript: The Advanced Concepts"
          bodyText={t("references.courses.javascriptAdvancedConcepts.body")}
          certificateCompany="udemy"
          link="https://www.udemy.com/certificate/UC-59ebe418-d3e4-41a4-9497-2a0f914ca497/"
        />
      ),
    },
    {
      key: "Master the Coding Interview: Data Structures + Algorithms",
      element: (
        <CertificateCard
          title="Master the Coding Interview: Data Structures + Algorithms"
          bodyText={t("references.courses.dataStructuresAndAlgorithms.body")}
          certificateCompany="udemy"
          link="https://www.udemy.com/certificate/UC-985b6613-1d80-453c-a8c0-5f1b484d0871/"
        />
      ),
    },
    {
      key: "Clean Code",
      element: (
        <CertificateCard
          title="Clean Code"
          bodyText={t("references.courses.cleanCode.body")}
          certificateCompany="udemy"
          link="https://www.udemy.com/certificate/UC-a30b4598-282e-4e94-aa95-37ab43e7f5e5/"
        />
      ),
    },
    {
      key: "OWASP top 10: Web Application Security for Beginners",
      element: (
        <CertificateCard
          title="OWASP top 10: Web Application Security for Beginners"
          bodyText={t("references.courses.owaspTopTen.body")}
          certificateCompany="udemy"
          link="https://www.udemy.com/certificate/UC-342ca0ec-30d0-496b-9a69-3acc30ad2df1/"
        />
      ),
    },
    {
      key: "MongoDB Basics",
      element: (
        <CertificateCard
          title="MongoDB Basics"
          bodyText={t("references.courses.mongoDbBasics.body")}
          certificateCompany="mongoDbUniversity"
          link="https://university.mongodb.com/course_completion/af51d069-00d3-4d95-b719-498f2160f817"
        />
      ),
    },
    {
      key: "The MongoDB Aggregation Framework",
      element: (
        <CertificateCard
          title="The MongoDB Aggregation Framework"
          bodyText={t("references.courses.mongoDbAggregationFramework.body")}
          certificateCompany="mongoDbUniversity"
          link="https://university.mongodb.com/course_completion/423518e3-f3be-41c7-8311-8981909c87c7"
        />
      ),
    },
    {
      key: "Data Modeling",
      element: (
        <CertificateCard
          title="Data Modeling"
          bodyText={t("references.courses.mongoDbDataModeling.body")}
          certificateCompany="mongoDbUniversity"
          link="https://university.mongodb.com/course_completion/db140e66-dc47-46a7-ad37-8cc2af1c5644"
        />
      ),
    },
  ]);

  return (
    <div className="section-wrapper container">
      <HeadingsSection
        smallTitleText={t("references.smallTitle")}
        bigTitleText={t("references.bigTitle")}
      />
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            id="projects-tab"
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#projects-tab-pane"
            type="button"
          >
            {t("references.tabTitles.projects")}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            id="courses-tab"
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#courses-tab-pane"
            type="button"
          >
            {t("references.tabTitles.courses")}
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div id="projects-tab-pane" className="tab-pane fade show active">
          <Carousel elementsWidthPixels={300} elements={projectCards} />
        </div>
        <div id="courses-tab-pane" className="tab-pane fade">
          <Carousel elementsWidthPixels={300} elements={courseCards} />
        </div>
      </div>
    </div>
  );
}

export default References;
