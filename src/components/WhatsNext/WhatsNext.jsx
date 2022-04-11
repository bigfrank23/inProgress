import React from 'react'
import styled from 'styled-components'
import gridImg from '../../images/splash2.jpg'
import { mobile } from '../../responsive'
import H2 from '../Text/H2'
import PText from '../Text/PText'
import './whatNext.css'
import { Grid } from '@material-ui/core';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem;
    ${mobile({ padding: "2rem" })}
`

const WhatsNext = () => {
    const items = [1, 2, 3, 4, 5, 6]
  return (
    <Container>
      <div className="nextHeader">
        <div className="nextTitle">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
        </div>
        <div className="nextPara">
          <PText children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, doloremque officia unde rerum beatae optio molestias dolorem quis corrupti sequi!" />
        </div>
      </div>
      <div className="nextContent">
          <Grid container spacing={3}>
        {items.map(() => (
            <Grid item xs={12} sm={6} md={4}>
              <div className="contentBox">
                <img src={gridImg} alt="" />
                <div className="contentText">
                  <H2 children="Lorem, ipsum." />
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