import React from "react";
import Img5 from "../../../images/slider1.png";
import cwcImg from "../../../images/pro8.jpg";
import styled from "styled-components";
import "./FullExecDetail2.css";
import Footer from "../../../components/Footer/Footer";
import { faChurch, faAddressCard, faPhone, faCalendar, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: #fff;
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    clip-path: polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0 0);
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${Img5});
    background-size: cover;
    background-attachment: fixed;
    background-position: 0 -150px;
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
      .giveNowBtn{
          margin-top: 2rem;
      }
    }
  }
`;

const FullExecDetail2 = () => {
    const location = useLocation()
    // const query = new URLSearchParams(location.search)
    // console.log(location.state.name)
    // console.log(query.get('id'))
  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>CWC</h1>
        </div>
      </div>
      <div className="fullExecDetailContainer">
          <div className="fullExecDetailContainerLeft">
              <img src={cwcImg} alt="APOSTLE Enyinnaya Emeka Okwuonu" />
          </div>
          <div className="fullExecDetailContainerRight">
              <div className="fullExecDetailContainerRightName">
                  <h2>APOSTLE Enyinnaya Emeka Okwuonu</h2>
              </div>
              <div className="fullExecDetailContainerRightTitle">
                  <h5>CHAIRMAN</h5>
              </div>
              <div className="fullExecDetailContainerLeftContent">
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faUser} /> Lead Pastor</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faChurch} />New Life Christian Church</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon" icon={faAddressCard} /> 97c, Marine Road, Apapa GRA</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon" icon={faPhone} /> 08023355366, 07061000181</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faCalendar} /> 30th March</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faEnvelope} /> enyinnaya56@yahoo.com</span>
              </div>
              <div className="fullExecDetailContainerRightBio">
                  <p>
                  My name is Apostle Dr Enyinnaya Emeka Okwuonu, married to Pastor Mrs Treasure Uloma Okwuonu, have three children and a grandson.
                  </p>
              </div>
          </div>
      </div>
      <Footer />
     </Container> 
  )
}

export default FullExecDetail2