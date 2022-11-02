import classNames from "classnames";
import React, { FC, ChangeEvent, forwardRef } from "react";

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

const Input = forwardRef<HTMLInputElement, InputProps>( ({
  value,
  onChange,
  placeholder,
  disabled,
  title,
  error,
  autoFocus,
}, ref) => {
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
          { [styles.inputError]: error,},
        )}
        ref={ref}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
});

export default Input;