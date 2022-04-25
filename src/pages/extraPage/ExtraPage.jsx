import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar';
// import Img from '../../images/splash2.jpg'
import Img from '../../images/believe.png'
import Img2 from '../../images/splash3.jpg'
import Img3 from '../../images/bg2.jpg'
import BgImg from '../../images/splash1.jpg'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

import './ExtraPage.css'
import Header from '../../components/Text/Header';
import PText from './../../components/Text/PText';
import H2 from './../../components/Text/H2';
import H3 from '../../components/Text/H3';
import Header2 from '../../components/Text/Header2';

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
      url(${Img});
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 80vh;
    .page1Header {
      color: #fff;
      text-align: center;
    }
  }
  .pageBanner {
    background: linear-gradient(
        rgba(0,0,0, 0.5),
        rgba(0,0,0, 0.5)
      ),
      url(${BgImg});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    position: relative;
    margin-top: 42rem;
    padding: 4rem;
    color: #fff;
    text-align: center;
  }
  .pageContent{
      padding: 4rem;
  }
`;

const ExtraPage = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Extra</h1>
        </div>
      </div>
        
      <div className="extraContainer">
            <div className="extraBox">
                <div className="extraContent">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, et. Velit ad, modi voluptates.
                    </p>
                </div>
            </div>
        </div>
        <svg>
          <filter id='wavy'>
              <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
                  <animate attributeName='baseFrequency' dur='60s' values='0.02; 0.05; 0.02' repeatCount='indefinite' />
              </feTurbulence>
              <feDisplacementMap in='SourceGraphic' scale='30' />
          </filter>
      </svg>
      {/* </div> */}
     
 </Container>
  )
}

export default ExtraPage