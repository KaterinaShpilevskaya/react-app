import React, { useState } from "react";
import Button, { ButtonTypes } from "../../Components/Button";
import FormContainer from "../../Components/FormContainer";

//@ts-ignore
import styles from "./RegistrationConfirmation.module.css";

const RegistrationConfirmation = () => {
  
  return (
    <FormContainer title={"Registration Confirmation"}>
      <>
        <div>
          Please activate your account with the activation link in the email
          <span> example@gmail.com.</span> Please, check your email
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
