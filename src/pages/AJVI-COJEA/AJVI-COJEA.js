import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import "./AJVI-COJEA.scss";

const AJVICOJEA = () => {
  const { setTabs } = useTabsContext();

  useEffect(() => {
    const tabsData = [
      "AJVI",
      "COJEA",
      "AJVC",
      "REJEFAC-COMIFAC",
      "GIC ACCENT ELLE",
      "MA COMMUNAUTE CODEGBA",
      "CAREEB AC",
      "RESEAUX",
      "BLOG MTN",
    ];
    setTabs(tabsData);
  }, [setTabs]);

  return (
    <div>
      <h1>AJVI-COJEA Page</h1>
    </div>
  );
};

export default AJVICOJEA;
