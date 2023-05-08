import { css, styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  width: 100%;

  ${({height}) => (height !== "") && css`
    height: ${height};
  `}

  display: flex;
  flex-flow: row wrap;
`;


export const Column = styled.div`
  height: 100%;

  ${({width}) => (width !== "") && css`
    width: ${width};
  `}

  display: flex;
  flex-flow: column wrap;
`;
