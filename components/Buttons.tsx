import styled from "styled-components";
import { BannerButtonProps } from "./PropsInterface";

export const BannerButton = styled.button<BannerButtonProps>`
  background-color: ${(props) => props.bg || "black"};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: 0px;
  border-radius: 15px;
  color: #fff;
  weight: bolder;
  @media only screen and (max-width: 820px) {
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 11px;
  }
`;
