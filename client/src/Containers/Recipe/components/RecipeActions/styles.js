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
`;

export const ActionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--light-gray);
  flex-direction: column;

  & i {
    margin-bottom: 0.6rem;
    color: var(--light-gray);
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--median-gray);
      cursor: pointer;
    }
  }

  & span {
    font-size: 0.8rem;
  }
`;
