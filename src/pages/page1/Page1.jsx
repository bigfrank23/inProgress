import React from 'react'
import styled from 'styled-components'
import Navbar from './../../components/Navbar/Navbar';
import Img from '../../images/splash2.jpg'
import Img2 from '../../images/splash3.jpg'
import Img3 from '../../images/bg2.jpg'
import BgImg from '../../images/splash1.jpg'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import H2 from '../../components/Text/H2';
import { mobile } from '../../responsive';
import PText from '../../components/Text/PText';

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
    position: relative;
    top: 0;
    height: 100vh;
    .page1Header {
      color: #fff;
      text-align: center;
    }
  }
  .pageBanner {
    background: green;
    position: relative;
    /* margin-top: 50rem; */
    padding: 4rem;
    color: #fff;
    text-align: center;
    ${mobile({ padding: "2rem"})}
  }
  .pageContent{
      padding: 4rem;
      ${mobile({padding: "2rem"})}
  }
  .pageContentTop{
      display: flex;
      padding: 2rem 0;
      gap: 2rem;
      ${mobile({display: "block", padding: 0})}
      .left{
        flex: 1;
        .pageContentTitle{
            margin-bottom: 1.5rem;
        }
        .pageContentPara{
            ${mobile({textAlign: "center"})}
        }
      }
      .right{
          width: 400px;
          height: 400px;
          flex: 1;
          ${mobile({width: "unset", height: "unset", padding: "2rem 0"})}
          img{
              width: 100%;
              height: 100%;
          }
      }
  }
  .center{
      flex-direction: row-reverse;
  }
  /* .bottom{
      flex-direction: row-reverse;
  } */
`;
const Page1 = () => {
  return (
    <Container>
        <div className="page1Wrapper">
            {/* <Navbar /> */}
            <div className="page1Header">
                <h1>Lorem, ipsum dolor.</h1>
            </div>
        </div>
        <div className="pageBanner">
            <div className="pageBannerText">
                <H2 color={true} children="Lorem, ipsum dolor sit amet consectetur adipisicing elit <br />. Repellendus, cupiditate." />
                <H2 color={true} children="Lorem, ipsum dolor sit amet consectetur adipisicing elit" />
            </div>
        </div>
        <div className="pageContent">
            <div className="pageContentTop">
                <div className="left">
                    <div className="pageContentTitle">
                        <H2 children="Lorem ipsum dolor sit amet." />
                    </div>
                    <div className="pageContentPara">
                        <PText children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique." />
                        <PText children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique." />
                    </div>
                </div>
                <div className="right">
                    <img src={Img2} alt="" />
                </div>
            </div>
            <div className="pageContentTop center">
                <div className="left">
                    <div className="pageContentTitle">
                    <H2 children="Lorem ipsum dolor sit amet." />
                    </div>
                    <div className="pageContentPara">
                    <PText children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique." />
                    <PText children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique." />
                        
                    </div>
                    <div className="pageBtn" style={{display: 'flex', gap: '2rem', marginTop: '2rem'}}>
                        <Button />
                        <Button />
                    </div>
                </div>
                <div className="right">
                    <img src={Img2} alt="" />
                </div>
            </div>
            <div className="pageContentTop bottom">
                <div className="left">
                    <div className="pageContentTitle">
                    <H2 children="Lorem ipsum dolor sit amet." />
                    </div>
                    <div className="pageContentPara">
                    <PText children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique." />
                    <PText children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique." />
                        
                    </div>
                    <div className="pageBtn" style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
                        <Button />
                    </div>
                </div>
                <div className="right">
                    <img src={Img2} alt="" />
                </div>
            </div>
        </div>
        <Footer />
    </Container>
  )
}

export default Page1