import React from "react";
import { ButtonElement } from "./styles";
import { Loading } from "Components";

const Button = ({ label, onClick, loading, ...rest }) => {
  return (
    <ButtonElement onClick={onClick} {...rest}>
      {loading ? <Loading /> : <span>{label}</span>}
    </ButtonElement>
  );
};

export default Button;
