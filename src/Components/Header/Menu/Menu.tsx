import React, { useMemo } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import ThemeSwicher from "../../ThemeSwicher";
import Button, { ButtonTypes } from "../../Button";
import styles from "./Menu.module.css";
import { PathNames } from "../../../Pages/Router/Router";
import classNames from "classnames";
import UserName from "../../UserName";

export const isLoggedIn = false;

const Menu = () => {
  
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navButtons = useMemo(
    () => [
      { title: "Home", link: PathNames.Home },
      ...(isLoggedIn ? [{ title: "Add Post", link: PathNames.AddPost }] : []),
    ],
    [isLoggedIn]
  );

  const onFooterButtonClick = () => {
    navigate(PathNames.SignIn);
  };

  return (
    <div className={styles.container}>
      <div>
        {isLoggedIn && <UserName username={"Artem_Malkin"} />}
        {navButtons.map(({ link, title }) => {
          return (
            <NavLink
              key={link}
              to={link}
              className={classNames(styles.navButton, {
                [styles.activeNavButton]: pathname === link,
              })}
            >
              {title}
            </NavLink>
          );
        })}
      </div>
      <div>
        <ThemeSwicher />
        <Button
          title={isLoggedIn ? "Log Out" : "Sign In"}
          type={ButtonTypes.Secondary}
          className={styles.footerButton}
          onClick={onFooterButtonClick}
        />
      </div>
    </div>
  );
};

export default Menu;