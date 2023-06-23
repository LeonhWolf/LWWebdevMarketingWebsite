import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Card from "../../../../components/Card";
import type { IProps as ICard } from "../../../../components/Card";
import Accordion from "../../../../components/Accordion";
import type { IProps as IAccordion } from "../../../../components/Accordion";
import ListIcons from "../../../../components/ListIcons";
import { IProps as IListIcons } from "../../../../components/ListIcons";
import { IProjectTypes } from "../../../../i18n/index.types";

interface ISubtitleProjectCard {
  projectType: keyof IProjectTypes;
  startDate: Date | "WIP";
  endDate?: Date;
}
function SubtitleProjectCard(props: ISubtitleProjectCard) {
  const { t } = useTranslation();

  const monthsSort: string[] = [
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
  ];
  const [monthsShortState, setMonthsShortState] =
    useState<string[]>(monthsSort);

  const getYearAndMonth = (date: Date): string => {
    const month = monthsShortState[date.getMonth()];
    const dateString = `${month} ${date.getFullYear()} `;
    return dateString;
  };

  useEffect(() => {
    setMonthsShortState(monthsSort);
  }, [t]);

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
  technologyIcons: Required<IListIcons["icons"]>;
  // headerImagePath: Required<ICard["headerImagePath"]>;
  headerImagePath?: ICard["headerImagePath"];
  externalLinks?: {
    text: string;
    link: string;
  }[];
}
function CardProject(props: ICardProjectProps) {
  const { t, i18n } = useTranslation();
  const [accordionItems, setAccordionItems] = useState<IAccordion["items"]>([]);
  useEffect(() => {
    const newAccordionItems: typeof accordionItems = [
      {
        id: "technology-icons",
        title: t("references.projects.technologies"),
        element: <ListIcons icons={props.technologyIcons} />,
      },
    ];

    setAccordionItems(newAccordionItems);
  }, [props.technologyIcons, props.externalLinks, i18n.language]);

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
    >
      <div className="d-flex flex-column" style={{ rowGap: "10px" }}>
        <div className="d-flex flex-column justify-content-start">
          {props.externalLinks?.map((externalLink) => (
            <a
              key={externalLink.link}
              href={externalLink.link}
              target="_blank"
              rel="noreferrer"
            >
              {externalLink.text}
            </a>
          ))}
        </div>

        <Accordion items={accordionItems} />
      </div>
    </Card>
  );
}

export default CardProject;
