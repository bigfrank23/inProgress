import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import Button from '../Button/Button'
import H2 from '../Text/H2'
import Header from '../Text/Header'
import './tornContainer.css'

const Container = styled.div`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ marginTop: "1rem" })}
`;
const TornContainer = () => {
  return (
    <Container id='tornContainer'>
        <div className="tornContent">
            <div className="contentHeader"><Header children="Lorem ipsum dolor sit amet consectetur adipisicing." color={true}/> </div>
            <div className="tornContentTitle"><H2 children="Lorem ipsum dolor sit amet consectetur adipisicing." color={true} /></div>
            <div className="tornContentDesc"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nece
                ssitatibus quaerat quas culpa nemo qui dolorum sequi quisquam magni repellendus asperna
                tur aut saepe nostrum exercitationem praesentium sit, nisi consectetur laborum.</p></div>
                <Link to="#" style={{display: 'flex', justifyContent: 'center', margin: "18px 0"}}>
                    <Button BtnText='Stories'/>
                </Link>
        </div>

    </Container>
  )
}

export default TornContainer