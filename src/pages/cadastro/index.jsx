import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  InputText,
  InputButton,
  Form,
  Container,
  TitlePage,
} from "./style";
import API from "../../services";

const api = new API();

export const Cadastro = ({ id }) => {
  const navigate = useNavigate();
  const isEdit = id !== "" && id !== undefined;

  const contato = isEdit ? api.pegarContato(id) : undefined;

  const contentPage =
    !isEdit || contato === undefined
      ? {
          title: "Cadastrar",
          userName: "",
          userEmail: "",
          userAge: "",
        }
      : {
          title: "Editar",
          userName: "Rauan",
          userEmail: "Rauan",
          userAge: "Rauan",
        };

  function submit(event) {
    event.preventDefault();
    const name = event.target.personName.value;
    const email = event.target.personEmail.value;
    const age = event.target.personAge.value;
    if (!isEdit) {
      const enviar = api.addContato({
        name: name,
        email: email,
        age: age,
      });

      enviar.finally(() => navigate("/contatos"))
    } else {
      api.addContato({
        name: name,
        email: email,
        age: age,
      });
    }
  }

  return (
    <Container>
      <TitlePage>{contentPage.title}</TitlePage>
      <FormContainer>
        <Form onSubmit={submit}>
          <InputText
            name="personName"
            id="personName"
            type="text"
            defaultValue={contentPage.userName}
            placeholder="Informe seu nome"
          />
          <InputText
            name="personEmail"
            id="personEmail"
            type="text"
            defaultValue={contentPage.userEmail}
            placeholder="Informe seu Email"
          />
          <InputText
            name="personAge"
            id="personAge"
            type="number"
            defaultValue={contentPage.userAge}
            placeholder="Informe sua Idade"
          />
          <InputButton type="submit" />
        </Form>
      </FormContainer>
    </Container>
  );
};
