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
    height: 100vh;
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
          <h1>Page 13</h1>
        </div>
      </div>
      <div className="page13Top">
          <div className="page13TopContent">
            <div className="page13TopTitle">
                <H2>Lorem ipsum dolor sit.</H2>
            </div>
            <div className="page13TopPara">
                <PText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore a ad nisi, consectetur facere? Officia unde sint nobis veritatis repellendus, quidem tempora assumenda a tenetur minus quod suscipit quibusdam itaque corporis magni quo eveniet hic natus delectus aperiam esse sequi labore. Veritatis quasi nihil unde ipsam labore dolores quidem?</PText>
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
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className="inputEmail">
                    <label htmlFor="name"><PText>Email*</PText></label>
                    <input type="text" placeholder="" />
                  </div>
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
                  <div className="textArea">
                      <PText>Lorem, ipsum.*</PText>
                      <textarea name="" id=""/>
                  </div>
                  <Button />
              </form>
          </div>
      </div>
      <div className="page13Bottom">
          <div className="page13BottomContent">
              <div className="page13BottomTitle">
                  <H2 color>Lorem ipsum dolor sit amet.</H2>
              </div>
              <div className="page13BottomPara">
                  <PText color>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus voluptatem sit odit voluptates alias, ad ut id deleniti in commodi nulla. Consequuntur esse sequi quam, aperiam libero modi iste aliquid, quae ratione necessitatibus delectus! Quaerat necessitatibus similique veniam error deserunt voluptate quidem, nobis itaque consequatur sit, neque labore libero provident!

                  </PText>
              </div>
              <div className="page13BottomBtn">
                  <Button2 />
              </div>
          </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Page13;
