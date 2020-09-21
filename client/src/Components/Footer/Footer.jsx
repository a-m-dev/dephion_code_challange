import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { PublicRoutes } from "utils/routes";
import { FooterWrapper, FooterBody, FooterCopy, FooterMenu } from "./styles";

const Footer = () => {
  const footerMenuData = useMemo(() => {
    return [
      { id: 1, name: "Guidlines", path: PublicRoutes.footer.guidlines },
      { id: 2, name: "faq", path: PublicRoutes.footer.faq },
      { id: 3, name: "support", path: PublicRoutes.footer.support },
      { id: 4, name: "contact", path: PublicRoutes.footer.contact },
    ];
  }, []);

  return (
    <FooterWrapper>
      <FooterBody>
        <FooterCopy>
          © Copyright 2020 amdev, trying to pass Dephion coding challenge
        </FooterCopy>
        <FooterMenu>
          <ul>
            {footerMenuData.map(({ id, path, name }) => (
              <li key={id}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </FooterMenu>
      </FooterBody>
    </FooterWrapper>
  );
};

export default Footer;
