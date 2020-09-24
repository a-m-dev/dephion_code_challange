import styled from "styled-components";

export const CrudListWrapper = styled.article`
  width: 100%;
`;

export const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ItemContainer = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 42px;
  margin-bottom: 0.5rem;
  padding: 0.25rem 1rem;
  padding-left: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  & i {
    font-size: 0.8rem;
    margin-right: 0.25rem;
    position: relative;
    top: 2px;
  }
`;

export const ItemName = styled.p`
  display: inline-block;
  margin: 0;
  font-size: 1rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;
