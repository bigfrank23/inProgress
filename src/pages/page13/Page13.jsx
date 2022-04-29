import React from "react";
import Img1 from "../../images/splash3.jpg";
import Img5 from "../../images/federico-respini-sYffw0LNr7s-unsplash.jpg";
import Img2 from "../../images/splash1.jpg";
import Img3 from "../../images/bg2.jpg";
import Img4 from "../../images/splash2.jpg";
import styled from "styled-components";
import "./Page13.css";
import H2 from "../../components/Text/H2";
import PText from "../../components/Text/PText";
import Button2 from "../../components/Button/Button2";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

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
      url(${Img5});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
`;
const Page13 = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>Prayer</h1>
        </div>
      </div>
      <div className="page13Top">
          <div className="page13TopContent">
            <div className="page13TopTitle">
                <H2>God is listening</H2>
            </div>
            <div className="page13TopPara">
                <PText>
                Penticostal Fellowship of Nigeria, Lagos State provides tools, teams, and times to help individuals – and the church family as a whole – pray. Prayer is vitally important to your relationship with God. We would love to pray for you, a friend, or a family member.
                </PText>
            </div>
          </div>
      </div>
      <div className="page13Center">
          <div className="page13CenterContent">
              <div className="page13CenterTitle">
                  <H2>How can we be Praying for you?</H2>
              </div>
              <form>
                  <div className="inputName">
                    <label htmlFor="name"><PText>Name*</PText></label>
                    <input type="text" placeholder="John doe" />
                  </div>
                  <div className="inputEmail">
                    <label htmlFor="name"><PText>Email*</PText></label>
                    <input type="text" placeholder="johndoe@email.com" />
                  </div>
                  <div className="radioBx">
                    <PText>Which Province do you belong?*</PText>
                    <div className="radio">
                        <label htmlFor=""><PText>Lorem, ipsium.</PText></label>
                        <input type="radio" />
                    </div>
                    <div className="radio">
                        <label htmlFor=""><PText>Lorem, ipsum.</PText></label>
                        <input type="radio" />
                    </div>
                    <div className="radio">
                        <label htmlFor=""><PText>Lorem, ipsum.</PText></label>
                        <input type="radio" />
                    </div>
                  </div>
                  <div className="textArea">
                      <PText>Prayer Request*</PText>
                      <textarea name="" id=""/>
                  </div>
                  <Button BtnText="SUBMIT" />
              </form>
          </div>
      </div>
      <div className="page13Bottom">
          <div className="page13BottomContent">
              <div className="page13BottomTitle">
                  <H2 color>Join the Prayer Team</H2>
              </div>
              <div className="page13BottomPara">
                  <PText color>
                  If you have a heart for people and prayer, we’d love to hear from you. You will be connected to a virtual prayer team, invited to pray weekly for our church prayer requests, and/or equip you to become a prayer minister for those that are in need after service. Contact us to express your interest in joining our prayer team. 
                  </PText>
              </div>
              <div className="page13BottomBtn">
                  <Button2 BtnText="JOIN THE TEAM" />
              </div>
          </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Page13;
