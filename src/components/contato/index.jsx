import React from "react";
import { Container, Text } from "./style";

export const Contato = ({
  id,
  name,
  email,
  age,
}) => {
  return (
    <Container>
        <Text>Id: {id}</Text>
        <Text>Id: {name}</Text>
        <Text>Id: {email}</Text>
        <Text>Id: {age}</Text>
    </Container>
  );
};
