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
      <h1 className="page-title">AJVI-COJEA</h1>
      <p className="page-description">
        {t(
          "C'est la coordination jeunesse et femmes en Afrique, en interaction avec des organisations partenaires en Afrique et ailleurs (organisations de volontariat - négociations climatiques et biodiversité)."
        )}
      </p>
      <div className="column-one">
        <br />
        <h2>{t("AJVI - COJEA - NOTRE RÔLE:")}</h2>
      </div>
    </div>
  );
};

export default AJVICOJEA;
