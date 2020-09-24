import { useEffect } from "react";
import { useBindDispatch } from "utils/redux/useBindDispatch";
import { resetUserDataAction } from "Containers/App/redux/actions";

const AuthenticationManager = ({ location }) => {
  const qs = new URLSearchParams(location.search);
  const authType = qs.get("type");

  const [resetUserData] = useBindDispatch([resetUserDataAction]);

  useEffect(() => {
    resetUserData();
  }, []);

  return {
    data: {
      shouldShowLoginForm: authType === "login",
      shouldShowRegisterForm: authType === "register",
    },
  };
};

export default AuthenticationManager;
