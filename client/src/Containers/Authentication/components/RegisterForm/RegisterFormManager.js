import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useBindDispatch } from "utils/redux/useBindDispatch";

import { loginAction } from "Containers/App/redux/actions";
import initialState from "Containers/App/redux/initialState";
import { initialValues, validationSchema } from "./form";

const RegisterFormManager = () => {
  const { loading } = useSelector((state) => state.GlobalData || initialState);

  const [login] = useBindDispatch([loginAction]);

  const handleRegisterSubmit = useCallback(
    (args) => {
      login(args);
    },
    [login]
  );

  return {
    data: { loading },
    formProps: {
      initialValues,
      validationSchema,
      onSubmit: handleRegisterSubmit,
    },
  };
};

export default RegisterFormManager;
