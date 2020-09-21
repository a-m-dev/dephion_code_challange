import React from "react";
import { Form, InputField, Button } from "Components";
import { PublicRoutes } from "utils/routes";

import RegisterFormManager from "./RegisterFormManager";
import { RegisterWrapper, SubmittionArea, NavigateToRegister } from "./styles";

const RegisterForm = () => {
  const {
    formProps,
    data: { loading },
  } = RegisterFormManager();

  return (
    <RegisterWrapper>
      <Form {...formProps}>
        <InputField
          type="text"
          name="name"
          label="Name"
          placeholder="name"
          autoComplete="off"
          icon="icon-pencil"
        />
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
          icon="icon-key"
        />
        <InputField
          type="password"
          name="repeatPassword"
          label="ReType Password"
          placeholder="Password"
          autoComplete="off"
          icon="icon-key"
        />

        <SubmittionArea>
          <Button label="Register" type="submit" loading={loading} />
          <NavigateToRegister to={`${PublicRoutes.auth}?type=login`}>
            Login Here
          </NavigateToRegister>
        </SubmittionArea>
      </Form>
    </RegisterWrapper>
  );
};

export default RegisterForm;
