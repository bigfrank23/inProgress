import React from 'react'
import Img2 from "../../images/splash3.jpg";
import HistoryImg1 from "../../images/history.png";
import HistoryImg2 from "../../images/history2.png";
// import HistoryImg2 from "../../images/history2.jpg";
import HistoryImg3 from "../../images/history3.png";
import HistoryImg5 from "../../images/history5.jpeg";
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import './History2.css'
import PText from '../../components/Text/PText';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { mobile } from '../../responsive';

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  /* background: url(${Img3}); */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1006%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M273 335L272 678' stroke-width='8' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M168 208L167 358' stroke-width='10' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M58 362L57 221' stroke-width='8' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M7 491L6 756' stroke-width='6' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1348 464L1347 44' stroke-width='6' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M31 431L30 58' stroke-width='8' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M757 538L756 869' stroke-width='8' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M638 204L637 -94' stroke-width='8' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1073 559L1072 713' stroke-width='8' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M664 122L663 451' stroke-width='6' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1221 367L1220 688' stroke-width='6' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M862 306L861 713' stroke-width='8' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M944 416L943 227' stroke-width='10' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M656 218L655 -15' stroke-width='10' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M275 490L274 133' stroke-width='8' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M73 497L72 694' stroke-width='8' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M126 52L125 221' stroke-width='6' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1409 467L1408 176' stroke-width='6' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M603 19L602 211' stroke-width='6' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1273 391L1272 -10' stroke-width='8' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1070 410L1069 208' stroke-width='6' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M379 398L378 778' stroke-width='6' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1329 457L1328 110' stroke-width='8' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1318 266L1317 673' stroke-width='10' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M892 65L891 -245' stroke-width='6' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M455 194L454 -178' stroke-width='10' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M504 541L503 182' stroke-width='8' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M998 217L997 11' stroke-width='10' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M277 149L276 -196' stroke-width='8' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M13 415L12 590' stroke-width='8' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M750 75L749 386' stroke-width='6' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1092 355L1091 505' stroke-width='10' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M407 113L406 466' stroke-width='10' stroke='url(%23SvgjsLinearGradient1008)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M823 4L822 255' stroke-width='8' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1404 471L1403 257' stroke-width='8' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1391 463L1390 744' stroke-width='10' stroke='url(%23SvgjsLinearGradient1007)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1006'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1007'%3e%3cstop stop-color='rgba(0%2c 135%2c 83%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 135%2c 83%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1008'%3e%3cstop stop-color='rgba(0%2c 135%2c 83%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 135%2c 83%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  /* display: flex;
  
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
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
    height: 65vh;
    ${mobile({height: "40vh"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({position: "relative", top: "25%"})}
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
    <Container id='historyBg'>
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
              <img src={HistoryImg1} alt="" />
            </div>
            <div className="secondImgBx">
              <img src={HistoryImg2} alt="" />
            </div>
            <div className="thirdImgBx">
              <img src={HistoryImg3} alt="" />
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
                  <img src={HistoryImg5} width={200} alt="" /> 
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