import styled from "styled-components";

export const RecipeManagmentWrapper = styled.article`
  width: 100%;
  padding: 1rem 0;
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

export const FormBody = styled.div`
  width: 100%;
  min-height: 400px;
  height: fit-content;
  border-radius: 2rem;
  padding: 2rem 2.5rem;
  background-color: var(--white);
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

export const GridSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;
