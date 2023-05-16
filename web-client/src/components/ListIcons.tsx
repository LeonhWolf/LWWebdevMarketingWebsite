import IconOutline from "./IconOutline";
import { IProps as IIconOutline } from "./IconOutline";

export interface IProps {
  icons: IIconOutline[];
}

function ListIcons(props: IProps) {
  return (
    <div
      className="d-flex flex-wrap"
      style={{ rowGap: "15px", columnGap: "15px" }}
    >
      {props.icons.map((icon) => (
        <IconOutline
          key={icon.tooltipText}
          iconPath={icon.iconPath}
          borderColor={icon.borderColor}
          tooltipText={icon.tooltipText}
        />
      ))}
    </div>
  );
}

export default ListIcons;
