import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button/Button'
import './tornContainer.css'

const Container = styled.div`
    margin-top: 10rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TornContainer = () => {
  return (
    <Container id='tornContainer'>
        <div className="tornContent">
            <div className="contentHeader"><h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1></div>
            <div className="tornContentTitle"><h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2></div>
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