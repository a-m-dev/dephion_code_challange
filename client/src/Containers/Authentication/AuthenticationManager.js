import { useEffect } from "react";

const AuthenticationManager = ({ location }) => {
  const qs = new URLSearchParams(location.search);
  const authType = qs.get("type");

  useEffect(() => {
    console.log("MOUNT");
  }, []);

  return {
    data: {
      shouldShowLoginForm: authType === "login",
      shouldShowRegisterForm: authType === "register",
    },
  };
};

export default AuthenticationManager;
