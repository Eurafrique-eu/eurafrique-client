import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import "./FocusPage.scss";

function Focus() {
  const { setTabs } = useTabsContext();

  useEffect(() => {
    const tabsData = ["ACTUALITES", "EURAFRIQUE", "HISTORIQUE", "PARTENAIRES", "LA FRANCOPHONIE"];
    setTabs(tabsData);
  }, [setTabs]);

  return (
    <div>
      <h1>Focus Page</h1>
    </div>
  );
}

export default Focus;
