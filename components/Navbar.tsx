import Head from "next/head";
import { NavProps } from "./PropsInterface";
import {
  Wrapper,
  WrapperSpan,
  NavStyle,
  NavUl,
  NavLi,
  NavRight,
} from "./Styles";
import { HR, P } from "./typography";
import { FlexDisplay } from "./FlexDisp";
import { Spacer } from "./Spacer";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { ImageComp } from "./Images";
const Navbar = (props: NavProps) => {
  const LinkStyle = {
    borderBottom: "none",
    textDecoration: "none",
    color: "gray",
  };
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <NavStyle>
        <ImageComp
          className="res_do_not_show"
          src="/assets/nav-logo.png"
          alt="nav logo"
          width="160px"
          height="24.95px"
          fluid={false}
          style={null}
        />
        <ImageComp
          className="res_show"
          src="/assets/nav_res_logo.png"
          alt="nav logo"
          width="30px"
          height="30px"
          fluid={false}
          style={{ marginTop: "2px" }}
        />
        <NavUl className="res_do_not_show">
          {/* link 1  */}
          <NavLi ml="20px">
            <Link href="#trade" style={LinkStyle} id="change_hover_bg_link">
              Trade
            </Link>

            <Wrapper
              id="hover_show"
              style={{
                position: "absolute",
                zIndex: 100,
                backgroundColor: "#fff",
                color: "white",
                marginTop: "20px",
                borderRadius: "15px",
              }}
            >
              <Spacer width="40vh" height="auto">
                <FlexDisplay direction="column" wrap="nowrap">
                  <WrapperSpan
                    style={{ marginLeft: "20px", marginTop: "20px" }}
                  >
                    <P family="" weight="bolder" color="gray">
                      Swap
                    </P>
                    <P family="" weight="bolder" color="gray">
                      Limit
                    </P>
                    <P family="" weight="bolder" color="gray">
                      Liquidity
                    </P>
                    <FlexDisplay direction="row" wrap="nowrap">
                      <P family="" weight="bolder" color="gray">
                        Perpetual
                      </P>
                      <LogoutIcon
                        style={{
                          marginLeft: "auto",
                          float: "right",
                          color: "gray",
                          marginRight: "20px",
                        }}
                      />
                    </FlexDisplay>
                    <FlexDisplay direction="row" wrap="nowrap">
                      <P family="" weight="bolder" color="gray">
                        Bridge
                      </P>
                      <LogoutIcon
                        style={{
                          marginLeft: "auto",
                          float: "right",
                          color: "gray",
                          marginRight: "20px",
                        }}
                      />
                    </FlexDisplay>
                  </WrapperSpan>
                </FlexDisplay>
              </Spacer>
            </Wrapper>
          </NavLi>
          {/* link 2  */}
          <NavLi ml="20px">
            <Link href="#earn" style={LinkStyle} id="change_hover_bg_link">
              Earn
            </Link>

            <Wrapper
              id="hover_show"
              style={{
                position: "absolute",
                backgroundColor: "#fff",
                zIndex: 100,
                color: "white",
                marginTop: "20px",
                marginLeft: "75px",
                borderRadius: "15px",
              }}
            >
              <Spacer width="40vh" height="auto">
                <FlexDisplay direction="column" wrap="nowrap">
                  <WrapperSpan
                    style={{ marginLeft: "20px", marginTop: "20px" }}
                  >
                    <P family="" weight="bolder" color="gray">
                      Farms
                    </P>
                    <P family="" weight="bolder" color="gray">
                      Pools
                    </P>
                  </WrapperSpan>
                </FlexDisplay>
              </Spacer>
            </Wrapper>
          </NavLi>
          {/* link 3  */}
          <NavLi ml="20px">
            <Link href="#win" style={LinkStyle} id="change_hover_bg_link">
              Win
            </Link>
            <Wrapper
              id="hover_show"
              style={{
                position: "absolute",
                backgroundColor: "#fff",
                zIndex: 100,
                color: "white",
                marginTop: "20px",
                marginLeft: "140px",
                borderRadius: "15px",
              }}
            >
              <Spacer width="40vh" height="auto">
                <FlexDisplay direction="column" wrap="nowrap">
                  <WrapperSpan
                    style={{ marginLeft: "20px", marginTop: "20px" }}
                  >
                    <P family="" weight="bolder" color="gray">
                      Trading Prediction
                    </P>
                    <P family="" weight="bolder" color="gray">
                      Prediction (BETA)
                    </P>
                    <P family="" weight="bolder" color="gray">
                      Lottery
                    </P>
                    <P family="" weight="bolder" color="gray">
                      Pottery (BETA)
                    </P>
                  </WrapperSpan>
                </FlexDisplay>
              </Spacer>
            </Wrapper>
          </NavLi>
          {/* link 4  */}
          <NavLi ml="20px">
            <Link href="#nft" style={LinkStyle} id="change_hover_bg_link">
              NFT
            </Link>
            <Wrapper
              id="hover_show"
              style={{
                position: "absolute",
                backgroundColor: "#fff",
                zIndex: 100,
                color: "white",
                marginTop: "20px",
                marginLeft: "200px",
                borderRadius: "15px",
              }}
            >
              <Spacer width="40vh" height="auto">
                <FlexDisplay direction="column" wrap="nowrap">
                  <WrapperSpan
                    style={{ marginLeft: "20px", marginTop: "20px" }}
                  >
                    <P family="" weight="bolder" color="gray">
                      Overview
                    </P>
                    <P family="" weight="bolder" color="gray">
                      Collections
                    </P>
                    <P family="" weight="bolder" color="gray">
                      Activity
                    </P>
                  </WrapperSpan>
                </FlexDisplay>
              </Spacer>
            </Wrapper>
          </NavLi>
          {/* link 5  */}
          <NavLi ml="20px">
            <Link href="#dot" style={LinkStyle} id="change_hover_bg_link">
              ...
            </Link>
            <Wrapper
              id="hover_show"
              style={{
                position: "absolute",
                backgroundColor: "#fff",
                zIndex: 100,
                color: "white",
                marginTop: "20px",
                marginLeft: "260px",
                borderRadius: "15px",
              }}
            >
              <Spacer width="40vh" height="auto">
                <FlexDisplay direction="column" wrap="nowrap">
                  <WrapperSpan
                    style={{ marginLeft: "20px", marginTop: "20px" }}
                  >
                    <P family="" weight="bolder" color="gray">
                      Info
                    </P>
                    <P family="" weight="bolder" color="gray">
                      Ifo
                    </P>
                    <P family="" weight="bolder" color="gray">
                      Voting
                    </P>
                  </WrapperSpan>
                </FlexDisplay>
              </Spacer>
            </Wrapper>
          </NavLi>
        </NavUl>
        {/* right side  */}
        <NavRight>
          <NavUl>
            <NavLi ml="0px" className="res_do_not_show">
              <ImageComp
                className=""
                src="/assets/nav-item.png"
                alt="nav logo"
                width="25px"
                height="25px"
                fluid={false}
                style={{ marginRight: "5px" }}
              />
              <WrapperSpan>$4.282</WrapperSpan>
            </NavLi>
            <Link href="#trade" style={LinkStyle}>
              <NavLi ml="0px">
                <LanguageIcon />
              </NavLi>
            </Link>

            <Link href="#trade" style={LinkStyle}>
              <NavLi ml="0px">
                <SettingsIcon />
              </NavLi>
            </Link>
            <Link href="#trade" style={LinkStyle}>
              <NavLi ml="0px">
                {" "}
                <WrapperSpan
                  style={{
                    backgroundColor: "#F0F0F0",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingRight: "5px",
                    fontWeight: "bolder",
                    borderRadius: "15px",
                  }}
                >
                  <ImageComp
                    className=""
                    src="/assets/bnbNavIcon.png"
                    alt="nav logo"
                    width="30px"
                    height="30px"
                    fluid={false}
                    style={null}
                  />
                  <WrapperSpan
                    className="res_do_not_show"
                    style={{
                      color: "black",
                      marginLeft: "5px",
                      marginRight: "3px",
                    }}
                  >
                    BNB Smart Chain
                  </WrapperSpan>
                  <KeyboardArrowDownIcon />
                </WrapperSpan>
                <Wrapper
                  id="hover_show"
                  className="bnb_btn_res_margin_navbar"
                  style={{
                    position: "absolute",
                    zIndex: 100,
                    backgroundColor: "#fff",
                    color: "white",
                    marginTop: "20px",
                    borderRadius: "15px",
                  }}
                >
                  <Spacer width="32vh" height="auto">
                    <FlexDisplay direction="column" wrap="nowrap">
                      <WrapperSpan
                        style={{ marginLeft: "20px", marginTop: "20px" }}
                      >
                        <P family="" weight="bolder" color="gray">
                          Overview
                        </P>
                        <P family="" weight="bolder" color="gray">
                          Collections
                        </P>
                        <P family="" weight="bolder" color="gray">
                          Activity
                        </P>
                      </WrapperSpan>
                    </FlexDisplay>
                  </Spacer>
                </Wrapper>
              </NavLi>
            </Link>
            <Link href="#trade" style={LinkStyle}>
              <NavLi ml="0px">
                <WrapperSpan
                  style={{
                    backgroundColor: "#1FC7D4",
                    color: "#fff",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    borderRadius: "15px",
                  }}
                >
                  Connect
                  <WrapperSpan className="res_do_not_show"> Wallet</WrapperSpan>
                </WrapperSpan>
              </NavLi>
            </Link>
          </NavUl>
        </NavRight>
        <HR />
      </NavStyle>
    </>
  );
};

export default Navbar;
