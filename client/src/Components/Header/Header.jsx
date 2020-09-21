import React, { useCallback, useMemo } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { PublicRoutes } from "utils/routes";

import { Button, CatchMeOnSocial } from "Components";
import LOGO from "Images/dephion_logo_s.png";

import {
  HeaderWrapper,
  TopSection,
  LogoArea,
  Logo,
  CompanyName,
  SocialArea,
  MenuSection,
  Menus,
  Authenticate,
} from "./styles";

const Header = ({ history }) => {
  const handleNavigateToAuth = useCallback(
    (e) => {
      const { type } = e.currentTarget.dataset;
      history.push(`${PublicRoutes.auth}?type=${type.toLowerCase()}`);
    },
    [history]
  );

  return (
    <HeaderWrapper>
      <TopSection>
        <LogoArea to={PublicRoutes.home}>
          <Logo src={LOGO} alt="Dephion Logo" />
          <CompanyName>Dephion</CompanyName>
        </LogoArea>

        <CatchMeOnSocial />
      </TopSection>

      <MenuSection>
        <Menus>
          <NavLink to={PublicRoutes.home}>Home</NavLink>
          <NavLink to={PublicRoutes.about}>about</NavLink>
        </Menus>
        <Authenticate>
          <Button
            label="Login"
            data-type="LOGIN"
            onClick={handleNavigateToAuth}
          />
          <Button
            label="Register"
            data-type="REGISTER"
            onClick={handleNavigateToAuth}
          />
        </Authenticate>
      </MenuSection>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
