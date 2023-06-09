import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import { useTranslation } from "react-i18next";
import "./AJVI-COJEA.scss";

const AJVICOJEA = () => {
  const { setTabs } = useTabsContext();
  const { t } = useTranslation();

  useEffect(() => {
    const tabsData = [
      t("AJVI"),
      t("COJEA"),
      t("AJVC"),
      t("REJEFAC-COMIFAC"),
      t("GIC ACCENT ELLE"),
      t("MA COMMUNAUTE CODEGBA"),
      t("CAREEB AC"),
      t("RESEAUX"),
      t("BLOG MTN"),
    ];
    setTabs(tabsData);
  }, [setTabs, t]);

  return (
    <div className="page-content">
      <h1>AJVI-COJEA Page</h1>
    </div>
  );
};

export default AJVICOJEA;
