import classNames from "classnames";
import React, { useState } from "react";

//@ts-ignore
import styles from "./App.module.css";
import Input from "./Components/Input/Input";
import Textarea from "./Components/TextArea/Textarea";

const App = () => {
  
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
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder={"placeholder"}
        disabled={false}
        title={'Title'}
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
