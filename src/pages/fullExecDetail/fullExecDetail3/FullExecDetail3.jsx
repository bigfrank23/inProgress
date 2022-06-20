import React from "react";
import Img5 from "../../../images/slider1.png";
import cwcImg from "../../../images/team/akinola.jpg";
import styled from "styled-components";
// import "./FullExecDetail2.css";
import Footer from "../../../components/Footer/Footer";
import { faChurch, faAddressCard, faPhone, faCalendar, faUser, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { landscapeTab, mobile, tab } from "../../../responsive";

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
    ${mobile({height: "40vh", backgroundSize: "100%", backgroundPosition: "0 25%",  clipPath: "unset"})}
    ${tab({ height: "42vh", backgroundSize: "100% 36%", backgroundPosition: "unset"})}
    ${landscapeTab({ height: "65vh", backgroundSize: "cover", backgroundPosition: "0 -150px"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
      .giveNowBtn{
          margin-top: 2rem;
      }
    }
  }
`;

const FullExecDetail3 = () => {
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
              <img src={cwcImg} alt="PASTOR LEKE AKINOLA" />
          </div>
          <div className="fullExecDetailContainerRight">
              <div className="fullExecDetailContainerRightName">
                  <h2>PASTOR LEKE AKINOLA</h2>
              </div>
              <div className="fullExecDetailContainerRightTitle">
                  <h5>DEPUTY CHAIRMAN</h5>
              </div>
              <div className="fullExecDetailContainerRightProvince">
              <FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faMapMarkerAlt} />
                  <h6>Kosofe Province</h6>
              </div>
              <div className="fullExecDetailContainerLeftContent">
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faUser} />General overseer</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faChurch} />Upper Room Baptist Church</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon" icon={faAddressCard} />20, Davies Street, Off Demurin Street, Ketu Lagos</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon" icon={faPhone} />08035652137, 08057845480</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faCalendar} />2nd February</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faEnvelope} />lekeakinola@yahoo.co.uk</span>
              </div>
              <div className="fullExecDetailContainerRightBio">
                  <p>
                  Born 2nd February 1959, a pastor called to raise and nurture men to be fulfilled in life and heaven focused.
                  </p>
              </div>
          </div>
      </div>
      <Footer />
     </Container> 
  )
}

export default FullExecDetail3