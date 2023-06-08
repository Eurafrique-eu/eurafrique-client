import React from "react";
import { NavLink } from "react-router-dom";
import { useTabsContext } from "./TabsContext";
import "./SidebarTabs.scss";

function SidebarTabs() {
  const { tabs } = useTabsContext();

  return (
    <div className="sidebar-tabs">
      {tabs.map((tab) => (
        <NavLink key={tab} to={`/${tab}`} className="sidebar-tab" activeClassName="active">
          {tab}
        </NavLink>
      ))}
    </div>
  );
}

export default SidebarTabs;
