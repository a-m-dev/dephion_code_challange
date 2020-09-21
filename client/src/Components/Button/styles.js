import styled from "styled-components";

export const ButtonElement = styled.button`
  all: unset;
  font-size: 0.85rem;
  padding: 0.4em 1.7em;
  border-radius: 0.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(var(--white-rgb), 0.4);
  border: 1px solid var(--bright-green);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & span {
    color: var(--bright-green);
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    background-color: var(--bright-green);

    & span {
      color: var(--white) !important;
    }
  }
`;
