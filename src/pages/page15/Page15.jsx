import React from "react";
import Img1 from "../../images/splash3.jpg";
import Img5 from "../../images/federico-respini-sYffw0LNr7s-unsplash.jpg";
import Img2 from "../../images/splash1.jpg";
import Img3 from "../../images/bg2.jpg";
import Img4 from "../../images/splash2.jpg";
import Img6 from "../../images/book-image.png";
import styled from "styled-components";
import "./Page15.css";
import H2 from "../../components/Text/H2";
import PText from "../../components/Text/PText";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Text/Header";
import H3 from "../../components/Text/H3";
import H4 from "../../components/Text/H4";
import ControlledAccordions from "../../components/accordion/MUIaccordion";
import Button from "../../components/Button/Button";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img5});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 100vh;
    .page1Header {
      color: #fff;
      text-align: center;
    }
  }
`;
const Page15 = () => {
  return (
      <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>Page 15</h1>
        </div>
      </div>
      <div className="page15Top">
          <div className="page15TopContent">
              <div className="page15TopTitle">
                  <H2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</H2>
              </div>
              <div className="page15TopPara">
                  <PText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae, eum esse aliquam et quos recusandae ea praesentium reiciendis voluptatibus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae, eum esse aliquam et quos recusandae ea praesentium reiciendis voluptatibus.
                      lorem20
                  </PText>
                  <PText><b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b></PText>
              </div>
              <div className="page15TopBtn">
                  <Button BtnText="Ask Your Questions About Faith" />
              </div>
          </div>
      </div>
      <div className="page15Center">
          <div className="page15CenterTitle">
              <H2>Lorem ipsum dolor sit amet.</H2>
          </div>
          <div className="page15CenterContent">
              <div className="page15CenterContentLeft">
                <img src={Img4} alt="" />
              </div>
              <div className="page15CenterContentRight">
                  <div className="page15CenterContentRightTitle">
                      <H3>Lorem, ipsum dolor.</H3>
                  </div>
                  <div className="page15CenterContentRightPara">
                      <PText>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam laboriosam optio atque magnam corporis quia fuga illum sint doloribus. Iusto voluptatibus maxime assumenda tempora nostrum nisi voluptatum magnam repellendus.
                      </PText>
                  </div>
              </div>
          </div>
          <div className="page15CenterContent">
              <div className="page15CenterContentLeft">
                <img src={Img4} alt="" />
              </div>
              <div className="page15CenterContentRight">
                  <div className="page15CenterContentRightTitle">
                      <H3>Lorem, ipsum dolor.</H3>
                  </div>
                  <div className="page15CenterContentRightPara">
                      <PText>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam laboriosam optio atque magnam corporis quia fuga illum sint doloribus. Iusto voluptatibus maxime assumenda tempora nostrum nisi voluptatum magnam repellendus.
                      </PText>
                  </div>
              </div>
          </div>
          <div className="page15CenterContent">
              <div className="page15CenterContentLeft">
                <img src={Img4} alt="" />
              </div>
              <div className="page15CenterContentRight">
                  <div className="page15CenterContentRightTitle">
                      <H3>Lorem, ipsum dolor.</H3>
                  </div>
                  <div className="page15CenterContentRightPara">
                      <PText>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam laboriosam optio atque magnam corporis quia fuga illum sint doloribus. Iusto voluptatibus maxime assumenda tempora nostrum nisi voluptatum magnam repellendus.
                      </PText>
                  </div>
              </div>
          </div>
      </div>
      <div className="page15Bottom">
          <div className="page15BottomTitle">
              <H2>Lorem ipsum dolor sit amet consectetur.</H2>
          </div>
          <div className="page15BottomContent">
              <H2 color>Lorem ipsum dolor sit.</H2>
              <div className="page15BottomPara">
                  <PText color>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus iure labore praesentium voluptate magnam obcaecati aliquid alias assumenda vero sunt eum, nulla nobis quidem nemo itaque molestiae, eaque optio laboriosam!

                  </PText>
              </div>
          </div>
          <div className="page15BottomContent">
              <H2 color>Lorem ipsum dolor sit.</H2>
              <div className="page15BottomPara">
                  <PText color>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus iure labore praesentium voluptate magnam obcaecati aliquid alias assumenda vero sunt eum, nulla nobis quidem nemo itaque molestiae, eaque optio laboriosam!

                  </PText>
              </div>
          </div>
          <div className="page15BottomContent">
              <H2>Lorem ipsum dolor sit.</H2>
              <div className="page15BottomPara">
                  <PText>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus iure labore praesentium voluptate magnam obcaecati aliquid alias assumenda vero sunt eum, nulla nobis quidem nemo itaque molestiae, eaque optio laboriosam!

                  </PText>
              </div>
          </div>
      </div>
      <Footer />
      </Container>
  )
};

export default Page15;
