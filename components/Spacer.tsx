import styled from "styled-components";
import { MarginSpacerProps, SpacerProps } from "./PropsInterface";
export const Spacer = styled.div<SpacerProps>`
  width: ${(props) => props.width || "0px"};
  height: ${(props) => props.height || "0px"};
`;

export const MarginSpacer = styled.div<MarginSpacerProps>`
  margin-left: ${(props) => props.ml || "0px"};
  margin-right: ${(props) => props.mr || "0px"};
  margin-top: ${(props) => props.mt || "0px"};
  margin-bottom: ${(props) => props.mb || "0px"};
`;
