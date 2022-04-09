import React from 'react'
import Img from "../../images/splash3.jpg";
import Img1 from "../../images/splash3.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import Img4 from "../../images/My-Post-15.png";
import styled from 'styled-components'
import Header from '../../components/Text/Header';
import H2 from '../../components/Text/H2';
import H3 from '../../components/Text/H3';
import PText from '../../components/Text/PText';
import './Page10.css'
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
const Page10 = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Page 10</h1>
        </div>
      </div>
      <div className="page10Top">
          <div className="page10TopHeader">
              <Header color>
                  Lorem, ipsum dolor.
              </Header>
          </div>
          <div className="page10TopTitle">
              <H2>Lorem, ipsum.</H2>
          </div>
          <div className="page10TopContent">
              <div className="page10TopContentLeft">
                  <div className="page10TopContentLeftTitle">
                      <H3>Lorem, ipsum dolor.</H3>
                  </div>
                  <div className="page10TopContentLeftPara">
                      <PText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio perferendis libero dolor vel, tempore, ratione dolores quo dolorem aut excepturi dignissimos eveniet aliquam architecto vero quod veniam accusantium aliquid.</PText>
                  </div>
              </div>
              <div className="page10TopContentRight">
                  <div className="page10TopContentRightTitle">
                      <H3>Lorem, ipsum dolor.</H3>
                  </div>
                  <div className="page10TopContentRightPara">
                      <PText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio perferendis libero dolor vel, tempore, ratione dolores quo dolorem aut excepturi dignissimos eveniet aliquam architecto vero quod veniam accusantium aliquid.</PText>
                  </div>
              </div>
          </div>
      </div>
      <div className="page10Center">
          <div className="page10CenterHeader">
              <Header color>Lorem ipsum dolor sit.</Header>
          </div>
          <div className="page10CenterContent">
              <div className="page10ContentImg">
                  <img src={Img4} alt="" />
              </div>
              <div className="page10CenterContentPara">
                  <p>“Something that's really unique & special about a faith group is that it's in a small intimate setting. So you get to learn, read the word of God, and connect on a more intimate level than on Sunday mornings…”</p>
                  <div>
                      <span style={{fontWeight: 300}}>Jane Doe</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="page10Bottom">
          <div className="page10BottomTitle">
              <H2>Lorem ipsum dolor sit.</H2>
          </div>
          <div className="page10BottomContent">
              {cards.map(()=>(
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
      <Footer />
    </Container>
  )
}

export default Page10