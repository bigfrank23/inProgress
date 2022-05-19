import React from 'react'
import Img from "../../../images/splash3.jpg";
import Img2 from "../../../images/splash3.jpg";
import upcomingImg1 from "../../../images/upcomingEvents/upcoming1.jpeg";
import Img3 from "../../../images/bg2.jpg";
import styled from "styled-components";
import H2 from '../../../components/Text/H2';
import H3 from '../../../components/Text/H3';
import PText from '../../../components/Text/PText';
import './Upcoming.css'
import Button from '../../../components/Button/Button';
import Footer from '../../../components/Footer/Footer';
import { upcoming } from './upcomingData';

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
    height: 62vh;
    .page1Header {
      color: #fff;
      text-align: center;
    }
  }
`;

const Upcoming = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Upcoming Events</h1>
        </div>
      </div>
      <div className="page5">
            {upcoming.map((data)=> (
              <>
                <div className="page5Bx" key={data.id}>
                <div className="page5BxImg">
                    <img src={data.img} alt="" />
                </div>
                <div className="page5BxContent">
                    <div className="page5Title">
                    <H2>{data.title}</H2>
                    </div>
                    <div className="page5Date">
                    {data.date ? <><h5><b>Date</b></h5> : {data.date} </> : null}
                    </div>
                    <div className="page5Time">
                    {data.time ? <><h5><b>Time</b></h5> : {data.time} </> : null}
                    </div>
                    <div className="page5Location" id='upcomingLocation'>
                      {data.location ? <><h5><b>Location</b></h5> : {data.location} </> : null}
                    </div>
                    <div className="page5Para">
                    <p id="upcomingPara">
                      {data.desc ? <><b>{data.desc}</b></> : null}
                    </p>
                    <p>
                      <b>{data.theme}</b>
                    </p>
                    <p>
                      <b>{data.date2}</b>
                    </p>
                    <p>
                      <b>{data.more}</b>
                    </p>
                    </div>
                    <div className="page5Btn">
                    <Button BtnText='See Event' />
                    </div>
                </div>
                </div>
                <hr className='Hr' id='upcomingHr' />
                </>
            ))}
      </div>
      <Footer />
    </Container>
  )
}

export default Upcoming