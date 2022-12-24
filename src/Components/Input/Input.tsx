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
  className?: string
};

const Input = forwardRef <HTMLInputElement, InputProps>((props, ref) => {
  const {
    value,
    onChange,
    placeholder,
    disabled,
    title,
    error,
    className
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
        className={classNames(className,
          styles.input,
          { [styles.inputError]: error,},
        )}
      />
      {error && <div className={styles.error}>{error}</div>}
      
    </div>
  );
});

export default Input;