import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar';
import Img from '../../images/splash2.jpg'
import Img2 from '../../images/splash3.jpg'
import Img3 from '../../images/bg2.jpg'
import BgImg from '../../images/splash1.jpg'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

import './Page3.css'
import Header from '../../components/Text/Header';
import PText from './../../components/Text/PText';
import H2 from './../../components/Text/H2';
import H3 from '../../components/Text/H3';

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
          <h1>Header</h1>
        </div>
      </div>
      <div className="secOne">
        <div className="sectOneHeader">
          <Header children="lorem Ipdhhj" color />
        </div>
        <div className="sectOneTitle">
          {" "}
          <H2 children="lorem Ipsum isat sjhjh jhsg vhffejhke ghsgf gce" />{" "}
        </div>
        <div className="sectOnePara">
          {" "}
          <PText children="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum explicabo culpa animi deleniti? Earum voluptatem labore est dicta impedit ab maiores eveniet, voluptas exercitationem enim perspiciatis! Eligendi, perferendis. Esse, qui." />
        </div>
      </div>
      <div className="sectTwo">
        <div className="sectTwoHeader">
          {" "}
          <Header children="Lorem, ipsum dolor" color />{" "}
        </div>
        <div className="sectTwoTitle">
          {" "}
          <H2 children="Lorem ipsum dolor sit." color />{" "}
        </div>
        <div className="sectTwoBtn">
          <Button />
        </div>
      </div>
      <div className="sectThree">
        <div className="sectThreeHeader">
          <Header children="What we believe" color={false} />
        </div>
        <div className="sectThreeTitle">
          <H3 children="The Bible" />
        </div>
        <div className="sectThreePara">
          <PText children="We believe that the Bible, all sixty-six books, is inspired by God. It directs our beliefs and practices." />
        </div>
        <div className="sectThreeTitle">
          <H3 children="The Bible" />
        </div>
        <div className="sectThreePara">
          <PText children="We believe that the Bible, all sixty-six books, is inspired by God. It directs our beliefs and practices." />
        </div>
        <div className="sectThreeTitle">
          <H3 children="The Bible" />
        </div>
        <div className="sectThreePara">
          <PText children="We believe that the Bible, all sixty-six books, is inspired by God. It directs our beliefs and practices." />
        </div>
        <div className="sectThreeTitle">
          <H3 children="The Bible" />
        </div>
        <div className="sectThreePara">
          <PText children="We believe that the Bible, all sixty-six books, is inspired by God. It directs our beliefs and practices." />
        </div>
        <div className="sectThreeTitle">
          <H3 children="The Bible" />
        </div>
        <div className="sectThreePara">
          <PText children="We believe that the Bible, all sixty-six books, is inspired by God. It directs our beliefs and practices." />
        </div>
        <div className="sectThreeTitle">
          <H3 children="The Bible" />
        </div>
        <div className="sectThreePara">
          <PText children="We believe that the Bible, all sixty-six books, is inspired by God. It directs our beliefs and practices." />
        </div>
        <div className="sectThreeTitle">
          <H2 children="Our History" />
        </div>
        <div className="sectThreePara">
          <PText
            children="We believe that the Bible, all sixty-six books, is inspired by God. It directs our beliefs and practices.
                We believe that the Bible, all sixty-six books, is inspired by God. It directs our beliefs and practices."
          />
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Page2