import React from 'react'
import Img from "../../images/splash3.jpg";
import Img1 from "../../images/splash3.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import Img4 from "../../images/My-Post-15.png";
import styled from "styled-components";
import Header from '../../components/Text/Header';
import H2 from '../../components/Text/H2';
import PText from '../../components/Text/PText';
import './Page11.css'
import Button from '../../components/Button/Button';
import Upcomin from '../../components/Upcoming/Upcomin';
import Footer from '../../components/Footer/Footer';
import Button2 from '../../components/Button/Button2';

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
`;
const Page11 = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>Page 11</h1>
        </div>
      </div>
      <div className="page11Top">
          <div className="page11TopContent">
              <div className="page11TopHeader">
                  <Header color>Lorem ipsum dolor sit.</Header>
              </div>
              <div className="page11TopTitle">
                  <H2>Lorem, ipsum dolor.</H2>
              </div>
              <div className="page11TopPara">
                  <PText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, laborum. Lorem ipsum dolor sit amet.</PText><br/>
                  <PText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, aliquam!</PText>
              </div>
          </div>
      </div>
      <div className="page11Center">
          <div className="page11CenterContent">
              <div className="page11CenterContentLeft">
                  <img src={Img2} alt="" />
              </div>
              <div className="page11CenterContentRight">
                  <div className="page11CenterContentRightTitle">
                      <H2>Lorem, ipsum.</H2>
                  </div>
                  <div className="page11CenterContentRightPara">
                      <PText>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sed officiis aut sunt id consectetur alias reiciendis rerum pariatur aliquam, enim sequi laboriosam voluptatem nesciunt eum iusto dolorum inventore porro totam eveniet modi sint quos doloribus quisquam? Dolor, fugit incidunt!
                      </PText>
                  </div>
                  <div className="page11CenterContentRightBtn">
                      <Button>Get Involved</Button>
                  </div>
              </div>
          </div>
          <div className="page11CenterContent">
              <div className="page11CenterContentLeft">
                  <img src={Img2} alt="" />
              </div>
              <div className="page11CenterContentRight">
                  <div className="page11CenterContentRightTitle">
                      <H2>Lorem, ipsum.</H2>
                  </div>
                  <div className="page11CenterContentRightPara">
                      <PText>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sed officiis aut sunt id consectetur alias reiciendis rerum pariatur aliquam, enim sequi laboriosam voluptatem nesciunt eum iusto dolorum inventore porro totam eveniet modi sint quos doloribus quisquam? Dolor, fugit incidunt!
                      </PText>
                  </div>
                  <div className="page11CenterContentRightBtn">
                      <Button>Get Involved</Button>
                  </div>
              </div>
          </div>
          <div className="page11CenterContent">
              <div className="page11CenterContentLeft">
                  <img src={Img2} alt="" />
              </div>
              <div className="page11CenterContentRight">
                  <div className="page11CenterContentRightTitle">
                      <H2>Lorem, ipsum.</H2>
                  </div>
                  <div className="page11CenterContentRightPara">
                      <PText>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sed officiis aut sunt id consectetur alias reiciendis rerum pariatur aliquam, enim sequi laboriosam voluptatem nesciunt eum iusto dolorum inventore porro totam eveniet modi sint quos doloribus quisquam? Dolor, fugit incidunt!
                      </PText>
                  </div>
                  <div className="page11CenterContentRightBtn">
                      <Button>Get Involved</Button>
                  </div>
              </div>
          </div>
      </div>
      <div className="page11Bottom">
          <div className="page11BottomTitle">
              <H2>Upcoming Events</H2>
          </div>
          <div className="page11BottomContent">
              <Upcomin 
                title1="Lorem ipsium"
                title4="Lorem ipsium"
                title5="Location"
                para1="2/3"
                para2="Lagos"
                image={Img2}
              />
              <Upcomin 
                title1="Lorem ipsium"
                title4="Lorem ipsium"
                title5="Location"
                para1="2/3"
                para2="Lagos"
                image={Img2}
              />
          </div>
      </div>
          <div className="page11Banner">
              <H2 color>Lorem, ipsum dolor.</H2>
              <div className="page11BannerPara">
              <PText color>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quam!</PText>

              </div>
              <Button2 outline>Contact us</Button2>
          </div>
      <Footer />
    </Container>
  )
}

export default Page11