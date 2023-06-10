import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import { useTranslation } from "react-i18next";
import "./IDEA.scss";

const IDEA = () => {
  const { setTabs } = useTabsContext();
  const { t } = useTranslation();

  useEffect(() => {
    const tabsData = [
      t("ORGANIGRAMME EA"),
      t("PRESENTATION"),
      t("EVENEMENTIELS"),
      t("BOUSSOLE EURAFRIQUE"),
      t("PROPOSER UN PROJET"),
    ];
    setTabs(tabsData);
  }, [setTabs, t]);

  return (
    <div className="page-content">
      <h1>IDEA Page</h1>
    </div>
  );
};

export default IDEA;
