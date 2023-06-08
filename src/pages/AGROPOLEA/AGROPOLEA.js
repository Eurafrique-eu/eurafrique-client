import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import "./AGROPOLEA.scss";

const AGROPOLEA = () => {
  const { setTabs } = useTabsContext();

  useEffect(() => {
    const tabsData = [];
    setTabs(tabsData);
  }, [setTabs]);

  return (
    <div>
      <h1>AGROPOLEA Page</h1>
    </div>
  );
};

export default AGROPOLEA;
