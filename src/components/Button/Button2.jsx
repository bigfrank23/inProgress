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
  color: ${(props) => (props.outline ? "#fff" : "#232e32")};
  display: inline-block;
  font-weight: 900;
  min-width: 125px;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  background: ${(props) => (props.outline ? "transparent" : "#fff")};
  border: ${(props) => (props.outline ? "1px solid #fff" : "none")};
  cursor: pointer;
  transition: background-color .5s ease;
    &:hover{
      background-color: transparent;
      border: 2px solid #008753;
      color: #990000;
    }
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const Button2 = ({outline= false, BtnText= 'text'}) => {
  return (
    <Container>
        <Btn outline={outline} >{BtnText}</Btn>
    </Container>
  )
}

export default Button2