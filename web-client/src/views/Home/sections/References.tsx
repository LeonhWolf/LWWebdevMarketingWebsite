import { useState } from "react";
import { useTranslation } from "react-i18next";

import { sections } from "../../../router/constants";
import Titles from "../../../components/Titles";
import Carousel from "../../../components/Carousel";
import type { IProps as ICarousel } from "../../../components/Carousel";
import Card from "../../../components/Card";
import { IProps as ICard } from "../../../components/Card";
import { technologyIcons } from "../../../utils/uiHelpers";
import type { IProjectTypes } from "../../../i18n/index.types";

import udemyLogo from "../../../assets/SVG/Udemy_logo.svg";
import mongoDbLogo from "../../../assets/PNG/mongo-db-logo.png";
import senacorLogo from "../../../assets/PNG/senacor-logo.png";
import statisticsStockPhoto from "../../../assets/PNG/statistics-stock.png";

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
      <a href={props.link} target="_blank">
        {t("references.courses.seeCertificateButton")}
      </a>
    </Card>
  );
}

interface ISubtitleProjectCard {
  projectType: keyof IProjectTypes;
  startDate: Date | "WIP";
  endDate?: Date;
}
function SubtitleProjectCard(props: ISubtitleProjectCard) {
  const { t } = useTranslation();
  const [monthsShort] = useState<string[]>([
    t("miscellaneous.monthsShort.january"),
    t("miscellaneous.monthsShort.february"),
    t("miscellaneous.monthsShort.march"),
    t("miscellaneous.monthsShort.april"),
    t("miscellaneous.monthsShort.may"),
    t("miscellaneous.monthsShort.june"),
    t("miscellaneous.monthsShort.july"),
    t("miscellaneous.monthsShort.august"),
    t("miscellaneous.monthsShort.september"),
    t("miscellaneous.monthsShort.october"),
    t("miscellaneous.monthsShort.november"),
    t("miscellaneous.monthsShort.december"),
  ]);

  const getYearAndMonth = (date: Date): string => {
    const month = monthsShort[date.getMonth()];
    const dateString = `${month} ${date.getFullYear()} `;
    return dateString;
  };

  return (
    <div
      className="d-flex justify-content-between flex-wrap text-muted"
      style={{ fontWeight: "500" }}
    >
      <div className="me-4">
        {t(`references.projects.projectTypes.${props.projectType}`)}
      </div>
      {props.startDate === "WIP" && <div>WIP</div>}
      {props.startDate !== "WIP" && (
        <div>
          <div>
            {getYearAndMonth(props.startDate)}
            {props.endDate !== undefined
              ? " - " + getYearAndMonth(props.endDate)
              : ""}
          </div>
        </div>
      )}
    </div>
  );
}

interface ICardProjectProps
  extends Pick<ICard, "title" | "bodyText">,
    ISubtitleProjectCard {
  bottomIcons: Required<ICard["bottomIcons"]>;
  // headerImagePath: Required<ICard["headerImagePath"]>;
  headerImagePath?: ICard["headerImagePath"];
  // children?: React.ReactElement;
  externalLink?: {
    text: string;
    link: string;
  };
}
function CardProject(props: ICardProjectProps) {
  return (
    <Card
      title={props.title}
      subtitleElement={
        <SubtitleProjectCard
          projectType={props.projectType}
          startDate={props.startDate}
          endDate={props.endDate}
        />
      }
      bodyText={props.bodyText}
      bottomIcons={props.bottomIcons}
    >
      {
        <a href={props.externalLink?.link} target="_blank">
          {props.externalLink?.text}
        </a>
      }
    </Card>
  );
}

