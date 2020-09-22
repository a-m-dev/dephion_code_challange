import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SelectedCategoryRecipesWrapper = styled.article`
  width: 100%;
  padding: 1rem 0;
  min-height: 500px;
`;

export const Heading = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
`;

export const Label = styled.h3`
  color: var(--median-gray);
`;

export const More = styled(NavLink)`
  color: var(--light-gray);
  font-size: 0.8rem;

  &:hover {
    text-decoration: underline;
  }
`;
