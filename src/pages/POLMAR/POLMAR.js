import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import { useTranslation } from "react-i18next";
import "./POLMAR.scss";

const POLMAR = () => {
  const { setTabs } = useTabsContext();
  const { t } = useTranslation();

  useEffect(() => {
    const tabsData = [];
    setTabs(tabsData);
  }, [setTabs, t]);

  return (
    <div className="page-content">
      <h1>POLMAR Page</h1>
    </div>
  );
};

export default POLMAR;
