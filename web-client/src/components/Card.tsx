import css from "./Card.module.scss";

interface IProps {
  title: string;
  bodyText: string;
  titleAndIconBackgroundColor?: string;
  iconPath?: string;
}

function Card(props: IProps) {
  return (
    <div className="card shadow position-relative">
      {typeof props.iconPath === "string" && (
        <div
          id={css["top-icon-wrapper"]}
          style={{ backgroundColor: props.titleAndIconBackgroundColor }}
        >
          <img id={css["top-icon"]} src={props.iconPath} alt="" />
        </div>
      )}
      <div className="card-body">
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
      </div>
    </div>
  );
}

export default Card;
