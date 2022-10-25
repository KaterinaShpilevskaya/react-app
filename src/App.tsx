import classNames from "classnames";
import React, { useState } from "react";

//@ts-ignore
import styles from "./App.module.css";
import { BurgerIcon, CloseIcon } from "./Assets/icons";
import Burger from "./Components/Burger";
import Button, { ButtonTypes } from "./Components/Button";
import { Tabslist } from "./Components/TabsList";
import Title from "./Components/Title";
import UserName from "./Components/UserName";

const App = () => {

  const [isOpened, setOpened] = useState(false);
  
  return (
    <div className={styles.container}>
      <Button
        title={"Primary"}
        type={ButtonTypes.Primary}
        onClick={() => alert("primary")}
      />
      <Button
        title={"Secondary"}
        type={ButtonTypes.Secondary}
        onClick={() => alert("secondary")}
        className={"secondaryFromProp"}
      />
      <Button
        title={"Error"}
        type={ButtonTypes.Error}
        onClick={() => alert("error")}
      />
      <UserName username={"Artem_Malkin"} />
      <Title title={"Sign In"} />
      <Burger />
      <Button
        title={!isOpened ? <BurgerIcon /> : <CloseIcon />}
        type={ButtonTypes.Primary}
        className={styles.burgerButton}
        onClick={() => setOpened(!isOpened)}
      />
      <Tabslist  />
    </div>
  );
};

export default App;
