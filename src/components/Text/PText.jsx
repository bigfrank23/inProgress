import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  /* max-width: 500px; */
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 25px;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  /* text-align: center; */
  color: ${(props) => (props.color ? "#fff" : "#111")};
  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0;
  }
`;

function PText({ children , color = false}) {
  return (
    <PStyle className="para" color={color}>
      <p>{children}</p>
    </PStyle>
  );
}

export default PText;
