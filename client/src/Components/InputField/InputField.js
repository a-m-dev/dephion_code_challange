import React from "react";
import { useField } from "formik";
import {
  InputWrapper,
  InputLabel,
  Input,
  InputLayout,
  InputError,
} from "./styles";

const InputField = ({ name, label, icon, className, ...props }) => {
  const [field, meta /*helpers*/] = useField({ name, ...props });

  return (
    <InputWrapper>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}

      <InputLayout>
        <Input {...field} {...props} className={`${className} ${icon}`} />
        {icon && <i className={`${icon} input-icon`} />}
      </InputLayout>

      {meta.touched && meta.error ? (
        <InputError className="error">
          <span>{meta.error}</span>
        </InputError>
      ) : null}
    </InputWrapper>
  );
};

export default InputField;
