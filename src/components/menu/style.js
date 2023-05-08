import { styled, css } from "styled-components";

export const MenuObj = styled.div`
  width: 300px;
  height: 100%;

  padding: 14px 16px;
  border-right: 1px solid #d4d4d4;

  display: flex;
  flex-flow: column nowrap;
`;

export const MenuTitleObj = styled.span`
  text-decoration: none;

  ${({size}) => (size !== "") && css`
    font-size: ${size};
  `}
  ${({opacity}) => (opacity !== "") && css`
    opacity: ${opacity};
  `}
`;

export const MenuButtonObj = styled.a`
  text-decoration: none;
`;

export const MenuButtonContentObj = styled.div`
  padding-left: 50px;
  padding-top: 20px;

  display: flex;
  flex-flow: column nowrap;
`;