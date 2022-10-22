import classNames from "classnames";
import React, { useState } from "react";

//@ts-ignore
import styles from "./App.module.css";
import { BurgerIcon, CloseIcon } from "./Assets/icons";
import Burger from "./Components/Burger";
import Button, { ButtonTypes } from "./Components/Button";
import Input from "./Components/Input/Input";
import { Tabslist } from "./Components/TabsList";
import Textarea from "./Components/TextArea/Textarea";
import Title from "./Components/Title";
import UserName from "./Components/UserName";

const App = () => {
  const [isOpened, setOpened] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const onChange = (value: string) => {
    setInputValue(value);
  };

  const [textareaValue, textareatValue] = useState("");
  const onChangeTextarea = (value: string) => {
    textareatValue(value);
  };

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
      <Tabslist />
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder={"placeholder"}
        disabled={false}
      />
      <Textarea
        rows={10}
        cols={20}
        value={textareaValue}
        onChange={onChangeTextarea}
        placeholder={"placeholder"}
        disabled={false}
      />
    </div>
  );
};

export default App;
