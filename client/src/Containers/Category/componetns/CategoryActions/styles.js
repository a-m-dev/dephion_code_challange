import styled from "styled-components";

export const ActionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
  min-height: 40px;
  padding: 0.5rem 2rem;
  position: relative;
  z-index: 1;
  top: -2rem;
  color: var(--light-gray);

  & span {
  }

  & i {
    font-size: 2rem;
  }
`;
