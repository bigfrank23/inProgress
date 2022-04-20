import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './banner.css'
import mapImg from '../../images/map1.PNG'
import PText from '../Text/PText'

const Container = styled.div`
    width: 100%;
    /* height: 40vh; */
`
const Banner = () => {
  return (
    <Container>
      <div className="banner">
        <div className="bannerCenter">
          <div className="bannerTitle">
            <blockquote>
              <h2>
                To unite all Pentecostal churches, bodies and believers for the
                fellowship, encouragement and inspiration
              </h2>
            </blockquote>
          </div>
          {/* <Link to='#'>
                  <div className="bannerBtn">Lorem ipsum dolor sit.</div>
              </Link> */}
        </div>
      </div>
      <div className="navyblue">
        <div className="navyblueContainer">
          <div className="navyblueContentLeft">
            <div className="icon">
              <i className="fa fa-map-marker markerBanner" aria-hidden="true" />
            </div> 
            <div className="title">
              <Link to="#" className="links">
                <h2>Visit The State Secretariat</h2>
              </Link>
              <i className="fa fa-angle-right angleBanner" aria-hidden="true" />
            </div>
            <div className="desc">
              <PText weight color>
                <span>In-person between 8:00am -5:00pm</span><br />
                <span>Mondays - Fridays </span>
              </PText>
            </div>
            
            {/* <img src={mapImg} alt="" /> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8952243424005!2d3.3613995231304887!3d6.534914809746428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8de2d6dc2833%3A0x6b683e00c6393bd7!2sPentecostal%20Fellowship%20of%20Nigeria%2C%20Lagos%20State!5e0!3m2!1sen!2sng!4v1650445203740!5m2!1sen!2sng" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
          <div className="divider" />
          <div className="navyblueContentRight">
            <div className="icon">
              <i className="fa fa-phone markerBanner" aria-hidden="true" />
            </div> 
            <div className="title">
              <Link to="#" className="links">
                <h2>Contact the Secretariat</h2>
              </Link>
              <i className="fa fa-angle-right angleBanner" aria-hidden="true" />
            </div>
            <div className="desc">
              <PText weight color>
                <span>Online between 9:00am - 4:00pm</span><br />
                <span>Mondays - Fridays </span>
              </PText>
            </div>
            
            {/* <img src={mapImg} alt="" /> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8952243424005!2d3.3613995231304887!3d6.534914809746428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8de2d6dc2833%3A0x6b683e00c6393bd7!2sPentecostal%20Fellowship%20of%20Nigeria%2C%20Lagos%20State!5e0!3m2!1sen!2sng!4v1650445203740!5m2!1sen!2sng" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Banner