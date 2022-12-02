import styled from "styled-components";
import { NavLIProps } from "./PropsInterface";
// let doBelow = "0px";
export const Wrapper = styled.div``;
export const WrapperSpan = styled.span``;
export const NavStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 15px;
  margin-top: 15px;
  .res_show {
    display: none;
  }
  @media only screen and (max-width: 820px) {
    .res_do_not_show {
      display: none;
    }
    .res_show {
      display: block;
    }
  }
`;
export const NavUl = styled.ul`
  margin-top: 3px;
  margin-left: -10px;
  font-size: 15px;

  }
  #change_hover_bg_link:hover {
    background-color: #f5f5f5;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left:-15px;
    margin-right:-15px;
    border-radius: 15px;
    
  }
  .bnb_btn_res_margin_navbar{
margin-left:170px;
  }
  @media only screen and (max-width: 820px) {
    .bnb_btn_res_margin_navbar{
        margin-left:0px;
          }
  }

`;
export const NavLi = styled.li<NavLIProps>`
  display: inline;
  list-style: none;
  color: gray;
  font-weight: 900;
  width: 50px;
  height: 30px;
  margin-left: ${(props) => props.ml || "20px"};
  margin-right: 13px;
  #hover_show {
    display: none;
  }
  &:hover #hover_show {
    display: block;
  }
  @media only screen and (max-width: 820px) {
  }
`;
export const NavRight = styled.div`
  float: right;
  margin-left: auto;
  margin-right: 10px;
`;

export const HomeStyle = styled.div`
  background-color: #e9faff;
  width: 100%;
  height: auto;
  #section2_main_wrapper {
    margin-left: 8vh;
  }
  .section2_left {
    margin-top: 15%;
  }
  .section2_right {
    margin-top: 13%;
  }
  #section3 {
    margin-top: 10%;
  }
  #section3_body {
    margin-left: 15%;
    margin-right: 15%;
  }
  .section3_box {
    background-color: white;
    border-radius: 15px;
  }
  @media only screen and (max-width: 820px) {
    .section1_res_carousel_home_image {
      height: 30vh;
    }
    #section1_main_wrapper {
      padding-top: 15px;
    }
    #section2_main_wrapper {
      margin-left: 7vh;
      margin-right: 5vh;
    }
    .section2_right {
      margin-left: 25%;
      margin-top: -5%;
    }
    .section2_left {
      width: 100%;
      margin-top: -5%;
    }
    .section2_make_res_order_col1 {
      order: 1;
    }
    .section2_res_btn {
      width: 100% !important;
    }
  }
`;
