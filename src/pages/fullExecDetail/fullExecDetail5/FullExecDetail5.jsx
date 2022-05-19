import React from "react";
import Img5 from "../../../images/slider1.png";
import phyllisImg from '../../../images/team/phyllis.jpeg'
import styled from "styled-components";
// import "./FullExecDetail2.css";
import Footer from "../../../components/Footer/Footer";
import { faChurch, faAddressCard, faPhone, faAt, faCalendar, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const FullExecDetail5 = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>CWC</h1>
        </div>
      </div>
      <div className="fullExecDetailContainer">
          <div className="fullExecDetailContainerLeft">
              <img src={phyllisImg} alt="REV (DR) Phyllis Peace Goodey" />
          </div>
          <div className="fullExecDetailContainerRight">
              <div className="fullExecDetailContainerRightName">
                  <h2>REV (DR) Phyllis Peace Goodey</h2>
              </div>
              <div className="fullExecDetailContainerRightTitle">
                  <h5>TREASURER</h5>
              </div>
              <div className="fullExecDetailContainerLeftContent">
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faUser} />Lead Pastor</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faChurch} />Christ Believers Healing Ministries AKA Christ Believers Assembly</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon" icon={faAddressCard} />Truth And Holiness Parish Oluwakemi Close(Street by Access Bank) off Addo Road, Ajah.</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon" icon={faPhone} />08057797482, 08023187035</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faCalendar} />27th November</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faEnvelope} />goodeypeace@yahoo.com</span>
              </div>
              <div className="fullExecDetailContainerRightBio">
                  <p>
                  My name is Dr Peace Goodey, I generally oversee to Parishes of Christ Believers Healing Ministry and I am also the founder of the Alabaster Jar Foundation For Teenage Mums. I have a degree in Optometry and a Post Graduate Diploma in Leadership and Theology from
                  </p>
              </div>
          </div>
      </div>
      <Footer />
     </Container> 
  )
}

export default FullExecDetail5