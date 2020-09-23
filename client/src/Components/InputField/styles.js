import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  margin: 0.2rem 0 1rem 0;
`;

export const InputLabel = styled.label`
  position: relative;
  color: rgba(var(--gray), 0.7);
`;

export const Input = styled.input`
  width: 100%;
  min-height: 42px;
  border: 0px;
  outline: 0px;
  margin: 0;
  padding: 0 1rem;
  border-radius: 0.25em;
  line-height: 45px;
  transition: 5000s ease-in-out 0s;
  font-size: 1rem;
  background-color: var(--primary-light);

  &::placeholder {
    color: rgba(var(--gray), 0.2);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const InputLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.25rem;
  margin-top: 0.25rem;
  background-color: var(--primary-light);
  padding-right: 0.25rem;

  & > i {
    width: 50px;
    padding-left: 1rem;
    opacity: 0.5;
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
