import React from 'react'
import Img from "../../images/splash3.jpg";
import Img1 from "../../images/splash3.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import Header from '../../components/Text/Header';
import PText from '../../components/Text/PText';
import H2 from '../../components/Text/H2';
import H3 from '../../components/Text/H3';
import Footer from '../../components/Footer/Footer';
import './Page9.css'
import Upcomin from './../../components/Upcoming/Upcomin';
import Button from '../../components/Button/Button';

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
      url(${Img2});
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
`
const Page9 = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7]
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Page 9</h1>
        </div>
      </div>
      <div className="page9TopContainer">
        <div className="page9TopHeader">
          <Header color={true} children="Lorem ipsium" />
        </div>
        <div className="page9TopTitle">
          <H2 children="Lorem ipsium est ilor kop grt" />
        </div>
        <div className="page9TopPara">
          <PText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at sint aspernatur asperiores minus autem expedita. Perferendis eius ullam, error quae cupiditate fugit. Ipsum voluptate quasi doloremque tenetur reiciendis aspernatur.
          </PText>
        </div>
        <div className="page9TopContent">
          <div className="page9TopContentTitle">
            <H2 color="true">Lorem, ipsum.</H2>
          </div>
          <div className="page9TopContentTitle2">
            <H3 color="true">Lorem, ipsum.</H3>
          </div>
          <div className="page9TopContentPara">
            <PText color="true">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio incidunt sed, pariatur quos quaerat, iure est nobis ipsa non earum quisquam culpa suscipit ex iusto deleniti? Eum laboriosam eligendi error magnam fugiat repudiandae aliquam ad minima debitis, iusto culpa id dolores enim earum non nulla vel delectus nam totam!
            </PText>
          </div>
          <div className="page9TopContentTitle2">
            <H3 color="true">Lorem, ipsum.</H3>
          </div>
          <div className="page9TopContentTitle2">
            <H3 color="true">Complete your SHAPE profile online »</H3>
          </div>
        </div>
      </div>
      <div className="page9CenterContainer">
        <div className="page9CenterTitle">
          <H2>Lorem, ipsum dolor.</H2>
        </div>
        <div className="page9HoverCard">
          {cards.map(()=> (
            <div className="page9Card">
              <div className="page9CardImgBx">
                <img src={Img} alt="" />
              </div>
              <div className="page9CardTxt">
                <div className="page9CardTxtTitle">
                  <H2>Lorem ipsum dolor sit.</H2>
                </div>
                <div className="page9CardTxtPara">
                  <PText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe? Aspernatur pariatur saepe ipsa obcaecati voluptas inventore quam quasi eaque id! Ipsa iste odio maiores, excepturi voluptatibus delectus voluptatem ab?
                  </PText>
                </div>
                <i className="fa fa-arrow-circle-right page9Icon" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='page9Bottom'>
        <div className="page9BottomTitle">
          <H2>Upcoming Events</H2>
        </div>
        <div className="page9BottomContent">
          <Upcomin title1="lorekroe"
            title3="Celebrate Recovery"
            title4="Date"
            para1="2/0"
            title5="Location"
            para2="Lagos"
            image={Img2}
          />
          <Upcomin title1="lorekroe"
            title3="Celebrate Recovery"
            title4="Date"
            para1="2/0"
            title5="Location"
            para2="Lagos"
            image={Img2}
          />
        </div>
      </div>
      <div className="page9BottomBanner">
        <div className="page9BottomBannerTitle">
          <H2>Lorem ipsum dolor sit amet.</H2>
        </div>
        <div className="page9BottomBannerPara">
          <PText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis reprehenderit, itaque adipisci eius impedit ut dolore at corrupti maiores dolorem quo eum eligendi libero magnam inventore cum, minima ad officia.
          </PText>
        </div>
        <div className="page9BottomBannerBtn">
          <Button BtnText='Contact Us' />
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default Page9