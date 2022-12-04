import React, {FC, useState} from "react";
import { Tabs } from "../../Constants/@types";

import styles from "./TabsList.module.css";
import classnames from "classnames";

type TabProps = {
  activeTab: Tabs;
  onSelectTab: (tab: Tabs) => void;
};

const TABS_NAMES = [
  { name: "All", key: Tabs.All },
  { name: "My Favorites", key: Tabs.Favorites },
  { name: "Popular", key: Tabs.Popular },
];

export const Tabslist:FC<TabProps> = ({ activeTab, onSelectTab }) => {

    return (
      <div className ={styles.container}>
              {TABS_NAMES.map((tab) => {
                return (
                  <div 
                    key={tab.key}
                    onClick={() => onSelectTab(tab.key)}
                    className={classnames([styles.tab, { [styles.activeTab]: tab.key === activeTab}])}
                  >
                    {tab.name}
                  </div>
                );
              })}
            </div>
  );
};


