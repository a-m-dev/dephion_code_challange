import React from "react";
import { Form, InputField, Button } from "Components";

import LoginFormManager from "./LoginFormManager";
import { LoginWrapper, SubmittionArea } from "./styles";

const LoginForm = () => {
  const { data, formProps } = LoginFormManager();

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
          <Button label="Login" type="submit" />
        </SubmittionArea>
      </Form>
    </LoginWrapper>
  );
};

export default LoginForm;
