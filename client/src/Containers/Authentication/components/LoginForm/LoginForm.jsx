import React from "react";
import { Form, InputField, Button } from "Components";
import { PublicRoutes } from "utils/routes";

import LoginFormManager from "./LoginFormManager";
import { LoginWrapper, SubmittionArea, NavigateToLogin } from "./styles";

const LoginForm = () => {
  const {
    formProps,
    data: { loading },
  } = LoginFormManager();

  return (
    <LoginWrapper>
      <Form {...formProps}>
        <InputField
          type="email"
          name="email"
          label="Email"
          placeholder="email"
          autoComplete="off"
          icon="icon-mail"
        />
        <InputField
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          autoComplete="off"
          icon=" icon-key"
        />

        <SubmittionArea>
          <Button label="Login" type="submit" loading={loading} />
          <NavigateToLogin to={`${PublicRoutes.auth}?type=register`}>
            Register Here
          </NavigateToLogin>
        </SubmittionArea>
      </Form>
    </LoginWrapper>
  );
};

export default LoginForm;
