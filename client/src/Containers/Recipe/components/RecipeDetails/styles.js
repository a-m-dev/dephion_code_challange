import styled from "styled-components";

export const RecipeDetail = styled.section`
  width: 100%;
  height: fit-content;
  position: relative;
  background-color: var(--white);
  padding: 3rem 4rem;
  border-radius: 2rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  min-height: 400px;
`;

export const SectionLabel = styled.h1`
  position: absolute;
  top: -3rem;
  margin: 0;
  left: 2.5rem;
`;

export const RecipeDetailRow = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  align-items: ${(props) =>
    props.isVertical ? "flex-start" : "space-between"};
  justify-content: ${(props) =>
    props.isVertical ? "flex-start" : "space-between"};
  flex-direction: ${(props) => (props.isVertical ? "column" : "row")};

  & h3 {
    color: var(--light-gray);
    margin: 0;
  }

  & p {
    margin: 0;
  }
`;

export const Ingredients = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
`;

export const PreparationSteps = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
`;
