import styled from "styled-components";

export const RecipeActionsWrapper = styled.section`
  width: 97%;
  height: 75px;
  margin: 0 auto;
  bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 10fr 1fr;
  transform: translateY(-50%);
  padding: 0 0.5rem;
  font-size: 2rem;
  color: var(--light-gray);
`;

export const ActionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & i {
    margin-bottom: 0.6rem;
  }

  & span {
    font-size: 0.8rem;
  }
`;
