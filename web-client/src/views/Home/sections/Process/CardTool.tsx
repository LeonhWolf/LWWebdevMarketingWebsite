import Card from "../../../../components/Card";
import type { IProps as ICard } from "../../../../components/Card";
import ListIcons from "../../../../components/ListIcons";
import type { IProps as IListIcons } from "../../../../components/ListIcons";

export interface IProps
  extends Pick<ICard, "title" | "bodyText">,
    Required<IListIcons> {}

function CardTool(props: IProps) {
  return (
    <Card title={props.title} bodyText={props.bodyText}>
      <ListIcons icons={props.icons} />
    </Card>
  );
}

export default CardTool;
