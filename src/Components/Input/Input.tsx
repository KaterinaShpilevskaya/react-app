import classNames from "classnames";
import React, { FC, ChangeEvent } from "react";

//@ts-ignore
import styles from "./Input.module.css";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  title?: string;
  error?: string;
  autoFocus?: boolean;
};

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  disabled,
  title,
  error,
  autoFocus,
}) => {
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {title && <div>{title}</div>}
      <input
        value={value}
        onChange={onChangeInput}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        className={classNames(
          styles.input,
          { [styles.inputError]: error,
            [styles.inputFocus]: autoFocus ,
            [styles.inputActive]: value !=='',
            [styles.disabled]: !!disabled, },
        )}
      />
      {error && <div className={classNames(styles.error)}>{error}</div>}
    </div>
  );
};

export default Input;
