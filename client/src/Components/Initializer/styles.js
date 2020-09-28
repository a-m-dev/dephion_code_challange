import styled from "styled-components";

export const InitializerWrapper = styled.article`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    270deg,
    rgba(108, 136, 251, 0.8),
    rgba(108, 218, 251, 0.8),
    rgba(219, 108, 251, 0.8)
  );
  background-size: 600% 600%;
  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
  opacity: ${(props) => (props.isLoading ? 1 : 0)};
  pointer-events: ${(props) => (props.isLoading ? "all" : "none")};
  transition: all 0.3s ease-in-out;

  > div:first-child {
    height: 100px;

    &:hover div > div {
      background: var(--white);
    }
  }

  & div > div > div {
    background: var(--white);
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Heading = styled.p`
  position: relative;
  color: var(--white);
`;
