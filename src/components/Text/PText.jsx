import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  /* max-width: 500px; */
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 25px;
  font-weight: ${(props=> props.weight ? 'bold' : '400')};
  font-style: normal;
  font-size: 1rem;
  /* text-align: center; */
  color: ${(props) => (props.color ? "#fff" : "#111")};
  @media only screen and (max-width: 600px) {
    font-size: .8rem;
    padding: 0;
  }
`;

function PText({ children}) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}

export default PText;
