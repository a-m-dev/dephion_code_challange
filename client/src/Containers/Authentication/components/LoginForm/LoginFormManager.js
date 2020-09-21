import { useCallback } from "react";

import { initialValues, validationSchema } from "./form";

const LoginFormManager = () => {
  const handleLoginSubmit = useCallback((e) => {
    console.log("LOGIN FORM SUBMIT");
  }, []);

  return {
    data: {},
    formProps: {
      initialValues,
      validationSchema,
      onSubmit: handleLoginSubmit,
    },
  };
};

export default LoginFormManager;
