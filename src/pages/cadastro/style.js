import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 15px;
  padding-top: 50px;
`;

export const TitlePage = styled.span`
  font-size: 3rem;
`;

export const FormContainer = styled.div`
  width: 80%;
  max-width: 700px;

  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  align-items: end;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: end;
`;

export const InputText = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;

  margin-bottom: 15px;
`;

export const InputButton = styled.input`
  width: 100px;
  height: 40px;

  background-color: #1976d2;
  border: none;
  color: #FFF;
  border-radius: 0.5rem;
  cursor: pointer;
`;