import styled from "styled-components";
import { FlexDisplayProps } from "./PropsInterface";
export const FlexDisplay = styled.div<FlexDisplayProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || ""};
  flex-wrap: ${(props) => props.wrap || ""};
`;
