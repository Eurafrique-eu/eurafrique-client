import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext();

function TabsProvider({ children }) {
  const [tabs, setTabs] = useState([]);

  const setTabsData = (tabsData) => {
    setTabs(tabsData);
  };

  const value = {
    tabs,
    setTabs: setTabsData,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}

function useTabsContext() {
  return useContext(TabsContext);
}

export { TabsProvider, useTabsContext };
