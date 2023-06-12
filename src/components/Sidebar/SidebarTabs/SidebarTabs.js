import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTabsContext } from "./TabsContext";
import "./SidebarTabs.scss";

function SidebarTabs() {
  const { tabs } = useTabsContext();
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sidebar-tabs">
      {tabs.map((tab) => (
        <NavLink
          key={tab}
          to={`/${tab}`}
          className={`sidebar-tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </NavLink>
      ))}
    </div>
  );
}

export default SidebarTabs;
