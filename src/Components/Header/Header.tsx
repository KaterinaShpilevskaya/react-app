import React, { useState } from "react";

import Button, { ButtonTypes } from "../Button";
import { BurgerIcon, CloseIcon, LogInIcon, SearcIcon } from "../../Assets";
import styles from "./Header.module.css";
import Menu from "./Menu";
import UserName from "../UserName";
import Input from "../Input/Input";
import { isLoggedIn } from "./Menu/Menu";
import { useNavigate } from "react-router-dom";
import { PathNames } from "../../Pages/Router/Router";

const Header = () => {
  const [isOpened, setOpened] = useState(false);

  const onBurgerClick = () => {
    setOpened(!isOpened);
  };

  const [inputValue, setInputValue] = useState("");

  const onChange = (value: string) => {
    setInputValue(value);
  };

  const navigate = useNavigate();

  const onLogInButton = () => {
    navigate(PathNames.SignIn);
  };

  const [isClickedSearchIcon, setClickedSearchIcon] = useState(false);

  const onSearchIconClick = () => {
    setClickedSearchIcon(!isClickedSearchIcon);
  };

  return (
    <div className={styles.container}>
      <Button
        title={isOpened ? <CloseIcon /> : <BurgerIcon />}
        onClick={onBurgerClick}
        type={ButtonTypes.Primary}
        className={styles.burgerButton}
      />
      {isOpened && <Menu />}
      <div className={styles.menu}>
        <div className={styles.inputContainer}>
          {!isOpened && isClickedSearchIcon && (
            <Input
              className={styles.searchInput}
              value={inputValue}
              onChange={onChange}
              placeholder={"Search..."}
            />
          )}
        </div>
        <div className={styles.searchIcons}>
          <Button
            title={<SearcIcon />}
            type={ButtonTypes.Primary}
            className={styles.searchButton}
            onClick={onSearchIconClick}
          />
              {isLoggedIn ? (
      <UserName username={"Artem Malkin"} />
    ) : (
      <Button
        title={<LogInIcon />}
        type={ButtonTypes.Primary}
        onClick={onLogInButton}
        className={styles.burgerHeaderButton}
      />
    )}
  </div>
</div>
        </div>  
  );
};

export default Header;

