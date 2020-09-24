import React from "react";
import { Field, useField } from "formik";

import { OptionWrapper, InputLabel, InputError } from "./styles";

const OptionField = ({ name, dataset, label, icon, disabled, ...props }) => {
  const [field, meta] = useField({ name, ...props });
  return (
    <OptionWrapper>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}

      <Field as="select" name={name} disabled={disabled}>
        <option value={false}>Selecte One</option>
        {dataset?.map(({ _id, name }) => (
          <option key={_id} value={_id}>
            {name}
          </option>
        ))}
      </Field>
      {icon && <i className={`${icon} input-icon`} />}

      {meta.touched && meta.error ? (
        <InputError className="error">
          <span>{meta.error}</span>
        </InputError>
      ) : null}
    </OptionWrapper>
  );
};

export default OptionField;
