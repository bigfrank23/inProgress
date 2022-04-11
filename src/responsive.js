import { css } from "styled-components";

export const XS = (props) => {
  return css`
    @media only screen and (max-width: 400px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};
export const tab = (props) => {
  return css`
    @media only screen and (min-width: 600px) {
      ${props}
    }
  `;
};
export const landscapeTab = (props) => {
  return css`
    @media only screen and (min-width: 992px) {
      ${props}
    }
  `;
};
export const PC = (props) => {
  return css`
    @media only screen and (min-width: 1200px) {
      ${props}
    }
  `;
};