import styled from "styled-components";

export const SocialArea = styled.div`
  width: calc(185px + 1.2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a i {
    color: var(--light-gray);
    font-size: 1.35rem;

    &:hover {
      color: var(--bright-green);
    }
  }
`;
