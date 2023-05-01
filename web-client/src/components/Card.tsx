import { useEffect, useRef } from "react";
import { Tooltip } from "bootstrap";

import css from "./Card.module.scss";

interface IBottomIcon {
  iconPath: string;
  borderColor: string;
  tooltipText?: string;
}
export interface IProps {
  title: string;
  bodyText: string;
  titleAndIconBackgroundColor?: string;
  topIconPath?: string;
  bottomIcons?: IBottomIcon[];
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
        typeof props.topIconPath === "string" && css["add-icon-margin-left"]
      }`}
    >
      {typeof props.topIconPath === "string" && (
        <div
          id={css["top-icon-wrapper"]}
          style={{ backgroundColor: props.titleAndIconBackgroundColor }}
        >
          <img id={css["top-icon"]} src={props.topIconPath} alt="" />
        </div>
      )}
      <div className="card-body d-flex flex-column">
        <h5
          className="card-title"
          style={{
            fontWeight: "700",
            color: props.titleAndIconBackgroundColor,
          }}
        >
          {props.title}
        </h5>
        <p className="card-text">{props.bodyText}</p>

        {props.bottomIcons !== undefined && props.bottomIcons.length > 0 && (
          <div className="d-flex mt-auto" style={{ columnGap: "12px" }}>
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
      </div>
    </div>
  );
}

export default Card;
