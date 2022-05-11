import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import Button from '../Button/Button'
import H2 from '../Text/H2'
import Header from '../Text/Header'
import './tornContainer.css'

const Container = styled.div`
  /* margin-top: 10rem; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  ${mobile({ marginTop: "1rem" })}
`;
const TornContainer = () => {
  return (
    <Container id='tornContainer'>
        <div className="tornContent">
            <div className="contentHeader"><h2>Join us Today</h2> </div>
            <div className="tornContentTitle"><H2 children="Find meaningful connection and purpose" color /></div>
            <div className="tornContentDesc"><p>At PFN Lagos, we're not just looking for volunteers. We're looking
              to help people discover their purpose. If getting involved in a fellowship is your next step, Contact
              <i>info@pfnlagosstate.org </i> or check with one of the provinces or chapters.</p></div>
                <Link to="/contact" style={{display: 'flex', justifyContent: 'center', margin: "18px 0"}}>
                    <Button BtnText='Contact us now'/>
                </Link>
        </div>

    </Container>
  )
}

export default TornContainer