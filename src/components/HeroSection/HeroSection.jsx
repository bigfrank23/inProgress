import React from 'react'
import BackgroundSlider from 'react-background-slider'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import Img1 from '../../images/pro4.webp'
import Img2 from '../../images/pro5.jpg'
import Img3 from '../../images/yyy.jpg'
import Img4 from '../../images/pro9.jpg'
import Button from '../Button/Button'
import './heroSection.css'
import { mobile } from '../../responsive'
import TextLoop from "react-text-loop";

// const image3 = Img3
const image1 = Img3
const image2 = Img2
const image3 = Img4

const Container = styled.div`
    /* background */
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({ position: "relative", top: "15%" })}
`;
const TopText = styled.h4`
    color: #fff;
    font-size: 22px;
    font-weight: 300;
    margin: 0;
    text-transform: uppercase;
    text-align: center;
`
const CenterTextContainer = styled.div`
    margin-bottom: 50px;
`
const CenterText = styled.h1`
    color: #fff;
    line-height: 40px;
    margin-top: 0;
    text-transform: uppercase;
    text-align: center;
`
const HeroButtonContainer = styled.div`
    align-self: center;
    display: none;
`
const HeroButton = styled.button`
    border: 2px solid;
    border-radius: 30px;
    box-sizing: border-box;
    color: #fff;
    display: inline-block;
    font-weight: 900;
    min-width: 125px;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    background-color: green;
    cursor: pointer;
`

const HeroSection = () => {
  return (
    <Container id="hero">
      <BackgroundSlider
        images={[image3, image1, image2]}
        duration={10}
        transition={2}
      />
      {/* <Content> */}
      <div className="content">
        <TextLoop springConfig={{ stiffness: 180, damping: 8 }} interval={5000}>
          <div className="div1">
            <div className="topText">
              <h4>loving radically, living generously</h4>
            </div>
            <div className="centerTextContainer">
              <div className="centerText">
                <h1>and watching jesus</h1>
              </div>
              <div className="centerText">
                <h1>do the extraordinary</h1>
              </div>
            </div>
          </div>
          <div className="div2">
            <div className="topText">
              <h4>We ought also to love one another</h4>
            </div>
            <div className="centerTextContainer">
              <div className="centerText">
                <h1>Helping you find your</h1>
              </div>
              <div className="centerText">
                <h1>Brethren</h1>
              </div>
            </div>
          </div>
          <div className="div3">
            <div className="topText">
              <h4>To unite all Pentecostal churches,</h4>
            </div>
            <div className="centerTextContainer">
              <div className="centerText">
                <h1>bodies and believers for the fellowship,</h1>
              </div>
              <div className="centerText">
                <h1>Encouragement and inspiration</h1>
              </div>
            </div>
          </div>
        </TextLoop>
        <HeroButtonContainer>
          <Link to="#">
            <Button BtnText="Connect with us" />
          </Link>
        </HeroButtonContainer>
      </div>
      {/* </Content> */}
    </Container>
  );
}

export default HeroSection