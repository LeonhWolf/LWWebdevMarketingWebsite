import { useEffect, useState, useRef, ReactElement } from "react";

import css from "./Carousel.module.scss";
import chevronRightIcon from "../assets/SVG/chevron-right.svg";
import chevronLeftIcon from "../assets/SVG/chevron-left.svg";

interface IElement {
  key: string;
  element: ReactElement;
}
export interface IProps {
  elementsWidthPixels: number;
  elements: IElement[];
}

const groupElements = (
  elements: IElement[],
  parentElement: HTMLDivElement,
  elementsWidthPixels: number,
  elementsColumnGapPixels: number
) => {
  const parentElementWidth = parentElement.offsetWidth;
  const fittingElementsNoGap = Math.floor(
    parentElementWidth / elementsWidthPixels
  );
  const gapsWidth = elementsColumnGapPixels * (fittingElementsNoGap - 1);
  const elementsToRemoveForGaps = gapsWidth / elementsWidthPixels;
};

function Carousel(props: IProps) {
  const elementsColumnGapPixels = 100;
  const parentElement = useRef<HTMLDivElement | null>(null);
  const [groupedElements, setGroupedElements] = useState<IElement[][]>([[]]);

  // addEventListener() for resizing of the parent element of this component
  useEffect(() => {
    if (parentElement.current === null)
      return console.error(
        "The carousel elements could not be grouped into slides. The parent element of this component is 'null'."
      );
    // groupElements(
    //   props.elements,
    //   parentElement.current,
    //   props.elementsWidthPixels,
    //   elementsColumnGapPixels
    // );

    let newlyGroupedElements: IElement[][] = [[]];
    props.elements.forEach((element, index) => {
      const groupIndex = Math.floor(index / 3);

      const currentGroup = newlyGroupedElements[groupIndex];
      if (currentGroup === undefined) newlyGroupedElements[groupIndex] = [];

      newlyGroupedElements[groupIndex].push(element);
    });

    setGroupedElements(newlyGroupedElements);
    console.log(groupElements);

    // console.log(props.elements.length);
  }, [props.elements]);

  return (
    <div className="d-flex align-items-center">
      <button className={css["navigation-button"]}>
        <img src={chevronLeftIcon} alt="" />
      </button>

      <div
        ref={parentElement}
        id="carouselExampleControls"
        className="carousel carousel-dark slide w-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {groupedElements.map((elementGroup, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 && "active"}`}
            >
              <div className={`${css["carousel-slide"]}`}>
                {elementGroup.map((element) => element.element)}
              </div>
            </div>
          ))}
        </div>

        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}

        <div
          className="d-flex justify-content-center mt-3"
          style={{ columnGap: "10px" }}
        >
          {groupedElements.map((elementGroup, index) => (
            //   <button
            //     key={index}
            //     type="button"
            //     data-bs-target="#carouselExampleControls"
            //     data-bs-slide-to={index}
            //     className={index === 0 ? "active" : ""}
            //   ></button>
            <button className={css["carousel-indicator"]}></button>
          ))}
        </div>
      </div>

      <button className={css["navigation-button"]}>
        <img src={chevronRightIcon} alt="" />
      </button>
    </div>
  );
}

export default Carousel;
