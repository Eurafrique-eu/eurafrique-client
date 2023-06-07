import React from "react";
import { useTranslation } from "react-i18next";
import "./MemberButton.scss";

const MemberButton = () => {
  const { t } = useTranslation();
  return <button className="blue-button">{t("ACCES MEMBRES")}</button>;
};

export default MemberButton;
