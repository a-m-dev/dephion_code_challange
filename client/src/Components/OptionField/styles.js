import styled from "styled-components";

export const OptionWrapper = styled.article`
  position: relative;
  width: 100%;
  min-height: 100px;
  margin: 0.2rem 0 1rem 0;

  & select {
    width: 100%;
    position: relative;
    min-height: 45px;
    padding: 0.5rem 1rem;
    background-color: var(--primary-light);
    border: 0px;
    outline: 0px;
    border-radius: 0.25rem;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    cursor: pointer;
  }
  & i {
    position: absolute;
    z-index: 1;
    right: 1rem;
    top: 2.25rem;
    color: var(--median-gray);
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: block;
  color: rgba(var(--gray), 0.7);
  margin-bottom: 0.25rem;
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
