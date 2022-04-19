import React from 'react'
import Img from '../../images/living-generously.jpg'
import Img2 from '../../images/bg2.jpg'
import PFN from '../../images/PFN4.png'
import styled from 'styled-components'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import Header from '../Text/Header'
import PText from '../Text/PText'
import { mobile } from '../../responsive'
import FooterImg from '../../images/footer.jpg'
import H3 from '../Text/H3'
import { tab } from './../../responsive';
import { landscapeTab } from './../../responsive';

const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  background: url(${Img2});
  .topFooter {
    background: url(${FooterImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    ${mobile({ height: "100%" })}
    ${tab({ height: "100%" })}
    ${landscapeTab({ height: "50vh" })}
    .center {
      .lineShape {
        display: none;
        width: 50%;
        height: 20px;
        background: #fff;
        position: absolute;
        transform: translate(-50%, 100%);
        left: 50%;
      }
      .mainText {
        display: none;
        font-size: 46px;
        margin-top: 0;
        text-transform: uppercase;
        position: relative;
        color: #fff;
        margin-bottom: 40px;
        z-index: 2;
      }
      .btnContent {
        display: none;
        .topTextBox {
          text-align: center;
          color: #fff;
          margin-bottom: 10px;
        }
      }
      .topBtnBox {
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
  .bottomFooter {
    padding: 4rem;
    ${mobile({ padding: "2rem" })}
    .bottomFooterContent {
      display: flex;
      justify-content: space-around;
      align-items: center;
      ${mobile({ display: "block" })}
      .logoBox {
        display: flex;
        ${mobile({ padding: "3rem 0", justifyContent: "center" })}
        .logoText {
          align-self: center;
          margin-left: 10px;
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-weight: 300;
          }
        }
      }
      .list {
        list-style: none;
        display: flex;
        gap: 20px;
        ${mobile({ display: "block", textAlign: "center" })}
        a {
          color: #232e32;
          font-weight: 900;
          text-decoration: none;
          text-transform: uppercase;
          .listItems {
            ${mobile({ marginBottom: "1rem" })}
          }
        }
      }
      .footerButton {
        ${mobile({ margin: "3rem 0" })}
        .buttonBox {
          display: flex;
          gap: 1rem;
          ${mobile({ justifyContent: "center" })}
        }
        .socialBox {
          float: right;
          margin-top: 20px;
          ${mobile({ float: "unset" })}
          .social {
            display: flex;
            gap: 10px;
            ${mobile({ justifyContent: "center" })}
            a {
              color: #fff;
              background: #008753;
              font-weight: 400;
              font-size: 1rem;
              padding: 5px;
              width: 30px;
              height: 30px;
              text-align: center;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
`;
const Credits = styled.section`
    text-align: center;
    color: #b5b5b4;
    font-size: 18px;
`;
const Footer = () => {
  return (
    <Container>
        <div className="topFooter">
            <div className="center">
                <div className="lineShape"></div>
                <div className='mainText'> <Header color={true} children="Lorem, ipsum dolor sit."/> </div>
                <div className="btnContent">
                    <div className="topTextBox">
                    <PText children="Lorem, ipsum dolor." color={true}/>
                    </div>
                    <div className="topBtnBox">
                        <Link to='#' className='links' style={{background: '#fff', borderRadius: '20px'}}>
                            <Button outline/>
                        </Link>
                        <Link to='#' className='links'>
                            <Button/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottomFooter">
            <div className="bottomFooterContent">
                <div className="logoBox">
                    <img src={PFN} width={100} alt="" />
                    <div className="logoText">
                        <h1>PFN</h1>
                        <h2>Lagos State</h2>
                    </div>
                </div>
                <ul className="list">
                    <Link to="#" className='links'>
                        <li className="listItems"><H3 children="Lorem" /></li>
                    </Link>
                    <Link to="#" className='links'>
                        <li className="listItems"><H3 children="Lorem" /></li>
                    </Link>
                    <Link to="#" className='links'>
                        <li className="listItems"><H3 children="Lorem" /></li>
                    </Link>
                </ul>
                <div className="footerButton">
                    <div className="buttonBox">
                        <Button />
                        <Button outline />
                    </div>
                    <div className="socialBox">
                        <div className="social">
                            <Link to="#" className='links'>
                                <i className="fa fa-youtube footerSocialIcon" aria-hidden="true" />
                            </Link>
                            <Link to="#" className='links'>
                                <i className="fa fa-facebook footerSocialIcon" aria-hidden="true" />
                            </Link>
                            <Link to="#" className='links'>
                                <i className="fa fa-twitter footerSocialIcon" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Credits>
            &copy; 2022 PFN Lagos. All Rights Reserved.
        </Credits>
    </Container>
  )
}

export default Footer