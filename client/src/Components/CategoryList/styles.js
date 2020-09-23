import styled from "styled-components";

export const ListWrapper = styled.article`
  width: 100%;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
