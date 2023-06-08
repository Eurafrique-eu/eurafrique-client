import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import "./DIGEA.scss";

const DIGEA = () => {
  const { setTabs } = useTabsContext();

  useEffect(() => {
    const tabsData = ["PRESSE"];
    setTabs(tabsData);
  }, [setTabs]);

  return (
    <div>
      <h1>DIGEA Page</h1>
    </div>
  );
};

export default DIGEA;
