import styled from "styled-components";
import { H1Props, H2Props, PProps } from "./PropsInterface";

export const H1 = styled.h1<H1Props>`
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.size || "30px"};
  @media only screen and (max-width: 820px) {
    font-size: 18px;
  }
`;
export const H2 = styled.h1<H2Props>`
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.size || "30px"};

  @media only screen and (max-width: 820px) {
    font-size: 30px;
  }
`;
export const P = styled.p<PProps>`
  color: ${(props) => props.color || "gray"};
  font-weight: ${(props) => props.weight || "400"};
  font-family: ${(props) => props.family || ""};
  font-size: 15px;
`;
export const HR = styled.hr``;
export const BR = styled.br``;
