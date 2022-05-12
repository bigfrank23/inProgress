import React from 'react'
import styled from "styled-components";

const H2Style = styled.div`
  /* max-width: 500px; */
  margin: 0 auto;
  font-size: 1rem;
  /* line-height: 1.3em; */
  text-transform: capitalize;
  font-style: normal;
  font-weight: 900;
  /* text-align: center; */
  color: ${props => props.color ? '#fff' : '#990000'};
  /* color: #fff; */
  @media only screen and (max-width: 600px) {
    font-size: .9rem;
    padding: 0;
  }
`;
const H2 = ({children}) => {
  return (
    <H2Style className="title">
      <h2 style={{fontFamily: "FontAwesome"}}>{children}</h2>
    </H2Style>
  );
}

export default H2