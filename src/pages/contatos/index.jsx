import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from "../../services";
import { Contato } from '../../components/contato';
import { Container } from './style';

const api = new API();

export const Contatos = () => {
  const navigate = useNavigate();

  const [listaContatos, setListaContatos] = useState([]);
  api.listarContatos().then((lista) => setListaContatos(lista));

  return (
    <Container>
      Contatos
      {listaContatos.map((contato) => <Contato key={contato.id} id={contato.id} name={contato.name} email={contato.email} age={contato.age} />)}
    </Container>
  );
}