function References() {
  const { t } = useTranslation();

  const [projectCards] = useState<ICarousel["elements"]>([
    {
      key: "marketingWebsite",
      element: (
        <CardProject
          title={t("references.projects.marketingWebsite.title")}
          projectType="portfolio"
          startDate={new Date("2023-05-01")}
          bodyText={t("references.projects.marketingWebsite.bodyText")}
          bottomIcons={[
            technologyIcons.react,
            technologyIcons.typescript,
            technologyIcons.reactRouter,
            technologyIcons.i18next,
            technologyIcons.bootstrap,
            technologyIcons.sass,
          ]}
          externalLink={{
            link: "https://github.com/LeonhWolf/LWWebdevMarketingWebsite",
            text: t("references.projects.seeCodeButton"),
          }}
        />
      ),
    },
    {
      key: "songwritingTool",
      element: (
        <CardProject
          title={t("references.projects.songwritingTool.title")}
          projectType="portfolio"
          startDate="WIP"
          bodyText={t("references.projects.songwritingTool.bodyText")}
          bottomIcons={[
            technologyIcons.react,
            technologyIcons.typescript,
            technologyIcons.reactRouter,
            technologyIcons.redux,
            technologyIcons.i18next,
            technologyIcons.bootstrap,
            technologyIcons.jest,
            technologyIcons.reactTestingLibrary,
            technologyIcons.storybook,
            technologyIcons.express,
            technologyIcons.mongoDb,
            technologyIcons.swagger,
          ]}
          // ToDo: add link for Figma, design doc and other doc
          externalLink={{
            link: "https://github.com/LeonhWolf/songwriting-tool/tree/dev",
            text: t("references.projects.seeCodeButton"),
          }}
        />
      ),
    },
    {
      key: "senacor",
      element: (
        <CardProject
          title={t("references.projects.senacor.title")}
          projectType="freelancing"
          startDate={new Date("2023-03-01")}
          bodyText={t("references.projects.senacor.bodyText")}
          headerImagePath={senacorLogo}
          bottomIcons={[technologyIcons.wordpress, technologyIcons.php]}
        />
      ),
    },
    {
      key: "ndaProject",
      element: (
        <CardProject
          title={t("references.projects.ndaProject.title")}
          projectType="freelancing"
          startDate={new Date("2023-02-01")}
          endDate={new Date("2023-03-01")}
          bodyText={t("references.projects.ndaProject.bodyText")}
          bottomIcons={[
            technologyIcons.vueJs,
            technologyIcons.typescript,
            technologyIcons.vueRouter,
            technologyIcons.pinia,
            technologyIcons.bootstrap,
            technologyIcons.sass,
          ]}
        />
      ),
    },
    {
      key: "spacific",
      element: (
        <CardProject
          title={t("references.projects.spacific.title")}
          projectType="employment"
          startDate={new Date("2021-12-01")}
          endDate={new Date("2022-06-01")}
          bodyText={t("references.projects.spacific.bodyText")}
          bottomIcons={[
            technologyIcons.angular,
            technologyIcons.typescript,
            technologyIcons.bootstrap,
            technologyIcons.sass,
            technologyIcons.dotnet,
          ]}
        />
      ),
    },
    {
      key: "objectWritingTool",
      element: (
        <CardProject
          title={t("references.projects.objectWritingTool.title")}
          projectType="portfolio"
          startDate={new Date("2021-11-01")}
          bodyText={t("references.projects.objectWritingTool.bodyText")}
          bottomIcons={[
            technologyIcons.vueJs,
            technologyIcons.express,
            technologyIcons.jest,
            technologyIcons.mongoDb,
          ]}
          externalLink={{
            link: "https://bitbucket.org/LeonhardWolf/objectwritingtool/src/master/",
            text: t("references.projects.seeCodeButton"),
          }}
        />
      ),
    },
    {
      key: "tutoring",
      element: (
        <CardProject
          title={t("references.projects.tutoring.title")}
          projectType="education"
          startDate={new Date("2021-06-01")}
          bodyText={t("references.projects.tutoring.bodyText")}
          bottomIcons={[technologyIcons.python, technologyIcons.pyQt]}
        />
      ),
    },
  ]);

  const [courseCards] = useState<ICarousel["elements"]>([
    {
      key: "JavaScript: The Advanced Concepts",
      element: (
        <CardCertificate
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
        <CardCertificate
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
        <CardCertificate
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
        <CardCertificate
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
        <CardCertificate
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
        <CardCertificate
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
        <CardCertificate
          title="Data Modeling"
          bodyText={t("references.courses.mongoDbDataModeling.body")}
          certificateCompany="mongoDbUniversity"
          link="https://university.mongodb.com/course_completion/db140e66-dc47-46a7-ad37-8cc2af1c5644"
        />
      ),
    },
  ]);

  return (
    <div id={sections.references} className="section-wrapper container">
      <Titles
        doCenter={true}
        smallTitle={t("references.smallTitle")}
        bigTitle={t("references.bigTitle")}
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
