import React, { FC } from "react";
import classnames from "classnames";

//@ts-ignore
import styles from "./Button.module.css";

export enum ButtonTypes {
  Primary = "primary",
  Secondary = "secondary",
  Error = "error",
}

type ButtonProps = {
  title: string;
  type: ButtonTypes;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = (props) => {
  const { type, title, onClick, className, disabled } = props;

  const buttonClassName = styles[type];

  return (
    <div
      className={classnames(styles.button, buttonClassName, className, {
        [styles.disabled]: !!disabled,
      })}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;