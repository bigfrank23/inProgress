import React from 'react'
import styled from 'styled-components';

const HeaderStyle = styled.div`
  /* max-width: 500px; */
  /* margin: 0 0 10px 0; */
  font-size: 1.5rem;
  font-style: italic;
  /* text-align: center; */
  /* padding: 1rem 0; */
  /* line-height: 1.3em; */
  color: ${props => props.color ? 'green' : '#111'};
  text-transform: ${props => props.transform ? 'uppercase' : 'lowercase'};
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 0;
  }
`;
const Header = ({children, color= false, transform=false}) => {
  return (
    <HeaderStyle className='mainHeader' color={color} transform={transform}>
      <h1 style={{ fontFamily: "Poppins, sans-serif" }}>{children}</h1>
    </HeaderStyle>
  );
}

export default Header