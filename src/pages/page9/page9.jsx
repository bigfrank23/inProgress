import React from 'react'
import Img from "../../images/splash3.jpg";
import Img1 from "../../images/splash3.jpg";
import Img2 from "../../images/volunteer.jpg";
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import Header from '../../components/Text/Header';
import PText from '../../components/Text/PText';
import H2 from '../../components/Text/H2';
import H3 from '../../components/Text/H3';
import H4 from '../../components/Text/H4';
import Footer from '../../components/Footer/Footer';
import './Page9.css'
import Upcomin from '../../components/Upcoming/Upcomin';
import Button from '../../components/Button/Button';
import { directorate } from '../../teamMembers/directorate';

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
    clip-path: polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${Img2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-clip: fixed;
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
          <h1>Directorate</h1>
        </div>
      </div>
      <div className="page9TopContainer">
        <div className="page9TopHeader">
          <Header color={true} children="Doing good" />
        </div>
        <div className="page9TopTitle">
          <H2 children="FIND MEANINGFUL CONNECTION AND PURPOSE" />
        </div>
        <div className="page9TopPara">
          <PText>
          At PFN Lagos, we’re not just looking for volunteers. We’re looking to help people discover their purpose.
           If getting involved in a fellowship is your next step contact info@pfnlagosstate.org or check with one of the many provinces or chapters.
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
          <h2>Join A Team</h2>
        </div>
        <div className="page9HoverCard">
          {directorate.map((data)=> (
            <div className="page9Card">
              <div className="page9CardImgBx">
                <img src={data.img} alt="" />
              </div>
              <div className="page9CardTxt">
                <div className="page9CardTxtTitle">
                  <h3>{data.directorate}</h3>
                </div>
                {/* <div className="page9CardTxtPara">
                  <PText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe? Aspernatur pariatur saepe ipsa obcaecati voluptas inventore quam quasi eaque id! Ipsa iste odio maiores, excepturi voluptatibus delectus voluptatem ab?
                  </PText>
                </div> */}
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