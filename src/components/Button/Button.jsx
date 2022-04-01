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
    color: #fff;
    display: inline-block;
    font-weight: 900;
    min-width: 125px;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    background: ${props => props.outline ? 'transparent' : 'green'};
    cursor: pointer;
`

const Button = ({outline= false, BtnText= 'text'}) => {
  return (
    <Container>
        <Btn outline={outline}>{BtnText}</Btn>
    </Container>
  )
}

export default Button