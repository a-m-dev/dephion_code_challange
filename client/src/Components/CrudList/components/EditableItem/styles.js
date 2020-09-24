import styled from "styled-components";

export const EditableItemWrapper = styled.div`
  width: 100%;
  min-height: 42px;
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 45px;
  margin-bottom: 0.25rem;
  border-radius: 0.25rem;
  background-color: var(--primary-light);
  padding: 0.25rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & i {
    position: absolute;
    padding: 1rem;
    color: var(--light-gray);
    transition: all 0.3s ease-in-out;
    right: 0rem;

    &:hover {
      color: var(--bright-red);
      cursor: pointer;
    }
  }
`;

export const Text = styled.span`
  width: 100%;
  margin: 0px;
`;
