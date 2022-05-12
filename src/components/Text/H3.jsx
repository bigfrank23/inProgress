import React from 'react'
import styled from 'styled-components'
const H3Styles = styled.div`
  /* margin: 0 auto; */
  /* line-height: 1.3em; */
  text-transform: ${props => props.transform ? "capitalize" : "uppercase"};
  font-style: normal;
  font-weight: 900;
  /* text-align: center; */
  color: ${(props) => (props.color ? "#fff" : "#111")};
  /* color: #fff; */
  @media only screen and (max-width: 600px) {
    font-size: .7rem;
    font-weight: 700;
    padding: 0;
  }
`;
const H3 = ({children}) => {
  return (
    <H3Styles>
        <h3>{children}</h3>
    </H3Styles>
  )
}

export default H3