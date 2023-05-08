import { useRef, useState, useEffect } from "react";

interface IWrapperDimensions {
  height: number;
  width: number;
}

interface ILineCoordinates1 {
  leftTop: number;
  rightTop: number;
}
interface ILineCoordinates2 {
  leftTop: number;
  rightBottom: number;
}
interface ILineCoordinates3 {
  rightTop: number;
  leftTop: number;
}
interface ILineCoordinates4 {
  rightTop: number;
  leftBottom: number;
}
interface ILine {
  type: "line";
  thickness: number;
  coordinates:
    | ILineCoordinates1
    | ILineCoordinates2
    | ILineCoordinates3
    | ILineCoordinates4;
}

interface IFreeShape {
  type: "Free shape";
  coordinates: {
    leftTop: number;
    rightTop: number;
    leftBottom: number;
    rightBottom: number;
  };
}

type Props = (ILine | IFreeShape) & {
  fillColor: "primary" | "secondary" | string;
};

function getLineDimensions(
  wrapperDimensions: IWrapperDimensions,
  thickness: number
): string {
  const height = wrapperDimensions.height;
  const width = wrapperDimensions.width;

  return `M 0 ${
    height - thickness
  } L 0 ${height} L ${width} ${thickness} L ${width} 0 Z`;
}
// function getFreeShapeDimensions(coordinates: IFreeShape["coordinates"]) {
//   return `M 0 ${
//     coordinates.leftTop
//   } L 0 ${height} L ${width} ${thickness} L ${width} 0 Z`;
// }

function SvgFourCorners(props: Props) {
  const svgElement = useRef<SVGSVGElement | null>(null);
  const [svgFourCornersDimensionsDimensions, setSvgFourCornersDimensions] =
    useState<IWrapperDimensions>({
      height: 0,
      width: 0,
    });

  const updateSvgFourCornersDimensions = (): void => {
    if (svgElement.current === null)
      return console.error(
        "The SVG viewbox could not be set. This is because the 'ref' for the HTML element is 'null'."
      );
    const height = svgElement.current.height.baseVal.value;
    const width = svgElement.current.width.baseVal.value;

    setSvgFourCornersDimensions({
      height: Math.round(height),
      width: Math.round(width),
    });
  };
  const getSvgFourCornersDimensions = (): string => {
    const height = svgFourCornersDimensionsDimensions.height;
    const width = svgFourCornersDimensionsDimensions.width;
    const thickness = 50;

    return `M 0 ${
      height - thickness
    } L 0 ${height} L ${width} ${thickness} L ${width} 0 Z`;
  };

  useEffect(() => {
    updateSvgFourCornersDimensions();
    window.addEventListener("resize", updateSvgFourCornersDimensions);

    return () => {
      window.removeEventListener("resize", updateSvgFourCornersDimensions);
    };
  }, []);
  return (
    <svg
      ref={svgElement}
      className="d-block d-lg-none"
      height="100%"
      width="100%"
    >
      <path id="" d={getSvgFourCornersDimensions()} />
    </svg>
  );
}

export default SvgFourCorners;
