import React from 'react'
import Img from '../../images/splash2.jpg'
import Img2 from '../../images/splash3.jpg'
import Img3 from '../../images/bg2.jpg'
import BgImg from '../../images/splash1.jpg'
import styled from 'styled-components'
import Header from '../../components/Text/Header'
import H2 from '../../components/Text/H2'
import PText from '../../components/Text/PText'
import './Chapters.css'
import H3 from '../../components/Text/H3'
import { Link, useLocation } from 'react-router-dom'
import Upcomin from '../../components/Upcoming/Upcomin'
import Footer from '../../components/Footer/Footer'
import { faChurch, faAddressCard, faPhone, faAt, faCalendar, faUserCircle, faUser, faClock, faAddressBook, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    height: 65vh;
    .page1Header {
      color: #fff;
      text-align: center;
      text-transform: capitalize !important;
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
    margin-top: 50rem;
    padding: 4rem;
    color: #fff;
    text-align: center;
  }
`
const Chapters = () => {
    const location = useLocation()
    // const query = new URLSearchParams(location.search)
    console.log(location.state)
    // console.log(query.get('id'))
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1 style={{textTransform: "uppercase"}}>{location.state.province} Province</h1>
        </div>
      </div>
      <div className="page6Bx3">
          <div className="page6Bx3Content">
              <div className="page6Img" dangerouslySetInnerHTML={{__html: location.state.mapLink}}>
                  {/* <img src={Img2} alt="" /> */}
              </div>
              <div className="page6Txt">
                  <h3>{location.state.province}</h3>
                  <div style={{padding: '1rem 0'}}>
                    <div className="page6TxtPara">
                        <span> <b>Chairman: </b> {location.state.chairman}</span>
                        <span> <b>Secretariat: </b> {location.state.Secretariat ? location.state.Secretariat : "null"}</span>
                        <span> <b>Meeting days: </b> {location.state.MeetingDays}</span>
                        <span> <b>Time: </b> {location.state.time}</span>
                    </div>
                  </div>
                  <div style={{padding: "2rem 0"}}>
                    <Header>Chapters</Header>
                  </div>
                  {/* <Link to="#" className='links' style={{fontWeight: 900, color: 'green'}}>
                  Register Now »
                  </Link> */}
              </div>
          </div>
          <div className="page6Bx5">
            <div className="page6Bx5Title">
              <H2 children='Interested in more information?' />
            </div>
            <div className="page6Bx5Title" style={{paddingTop: '1rem'}}>
              <PText children='Contact the province chairman' />
            </div>
            <div className="page6Bx5Img">
              <img src={Img2} alt="" />
            </div>
            <div className="page6Bx5Title" style={{paddingTop: '1.5rem'}}>
              <PText children='John Doe' />
            </div>
            <div className="page6Bx5Title">
              <PText children='johndoe@gmail.com' />
            </div>
          </div>
      </div>
          <Footer />
    </Container>
  )
}

export default Chapters