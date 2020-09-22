import React, { useCallback } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "utils/routes";

import { Button, CatchMeOnSocial } from "Components";
import LOGO from "Images/dephion_logo_s.png";

import {
  HeaderWrapper,
  TopSection,
  LogoArea,
  Logo,
  CompanyName,
  MenuSection,
  Menus,
  Authenticate,
} from "./styles";

const Header = ({ history, isLoggedIn, handleLogout }) => {
  const handleNavigateToAuth = useCallback(
    (e) => {
      const { type } = e.currentTarget.dataset;
      history.push(`${PublicRoutes.auth}?type=${type.toLowerCase()}`);
    },
    [history]
  );

  const handleNavigateToProfile = useCallback(
    () => history.push(PrivateRoutes.profile),
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
          <NavLink to={PublicRoutes.categories}>Categories</NavLink>
        </Menus>
        <Authenticate>
          {isLoggedIn ? (
            <>
              <Button label="Profile" onClick={handleNavigateToProfile} />
              <Button
                label="Logout"
                data-type="LOGOUT"
                onClick={handleLogout}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </Authenticate>
      </MenuSection>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
