import React from 'react'
import Img from "../../images/eventsBg.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import H3 from '../../components/Text/H3';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import './AllEvents.css'
import H2 from '../../components/Text/H2';
import Footer from '../../components/Footer/Footer';
import Upcomin from '../../components/Upcoming/Upcomin';
import { landscapeTab, mobile, tab } from '../../responsive';

const Container = styled.div`
user-select: none;
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
    /* background-position: center; */
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 62vh;
    ${mobile({ height: "40vh", clipPath: "unset", backgroundSize: "100% 50%"})}
    ${tab({ height: "42vh", backgroundSize: "100% 50%", backgroundPosition: "unset", clipPath: "unset", })}
    ${landscapeTab({ height: "62vh", backgroundSize: "100% 100%", clipPath: "polygon(0 0, 100% 0%, 100% 79%, 0% 100%)"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
`

const AllEvents = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>All Events</h1>
        </div>
      </div>
      <div className="page4Top">
          <div className="page4TopLeft" id='allEventsOverlay'>
        <Link to="/upcoming-events">
            <div className="overlayTxt">
              <h5 className="txtGreen" id='allEventsTxt'>Upcoming <span className="txtWhite" id='allEventsTxt'>Events</span></h5>
            </div>
            <div className="txtOne">
              <h6>All the prosperous of the earth will eat and worship...Psalm 22:29</h6>
            </div>
            <div className="btnBx">
              <Button BtnText='View All' />
            </div>
        </Link>
          </div>
        <div className="page4TopCenter" id='allEventsOverlay'>
          <Link to="/current-events">
            <div className="overlayTxt">
              <h5 className="txtGreen" id='allEventsTxt'>Current <span className="txtWhite" id='allEventsTxt'>Events</span></h5>
            </div>
            <div className="txtOne"><h6>The kingdom of heaven may be compared to a king who gave a wedding feast for his son...Matthew 22:2</h6></div>
            <div className="btnBx">
              <Button BtnText='View All' />
            </div>
          </Link>
        </div>
        <div className="page4TopRight" id='allEventsOverlay'>
          <Link to="/past-events">
            <div className="overlayTxt">
              <h5 className="txtGreen" id='allEventsTxt'>Past <span className="txtWhite" id='allEventsTxt'>Events</span></h5>
            </div>
            <div className="txtOne"><h6>
            After these events, the word of the Lord came to Abram in a vision...Genesis 15:1</h6></div>
            <div className="btnBx">
              <Button BtnText='View All' />
            </div>
          </Link>
        </div>
      </div>
      <div className="spacerBox d-flex justify-content-center">
          <div className="spacer"></div>
      </div>
      <Footer />
      </Container>
  )
}

export default AllEvents