import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import { useTranslation } from "react-i18next";
import "./BENEVOLEA.scss";

const BENEVOLEA = () => {
  const { setTabs } = useTabsContext();
  const { t } = useTranslation();

  useEffect(() => {
    const tabsData = [t("ORGANIGRAMME EA")];
    setTabs(tabsData);
  }, [setTabs, t]);

  return (
    <div className="page-content">
      <h1>BENEVOLEA Page</h1>
    </div>
  );
};

export default BENEVOLEA;
