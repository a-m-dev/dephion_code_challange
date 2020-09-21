import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  position: relative;
  bottom: 0px;
  font-size: 0.85rem;
  padding: 0 1rem;
  font-family: var(--secondary-font-face);
`;

export const FooterBody = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--light-gray);
`;

export const FooterCopy = styled.p`
  font-size: 0.8rem;
  color: var(--light-gray);
`;

export const FooterMenu = styled.nav`
  position: relative;

  & ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;

    & li {
      font-size: 0.825rem;
      padding: 0.25em 0.4em;

      & a {
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
