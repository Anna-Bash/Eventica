import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  id?: string;
  label?: string;
  type?: "text" | "search" | "email" | "number";
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  value,
  placeholder,
  disabled = false,
  required = false,
  error,
  onChange,
  onBlur,
}) => {
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        className={`${styles.input} ${error ? styles.error : ""}`}
      />

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};
