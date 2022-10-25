import React, {useState} from "react";

//@ts-ignore
import styles from "./TabsList.module.css";
import classnames from "classnames";

enum Tabs {
  All = "all",
  Favorites = "myFavorites",
  Popular = "Popular",
}

const TABS_NAMES = [
  { name: "All", key: Tabs.All },
  { name: "My Favorites", key: Tabs.Favorites },
  { name: "Popular", key: Tabs.Popular },
];

export const Tabslist = () => {
const [activeTab, setActiveTab] = useState (Tabs.All);

  const onTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };
  return (
      <div className ={styles.container}>
              {TABS_NAMES.map((tab) => {
                return (
                  <div 
                    key={tab.key}
                    onClick={() => onTabClick(tab.key)}
                    className={classnames([styles.tab, { [styles.activeTab]: tab.key === activeTab}])}
                  >
                    {tab.name}
                  </div>
                );
              })}
            </div>
  );
};


