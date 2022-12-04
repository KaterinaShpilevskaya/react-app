import React, { useState } from 'react';
import styles from './SignUp.module.css';
import Button, { ButtonTypes } from '../../Components/Button';
import Input from '../../Components/Input/Input';
import FormContainer from '../../Components/FormContainer';
import { NavLink} from 'react-router-dom';
import { PathNames } from "../Router/Router";

const SignUp = () => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  return (
    <FormContainer title={'Sign Up'}>
      <>
        <div className={styles.inputsContainer}>
          <Input
            title={'Name'}
            placeholder={'Your name'}
            value={name}
            onChange={(value: string) => setName(value)}
          />
          <Input
            title={'Email'}
            placeholder={'Your email'}
            value={login}
            onChange={(value: string) => setLogin(value)}
          />
          <Input
            title={'Password'}
            placeholder={'Your password'}
            value={password}
            onChange={(value: string) => setPassword(value)}
          />
          <Input
            title={'Confirm password'}
            placeholder={'Confirm password'}
            value={passwordConfirm}
            onChange={(value: string) => setPasswordConfirm(value)}
          />
        </div>
        <div className={styles.forgotPassword}>{'Forgot password?'}</div>
        <Button
          title={'Sign In'}
          type={ButtonTypes.Primary}
          onClick={() => {}}
          className={styles.button}
        />
        <div className={styles.signUpRedirectContainer}>
          {'Don’t have an account?'} <NavLink to = { PathNames.SignIn} className={styles.redirectButton}>{'Sign In'}</NavLink>
        </div>
      </>
    </FormContainer>
  );
};

export default SignUp;










