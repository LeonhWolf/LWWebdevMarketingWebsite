import css from "./Card.module.scss";

export interface IProps {
  title: string;
  bodyText: string;
  titleColor?: string;
  topIconStyle?: "solid" | "outline";
  topIconColor?: string;
  topIconPath?: string;
  children?: React.ReactElement;
  headerImagePath?: string;
  leftImagePath?: string;
  subtitleElement?: React.ReactElement;
}

function Card(props: IProps) {
  return (
    <div
      className={`card shadow position-relative h-100 ${
        typeof props.topIconPath === "string" && css["add-top-icon-margin"]
      } ${props.leftImagePath !== undefined && css["add-left-image-margin"]}`}
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
          <img
            id={css["top-icon"]}
            src={props.topIconPath}
            alt=""
            loading="lazy"
          />
        </div>
      )}

      {props.leftImagePath !== undefined && (
        <div id={css["left-image-wrapper"]}>
          <img id={css["left-image"]} src={props.leftImagePath} alt="" />
        </div>
      )}

      <div
        className={`card-body d-flex flex-column ${
          props.leftImagePath !== undefined &&
          css["card-body-left-image-padding"]
        }`}
      >
        {props.headerImagePath !== undefined && (
          <img
            className="mb-2"
            src={props.headerImagePath}
            style={{ maxWidth: "100%", maxHeight: "100%", width: "100%" }}
            loading="lazy"
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

          {props.children !== undefined && (
            <div className="h-100">{props.children}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
