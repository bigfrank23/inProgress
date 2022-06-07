import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BgImg from '../../images/bg2.jpg'
import Button from '../Button/Button'
import './Extraordinary.css'
import { landscapeTab, mobile, tab } from '../../responsive'
// import { Grid } from '@material-ui/core'
import { Grid } from '@mui/material'
import Img1 from '../../images/announcement.jpeg'
import Img2 from '../../images/currentEvents/current1.jpeg'
import Img3 from '../../images/pastEvents/pastEvent1.jpeg'
import H2 from '../Text/H2'


const Container = styled.div`
    background: url(${BgImg});
    /* margin-top: 10rem; */
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${mobile({ marginTop: "1rem", padding: "2rem" })}
    `
const ExtraContentContainer = styled.div`
    /* text-align: center; */
    padding: 4rem 7rem;
    ${mobile({padding: "0" })}
`
const ExtraTextContainer = styled.div`
    text-align: center;
`
const ExtraText = styled.h2`
  color: #006633;
  font-family: 'Tangerine', cursive;
  font-size: 3rem;
  margin: 0 auto 20px auto;
  text-align: center;
  ${mobile({ fontSize: "2.2rem", margin: 0 })}
`;
const ExtraContent = styled.div`
    display: flex;
    gap: 20px;
    ${mobile({display: 'block'})}
    ${tab({display: 'block'})}
    ${landscapeTab({display: 'flex'})}
`
// const ExtraImg = styled.div`
//     /* flex: 1; */
//     background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${PlayImg});
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//     height: 450px;
//     width: 450px;
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     ${mobile({height: '300px', width: '300px'})}
//     ${tab({height: '600px', width: "100%"})}
//     ${landscapeTab({height: "450px", width: "450px"})}
// `
// const ExtraIconContainer = styled.div`
//     background: linear-gradient(#7bff7b, #7bff7b);
//     height: 100px;
//     width: 100px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     ${mobile({height: '50px', width: '50px'})}
//     .playIcon{
//         color: #000;
//         font-size: 2rem;
//         ${mobile({fontSize: '1rem'})}
//     }
// `
const ExtraContentText = styled.div`
    flex: 1;
    align-self: center;
`
const ExtraDesc = styled.p`
    color: #232e32;
    font-weight: 900;
    line-height: 25px;
    margin: 18px 0;
    ${mobile({fontSize: '.8rem', fontWeight: 600, textAlign: 'center'})}
`
const ExtraName = styled.p`
    color: #232e32;
    margin: 18px 0 40px;
    ${mobile({textAlign: 'center', margin: 0})}
`
//Second section
const ExtraContentContainer2 = styled.div`
    align-self: flex-start;
    width: 100%;
    padding: 0 7rem 4rem 7rem;
    ${mobile({padding: 0, marginTop: "2rem", width: "unset", alignSelf: "unset"})}
    .extraLink{
    display: flex;
    justify-content: center;
    margin: 18px 0px;
    text-decoration: none !important;
    ${mobile({margin: 0})}
    }
`
const ExtraTextContainer2 = styled.div`
    text-align: center;
`
const ExtraText2 = styled.h2`
    color: #006633;
    font-family: 'Tangerine', cursive;
    font-size: 2.2rem;
    margin: 0;
    text-align: center;
`
const ExtraCard = styled.div`
    /* width: 300px; */
    /* height: 100%; */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transform: scale(1);
    transition: transform .2s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
    ${mobile({margin: "1rem 0"})}
`
const ExtraCardImgContainer = styled.div`
    width: 100%;
    /* height: 200px; */
    /* background-color: #008753; */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    `
const ExtraCardImg = styled.img`
    /* object-fit: contain; */
    width: 80%;
    height: 400px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    ${mobile({width: "100%"})}
`
// const ExtraContentText2 = styled.div`
//     background-color: #008753;
//     padding: 2rem;
//     border-bottom-left-radius: 10px;
//     border-bottom-right-radius: 10px;
// `
// const ExtraTitle = styled.div`
//     color: #fff;
//     font-weight: 900;
//     text-align: center;
//     text-transform: uppercase;
// `
// const ExtraDate = styled.div`
//     color: #fff;
//     font-weight: 900;
//     text-align: center;
//     text-transform: uppercase;
//     /* margin-right: 5px; */
// `
// const ExtraLocation = styled.div`
//     color: #fff;
//     font-weight: 900;
//     text-align: center;
//     text-transform: uppercase;
//       /* margin-right: 5px; */
// `
const Extraordinay = () => {
    const cards = [
        {
            id: 1,
            img: Img1,
            title: "Upcoming Events",
            desc: "Know More",
            to: "/upcoming-events"
        },
        {
            id: 2,
            img: Img2,
            title: "Current Events",
            desc: "Know More",
            to: "/current-events"
        },
        {
            id: 3,
            img: Img3,
            title: "Past Events",
            desc: "Know More",
            to: "/past-events"
        },
    ]
  return (
    <Container>
      <ExtraContentContainer>
        <ExtraTextContainer>
          <ExtraText>Get to know us</ExtraText>
        </ExtraTextContainer>
        <ExtraContent>
          {/* <ExtraImg>
            <ExtraIconContainer>
              <i className="fa fa-play playIcon" aria-hidden="true" />
            </ExtraIconContainer>
          </ExtraImg> */}
          <iframe width="560" height="315" id='extraIframe' src="https://www.youtube.com/embed/T-ubYjO-b-0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <ExtraContentText>
            <ExtraDesc>
              "PFN is the National body which binds all Christian churches, Organizations and Believers who believe, experience, practice and cherish the Pentecostal experience as found and described in Acts 2:4."
            </ExtraDesc>
            <a href="https://www.youtube.com/channel/UChZXqT3Wg8buJkykYI99vCQ" target='_blank' rel="noopener noreferrer nofollow">
              <ExtraName>Know more</ExtraName>
            </a>
          </ExtraContentText>
        </ExtraContent>
      </ExtraContentContainer>
      <ExtraContentContainer2>
        <ExtraTextContainer2>
          <ExtraText2>Our Events</ExtraText2>
        </ExtraTextContainer2>
        {/* <div className='extraGrid'> */}
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Link to={card.to} id="bannerLinks">
                <ExtraCard>
                  <ExtraCardImgContainer>
                    <ExtraCardImg src={card.img} />
                  </ExtraCardImgContainer>
                </ExtraCard>
                <div style={{padding: '1rem'}} className="extraCardTitle">
                  {" "}
                  <H2 children={card.title} />{" "}
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
        {/* </div> */}
        <Link to="/all-events" className="extraLink">
          <Button BtnText="VIEW ALL EVENTS" />
        </Link>
      </ExtraContentContainer2>
    </Container>
  );
}

export default Extraordinay