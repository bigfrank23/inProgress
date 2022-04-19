import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import H2 from '../Text/H2'
import PText from '../Text/PText'
import './whatNext.css'
import { Grid } from '@material-ui/core';
import Img1 from '../../images/gallery/24.jpg'
import Img2 from '../../images/vol.jpg'
import Img3 from '../../images/prayer.jpeg'

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem 7rem;
    ${mobile({ padding: "2rem" })}
`

const WhatsNext = () => {
    const items = [
      {
        id: 1,
        img: Img3,
        title: "Prayer line",
        desc: "Know More",
      },
      {
        id: 2,
        img: Img2,
        title: "Volunteer",
        desc: "Know More",
      },
      {
        id: 3,
        img: Img1,
        title: "Gallery",
        desc: "Know More",
      },
    ];
  return (
    <Container>
      <div className="nextHeader">
        <div className="nextTitle">
          <h1>What's Next For You?</h1>
        </div>
        <div className="nextPara">
          <PText children="We are here to support each other on journeys through life" />
        </div>
      </div>
      <div className="nextContent">
          <Grid container spacing={3}>
        {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <div className="contentBox">
                <img src={item.img} alt="" />
                <div className="contentText">
                  <H2>{item.title}</H2>
                </div>
              </div>
            </Grid>
        ))}
        </Grid>
      </div>
    </Container>
  );
}

export default WhatsNext