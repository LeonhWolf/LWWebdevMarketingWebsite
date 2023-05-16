import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

interface IAccordionItem {
  id: string;
  title: string;
  element: React.ReactElement;
}

export interface IProps {
  items: IAccordionItem[];
}

function Accordion(props: IProps) {
  const accordionId = useRef<string>(uuidv4());

  return (
    <div id={`accordion-${accordionId.current}`} className="accordion">
      {props.items.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}-accordion-${accordionId.current}`}
            >
              {item.title}
            </button>
          </h2>

          <div
            id={`collapse-${index}-accordion-${accordionId.current}`}
            className="accordion-collapse collapse"
            data-bs-parent={`#accordion-${accordionId.current}`}
          >
            <div className="accordion-body">{item.element}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
