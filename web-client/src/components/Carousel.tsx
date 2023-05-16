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

type BreakpointValues = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};
type Breakpoint = keyof BreakpointValues;

function Carousel(props: IProps) {
  const currentSlide = useRef<number>(0);
  const parentElement = useRef<HTMLDivElement | null>(null);
  const allSlidesElement = useRef<HTMLDivElement | null>(null);
  const carouselIndicatorElements = useRef<(HTMLElement | null)[]>([]);
  const [groupedElements, setGroupedElements] = useState<IElement[][]>([[]]);

  const updateCarouselIndicators = (): void => {
    if (carouselIndicatorElements.current.length === 0)
      return console.error(
        "The carousel indicator could not be updated. The elements could not be found."
      );

    carouselIndicatorElements.current.forEach(
      (carouselIndicatorElement, index) => {
        if (index === currentSlide.current) {
          carouselIndicatorElement?.classList.add(css["active"]);
          return;
        }
        carouselIndicatorElement?.classList.remove(css["active"]);
      }
    );
  };

  const updateSlidePosition = (): void => {
    if (allSlidesElement.current === null)
      return console.error(
        "The carousel slide could not be advanced. The needed element is 'null'."
      );

    allSlidesElement.current.style.transform = `translateX(${-currentSlide.current}00%)`;
  };

  const setCurrentSlide = (newValue: typeof currentSlide.current) => {
    currentSlide.current = newValue;
    updateSlidePosition();
    updateCarouselIndicators();
  };

  const advanceSlide = (): void => {
    if (currentSlide.current + 1 > groupedElements.length - 1) return;
    setCurrentSlide(currentSlide.current + 1);
  };
  const rewindSlide = (): void => {
    if (currentSlide.current - 1 < 0) return;
    setCurrentSlide(currentSlide.current - 1);
  };

  const getBreakpointValue = (breakpoint: Breakpoint): number => {
    const computedStyle = window.getComputedStyle(document.body);
    const breakpointPixels = computedStyle.getPropertyValue(
      `--breakpoint-${breakpoint}`
    );
    const breakpointNoPixels = breakpointPixels.replace("px", "");
    const breakpointNumber = Number(breakpointNoPixels);
    return breakpointNumber;
  };

  const getCurrentBreakpoint = (): Breakpoint | void => {
    if (parentElement.current === null)
      return console.error(
        "The current breakpoint could not be retrieved. The parent element is 'null'. But the breakpoint is dependent on the width of this element"
      );

    const breakpointValues: BreakpointValues = {
      xs: getBreakpointValue("xs"),
      sm: getBreakpointValue("sm"),
      md: getBreakpointValue("md"),
      lg: getBreakpointValue("lg"),
      xl: getBreakpointValue("xl"),
      xxl: getBreakpointValue("xxl"),
    };
    const pageWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (pageWidth < breakpointValues.sm) return "xs";
    if (pageWidth >= breakpointValues.sm && pageWidth < breakpointValues.md)
      return "sm";
    if (pageWidth >= breakpointValues.md && pageWidth < breakpointValues.lg)
      return "md";
    if (pageWidth >= breakpointValues.lg && pageWidth < breakpointValues.xl)
      return "lg";
    if (pageWidth >= breakpointValues.xl && pageWidth < breakpointValues.xxl)
      return "xl";
    if (pageWidth < breakpointValues.xl) return "xxl";
  };

  const updateSlideGroups = (): void => {
    if (parentElement.current === null)
      return console.error(
        "The carousel elements could not be grouped into slides. The parent element of this component is 'null'."
      );

    let elementsPerSlide = 3;
    const currentBreakpoint = getCurrentBreakpoint();
    if (currentBreakpoint === "xs") {
      elementsPerSlide = 1;
    } else if (currentBreakpoint === "sm") {
      elementsPerSlide = 1;
    } else if (currentBreakpoint === "md") {
      elementsPerSlide = 2;
    }

    let newlyGroupedElements: IElement[][] = [[]];
    props.elements.forEach((element, index) => {
      const groupIndex = Math.floor(index / elementsPerSlide);

      const currentGroup = newlyGroupedElements[groupIndex];
      if (currentGroup === undefined) newlyGroupedElements[groupIndex] = [];

      newlyGroupedElements[groupIndex].push(element);
    });

    setGroupedElements(newlyGroupedElements);
  };

  useEffect(() => {
    updateSlideGroups();
  }, [props.elements]);

  useEffect(() => {
    updateCarouselIndicators();
    window.addEventListener("resize", updateSlideGroups);

    return () => {
      window.removeEventListener("resize", updateSlideGroups);
    };
  }, []);

  return (
    <div className="d-flex align-items-center">
      <button className={css["navigation-button"]} onClick={rewindSlide}>
        <img src={chevronLeftIcon} alt="" />
      </button>

      <div
        ref={parentElement}
        className="w-100"
        style={{ overflowX: "hidden" }}
      >
        <div
          ref={allSlidesElement}
          id={css["all-slides"]}
          className="w-100 d-flex"
        >
          {groupedElements.map((elementGroup, index) => (
            <div key={index} className={`${css["slide"]}`}>
              {elementGroup.map((element, index) => (
                <div key={index} style={{ minWidth: "0" }}>
                  {element.element}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          className="d-flex justify-content-center mt-3"
          style={{ columnGap: "10px" }}
        >
          {groupedElements.map((elementGroup, index) => (
            <button
              key={index}
              ref={(element) =>
                (carouselIndicatorElements.current[index] = element)
              }
              className={css["carousel-indicator"]}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      <button className={css["navigation-button"]} onClick={advanceSlide}>
        <img src={chevronRightIcon} alt="" />
      </button>
    </div>
  );
}

export default Carousel;
