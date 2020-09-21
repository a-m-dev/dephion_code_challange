import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useBindDispatch } from "utils/redux/useBindDispatch";

import { registerAction } from "Containers/App/redux/actions";
import initialState from "Containers/App/redux/initialState";
import { initialValues, validationSchema } from "./form";

const RegisterFormManager = () => {
  const { loading } = useSelector((state) => state.GlobalData || initialState);

  const [register] = useBindDispatch([registerAction]);

  const handleRegisterSubmit = useCallback(
    (args) => {
      register(args);
    },
    [register]
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
