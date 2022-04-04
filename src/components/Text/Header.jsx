import React from 'react'
import styled from 'styled-components';

const HeaderStyle = styled.div`
  /* max-width: 500px; */
  /* margin: 0 0 10px 0; */
  font-size: 1.5rem;
  /* text-align: center; */
  /* padding: 1rem 0; */
  /* line-height: 1.3em; */
  color: ${props => props.color ? 'green' : '#111'};
  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0;
  }
`;
const Header = ({children, color= false}) => {
  return (
    <HeaderStyle className='mainHeader' color={color}>
      <h1 style={{ fontFamily: "Poppins, sans-serif" }}>{children}</h1>
    </HeaderStyle>
  );
}

export default Header