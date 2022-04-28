import React from "react";
import Img from "../../images/sac.png";
import Img1 from "../../images/sec.png";
import Img2 from "../../images/mission4.png";
import Img3 from "../../images/bg2.jpg";
import Img4 from "../../images/My-Post-15.png";
import styled from "styled-components";
import "./OurMission.css";
import Button from "../../components/Button/Button";
import Header from "../../components/Text/Header";
import H2 from "../../components/Text/H2";
import PText from "../../components/Text/PText";
import H3 from "../../components/Text/H3";
import Button2 from "../../components/Button/Button2";
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import ControlledAccordions from "../../components/accordion/MUIaccordion";
import { Link } from "react-router-dom";

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  /* background: url(${Img3}); */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2134%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient2135)'%3e%3c/rect%3e%3cpath d='M0 0L224.03 0L0 100.89z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 100.89L224.03 0L271.01 0L0 242.82z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 242.82L271.01 0L487.28 0L0 309.77z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 309.77L487.28 0L760.29 0L0 337.7z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 560L877.49 560L1440 427.16999999999996z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 427.16999999999996L877.49 560L619.0799999999999 560L1440 234.59999999999997z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 234.60000000000002L619.0799999999999 560L595.4899999999999 560L1440 92.76000000000002z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 92.75999999999999L595.4899999999999 560L224.4799999999999 560L1440 81.25999999999999z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2134'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2135'%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='0.3'%3e%3c/stop%3e%3cstop stop-color='rgba(95%2c 144%2c 1%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  /* display: flex;
  align-content: center;
  justify-content: center; */
  background-size: contain;
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    clip-path: polygon(54% 0, 84% 0, 100% 0, 100% 85%, 80% 92%, 50% 100%, 19% 93%, 0 83%, 0 0, 26% 0);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img2});
    background-size: contain;
    background-attachment: fixed;
    background-position: 0 15px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 62vh;
    .page1Header {
      color: #fff;
      text-align: center;
      .giveNowBtn {
        margin-top: 2rem;
      }
    }
  }
`;
const OurMission = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>Our Mission</h1>
        </div>
      </div>
      {/* <div className="ourMissionContainer"> */}
      <div className="ourMissionContainerBody">
        <div className="ourMissionContainerTitle">
          <p>
            Penticostal Fellowship of Nigeria is the coming together of the holy
            spirit filled Christian Churches and Organization who believe and
            practice the full GOSPEL MESSAGE(ACT2), in an independence ad
            autonomous Christian Fellowship for the following objectives below <i className="fa fa-hand-o-down" />
          </p>
        </div>
        <div className="ourMissionBxCard">
          <div className="ourMissionBx">
            <div className="ourMissionBxContent">
              <h2>01</h2>
              <h3>
                {" "}
                <i className="fa fa-check-square-o" />{" "}
              </h3>
              <p>
              To maintain close relationship among member Churches Organizations, and other approved Christian or Religious Organizations, both in and outside Nigeria, for the purpose of undertaking joint programs for the furtherance of the Gospel.
              </p>
            </div>
          </div>
        </div>
        <div className="ourMissionBxCard">
          <div className="ourMissionBx">
            <div className="ourMissionBxContent">
              <h2>02</h2>
              <h3>
                <i className="fa fa-check-square-o" />
              </h3>
              <p>
              To co-operate with other Christian Organizations established for the purpose of Christianity.
              </p>
            </div>
          </div>
        </div>
        <div className="ourMissionBxCard">
          <div className="ourMissionBx">
            <div className="ourMissionBxContent">
              <h2>03</h2>
              <h3>
                <i className="fa fa-check-square-o" />
              </h3>
              <p>
              To encourage unhindered propagation of the doctrine of Christ throughout Nigeria and uphold Christian Ethics.
              </p>
            </div>
          </div>
        </div>
        <div className="ourMissionBxCard">
          <div className="ourMissionBx">
            <div className="ourMissionBxContent">
              <h2>04</h2>
              <h3>
                <i className="fa fa-check-square-o" />
              </h3>
              <p>
              To protect and uphold Christian Ethics and integrity, and see to its healthy development, free from Political, Religious, Racial and Ethnic interference.
              </p>
            </div>
          </div>
        </div>
        <div className="ourMissionBxCard">
          <div className="ourMissionBx">
            <div className="ourMissionBxContent">
              <h2>05</h2>
              <h3>
                <i className="fa fa-check-square-o" />
              </h3>
              <p>
              To co-operate with every level of Government and governmental bodies in matters concerning the spread of Christianity, religious tolerance, total freedom of worship, maintenance of peaceful co-existence among all shades of belief
              </p>
            </div>
          </div>
        </div>
        <div className="ourMissionBxCard">
          <div className="ourMissionBx">
            <div className="ourMissionBxContent">
              <h2>06</h2>
              <h3>
                <i className="fa fa-check-square-o" />
              </h3>
              <p>
              To educate its members and aggregate public opinion on matters of National Importance, thereby assisting in creating and developing a Nation where probity, equity, good character, peace and good governance are guaranteed.
              </p>
            </div>
          </div>
        </div>
        <div className="ourMissionBxCard">
          <div className="ourMissionBx">
            <div className="ourMissionBxContent">
              <h2>07</h2>
              <h3>
                <i className="fa fa-check-square-o" />
              </h3>
              <p>
              To ensure by reputation, that the views of the Organization on Local, National and International issues are sufficiently enlightened.
              </p>
            </div>
          </div>
        </div>
        <div className="ourMissionBxCard">
          <div className="ourMissionBx">
            <div className="ourMissionBxContent">
              <h2>08</h2>
              <h3>
                <i className="fa fa-check-square-o" />
              </h3>
              <p>
              To appoint representatives to the National Executive Committee of the Christian Association of Nigeria (CAN), of whom, one shall be alternative representative.
              </p>
            </div>
          </div>
        </div>
        <div className="ourMissionBxCard">
          <div className="ourMissionBx">
            <div className="ourMissionBxContent">
              <h2>09</h2>
              <h3>
                <i className="fa fa-check-square-o" />
              </h3>
              <p>
              To serve as the mouthpiece of the Pentecostal Movement in Nigeria, for reflecting sound and fundamental views based upon belief, truth and wisdom of the Holy Spirit.
              </p>
            </div>
          </div>
        </div>
        <div className="ourMissionBxCard">
          <div className="ourMissionBx">
            <div className="ourMissionBxContent">
              <h2>10</h2>
              <h3>
                <i className="fa fa-check-square-o" />
              </h3>
              <p>
              To set up standards of Faith, Doctrine and code of Ethics, to which members must subscribe.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </Container>
  );
};

export default OurMission;
