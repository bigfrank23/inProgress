import React from 'react'
import Img from '../../images/living-generously.jpg'
import Img2 from '../../images/bg2.jpg'
import PFN from '../../images/footerImg.png'
import styled from 'styled-components'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import Header from '../Text/Header'
import PText from '../Text/PText'
import { mobile } from '../../responsive'
import FooterImg from '../../images/footer.png'
import H3 from '../Text/H3'
import { tab } from './../../responsive';
import { landscapeTab } from './../../responsive';
import MailchimpFormContainer from '../mailchimpFormContainer/MailchimpFormContainer'
import Button2 from '../Button/Button2'
import ProfileImg from '../../images/profile.png'

import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../pages/blog/redux/constants/actionTypes';

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
      .newsLetterTitle{
        text-align: center;
      }
      .newsLetterInputContainer{
        display: flex;
        justify-content: center;
        /* padding: 1rem 0 0 0; */
        .newsLetterInput{
          border: 1px solid green;
          outline: 0;
          padding: 10px;
          border-radius: 30px;
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
    font-size: 1rem;
`;

const user = JSON.parse(localStorage.getItem('mern_crud3_copy_user'))
const Footer = () => {

  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch({type: LOGOUT})
    window.location.replace("/")
}
  return (
    <Container>
        <div className="topFooter">
            <div className="center">
              <Link to="/provinces">
              <Button2 outline BtnText='Select a Province' />
              </Link>
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
                    <img src={PFN} width={200} alt="" />
                    {/* <div className="logoText">
                        <h1>PFN</h1>
                        <h2>Lagos State</h2>
                    </div> */}
                </div>
                <div className="newsLetterInputContainer">
                    <MailchimpFormContainer />
                </div>
                <div className="footerButton">
                    <div className="buttonBox">
                        <Button BtnText='Messages' />
                        <Button outline BtnText='Give' />
                    </div>
                    <div className="socialBox">
                        <div className="social" style={{cursor: "pointer"}}>
                            <a href="www.facebook.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>
                                <i className="fa fa-facebook footerSocialIcon" aria-hidden="true" />
                            </a>
                            <a href="www.twitter.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>
                                <i className="fa fa-twitter footerSocialIcon" aria-hidden="true" />
                            </a>
                            <a href="www.instagram.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>
                                <i className="fa fa-instagram footerSocialIcon" aria-hidden="true" />
                            </a>
                            <a href="https://www.youtube.com/channel/UChZXqT3Wg8buJkykYI99vCQ" target='_blank' rel="noopener noreferrer nofollow" className='links'>
                                <i className="fa fa-youtube footerSocialIcon" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {
          user ?
          <div className="eventTime">
            <div className="authBx">
              <Link to="/settings" id='links'>
                <div className="authBxImg">
                  <img src={ !user.user.profilePic ? ProfileImg : user.user.profilePic } alt="" className='profileImg' />
                </div>
                <div className="authBxName">
                  <span>{user.user.username}</span>
                </div>
              </Link>
            </div>
            <h6 className="authBxLogout" onClick={handleLogOut}>Log out</h6>
          </div>
          :
          <div className="eventTime">
            <Link to="/admin_login" id='links'>
            <h6 className="authBxLogout">{user ? "Log out" : "Log in"}</h6>
            </Link>
          </div>

        }
        </div>
        {/* <div style={{textAlign: "center"}}>
        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fpfnlagostate&width=450&layout=standard&action=like&size=small&share=true&height=35&appId" width="450" height="35" style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
        </div> */}
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <Credits>
              &copy; 2022 PFN Lagos. All Rights Reserved.
          </Credits>
          <Credits>
              Designed & Developed by Elonatech Nigeria Limited
          </Credits>
        </div>
    </Container>
  )
}

export default Footer