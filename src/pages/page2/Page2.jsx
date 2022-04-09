import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar';
import Img from '../../images/splash2.jpg'
import Img2 from '../../images/splash3.jpg'
import Img3 from '../../images/bg2.jpg'
import BgImg from '../../images/splash1.jpg'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
// import Collapsible from "react-collapsible";
import useCollapse from "react-collapsed";

import './Page2.css'
import Header from '../../components/Text/Header';
import H2 from '../../components/Text/H2';
import {cwc, directors, team} from '../../teamMembers/team'
import ReadMore from '../../components/readMore/ReadMore';

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
const Collapsible = ({children}) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div {...getCollapseProps()}>
        <div className="con">
          {children}
        </div>
      </div>
      <div className="he" {...getToggleProps()}>
        {/* {isExpanded ? 	<i className= "fa fa-angle-double-up readMoreIcon" /> : <i className= "fa fa-angle-double-down readMoreIcon" />} */}
        <div style={{padding: "1rem 0"}}>
          </div>
      </div>
    </div>
  );
}
const Page2 = () => {
  const [itemsToShow, setItemsToShow] = useState(6)

  const showMore = () => {
    setItemsToShow(cwc.length)
  }
  const showLess = () => {
    setItemsToShow(6)
  }
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Our Team</h1>
        </div>
      </div>
      <div className="pageContent2">
        <div className="pageContentTitle">
          <Header children="The Executives" color={true} transform="uppercase" />
        </div>
        <div className="pageContentTop center">
          <div className="centerTitle">
            <H2 children="The  Central Working Committee (CWC)" />
          </div>

          <div className="centerContent">
            {cwc.map((data) => (
              <div className="centerContentB">
                <div className="imgBx">
                  <img src={data.img} width={50} alt="" />
                </div>
                <div className="centerContentText">
                  <h3>{data.name}</h3>
                  <p>{data.church}</p>
                    <p>{data.address}</p>
                  <Collapsible>
                    <p>{data.headOffice}</p>
                    <p>{data.tel}</p>
                    <p>{data.email}</p>
                    <p>{data.dOb}</p>
                    <p>{data.chapter}</p>
                    <p>{data.province}</p>
                    <p>{data.associatePastor}</p>
                    <p>{data.associatePastorChapter}</p>
                    <p>{data.associatePastorProvince}</p>
                    <p>{data.associatePastorTel}</p>
                  </Collapsible>
                </div>
              </div>
            ))}
          </div>
          <hr className="hr" />
          <div className="pageContentTop center">
            <div className="centerTitle">
              <H2 children="The Directors" />
            </div>
            <div className="centerContent2">
              {directors.map((data) => (
                <div className="centerContentB">
                  <div className="imgBx">
                    <img src={data.img} width={50} alt="" />
                  </div>
                  <div className="centerContentText">
                    <h3>{data.name}</h3>
                    <Collapsible>
                    <p>{data.church}</p>
                      <p>{data.address}</p>
                      <p>{data.headOffice}</p>
                      <p>{data.tel}</p>
                      <p>{data.email}</p>
                      <p>{data.dOb}</p>
                      <p>{data.chapter}</p>
                      <p>{data.province}</p>
                      <p>{data.associatePastor}</p>
                      <p>{data.associatePastorChapter}</p>
                      <p>{data.associatePastorProvince}</p>
                      <p>{data.associatePastorTel}</p>
                    </Collapsible>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="hr" />
          <div className="pageContentTop center">
            <div className="centerTitle">
              <H2 children="The Provincial Chairmen" />
            </div>
            <div className="centerContent2">
              {directors.map((data) => (
                <div className="centerContentB">
                  <div className="imgBx">
                    <img src={data.img} width={50} alt="" />
                  </div>
                  <div className="centerContentText">
                    <h3>{data.name}</h3>
                    <Collapsible>
                    <p>{data.church}</p>
                      <p>{data.address}</p>
                      <p>{data.headOffice}</p>
                      <p>{data.tel}</p>
                      <p>{data.email}</p>
                      <p>{data.dOb}</p>
                      <p>{data.chapter}</p>
                      <p>{data.province}</p>
                      <p>{data.associatePastor}</p>
                      <p>{data.associatePastorChapter}</p>
                      <p>{data.associatePastorProvince}</p>
                      <p>{data.associatePastorTel}</p>
                    </Collapsible>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Page2