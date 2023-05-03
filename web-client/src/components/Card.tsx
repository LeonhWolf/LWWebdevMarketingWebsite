import { useEffect, useRef } from "react";
import { Tooltip } from "bootstrap";

import css from "./Card.module.scss";

export interface IBottomIcon {
  iconPath: string;
  borderColor: string;
  tooltipText?: string;
}
export interface IProps {
  title: string;
  bodyText: string;
  titleColor?: string;
  topIconStyle?: "solid" | "outline";
  topIconColor?: string;
  topIconPath?: string;
  bottomIcons?: IBottomIcon[];
  children?: React.ReactElement;
  headerImagePath?: string;
  subtitleElement?: React.ReactElement;
}

function IconOutline(props: IBottomIcon) {
  const bottomIconWrapper = useRef<HTMLDivElement | null>(null);
  const tooltip = useRef<Tooltip | null>(null);

  useEffect(() => {
    if (bottomIconWrapper.current === null)
      return console.error(
        "The Bootstrap tooltip could not be instantiated. The ref for the HTML Element is 'null'."
      );
    tooltip.current = new Tooltip(bottomIconWrapper.current);

    return () => {
      tooltip.current?.dispose();
    };
  }, []);

  return (
    <div
      ref={bottomIconWrapper}
      className={css["bottom-icon-wrapper"]}
      style={{ borderColor: props.borderColor }}
      data-bs-title={props.tooltipText}
    >
      <img className={css["icon-outline"]} src={props.iconPath} alt="" />
    </div>
  );
}

function Card(props: IProps) {
  return (
    <div
      className={`card shadow position-relative h-100 ${
        typeof props.topIconPath === "string" && css["add-top-icon-margin"]
      }`}
    >
      {typeof props.topIconPath === "string" && (
        <div
          id={css["top-icon-wrapper"]}
          className={props.topIconStyle === "outline" ? "shadow" : ""}
          style={{
            backgroundColor:
              props.topIconStyle === "solid" || props.topIconStyle === undefined
                ? props.topIconColor
                : "white",
            border:
              props.topIconStyle === "outline"
                ? `solid 1px ${props.topIconColor}`
                : undefined,
          }}
        >
          <img id={css["top-icon"]} src={props.topIconPath} alt="" />
        </div>
      )}
      <div className="card-body d-flex flex-column">
        {props.headerImagePath !== undefined && (
          <img
            className="mb-2"
            src={props.headerImagePath}
            style={{ maxWidth: "100%", maxHeight: "100%", width: "100%" }}
          ></img>
        )}
        <h5
          className="card-title"
          style={{
            fontWeight: "700",
            color: props.titleColor,
          }}
        >
          {props.title}
        </h5>

        {props.subtitleElement !== undefined && (
          <div className="mb-2">{props.subtitleElement}</div>
        )}

        <div
          id="card-body-wrapper"
          className="d-flex flex-column justify-content-between h-100"
          style={{ rowGap: "15px" }}
        >
          <p className="card-text mb-0">{props.bodyText}</p>

          {props.bottomIcons !== undefined && props.bottomIcons.length > 0 && (
            <div
              className="d-flex mt-auto"
              style={{ columnGap: "12px", rowGap: "8px", flexWrap: "wrap" }}
            >
              {props.bottomIcons.map((bottomIcon, index) => (
                <IconOutline
                  key={index}
                  iconPath={bottomIcon.iconPath}
                  borderColor={bottomIcon.borderColor}
                  tooltipText={bottomIcon.tooltipText}
                />
              ))}
            </div>
          )}

          {props.children !== undefined && <div>{props.children}</div>}
        </div>
      </div>
    </div>
  );
}

export default Card;
