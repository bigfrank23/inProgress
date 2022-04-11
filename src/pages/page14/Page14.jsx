import React from 'react'
import Img1 from "../../images/splash3.jpg";
import Img5 from "../../images/federico-respini-sYffw0LNr7s-unsplash.jpg";
import Img2 from "../../images/splash1.jpg";
import Img3 from "../../images/bg2.jpg";
import Img4 from "../../images/splash2.jpg";
import Img6 from "../../images/book-image.png"
import styled from "styled-components";
import "./Page14.css";
import H2 from "../../components/Text/H2";
import PText from "../../components/Text/PText";
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Text/Header';
import H3 from '../../components/Text/H3';
import H4 from '../../components/Text/H4';
import ControlledAccordions from '../../components/accordion/MUIaccordion';

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

const Page14 = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>Page 14</h1>
        </div>
      </div>
      <div className="page14Top">
        <div className="page14TopContent">
          <div className="page14TopHeader">
            <Header color>Lorem ipsum dolor sit amet.</Header>
          </div>
          <div className="page14TopTitle">
            <H2>
              FEELING DEFEATED, HOPELESS, OR NEED GUIDANCE TO BREAK HABITS?
            </H2>
          </div>
          <div className="page14TopPara">
            <PText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              corporis commodi consectetur alias amet. Debitis dolore
              voluptatibus doloribus eum saepe quo veritatis quae impedit?
              Magnam voluptate doloremque atque illum molestias? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Unde ipsa magnam
              consequuntur eligendi temporibus eveniet aliquam natus nostrum
              minus nemo excepturi incidunt fugit deleniti, soluta minima fuga
              tempore illum odio sed rem veniam sapiente aliquid. Nulla, quam
              debitis. Error cumque non magnam sequi autem animi maxime
              voluptatibus magni, officiis ea dicta nulla libero, neque
              eligendi! Dolor consectetur culpa esse, omnis, aliquid optio
              obcaecati, numquam atque molestias amet adipisci tenetur?
              Explicabo, aspernatur accusamus magni iure repellendus sequi
              quibusdam culpa odit autem voluptas cumque mollitia aperiam!
              Fugiat numquam possimus optio, dolores blanditiis deleniti libero
              obcaecati ut? Nostrum, soluta minima! Nihil, repellat esse!
            </PText>
          </div>
          <div className="page14TopTitle2">
            <H4 color="green">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </H4>
          </div>
          <div className="page14TopPara2">
            <PText weight>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </PText>
          </div>
          <div className="page14TopVid">
            <iframe title='Checkout' src="https://www.youtube.com/embed/tgbNymZ7vqY" ></iframe>
          </div>
        </div>
      </div>
      <div className="page14Center">
        <div className="page14CenterLeft">
          <img src={Img6} alt="" />
        </div>
        <div className="page14CenterRight">
          <H3 transform>"Lorem ipsum dolor sit amet."</H3>
          <div className="page14CenterRightPara">
            <PText>
            <b>Lorem ipsum dolor sit amet?</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aut quasi fuga adipisci ipsam rem nisi eligendi sequi repudiandae reiciendis assumenda? ignissimos facere ex officia commodi non distinctio ducimus reiciendis animi, asperiores rerum repellendus sapiente sequi, praesentium ea temporibus? Sit quidem reiciendis repellendus labore similique aspernatur obcaecati totam? Molestias quas fugiat, tempore excepturi maiores similique! Explicabo atque autem iusto iste! Voluptatibus modi alias assumenda saepe natus, voluptatem asperiores suscipit dignissimos ut odit reiciendis?
            </PText>
            <PText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus repudiandae </PText>
          </div>
        </div>
      </div>
      <div className="page14Bottom">
        <ControlledAccordions />
      </div>
      <Footer />
    </Container>
  );
}

export default Page14