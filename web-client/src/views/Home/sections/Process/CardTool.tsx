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
      <div className="h-100 d-flex flex-column justify-content-end">
        <ListIcons icons={props.icons} />
      </div>
    </Card>
  );
}

export default CardTool;
