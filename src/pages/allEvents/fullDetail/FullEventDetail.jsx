import React from 'react'
import styled from 'styled-components'
// import Img from '../../images/splash2.jpg'
import Img from '../../../images/eventsBg.jpg'
import Img3 from '../../../images/bg2.jpg'
import BgImg from '../../../images/splash1.jpg'
import Footer from '../../../components/Footer/Footer';
import H3 from '../../../components/Text/H3';
import { Link, useLocation } from 'react-router-dom'
import './FullEventDetail.css'
import Button2 from '../../../components/Button/Button2'

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
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
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
const FullEventDetail = () => {
  const location = useLocation()
  console.log(location.state);
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header text-uppercase">
          <h1>{location.state.title}</h1>
        </div>
      </div>
      <div className="fullEventDetailContent">
          <div className="fullEventDetailImg m-auto">
            {location.state.img ? <><img src={location.state.img} alt="" style={{width: "100%"}} /></> : null}
          </div>
          <div className="sectThree">
            <div className="sectThreeTitle text-center">
              <H3>{location.state.title}</H3>
            </div>
            <div className="sectThreePara text-center">
              {location.state.date ? <><h5><b>Date: </b>{location.state.date}</h5></> : null}
            </div>
            <div className="sectThreePara text-center">
              {location.state.time ? <><h5><b>Time: </b>{location.state.time}</h5></> : null}
            </div>
            <div className="sectThreePara text-center">
              {location.state.location ? <><h5><b>Location: </b>{location.state.location}</h5></> : null}
            </div>
            <div className="sectThreePara text-center">
              {location.state.desc ? <><h5><b>{location.state.desc}</b></h5></> : null}
            </div>
            <div className="sectThreePara text-center">
              {location.state.more ? <><h5><b>{location.state.more}</b></h5></> : null}
            </div>
          </div>
      </div>
      <div className="fullEventBanner">
        <h4 className='text-center text-white py-3'>Have any questions to ask?</h4>
        <div className="sectTwoBtn p-5">
          <Link to="/contact">
          <Button2 BtnText="Contact now" />
          </Link>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default FullEventDetail