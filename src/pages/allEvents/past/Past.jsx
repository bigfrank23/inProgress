import React from 'react'
import Img from "../../../images/upcomingEvents/upcomingBg.jpg";
import Img3 from "../../../images/bg2.jpg";
import styled from "styled-components";
import H2 from '../../../components/Text/H2';
import Button from '../../../components/Button/Button';
import Footer from '../../../components/Footer/Footer';
import { past } from './pastData';
import { Link } from 'react-router-dom';
import { mobile } from '../../../responsive';

const Container = styled.div`
user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
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
    ${mobile({ height: "40vh", clipPath: "unset", backgroundPosition: "bottom"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
`;

const Past = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Past Events</h1>
        </div>
      </div>
      <div className="page5">
            {past.map((data)=> (
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
                    <p id="upcomingPara" style={{textTransform: "uppercase"}}>
                      {data.desc ? <><b>{data.desc}</b></> : null}
                    </p>
                    <p id="upcomingPara">
                      {data.desc ? <><b>{data.more}</b></> : null}
                    </p>
                    <p>
                      <b>{data.theme}</b>
                    </p>
                    <p>
                      <b>{data.date2}</b>
                    </p>
                    </div>
                    <div className="page5Btn">
                    <Link key={data.id} to={{pathname: `/full-event-detail`, state: {title: `${data.title}`, img: `${data.img}`,date: `${data.date}`, time: `${data.time}`, location: `${data.location}`, desc: `${data.desc}`}}}>
                    <Button BtnText='See Event' />
                    </Link>
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

export default Past