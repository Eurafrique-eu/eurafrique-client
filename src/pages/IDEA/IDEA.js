import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import "./IDEA.scss";

const IDEA = () => {
  const { setTabs } = useTabsContext();

  useEffect(() => {
    const tabsData = ["PRESENTATION", "EVENEMENTIELS", "BOUSSOLE EURAFRIQUE", "PROPOSER UN PROJET"];
    setTabs(tabsData);
  }, [setTabs]);

  return (
    <div className="page-content">
      <h1>IDEA Page</h1>
    </div>
  );
};

export default IDEA;
