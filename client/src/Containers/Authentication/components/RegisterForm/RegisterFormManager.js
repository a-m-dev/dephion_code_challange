import { useCallback } from "react";

import { initialValues, validationSchema } from "./form";

const RegisterFormManager = () => {
  const handleRegisterSubmit = useCallback((e) => {
    console.log("REGISTER FORM SUBMIT");
  }, []);

  return {
    data: {},
    formProps: {
      initialValues,
      validationSchema,
      onSubmit: handleRegisterSubmit,
    },
  };
};

export default RegisterFormManager;
