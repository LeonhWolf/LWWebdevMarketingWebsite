import { useEffect, useRef } from "react";
import { Tooltip } from "bootstrap";

import css from "./IconOutline.module.scss";

export interface IProps {
  iconPath: string;
  borderColor: string;
  tooltipText?: string;
}

function IconOutline(props: IProps) {
  const wrapperElement = useRef<HTMLDivElement | null>(null);
  const tooltip = useRef<Tooltip | null>(null);

  useEffect(() => {
    if (wrapperElement.current === null)
      return console.error(
        "The Bootstrap tooltip could not be instantiated. The ref for the HTML Element is 'null'."
      );
    tooltip.current = new Tooltip(wrapperElement.current);

    return () => {
      tooltip.current?.dispose();
    };
  }, []);

  return (
    <div
      ref={wrapperElement}
      className={css["icon-wrapper"]}
      style={{ borderColor: props.borderColor }}
      data-bs-title={props.tooltipText}
    >
      <img
        className={css["icon-outline"]}
        src={props.iconPath}
        alt=""
        loading="lazy"
      />
    </div>
  );
}

export default IconOutline;
