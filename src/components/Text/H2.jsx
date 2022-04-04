import React from 'react'
import styled from "styled-components";

const H2Style = styled.div`
  /* max-width: 500px; */
  margin: 0 auto;
  font-size: 1rem;
  /* line-height: 1.3em; */
  text-transform: uppercase;
  font-style: normal;
  font-weight: 900;
  /* text-align: center; */
  color: ${props => props.color ? '#fff' : '#111'};
  /* color: #fff; */
  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0;
  }
`;
const H2 = ({children, color = false}) => {
  return (
    <H2Style className="title" color={color}>
      <h2>{children}</h2>
    </H2Style>
  );
}

export default H2