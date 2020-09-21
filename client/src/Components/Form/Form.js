import React from "react";
import { Form as FormikForm, Formik } from "formik";

const useForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  enableReinitialize,
  ...formProps
}) => ({
  formikProps: {
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize,
  },
  formProps,
});

const Form = (props) => {
  const { formikProps, formProps } = useForm(props);

  return (
    <Formik {...formikProps}>
      <FormikForm {...formProps} />
    </Formik>
  );
};

export default Form;
