import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface IProps {
  children: React.ReactElement | React.ReactElement[];
}

function UseIdAnchors(props: IProps) {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const anchorElement = document.querySelector(hash);
      anchorElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return <>{props.children}</>;
}

export default UseIdAnchors;
