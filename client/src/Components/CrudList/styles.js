import styled from "styled-components";

export const CrudListWrapper = styled.article`
  width: 100%;
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
