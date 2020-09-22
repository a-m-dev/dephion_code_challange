import styled from "styled-components";

export const BodyWrapper = styled.main`
  width: 100%;
  max-width: 1024px;
  height: fit-content;
  min-height: calc(100vh - 40px);
  padding: 0 1rem;
  padding-top: ${(props) =>
    props.isFullScreenMode ? "0" : "calc(120px + 2rem)"};
  padding-bottom: ${(props) => (props.isFullScreenMode ? "0" : "2rem")};
  margin: 0 auto;
  /* overflow: scroll; */
`;
