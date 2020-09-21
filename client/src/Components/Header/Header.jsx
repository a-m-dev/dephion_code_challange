import React, { useCallback, useMemo } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { PublicRoutes } from "utils/routes";

import { Button } from "Components";
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

  const socialData = useMemo(() => {
    return [
      {
        id: 1,
        link: "https://stackoverflow.com/users/5354341/a-m-dev",
        icon: "icon-stackoverflow",
      },
      {
        id: 2,
        link: "https://www.linkedin.com/in/ahmad-mirzaei-b60b2618a/",
        icon: "icon-linkedin",
      },
      {
        id: 3,
        link: "https://github.com/a-m-dev",
        icon: "icon-github-circled",
      },
    ];
  }, []);

  return (
    <HeaderWrapper>
      <TopSection>
        <LogoArea to={PublicRoutes.home}>
          <Logo src={LOGO} alt="Dephion Logo" />
          <CompanyName>Dephion</CompanyName>
        </LogoArea>

        <SocialArea>
          {socialData.map(({ id, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer">
              <i className={icon} />
            </a>
          ))}
        </SocialArea>
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
