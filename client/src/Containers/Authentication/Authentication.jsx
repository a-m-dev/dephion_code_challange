import React, { useEffect } from "react";
import { AuthenticationWrapper } from "./styles";

const Authentication = ({ location }) => {
  const qs = new URLSearchParams(location.search);
  const type = qs.get("type");

  useEffect(() => {
    console.log({ type });
  });

  return <AuthenticationWrapper>Hi from Authentication</AuthenticationWrapper>;
};

export default Authentication;
