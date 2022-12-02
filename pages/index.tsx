import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Wrapper, WrapperSpan, HomeStyle } from "../components/Styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { ImageComp } from "../components/Images";
import { H1, H2, P, BR } from "../components/typography";
import { BannerButton } from "../components/Buttons";
import { Container, Row, Col } from "../components/Layout";
import { Spacer } from "../components/Spacer";
import { FlexDisplay } from "../components/FlexDisp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
export default function Home() {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  const LinkStyle = {
    borderBottom: "none",
    textDecoration: "none",
    color: "gray",
  };
  const TradeNow = {
    // marginLeft: "10px",
    backgroundColor: "#e9faff",
    border: "1px solid #1FC7D4",
    color: "#1FC7D4",
    fontWeight: "bolder",
    padding: "15px",
    marginTop: "5px",
    borderRadius: "15px",
  };
  const ConnectNow = {
    backgroundColor: "#1FC7D4",
    color: "#fff",
    fontWeight: "bolder",
    padding: "15px",
    marginTop: "5px",
    borderRadius: "15px",
  };
  const CarouselImage2Style = {
    position: "relative",
    backgroundColor: "#6A3EC1",
    marginTop: "5%",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: "50px",
    width: "80%",
    height: "80%",
  } as const;
  const CarouselImage1Style = {
    position: "relative",
    backgroundColor: "#00A28F",
    marginTop: "5%",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: "50px",
    width: "80%",
    height: "80%",
  } as const;
  const section3BoxArr = [
    {
      heading1: " 2 million",
      heading2: "users",
      pera: "in the last 30 days",
      color: "#602FC1",
    },
    {
      heading1: "55 million",
      heading2: "trades",
      pera: "made in the last 30 days",
      color: "#1FC7D4",
    },
    {
      heading1: "$3.8 billion",
      heading2: "staked",
      pera: "Total Value Locked",
      color: "#ED4B9E",
    },
  ];
  return mount ? (
    <>
      {/* Navbar is another component  */}
      <Navbar title="Home" />
      <HomeStyle>
        {/* Carousel Component  */}
        <Wrapper id="section1_main_wrapper">
          <Carousel autoPlay={true} showStatus={false} dynamicHeight={false}>
            <Wrapper style={CarouselImage1Style}>
              <ImageComp
                className="section1_res_carousel_home_image"
                src="/assets/carousel_img1.webp"
                alt="banner"
                width="auto"
                height="auto"
                fluid={false}
                style={null}
              />
              <Wrapper style={{ position: "absolute", top: "30%", left: "2%" }}>
                <H1 color="white" weight="bolder" size="40px">
                  Hello Aptos Project Team
                </H1>
              </Wrapper>
              <Wrapper style={{ position: "absolute", top: "60%", left: "2%" }}>
                <BannerButton bg="#2d9ec4">{"Get in Touch ->"}</BannerButton>
              </Wrapper>
            </Wrapper>
            <Wrapper style={CarouselImage2Style}>
              <ImageComp
                className="section1_res_carousel_home_image"
                src="/assets/carousel_img2.webp"
                alt="banner"
                width="100px"
                height="30%"
                fluid={true}
                style={null}
              />
              <Wrapper style={{ position: "absolute", top: "30%", left: "2%" }}>
                <H1 color="white" weight="bolder" size="40px">
                  Win $89,124 Lottery
                </H1>
              </Wrapper>
              <Wrapper style={{ position: "absolute", top: "65%", left: "2%" }}>
                <BannerButton bg="#2D9EC4">{"Trade Now ->"}</BannerButton>
              </Wrapper>
            </Wrapper>
          </Carousel>
        </Wrapper>
        {/* #second section  */}
        <Wrapper id="section2_main_wrapper">
          <Container>
            <Row>
              <Col md={6} className="section2_make_res_order_col1">
                <Spacer
                  width="100%"
                  height="auto"
                  className="text-left section2_left"
                >
                  <H2 weight="bolder" color="#7645D9" size="60px">
                    The moon is made of pancakes.
                  </H2>
                  <P family="" color="#280D5F" weight="900">
                    Trade, earn, and win crypto on the most popular
                    decentralized platform in the galaxy.
                  </P>
                  <Wrapper
                    className="d-flex mt-4 section2_res_btn"
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      width: "50%",
                    }}
                  >
                    <Link href="#trade" style={LinkStyle}>
                      <Wrapper style={ConnectNow}>Connect Wallet</Wrapper>
                    </Link>
                    <Link href="#trade" style={LinkStyle}>
                      <Wrapper style={TradeNow}>Trade Now</Wrapper>
                    </Link>
                  </Wrapper>
                </Spacer>
              </Col>
              <Col md={6} className="section2_make_res_order_col2">
                <Spacer
                  width="90%"
                  height="auto"
                  className="text-left mb-5 section2_right"
                >
                  <ImageComp
                    className=""
                    src="/assets/under_carousel_home.gif"
                    alt="banner"
                    width="100%"
                    height="auto"
                    fluid={true}
                    style={null}
                  />
                </Spacer>
              </Col>
            </Row>
          </Container>
        </Wrapper>
        {/* Third Section  */}
        <Wrapper id="section3">
          <Wrapper id="section3_heading" className="text-center">
            <H2 weight="bolder" color="#602FC1" size="40px">
              Used by millions.
            </H2>
            <H2 weight="bolder" color="#602FC1" size="40px">
              Trusted with billions.
            </H2>
            <Wrapper style={{ marginTop: "40px" }}>
              <P
                family="sans sarif"
                weight="bold"
                color="gray"
                style={{ lineHeight: "20px" }}
              >
                PancakeSwap has the most users of any decentralized platform,
                ever.
                <BR />
                And those users are now entrusting the platform with over $3.8
                billion in funds.
              </P>
            </Wrapper>
            <Wrapper style={{ marginTop: "20px" }}>
              <P family="" weight="bolder" color="gray">
                Will you join them?
              </P>
            </Wrapper>
          </Wrapper>
          <Wrapper id="section3_body" className="mb-5">
            <Container>
              <Row>
                {section3BoxArr.map((val, index) => {
                  return (
                    <>
                      <Col md={4} className="mt-5" key={index}>
                        <Wrapper className="section3_box">
                          <Row style={{ position: "relative" }}>
                            <Col
                              className=""
                              style={{ marginTop: "30%", marginLeft: "8%" }}
                            >
                              {/* <Spacer width="190px" height="auto"> */}
                              <H2 color="black" weight="600" size="35px">
                                {val.heading1}
                              </H2>
                              <H2 size="38px" weight="400" color={val.color}>
                                {val.heading2}
                              </H2>
                              <P color="gray" weight="300" family="">
                                {val.pera}
                              </P>
                              {/* </Spacer> */}
                            </Col>
                            <Col
                              style={{
                                position: "absolute",

                                marginLeft: "-5%",
                              }}
                              className="mt-4 text-end"
                            >
                              <PeopleAltIcon style={{ color: "#602FC1" }} />
                            </Col>
                          </Row>
                        </Wrapper>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Container>
          </Wrapper>
        </Wrapper>
        <footer>Hello</footer>
      </HomeStyle>
    </>
  ) : (
    <></>
  );
}
