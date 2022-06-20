import React from "react";
import Img5 from "../../../images/slider1.png";
import cwcImg from "../../../images/team/akinyele.jpg";
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

const FullExecDetail4 = () => {
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
              <img src={cwcImg} alt="APOSTLE Mehmood Akinyele Akindejoye" />
          </div>
          <div className="fullExecDetailContainerRight">
              <div className="fullExecDetailContainerRightName">
                  <h2>APOSTLE Mehmood Akinyele Akindejoye</h2>
              </div>
              <div className="fullExecDetailContainerRightTitle">
                  <h5>SECRETARY</h5>
              </div>
              <div className="fullExecDetailContainerRightProvince">
              <FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faMapMarkerAlt} />
                  <h6>Epe Province</h6>
              </div>
              <div className="fullExecDetailContainerLeftContent">
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faUser} />Senior Pastor</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faChurch} />Guiding Light Assembly</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon" icon={faAddressCard} />Epe Blk 2, Plot 5, Atowa Adegoke Street, Agric Estate, Papa-Epe, Lagos.</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon" icon={faPhone} />08033212772, 09055514094</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faCalendar} />9th March</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faEnvelope} /> dejoye@gmail.com Pastorakinz2@yahoo.com</span>
              </div>
              <div className="fullExecDetailContainerRightBio">
                  <p>
                  Apostle Akin Akindejoye formerly a Muslim who got converted to Christianity. Trained in accounting, Theology and English, he is called to be a teacher and preacher of the word of God which he does with power, passion, insight and addiction for heaven. Pastor Akin, as he is fondly called, previously lectured at Community Bible Institute CBI and Light Bible Institute LBI, both in Lagos Nigeria. Pastor Akin is an author of several books including Subsidy, Journey of a Dream, Journey to Berachah, One Talent Servant, among others. He is the Senior Pastor of GLA Global City Church Epe, Lagos. He is also the Founder and President of AMA World Outreach. The ministry is the sponsor of the annual Youth Conference, Pentecostal Groove as well as the Adventure Seminar Series and Talent Warehouse.. He is a member of the Nigerian Coalition of Apostolic Leaders NCAL as well as the International Coalition Of Apostolic Leaders ICAL. He has held several leadership positions in the Pentecostal Fellowship of Nigeria. Be was the pioneer Secretary of Lekki Region, pioneer province Chairman of Epe-Lekki Province and State Deputy Secretary. He currently serves as the State Secretary, Pentecostal Fellowship of Nigeria PFN, Lagos State. He is happily married and blessed with children. Phone : +234-8033212772 E-mail : dejoye@gmail.com .
                  </p>
              </div>
          </div>
      </div>
      <Footer />
     </Container> 
  )
}

export default FullExecDetail4