import React, { FC } from "react";

//@ts-ignore
import styles from "./Tabs.module.css";
import classnames from "classnames";

type TabProps = {
  className: string;
  title: string;
  onClick: () => void;
  };

const Tabs: FC<TabProps> = (props) => {
  const { className, title, onClick } = props;
  return (
    <div className={classnames(styles.tab, className)} onClick={onClick}>
      {title}
    </div>
  );
};

export default Tabs;
