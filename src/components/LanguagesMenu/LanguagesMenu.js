import React from "react";
import englishFlag from "../../assets/en.png";
import frenchFlag from "../../assets/fr.png";
import spanishFlag from "../../assets/es.png";
import arabicFlag from "../../assets/ar.png";
import { useTranslation } from "react-i18next";
import "./LanguagesMenu.scss";

function LanguagesMenu() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="languages-menu">
      <button onClick={() => changeLanguage("fr")} className="flag-button">
        <img className="flag" src={frenchFlag} alt="French Flag" />
      </button>
      <button onClick={() => changeLanguage("es")} className="flag-button">
        <img className="flag" src={spanishFlag} alt="Spanish Flag" />
      </button>
      <button onClick={() => changeLanguage("en")} className="flag-button">
        <img className="flag" src={englishFlag} alt="English Flag" />
      </button>
      <button onClick={() => changeLanguage("ar")} className="flag-button">
        <img className="flag" src={arabicFlag} alt="Arabic Flag" />
      </button>
    </div>
  );
}

export default LanguagesMenu;
