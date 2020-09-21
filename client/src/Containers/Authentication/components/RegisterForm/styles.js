import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const RegisterWrapper = styled.section`
  width: 100%;
  max-width: 375px;
  min-height: 200px;
  background-color: var(--white);
  border-radius: 0.5em;
  padding: 1.75rem 1.5rem;
  margin-top: -3rem;
  padding-top: 5rem;
`;

export const SubmittionArea = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & button {
    width: 100%;
    min-height: 18px;
    padding: 1rem 0;
    font-size: 1rem;
  }
`;

export const NavigateToRegister = styled(NavLink)`
  width: 100%;
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.75rem;
  color: var(--light-gray);
`;
