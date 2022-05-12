import React, {useEffect, useState} from "react";
import Img5 from "../../images/slider1.png";
import styled from "styled-components";
import "./FullExecDetail.css";
import Footer from "../../components/Footer/Footer";
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

const FullExecDetail = () => {
    const location = useLocation()

    useEffect(()=> {

    }, [])
  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>The PFN Lagos State Executives</h1>
        </div>
      </div>
      <div className="fullExecDetailContainer">
          <div className="fullExecDetailContainerLeft">
              <img src={Img5} alt="" />
              <span>Church Name</span>
              <span>Church Location</span>
              <span>08912345678, 08123456789</span>
              <span>DOB</span>
              <span>email@email.com</span>
          </div>
          <div className="fullExecDetailContainerRight">
              <div className="fullExecDetailContainerRightName">
                  <h2>Mr John Doe</h2>
              </div>
              <div className="fullExecDetailContainerRightTitle">
                  <h5>Executive Chairman</h5>
              </div>
              <div className="fullExecDetailContainerRightBio">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus cumque debitis repellat ratione incidunt, architecto quis deleniti ab, reprehenderit atque itaque illo dolorem cupiditate ad libero corporis nemo odit!
                  </p>
              </div>
          </div>
      </div>
      <Footer />
     </Container> 
  )
}

export default FullExecDetail