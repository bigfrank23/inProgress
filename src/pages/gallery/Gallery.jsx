import React, { useState } from "react";
import Img3 from "../../images/bg2.jpg";
import Img5 from "../../images/gallery2.png";
import styled from "styled-components";
import MyGallery from "../../components/myGallery/MyGallery";
import './Gallery.css'
import PauseOnHover from "../../components/reactSlick/AutoScroll";
import H2 from '../../components/Text/H2'
import Footer from '../../components/Footer/Footer'
import { landscapeTab, mobile, tab } from "../../responsive";

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    clip-path: polygon(
      20% 0%,
      80% 0%,
      100% 0,
      100% 80%,
      80% 100%,
      20% 100%,
      0% 80%,
      0 0
    );
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #aeb3b7
      url(${Img5});
    background-size: 100% 100%;
    background-attachment: fixed;
    /* background-position: center; */
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    ${mobile({ height: "40vh", clipPath: "unset", backgroundSize: "700px 35%", backgroundPosition: "-25px 100px"})}
    ${tab({ height: "42vh", backgroundSize: "100% 50%", backgroundPosition: "unset"})}
    ${landscapeTab({ height: "65vh", backgroundSize: "100% 100%", backgroundPosition: "unset"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
      .giveNowBtn {
        margin-top: 2rem;
      }
    }
  }
`;

const Gallery = () => {
  return (
    <Container>
      <div className="page1Wrapper">
          <div className="page1Header">
            <h1>Gallery</h1>
          </div>
        </div>
        <div className="sliderBx">
          <div className="galleryBxTxt">
            <H2>Lastest</H2>
          </div>
          <PauseOnHover />
        </div>
        <div className="galleryBx">
          <div className="galleryBxTxt">
            <H2>Images of all events</H2>
          </div>
          <MyGallery />
        </div>
        <Footer />
    </Container>
  );
};

export default Gallery;
