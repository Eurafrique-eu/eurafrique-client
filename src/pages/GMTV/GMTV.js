import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import "./GMTV.scss";

const GMTV = () => {
  const { setTabs } = useTabsContext();

  useEffect(() => {
    const tabsData = [];
    setTabs(tabsData);
  }, [setTabs]);

  return (
    <div>
      <h1>GMTV Page</h1>
    </div>
  );
};

export default GMTV;
