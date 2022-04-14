import React from 'react'
import Img from "../../images/splash3.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import './History2.css'
import Header from '../../components/Text/Header';
import H2 from '../../components/Text/H2';
import PText from '../../components/Text/PText';
import H3 from '../../components/Text/H3';
import { Link } from 'react-router-dom';
import Upcomin from '../../components/Upcoming/Upcomin';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';

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
    background-attachment: fixed;
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

const History2 = () => {
  const [scroll, setScroll] = useState(false)
  const [scroll2, setScroll2] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 330) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setScroll2(true);
      } else {
        setScroll2(false);
      }
    });
  });
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>History of PFN</h1>
        </div>
      </div>
      <div className="historyTopContainer">
        <div className="historyFlexContainer">
          <div className={scroll ? "animate1" : "historyGridContainer"}>
            <div className={scroll ? "animate2" : "firstImgBx"}>
              <img src={Img2} alt="" />
            </div>
            <div className="secondImgBx">
              <img src={Img2} alt="" />
            </div>
            <div className="thirdImgBx">
              <img src={Img2} alt="" />
            </div>
          </div>
          <div className="historyContainerRight">
            <h1>History of PFN</h1>
            <h2>(COMING A LONG WAY)</h2>
            <hr id="hr" />
            <div className="historyMainTxt">
              <PText color>
                <p id='large'>
                Yet, the Pentecostal movement in Nigeria is less than 100
                <div className={scroll2 ? "animate3" : "historyFloatImgBx"}>
                  <img src={Img2} width={200} alt="" /> 
                  </div>
                launched an indigenous
                years old. It started in early 1900s when Anglican
                prophetic movement that later became the Christ Army Church
                following an outbreak of influenza epidemic in 1918. Other
                groups soon emerged such as Eternal Sacred Order of the Cherubim
                and Seraphim society in 1925 and the Church of the Lord Aladura
                in 1930.
                </p>
                <PText color>
                  {" "}
                  But by far, the biggest sensation in the movement about this
                  time was the Oke-Oye, Ilesha revival by Joseph Babalola of
                  faith Tabernacle. A heated argument was on by concerned rulers
                  over miracles when Babalola raised a dead lad. That miracle
                  effectively ended the controversy and ushered in a revival
                  meeting that lasted for years.{" "}
                </PText>
                <PText color>
                  In 1941, Babalola founded the Christ Apostolic Church (CAC).
                  Other foreign Churches such as Welsh Apostolic Church (1939)
                  and the Foursquare Gospel Church (1954) also came on board.
                  The era was marked with fervent prayers.{" "}
                </PText>
                <PText color>
                  {" "}
                  In 1950s, the Celestial Church of Christ (CCC) arrived in
                  western Nigeria through Benin, its founder was Oshoffa. The
                  church made so much in-road into every strata of the society.
                  A member of Cherubim and Seraphim, Pa Josiah Akindayomi pulled
                  out to form the Redeemed Christian Church of God (RCCG),
                  reputed to be the fastest growing denomination in the world
                  with a church almost in every five minutes walking and driving
                  distance in Nigeria and Overseas respectively. This is largely
                  due to the visionary leadership of its current general
                  overseer Pastor Enoch Adeboye.{" "}
                </PText>
                <PText color>
                  {" "}
                  By 1960s- 1970s, the movement spread to campuses and secondary
                  schools in the nation in a sweeping revival that saved
                  thousands of students. The scripture union is credited with
                  this sweeping revival that birthed many independent churches.
                  Africa’s finest Pentecostal preacher, Arch Bishop Benson
                  Idahosa is the leader of this movement that focused on faith
                  and prosperity largely because of the despicable financial
                  state of the then Pentecostals. Idahosa, it was, who opened a
                  new vista of opportunities of Pentecostalism in Nigeria,
                  drawing mammoth crowd with stupendous healing and miracle
                  following. In 1972, he founded the Church of God Mission
                  International followed by the Deeper Life Bible Church in 1975
                  by Pastor Williams Kumuyi.{" "}
                </PText>
                <PText color>
                  {" "}
                  The period between 1980 and now has witnessed proliferation of
                  independent Pentecostal Churches led by fiery preachers such
                  as Bishop David Oyedepo, Bishop Wale Oke, Evangelist Uma
                  Ukpai, Pastor Ayo Oritshejafor among others.{" "}
                </PText>
              </PText>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
}

export default History2