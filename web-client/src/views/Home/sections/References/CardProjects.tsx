import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Card from "../../../../components/Card";
import { IProps as ICard } from "../../../../components/Card";
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
        <a href={props.externalLink?.link} target="_blank" rel="noreferrer">
          {props.externalLink?.text}
        </a>
      }
    </Card>
  );
}

export default CardProject;
