import React from "react";
import { useTranslation } from "react-i18next";
import "./LinksBlock.scss";

const LinksBlock = () => {
  const { t } = useTranslation();

  const handleContactButtonClick = () => {
    const recipientAddress = "framirbx@icloud.com";
    const subject = encodeURIComponent(""); // Replace with the desired email subject
    const body = encodeURIComponent(""); // Replace with the desired email body

    const mailtoLink = `mailto:${recipientAddress}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleButtonClick = (buttonIndex) => {
    // Handle button click logic here
    // You can use the buttonIndex parameter to identify which button was clicked
    // and perform the corresponding action, such as opening a modal
  };

  return (
    <div className="links-container">
      <h2>{t("PUISQUE VOUS ÊTES LÀ …")}</h2>
      <p>{t("Des interrogations? Vouloir communiquer...")}</p>
      <button onClick={handleContactButtonClick} className="blue-button mobile-button">
        {t("NOUS CONTACTER")}
      </button>
      <p>{t("Marquer votre intérêt et participer à cette grande chaîne de la solidarité")}</p>
      <button onClick={() => handleButtonClick(2)} className="blue-button mobile-button">
        {t("NOUS REJOINDRE")}
      </button>
      <p>
        {t(
          "Faire avancer cette coopération pour construire l’avenir en nous aidant à financer nos projets en toute liberté de parole et de nos axes de développement."
        )}
      </p>
      <button onClick={() => handleButtonClick(3)} className="blue-button mobile-button">
        {t("NOUS SOUTENIR")}
      </button>
    </div>
  );
};

export default LinksBlock;
