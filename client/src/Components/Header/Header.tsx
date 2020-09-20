import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrapper } from "./styles";

import { PublicRoutes } from "utils/routes";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <NavLink to={PublicRoutes.home}>Home</NavLink>
      <NavLink to={PublicRoutes.about}>about</NavLink>
    </HeaderWrapper>
  );
};

export default Header;
