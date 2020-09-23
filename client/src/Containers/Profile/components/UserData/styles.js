import styled from "styled-components";

export const UserDataWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 2rem 0;
`;

export const MenuSection = styled.nav`
  min-width: 150px;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  border-right: 1px solid rgba(var(--gray), 0.1);
  padding-top: 1rem;
  padding-bottom: 2rem;

  & button {
    margin: 1rem;
    margin-top: 0rem;
    padding: 0.6rem 0.7rem;
  }
`;

export const MenuItem = styled.h4`
  font-size: 1rem;
  cursor: pointer;
  margin: 0;
  color: var(--light-gray);
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 42px;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.25rem 1rem;
  background-color: ${(props) =>
    props.isSelected ? "var(--white)" : "transparent"};

  &:hover {
    color: var(--median-gray);
  }
`;

export const DataSection = styled.div`
  width: 100%;
  padding: 0 2rem;
`;
