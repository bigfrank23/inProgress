import React, { useState } from "react";
import Img3 from "../../images/bg2.jpg";
import styled from "styled-components";
import "./Error.css";
import H2 from "../../components/Text/H2";
import PText from "../../components/Text/PText";
import Button2 from "../../components/Button/Button2";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import PrayerImg from '../../images/404Bg.jpg'
import PrayerImg2 from '../../images/prayer.jpeg'
import { Link } from "react-router-dom";
import axios from "axios";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${PrayerImg});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    ${mobile({ height: "40vh", clipPath: "unset", backgroundAttachment: "unset", backgroundPosition: "100% 170px", backgroundSize: "500px 50%"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
`;
const ErrorPage = () => {

  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>Page Not Found</h1>
        </div>
      </div>
      <div className="errorPage">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to="/">
          <Button BtnText="Back To Home" />
        </Link>
      </div>
      <Footer />
    </Container>
  );
};

export default ErrorPage;
