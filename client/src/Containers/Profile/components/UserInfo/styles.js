import styled from "styled-components";

export const UserInfoWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
  padding: 2rem 0;
`;

export const AvatarSection = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 2rem;
`;

export const Avatar = styled.img`
  height: 100%;
`;

export const DetailSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Name = styled.h1`
  color: var(--black);
  margin: 0;
  margin-bottom: 1rem; ;
`;

export const Email = styled.h3`
  color: var(--median-gray);
  margin: 0;
  margin-bottom: 2rem;
`;

export const Misc = styled.div`
  width: 100%;
  max-width: 400px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0rem;
  margin-bottom: 0;

  & i {
    color: var(--median-gray);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  & span {
    font-size: 1rem;
    color: var(--light-gray);
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
