import React from "react";
import { Field, useField } from "formik";

import { FileUploaderWrapper, InputError } from "./styles";

function Input(props) {
  const { field, form } = props;
  const [_, meta] = useField("cover");

  const handleChange = (e) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    form.setFieldValue(field.name, file);
  };

  return (
    <FileUploaderWrapper>
      <input type="file" id="file" onChange={(o) => handleChange(o)} />
      <label htmlFor="file">choose a file</label>
      {meta.touched && meta.error ? (
        <InputError className="error">
          <span>{meta.error}</span>
        </InputError>
      ) : null}
    </FileUploaderWrapper>
  );
}

const FileUplaod = ({ name, icon }) => {
  return <Field name={name} component={Input} icon={icon} />;
};

export default FileUplaod;
