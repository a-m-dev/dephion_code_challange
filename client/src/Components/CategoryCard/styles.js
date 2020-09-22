import styled, { css } from "styled-components";

export const CategoryCardWrapper = styled.article`
  width: 100%;
  height: 300px;
  border-radius: 2rem;
  padding: 1.25rem;
  background-color: var(--primary-gray);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: ${(props) =>
    props.isSelected ? "5px solid var(--bright-red)" : "5px solid transparent"};

  &:hover {
    & div[data-type="dim"] {
      opacity: 0.75;
      transition: all 0.25s ease-in-out;
    }

    & > img {
      transform: scale(1.15);
      transition: transform 0.25s ease-out;
    }

    & > div[data-type="details"] {
      bottom: 8rem;
      transition: all 0.25s ease-out;

      & p {
        bottom: -60px;
        transition: all 0.25s ease-out;
      }

      & div:last-child {
        bottom: -110px;
        transition: all 0.25s ease-out;
      }
    }
  }
`;

export const CoverImg = styled.img`
  position: absolute;
  height: 125%;
  transform: scale(1);
  transition: transform 1.5s ease-out;
`;

export const Dim = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
  background-color: var(--dark);
  transition: all 2s ease-in-out;
`;

export const Details = styled.div`
  width: calc(100% - 5rem);
  position: absolute;
  bottom: 2rem;
  left: 2.5rem;
  transition: all 1s ease-in-out;
`;

export const Heading = styled.h2`
  position: relative;
  margin: 0;
  color: var(--primary-light);
`;

export const Descripbtion = styled.p`
  width: 100%;
  margin: 0;
  color: var(--light-gray);
  position: absolute;
  bottom: -90px;
  font-size: 0.85rem;
  transition: all 1.5s ease-out;
`;

export const Misc = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: -150px;
  position: absolute;
  transition: all 1.5s ease-out;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & i,
  & span {
    color: var(--light-gray);
  }

  & i {
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
  }

  & span {
    font-size: 0.8rem;
  }
`;
