import React from 'react'
import styled from 'styled-components'
import './findPeople.css'
import Img from '../../images/splash2.jpg'
import BorderImg from '../../images/bannerH.png'
import Header from '../Text/Header'
import H2 from '../Text/H2'
import { Grid } from '@mui/material'
// import Img2 from '../../images/cwc3.png'
import Img2 from '../../images/theCWC.jpg'
// import Img3 from '../../images/dir2.png'
import Img3 from '../../images/theDirectors.jpg'
// import Img4 from '../../images/chiarman2.png'
import Img4 from '../../images/theChairmen.jpg'
import { Link } from 'react-router-dom'
import Typist from "react-text-typist";
import Typed from 'react-typed';
import Button2 from '../Button/Button2'
import PText from '../Text/PText'

const Container = styled.div`
    width: 100%;
    height: 100%;
    /* padding:  0 4rem; */
    /* margin-top: 15rem;
    border: 10px solid transparent;
  padding: 15px; */
  /* border-image: url(${BorderImg}) 20% round; */
  user-select: none;
`

const FindPeople = () => {
    const cards = [
        {
            id: 1,
            img: Img2,
            title: "The Central Working Commitee(CWC)",
            desc: "Know More"
        },
        {
            id: 2,
            img: Img3,
            title: "The State Directors",
            desc: "Know More"
        },
        {
            id: 3,
            img: Img4,
            title: "The Province Chairmen",
            desc: "Know More"
        },
    ]
  return (
    <Container>
      <div className="header">
        <div className="topHeader">
          <h2>The State Executive Council</h2>
        </div>
        <div className="centerHeader">
          <H2 children="Our Team is composed of" />
        </div>
        <div className="bottomHeader">
          
            <Typed
                strings={[
                "The Central Working Commitee",
                "The State Directors",
                "The Province Chairmen",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
        </div>
      </div>
      {/* <div className="content"> */}
      <Grid
        container
        spacing={2}
        sx={{ padding: { xs: "0 2rem", sm: "0 2rem", md: "4rem 7rem" } }}
      >
        {cards.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Link to="/pfn-executives" className="links">
              <div className="card1">
                <img src={item.img} alt="" />
                <div className="contentTextWrapper">
                  <div className="contentText">
                    <H2>{item.title}</H2>
                  </div>
                  <div className="contentPara">
                      <Button2 BtnText={item.desc} />
                  </div>
                </div>
                <i
                  className="fa fa-arrow-circle-right circledArrow"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
      {/* </div> */}
    </Container>
  );
}

export default FindPeople