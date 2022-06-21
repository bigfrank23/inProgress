import React from 'react'
import styled from 'styled-components'
// import Img from '../../images/splash2.jpg'
import Img from '../../images/believe.png'
import Img3 from '../../images/bg2.jpg'
import BgImg from '../../images/splash1.jpg'
import Footer from '../../components/Footer/Footer';

import './ExtraPage.css'
import { provinces } from '../../teamMembers/provinces';
// import { Grid } from '@material-ui/core';
import { Grid } from '@mui/material'
import { Helmet } from 'react-helmet-async'

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
    height: 65vh;
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

const ExtraPage = () => {
  const allProvinces = provinces.sort(function(a, b) {
    const nameA = a.province.toUpperCase(); // ignore upper and lowercase
    const nameB = b.province.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Provinces</h1>
        </div>
      </div>
          <div className='extraPageContainer'>
          <h2 className='extraPageContainerTitle'>PFN LAGOS STATE PROVINCES, THEIR RESPECTIVE CHAIRMEN, SECRETARIAT <br /> AND MEETING DAYS</h2>
            <div className="extraCardContainer">
            <Grid container spacing={8}>
                {allProvinces.map((data)=> (
                  <Grid item xs={12} sm={4} md={4} key={data.id}>
                    <div className="extraCard" >
                        <div className="extraContainer">
                              <div className="extraBox">
                                  <div className="extraContent">
                                      <h4>
                                        {data.province}
                                      </h4>
                                      <p>
                                      <span style={{color: "tomato", fontWeight: 'bold'}}>Chairman:</span> {data.chairman}
                                      </p>
                                      <p>
                                      <span style={{color: "tomato", fontWeight: 'bold'}}>Secretariat:</span>  {data.Secretariat}
                                      </p>
                                      <p>
                                      <span style={{color: "tomato", fontWeight: 'bold'}}>Meeting days:</span>  {data.MeetingDays}
                                      </p>
                                      <p>
                                      <span style={{color: "tomato", fontWeight: 'bold'}}>Time:</span>  {data.time}
                                      </p>
                                      <p>
                                      <span style={{color: "tomato", fontWeight: 'bold'}}>Venue:</span>  {data.venue}
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <svg id='extraSvg'>
                            <filter id='wavy'>
                                <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
                                    <animate attributeName='baseFrequency' dur='60s' values='0.02; 0.05; 0.02' repeatCount='indefinite' />
                                </feTurbulence>
                                <feDisplacementMap in='SourceGraphic' scale='30' />
                            </filter>
                        </svg>
                      {/* </div> */}
                    </div>
                  </Grid>
                ))}

            </Grid>
            </div>
            
          </div>
     <Footer />
 </Container>
  )
}

export default ExtraPage