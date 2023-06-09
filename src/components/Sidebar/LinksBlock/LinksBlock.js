import React from "react";
import { useTranslation } from "react-i18next";

const LinksBlock = () => {
  const { t } = useTranslation();
  const handleButtonClick = (buttonIndex) => {
    // Handle button click logic here
    // You can use the buttonIndex parameter to identify which button was clicked
    // and perform the corresponding action, such as opening a modal
  };

  return (
    <div className="links-container">
      <h2>{t("PUISQUE VOUS ÊTES LÀ …")}</h2>
      <p>{t("Des interrogations? Vouloir communiquer...")}</p>
      <button onClick={() => handleButtonClick(1)}>{t("NOUS CONTACTER")}</button>
      <button onClick={() => handleButtonClick(2)}>{t("NOUS REJOINDRE")}</button>
      <button onClick={() => handleButtonClick(3)}>{t("NOUS SOUTENIR")}</button>
    </div>
  );
};

export default LinksBlock;
