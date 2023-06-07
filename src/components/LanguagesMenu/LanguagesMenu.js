import React from "react";
import { useTranslation } from "react-i18next";

function LanguagesMenu() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>French</button>
      <button onClick={() => changeLanguage("es")}>Spanish</button>
      <button onClick={() => changeLanguage("ar")}>Arabic</button>
    </div>
  );
}

export default LanguagesMenu;
