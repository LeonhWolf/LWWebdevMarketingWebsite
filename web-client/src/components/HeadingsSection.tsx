interface IProps {
  smallTitleText: string;
  bigTitleText: string;
}

function HeadingsSection(props: IProps) {
  return (
    <div style={{ marginBottom: "60px" }}>
      <h6 className="small-title text-center">{props.smallTitleText}</h6>
      <h2 className="big-title text-center">{props.bigTitleText}</h2>
    </div>
  );
}

export default HeadingsSection;
