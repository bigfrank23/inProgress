import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import Img from "../../images/federico-respini-sYffw0LNr7s-unsplash.jpg";
import Img2 from "../../images/living-generously.jpg";
import Img3 from "../../images/bg2.jpg";
import Img4 from "../../images/My-Post-15.png";
import Img5 from "../../images/gallery2.png";
import styled from "styled-components";
import MyGallery from "../../components/myGallery/MyGallery";
import './Gallery.css'
import Slick from "../../components/slickSlider/SlcikSlider";
import Responsive from "../../components/reactSlick/ReactSlick";
import PauseOnHover from "../../components/reactSlick/AutoScroll";
import H2 from '../../components/Text/H2'
import Footer from '../../components/Footer/Footer'

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
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #d2d2d2
      url(${Img5});
    background-size: contain;
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
    .page1Header {
      color: #fff;
      text-align: center;
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
