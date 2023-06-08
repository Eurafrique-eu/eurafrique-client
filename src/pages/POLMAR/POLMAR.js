import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import "./POLMAR.scss";

const POLMAR = () => {
  const { setTabs } = useTabsContext();

  useEffect(() => {
    const tabsData = [];
    setTabs(tabsData);
  }, [setTabs]);

  return (
    <div>
      <h1>POLMAR Page</h1>
    </div>
  );
};

export default POLMAR;
