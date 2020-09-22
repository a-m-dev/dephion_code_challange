import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TopCategoriesWrapper = styled.article`
  width: 100%;
  padding: 1rem 0;
`;

export const Heading = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

export const Label = styled.h1`
  color: var(--median-gray);
`;

export const More = styled(NavLink)`
  color: var(--light-gray);
  font-size: 0.8rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Categories = styled.section`
  width: 100%;
  margin-top: 1rem;
  min-height: 350px;
`;

export const CategoryCardItemHolder = styled.article`
  position: relative;
`;
