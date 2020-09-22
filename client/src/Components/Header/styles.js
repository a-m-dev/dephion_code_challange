import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 120px;
  z-index: 10;
  position: fixed;
  padding-bottom: 0.3em;
  background-color: rgba(var(--white-rgb), 0.65);
  box-shadow: 0px 20px 50px rgba(var(--black-rgb), 0.2);
  backdrop-filter: blur(10px) brightness(1);
  -webkit-backdrop-filter: blur(10px) brightness(1);
`;

export const TopSection = styled.section`
  width: 100%;
  max-width: 1024px;
  padding: 0 1rem;
  margin: 0 auto;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoArea = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover > img {
    box-shadow: 0px 5px 25px rgba(var(--purple), 0.2);
  }
`;

export const Logo = styled.img`
  width: 50px;
  border-radius: 0.25rem;
  margin-right: 1rem;
  box-shadow: 0px 6px 10px rgba(var(--purple), 0);
  transition: box-shadow 0.2s ease-in-out;
`;

export const CompanyName = styled.h1`
  color: var(--primary-color);
  user-select: none;
`;

export const MenuSection = styled.section`
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  max-width: 1024px;
  height: calc(120px - 75px - 0.3rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menus = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & a {
    margin-right: 1rem;
  }
`;

export const Authenticate = styled.div`
  max-width: calc(185px + 1.2rem);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & button {
    margin-left: 1rem;

    &[data-type="LOGOUT"] {
      border-color: var(--bright-red);

      & span {
        color: var(--bright-red);
      }

      &:hover {
        background-color: var(--bright-red);
      }
    }
  }
`;
