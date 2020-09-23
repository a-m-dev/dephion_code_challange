import styled from "styled-components";

export const FileUploaderWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  margin: 0.2rem 0 1rem 0;
  [type="file"] {
    height: 0;
    overflow: hidden;
    width: 0;
  }

  [type="file"] + label {
    background: #f15d22;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: "Rubik", sans-serif;
    font-size: inherit;
    font-weight: 500;
    margin-bottom: 1rem;
    outline: none;
    padding: 1rem 50px;
    position: relative;
    transition: all 0.3s;
    vertical-align: middle;

    &:hover {
      background-color: darken(#f15d22, 10%);
    }

    &.btn-1 {
      background-color: #f79159;
      box-shadow: 0 6px darken(#f79159, 10%);
      transition: none;

      &:hover {
        box-shadow: 0 4px darken(#f79159, 10%);
        top: 2px;
      }
    }
  }
`;

export const InputError = styled.div`
  width: 100%;
  margin-top: 0.4rem;
  height: 20px;
  padding-left: 1rem;
  color: var(--secondary-color);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.7rem;
`;
