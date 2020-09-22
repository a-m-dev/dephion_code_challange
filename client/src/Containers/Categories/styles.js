import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  width: 100%;
`;

export const Heading = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

export const Label = styled.h1`
  color: var(--median-gray);
`;

export const Count = styled.span`
  color: var(--light-gray);
  font-size: 0.8rem;
`;

export const CategoryListWrapper = styled.section`
  width: 100%;
  padding: 1rem 0rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
