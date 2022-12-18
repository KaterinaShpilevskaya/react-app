import React from "react";
import { useLocation } from "react-router";
import Button, { ButtonTypes } from "../../Components/Button";
import FormContainer from "../../Components/FormContainer";


import styles from "./RegistrationConfirmation.module.css";

const RegistrationConfirmation = () => {

  const { state } = useLocation();
  
  return (
    <FormContainer title={"Registration Confirmation"}>
      <>
        <div>
          Please activate your account with the activation link in the email
          <span> {state?.email || ""} </span> Please, check your email
        </div>
        <Button
          className={styles.button}
          title={"Go to home"}
          type={ButtonTypes.Primary}
          onClick={() => {}}
        />
      </>
    </FormContainer>
  );
};

export default RegistrationConfirmation;
