import React from "react";
import { NavLink } from "react-router-dom";
import { LoginForm, RegisterForm } from "./components";
import { CatchMeOnSocial } from "Components";
import { PublicRoutes } from "utils/routes";
import LOGO from "Images/dephion_logo_s.png";

import AuthenticationManager from "./AuthenticationManager";
import {
  AuthenticationWrapper,
  Heading,
  Logo,
  AuthFooter,
  Creator,
} from "./styles";

const Authentication = (props) => {
  const {
    data: { shouldShowLoginForm, shouldShowRegisterForm },
  } = AuthenticationManager(props);

  return (
    <AuthenticationWrapper>
      <Heading>
        <NavLink to={PublicRoutes.home}>
          <Logo src={LOGO} alt="Logo" />
        </NavLink>
      </Heading>

      {shouldShowLoginForm && <LoginForm />}
      {shouldShowRegisterForm && <RegisterForm />}

      <AuthFooter>
        <Creator>© Copyright 2020, by amdev</Creator>
        <CatchMeOnSocial />
      </AuthFooter>
    </AuthenticationWrapper>
  );
};

export default Authentication;
