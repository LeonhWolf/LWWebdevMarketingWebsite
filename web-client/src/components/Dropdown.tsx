import { useState, useEffect } from "react";

import css from "./Dropdown.module.scss";

export interface ITextItem {
  type: "text";
  id: string;
  title: string;
}
export interface IIconItem {
  type: "icon";
  id: string;
  path: string;
}

export interface IProps {
  items: ITextItem[] | IIconItem[];
  activeItemIndex: number;
  onItemClick: (index: number) => void;
}

function Dropdown(props: IProps) {
  const [activeItem, setActiveItem] = useState<ITextItem | IIconItem>(
    props.items[0]
  );

  useEffect(() => {
    setActiveItem(props.items[props.activeItemIndex]);
  }, [props.activeItemIndex]);

  return (
    <div className="dropdown">
      <button
        id={css["btn"]}
        className="btn p-2"
        type="button"
        data-bs-toggle="dropdown"
      >
        {activeItem.type === "text" ? (
          activeItem.title
        ) : (
          <div className={css["image-wrapper"]}>
            <img src={activeItem.path} className={css["icon"]} />
          </div>
        )}
      </button>

      <ul className="dropdown-menu">
        {props.items.map((item, index) => (
          <li
            key={item.id}
            className="dropdown-item"
            onClick={() => props.onItemClick(index)}
          >
            {item.type === "text" ? (
              item.title
            ) : (
              <div className={css["image-wrapper"]}>
                <img src={item.path} className={css["icon"]} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
