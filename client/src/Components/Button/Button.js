import React from "react";
import { ButtonElement } from "./styles";

const Button = ({ label, onClick, ...rest }) => {
  return (
    <ButtonElement onClick={onClick} {...rest}>
      <span>{label}</span>
    </ButtonElement>
  );
};

export default Button;
