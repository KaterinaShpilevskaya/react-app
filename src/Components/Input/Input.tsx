import classNames from "classnames";
import React, { forwardRef, ChangeEvent } from "react";

import styles from "./Input.module.css";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  title?: string;
  error?: string;
  onDefaultClick?: () => void;
};

const Input = forwardRef <HTMLInputElement, InputProps>((props, ref) => {
  const {
    value,
    onChange,
    placeholder,
    disabled,
    title,
    error,
    onDefaultClick,
  } = props;
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
        className={classNames(
          styles.input,
          { [styles.inputError]: error,},
        )}
        ref={ref}
        onClick={onDefaultClick}
      />
      {error && <div className={classNames(styles.error)}>{error}</div>}
    </div>
  );
});

export default Input;
