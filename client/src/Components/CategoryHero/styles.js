import styled, { css } from "styled-components";

export const CategoryCardWrapper = styled.article`
  width: 100%;
  height: 400px;
  border-radius: 2rem;
  padding: 4rem;
  background-color: var(--primary-gray);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 3rem 0;
  background-color: rgba(var(--gray), 0.1);

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    padding: 2.5rem;
  }
`;

export const CoverImg = styled.img`
  width: 250px;
  height: 250px !important;
  border-radius: 2rem;
  height: 125%;
  transform: scale(1);
  transition: transform 1.5s ease-out;
  margin-right: 2rem;
`;

export const Details = styled.div`
  width: calc(100% - 5rem);
  transition: all 1s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  position: relative;
  color: var(--median-gray);
  margin-bottom: 1rem;
`;

export const Descripbtion = styled.p`
  width: 100%;
  margin: 0;
  color: var(--light-gray);
  bottom: -90px;
  font-size: 0.85rem;
  transition: all 1.5s ease-out;
  line-height: 1.25rem;
  margin-bottom: 1rem;
`;

export const Misc = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: -150px;

  @media (max-width: 768px) {
    width: 100%;
  }
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
