import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const RecipeWrapper = styled.article`
  width: 100%;
  min-height: 300px;
  margin-bottom: 3rem;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0px 20px 50px rgba(var(--black-rgb), 0);
  transition: box-shadow 0.5s ease-in-out;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: 0px 20px 50px rgba(var(--black-rgb), 0.5);

    & img[data-item="background-cover"] {
      transform: scale(4.5);
      transition: all 0.3s ease-in-out;
      visibility: none;
    }
  }
`;

export const Background = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dim = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(var(--black-rgb), 0.6);
`;

export const BackgroundImg = styled.img`
  height: 100%;
  transform: scale(4);
  filter: blur(3px);
  transition: all 3s ease-out;
`;

export const Content = styled.div`
  width: 100%;
  min-height: 200px;
  display: block;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
`;

export const CoverSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CoverWrapper = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 1rem;
  overflow: hidden;
  margin-right: 1.5rem;
`;

export const Cover = styled.img`
  height: 100%;
`;

export const CoverDescription = styled.div`
  /* padding-bottom: 1rem; */
`;

export const Title = styled.h2`
  color: var(--white);
`;

export const CreatorAvatar = styled.img`
  width: 30px;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Creator = styled.div`
  color: var(--light-gray);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Detail = styled.div`
  width: 75%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--median-gray);
`;

export const DetailSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & i {
    margin-bottom: 0.3rem;
  }

  & span {
    font-size: 0.8rem;
  }
`;

export const RecipeBaseItems = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;

  & button {
    height: 30px;
  }
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const RecipeData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & i {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  & span {
    font-size: 0.75rem;
    color: var(--light-gray);
  }
`;
