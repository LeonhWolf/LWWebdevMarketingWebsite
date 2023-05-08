interface IProps {
  smallTitle: string;
  bigTitle: string;
  doCenter: boolean;
}

function HeadingsSection(props: IProps) {
  return (
    <div style={{ marginBottom: props.doCenter ? "60px" : "30px" }}>
      <h6 className={`small-title ${props.doCenter && "text-center"}`}>
        {props.smallTitle}
      </h6>
      <h2
        className={`big-title ${props.doCenter && "text-center"}`}
        style={{
          transform: props.doCenter === false ? "translateX(-3px)" : undefined,
        }}
      >
        {props.bigTitle}
      </h2>
    </div>
  );
}

export default HeadingsSection;
