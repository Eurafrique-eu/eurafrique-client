import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import "./BENEVOLEA.scss";

const BENEVOLEA = () => {
  const { setTabs } = useTabsContext();

  useEffect(() => {
    const tabsData = [];
    setTabs(tabsData);
  }, [setTabs]);

  return (
    <div>
      <h1>BENEVOLEA Page</h1>
    </div>
  );
};

export default BENEVOLEA;
