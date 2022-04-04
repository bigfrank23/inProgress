import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar';
import Img from '../../images/splash2.jpg'
import Img2 from '../../images/splash3.jpg'
import Img3 from '../../images/bg2.jpg'
import BgImg from '../../images/splash1.jpg'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

import './Page2.css'

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
      url(${Img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 0;
    height: 100%;
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
const Page2 = () => {
  return (
    <Container>
        <div className="page1Wrapper">
            {/* <Navbar /> */}
            <div className="page1Header">
                <h1>Lorem, ipsum dolor.</h1>
            </div>
        </div>
        <div className="pageContent2">
            <div className="pageContentTitle">
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="pageContentTop center">
                <div className="centerTitle">
                    <h3>Lorem, ipsum dolor.</h3>
                </div>

                <div className="centerContent">
                    <div className="centerContentB">
                        <div className="imgBx">

                        <img src={Img} width={50} alt="" />
                        </div>
                        <div className="centerContentText">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem, ipsum.</p>
                            <span>Lorem, ipsum.</span>
                        </div>
                    </div>
                    <div className="centerContentB">
                        <div className="imgBx">

                        <img src={Img} alt="" />
                        </div>
                        <div className="centerContentText">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem, ipsum.</p>
                            <span>Lorem, ipsum.</span>
                        </div>
                    </div>
                    <div className="centerContentB">
                        <div className="imgBx">

                        <img src={Img} alt="" />
                        </div>
                        <div className="centerContentText">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem, ipsum.</p>
                            <span>Lorem, ipsum.</span>
                        </div>
                    </div>
                </div>
                <hr className='hr' />
                <div className="centerContent">
                    <div className="centerContentB">
                        <div className="imgBx">

                        <img src={Img} width={50} alt="" />
                        </div>
                        <div className="centerContentText">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem, ipsum.</p>
                            <span>Lorem, ipsum.</span>
                        </div>
                    </div>
                    <div className="centerContentB">
                        <div className="imgBx">

                        <img src={Img} alt="" />
                        </div>
                        <div className="centerContentText">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem, ipsum.</p>
                            <span>Lorem, ipsum.</span>
                        </div>
                    </div>
                    <div className="centerContentB">
                        <div className="imgBx">

                        <img src={Img} alt="" />
                        </div>
                        <div className="centerContentText">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem, ipsum.</p>
                            <span>Lorem, ipsum.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </Container>
  )
}

export default Page2