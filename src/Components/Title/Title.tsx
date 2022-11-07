import React, { FC } from "react";

import styles from "./Title.module.css";

type TitleProps = {
    title: string;
  };

const Title: FC<TitleProps> = ({title}) => {
    return <div className={styles.container} >
        {title}
         </div>
}

export default Title; 