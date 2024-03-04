"use client";

import { Footer, Input, SubmitButton } from "./components";
import { createContext, useState } from "react";
import styles from "./styles.module.scss";

type FormValues = Record<string, string>;

interface FormContextType {
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

interface FormProps {
  title: string;
  description?: string;
  onSubmit: (values: FormValues) => void;
  children: React.ReactNode;
  disabled?: boolean;
}

interface FormsCompany extends FormProps {
  nit?: string;
  nameCompany?: string;
  address?: string;
  phone?: string;
}

interface FormPropsProducts extends FormProps {
  code?: string;
  nameProduct?: string;
  features?: string;
  price?: number;
  company?: string;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export function Form({
  title,
  description,
  onSubmit,
  children,
}: FormsCompany | FormPropsProducts) {
  const [formValues, setFormValues] = useState<FormValues>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      <form
        className="min-w-auto w-fit p-7 border-2 border-solid border-gray-600 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="text-left">
          <h2 className="font-bold text-xl">{title}</h2>
          {description && (
            <p className="font-medium text-base">{description}</p>
          )}
        </div>
        {children}
      </form>
    </FormContext.Provider>
  );
}

Form.Input = Input;
Form.Footer = Footer;
Form.SubmitButton = SubmitButton;
