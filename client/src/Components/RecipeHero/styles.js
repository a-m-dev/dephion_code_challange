import styled from "styled-components";

export const RecipeHeroWrapper = styled.article`
  width: 100%;
  height: 350px;
  border-radius: 2rem;
  padding: 2rem 3rem;
  background-color: var(--primary-gray);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3rem;
  background-color: rgba(var(--gray), 0.1);

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    padding: 2.5rem;
  }
`;

export const CoverHolder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoverImg = styled.img`
  width: 100%;
  min-width: 600px;
  position: absolute;
  transform: scale(1);
  transition: transform 1.5s ease-out;
`;

export const Dim = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(var(--black-rgb), 0.75);
`;

export const Details = styled.div`
  width: 100%;
  padding: 0 2rem;
  transition: all 1s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    align-items: center;
  }
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
