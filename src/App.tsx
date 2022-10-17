import React from "react";

//@ts-ignore
import styles from "./App.module.css";
import Burger from "./Components/Burger";
import Button, { ButtonTypes } from "./Components/Button";
import Tabs from "./Components/Tabs";
import Title from "./Components/Title";
import UserName from "./Components/UserName";

const App = () => {
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
        className = {'secondaryFromProp'}
      />
      <Button
        title={"Error"}
        type={ButtonTypes.Error}
        onClick={() => alert("error")}
      />
      <UserName username = {'Artem_Malkin'} />
      <Title title = {'Sign In'} />
      <Burger />
      
    </div>
  );
};

export default App;
