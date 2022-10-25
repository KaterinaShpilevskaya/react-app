import React from "react";

//@ts-ignore
import styles from "./Burger.module.css";

export const Burger = () => {
  
   return (
    <div className={styles.burger}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
