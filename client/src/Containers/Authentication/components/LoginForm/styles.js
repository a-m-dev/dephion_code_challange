import styled from "styled-components";

export const LoginWrapper = styled.section`
  width: 100%;
  max-width: 375px;
  min-height: 200px;
  background-color: var(--white);
  border-radius: 0.5em;
  padding: 1.75rem 1.5rem;
  margin: 3rem 0;
`;

export const SubmittionArea = styled.div`
  width: 100%;
  position: relative;

  & button {
    width: 100%;
    padding: 1rem 0;
    font-size: 1rem;
  }
`;
