import React, { useState } from "react";
import Button, { ButtonTypes } from "../../Components/Button";
import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input/Input";

//@ts-ignore
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <FormContainer title={"Sign Up"}>
      <>
        <div className={styles.inputsContainer}>
          <Input
            title={"Name"}
            placeholder={"Your name"}
            value={name}
            onChange={(value: string) => setName(value)}
          />
          <Input
            title={"Email"}
            placeholder={"Your email"}
            value={login}
            onChange={(value: string) => setLogin(value)}
          />
          <Input
            title={"Password"}
            placeholder={"Your password"}
            value={password}
            onChange={(value: string) => setPassword(value)}
          />
          <Input
            title={"Confirm password"}
            placeholder={"Confirm password"}
            value={confirmPassword}
            onChange={(value: string) => setConfirmPassword(value)}
          />
        </div>
        <Button
          className={styles.button}
          title={"Sign Up"}
          type={ButtonTypes.Primary}
          onClick={() => {}}
        />
        <div className={styles.signInRedirectContainer}>
          {"Already have an account?"} <span className={styles.span}>{" Sign In"}</span>
        </div>
      </>
    </FormContainer>
  );
};

export default SignUp;
