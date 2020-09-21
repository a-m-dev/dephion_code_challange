import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 80%;
  min-height:115px;
`;

export const InputLabel = styled.label`
  position: relative;
  padding-right:0.75rem;
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
  transition:  5000s ease-in-out 0s;
  background-color:var(--secondary-dark);
  color:var(--primary-light)
  font-size: 1.5rem;

`;

export const InputLayout =styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.25rem;
  margin-top: 0.25rem;
  background-color: var(--secondary-dark);
  font-family: 'Vazir FD';
  direction: ltr;
  & > i {
    width: 50px;
    padding-left: 1rem;
  }
`;

export const InputError = styled.div`
  width: 100%;
  margin-top: 0.80rem;
  height: 20px;
  padding-right:1rem;
  color: var(--primary-danger);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size:12px;
`;