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

/* Editable Mode */
export const EditableModeWrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
`;

export const InputLabel = styled.label`
  position: relative;
  display: block;
  color: rgba(var(--gray), 0.7);
  margin-bottom: 0.25rem;
`;

export const ListItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;
