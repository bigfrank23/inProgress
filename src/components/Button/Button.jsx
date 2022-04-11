import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: auto;
    height: auto;
`
const Btn = styled.button`
    border: 2px solid;
    border-radius: 30px;
    box-sizing: border-box;
    color: ${props => props.outline ? '#232e32' : '#fff'};
    display: inline-block;
    font-weight: 900;
    min-width: 125px;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    background: ${props => props.outline ? 'transparent' : '#008753'};
    border: ${props => props.outline ? '1px solid #232e32' : 'none'};
    cursor: pointer;
    @media only screen and (max-width: 600px) {
    font-size: .8rem;
    font-weight: 500;
  }
`

const Button = ({outline= false, BtnText= 'text', onClick=true}) => {
  return (
    <Container>
        <Btn outline={outline} onClick={onClick}>{BtnText}</Btn>
    </Container>
  )
}

export default Button