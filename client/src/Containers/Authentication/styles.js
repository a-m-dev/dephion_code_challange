import styled from "styled-components";

export const AuthenticationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 5vh;
`;

export const Heading = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;

  &:hover img {
    box-shadow: 0px 5px 40px rgba(var(--purple), 0.25);
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 0.625rem;
  box-shadow: 0px 6px 10px rgba(var(--purple), 0);
  transition: box-shadow 0.2s ease-in-out;
`;

export const AuthFooter = styled.footer`
  width: 100%;
  min-height: 80px;
  max-width: 380px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Creator = styled.h4`
  color: var(--light-gray);
  opacity: 0.6;
`;
