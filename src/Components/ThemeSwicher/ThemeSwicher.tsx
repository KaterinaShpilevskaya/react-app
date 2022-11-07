import React from "react";

import { MoonIcon, SunIcon } from "../../Assets/icons";
import styles from "./ThemeSwicher.module.css";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

const ThemeSwicher = () => {
  const { theme, onChangeTheme } = useThemeContext();

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.iconButton, {
          [styles.activeButton]: theme === Theme.Light,
        })}
        onClick={() => onChangeTheme(Theme.Light)}
      >
        <SunIcon />
      </div>
      <div
        className={classNames(styles.iconButton, {
          [styles.activeButton]: theme === Theme.Dark,
        })}
        onClick={() => onChangeTheme(Theme.Dark)}
      >
        <MoonIcon />
      </div>
    </div>
  );
};

export default ThemeSwicher;