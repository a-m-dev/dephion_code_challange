import styled from "styled-components";
import { Button } from "Components";

export const AddNewItemWrapper = styled.div`
  width: 100%;
  min-height: 42px;
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.25rem 1rem;
  position: relative;

  & button {
    position: absolute;
    right: 1.45rem;
    padding: 0.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 0.25rem;
  height: 45px;
  background-color: var(--primary-light);
  padding: 0 1rem;
  padding-right: 4rem;
  outline: 0;
  border: 0px;
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
  position: absolute;
  bottom: -1.3rem;
`;
