import React from "react";
import { MenuObj, MenuTitleObj, MenuButtonObj, MenuButtonContentObj } from "./style";

export const Menu = () => {
  return (
    <MenuObj>
      <MenuTitleObj size="0.9rem" opacity="0.7">
        Contatos App
      </MenuTitleObj>
      <MenuButtonObj href="/contatos">
        <MenuButtonContentObj>
          <MenuTitleObj size="0.9rem">Contatos</MenuTitleObj>
          <MenuTitleObj size="0.8rem" opacity="0.7">
            listar contatos
          </MenuTitleObj>
        </MenuButtonContentObj>
      </MenuButtonObj>
      <MenuButtonObj href="/cadastro">
        <MenuButtonContentObj>
          <MenuTitleObj size="0.9rem">Cadastrar</MenuTitleObj>
          <MenuTitleObj size="0.8rem" opacity="0.7">
            cadastrar um novo contato
          </MenuTitleObj>
        </MenuButtonContentObj>
      </MenuButtonObj>
    </MenuObj>
  );
};
