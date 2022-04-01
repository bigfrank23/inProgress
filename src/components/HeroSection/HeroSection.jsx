import React from 'react'
import BackgroundSlider from 'react-background-slider'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Img1 from '../../images/splash1.jpg'
import Img2 from '../../images/splash2.jpg'
import Img3 from '../../images/splash3.jpg'
import './heroSection.css'

const image1 = Img1
const image2 = Img2
const image3 = Img3

const Container = styled.div`
    /* background */
`
const Content = styled.div`
    display: flex;
    flex-direction: column;

`
const TopText = styled.h4`
    color: #fff;
    font-size: 22px;
    font-weight: 300;
    margin: 0;
    text-transform: uppercase;
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
    <Container id='hero'>
        <BackgroundSlider
            images={[image1, image2, image3]}
            duration={10} transition={2}
         />
        <Content>
            <TopText>
            loving radically, living generously
            </TopText>
            <CenterTextContainer>
                <CenterText>
                and watching jesus 
                </CenterText>
                <CenterText>
                do the extraordinary
                </CenterText>
            </CenterTextContainer>
            <HeroButtonContainer>
                <Link to="#">
                <HeroButton>
                    <h3>
                    Connect with us
                    </h3>
                </HeroButton>
                </Link>
            </HeroButtonContainer>
        </Content>
    </Container>
  )
}

export default HeroSection