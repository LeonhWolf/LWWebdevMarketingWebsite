import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { AvailableTranslations } from "../i18n";

type Props = {
  [key in AvailableTranslations]: React.ReactElement;
};

function ChooseI18n(props: Props) {
  const { i18n } = useTranslation();
  const [activeElement, setActiveElement] = useState<React.ReactElement>(
    props.de
  );

  useEffect(() => {
    const language = i18n.language as AvailableTranslations;
    if (language === "de") {
      setActiveElement(props.de);
      return;
    }
    if (language === "en") {
      setActiveElement(props.en);
      return;
    }
  }, [i18n.language]);
  return activeElement;
}

export default ChooseI18n;
