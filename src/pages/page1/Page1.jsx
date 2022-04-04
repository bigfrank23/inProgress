import React from 'react'
import styled from 'styled-components'
import Navbar from './../../components/Navbar/Navbar';
import Img from '../../images/splash2.jpg'
import Img2 from '../../images/splash3.jpg'
import Img3 from '../../images/bg2.jpg'
import BgImg from '../../images/splash1.jpg'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

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
  .pageContentTop{
      display: flex;
      padding: 2rem 0;
      gap: 2rem;
      .left{
        flex: 1;
        .pageContentTitle{
            margin-bottom: 1.5rem;
        }
      }
      .right{
          width: 400px;
          height: 400px;
          flex: 1;
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
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit <br />. Repellendus, cupiditate.</h1>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h1>
            </div>
        </div>
        <div className="pageContent">
            <div className="pageContentTop">
                <div className="left">
                    <div className="pageContentTitle">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                    </div>
                    <div className="pageContentPara">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique.</p>
                    </div>
                </div>
                <div className="right">
                    <img src={Img2} alt="" />
                </div>
            </div>
            <div className="pageContentTop center">
                <div className="left">
                    <div className="pageContentTitle">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                    </div>
                    <div className="pageContentPara">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique.</p>
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
                        <h2>Lorem ipsum dolor sit amet.</h2>
                    </div>
                    <div className="pageContentPara">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem tempore sunt! Ad, cumque officiis cupiditate tenetur illo repudiandae similique.</p>
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