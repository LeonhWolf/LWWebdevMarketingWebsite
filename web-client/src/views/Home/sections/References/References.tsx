import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import css from "./References.module.scss";
import { sections } from "../../../../router/constants";
import Titles from "../../../../components/Titles";
import Tabs from "../../../../components/Tabs";
import Carousel from "../../../../components/Carousel";
import type { IProps as ICarousel } from "../../../../components/Carousel";
import CardCertificate from "./CardCertificate";
import CardProject from "./CardProjects";
import { technologyIcons } from "../../../../utils/uiHelpers";

import wavesBackgroundImage from "../../../../assets/PNG/waves.png";
import senacorLogo from "../../../../assets/PNG/senacor-logo.png";
import employmentReferenceLetterDE from "../../../../assets/PDF/Arbeitszeugnis_Spacific.pdf";
import employmentReferenceLetterEN from "../../../../assets/PDF/EmploymentReferenceLetter_Spacific.pdf";
import songwritingToolSRS from "../../../../assets/PDF/SongwritingTool_SoftwareRequirementsSpecification.pdf";
import statisticsStockPhoto from "../../../../assets/PNG/statistics-stock.png";

function References() {
  const { t, i18n } = useTranslation();

  const projectCards: ICarousel["elements"] = [
    {
      key: "marketingWebsite",
      element: (
        <CardProject
          title={t("references.projects.marketingWebsite.title")}
          projectType="portfolio"
          startDate={new Date("2023-05-01")}
          bodyText={t("references.projects.marketingWebsite.bodyText")}
          technologyIcons={[
            technologyIcons.react,
            technologyIcons.typescript,
            technologyIcons.reactRouter,
            technologyIcons.i18next,
            technologyIcons.bootstrap,
            technologyIcons.docker,
          ]}
          externalLinks={[
            {
              link: "https://github.com/LeonhWolf/LWWebdevMarketingWebsite",
              text: t("references.projects.seeCode"),
            },
          ]}
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
          technologyIcons={[
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
          externalLinks={[
            {
              link: "https://github.com/LeonhWolf/songwriting-tool/tree/dev",
              text: t("references.projects.seeCode"),
            },
            {
              text: t("references.projects.seeUiDesign"),
              link: "https://www.figma.com/file/nw5SlTDLPnLQt3qfeV5kkz/SongwritingTool_UIDesign?type=design&node-id=2003%3A533778&t=EHgj1oY3X3DWQD08-1",
            },
            {
              text: t(
                "references.projects.seeSoftwareRequirementsSpecification"
              ),
              link: songwritingToolSRS,
            },
          ]}
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
          technologyIcons={[technologyIcons.wordpress, technologyIcons.php]}
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
          technologyIcons={[
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
          technologyIcons={[
            technologyIcons.angular,
            technologyIcons.typescript,
            technologyIcons.bootstrap,
            technologyIcons.sass,
            technologyIcons.dotnet,
          ]}
          externalLinks={[
            {
              text: t("references.projects.seeEmploymentReferenceLetter"),
              link:
                i18n.language === "en"
                  ? employmentReferenceLetterEN
                  : employmentReferenceLetterDE,
            },
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
          technologyIcons={[
            technologyIcons.vueJs,
            technologyIcons.express,
            technologyIcons.jest,
            technologyIcons.mongoDb,
          ]}
          externalLinks={[
            {
              link: "https://bitbucket.org/LeonhardWolf/objectwritingtool/src/master/",
              text: t("references.projects.seeCode"),
            },
          ]}
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
          technologyIcons={[technologyIcons.python, technologyIcons.pyQt]}
        />
      ),
    },
  ];
  const [projectCardsState, setProjectCardsState] =
    useState<ICarousel["elements"]>(projectCards);

  const courseCards: ICarousel["elements"] = [
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
  ];
  const [courseCardsState, setCourseCardsState] =
    useState<ICarousel["elements"]>(courseCards);

  useEffect(() => {
    setProjectCardsState(projectCards);
    setCourseCardsState(courseCards);
  }, [t]);

  return (
    <section
      id={sections.references}
      className={`section-wrapper ${css["wrapper"]}`}
      style={{ backgroundImage: `url(${wavesBackgroundImage})` }}
    >
      <div className="container">
        <Titles
          doCenter={true}
          smallTitle={t("references.smallTitle")}
          bigTitle={t("references.bigTitle")}
        />

        <Tabs
          tabs={[
            {
              id: "projects",
              title: t("references.tabTitles.projects"),
              element: (
                <Carousel
                  elementsWidthPixels={300}
                  elements={projectCardsState}
                />
              ),
            },
            {
              id: "courses",
              title: t("references.tabTitles.courses"),
              element: (
                <Carousel
                  elementsWidthPixels={300}
                  elements={courseCardsState}
                />
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}

export default References;
