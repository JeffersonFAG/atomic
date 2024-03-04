"use client";

import { useContext } from "react";
import { FormContext } from "..";
import styles from "./styles.module.scss";

interface InputProps {
  type?: "text" | "password";
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export function Input({
  label,
  name,
  placeholder,
  type,
  required,
}: InputProps) {
  const { formValues, setFormValues } = useContext(FormContext)!;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        required={required}
        type={type}
        id={name}
        name={name}
        value={formValues[name] || ""}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
