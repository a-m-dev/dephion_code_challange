import styled from "styled-components";

export const AuthenticationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
`;

export const Heading = styled.section`
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover img {
    box-shadow: 0px 5px 40px rgba(var(--purple), 0.25);
  }
`;

export const Logo = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 0.625rem;
  box-shadow: 0px 6px 10px rgba(var(--purple), 0);
  transition: box-shadow 0.2s ease-in-out;
`;

export const CompanyName = styled.h1`
  color: var(--primary-color);
  user-select: none;
`;

export const AuthFooter = styled.footer`
  width: 100%;
  min-height: 80px;
  max-width: 380px;
  position: fixed;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Creator = styled.h4`
  color: var(--light-gray);
  opacity: 0.6;
`;
