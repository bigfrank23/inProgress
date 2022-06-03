import React, {useState} from 'react'
import Img2 from '../../images/bg2.jpg'
import PFN from '../../images/footerImg.png'
import styled from 'styled-components'
// import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import { mobile } from '../../responsive'
import FooterImg from '../../images/footer.png'
import { tab } from './../../responsive';
import { landscapeTab } from './../../responsive';
import MailchimpFormContainer from '../mailchimpFormContainer/MailchimpFormContainer'

import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../pages/blog/redux/constants/actionTypes';
import { provinces } from '../../teamMembers/provinces'
import "./Footer.css"

const Container = styled.div`
  user-select: none;
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
    padding: 4rem 7rem;
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
          /* border-radius: 30px; */
          width: 130px;
        }
      }
      .footerButton {
        ${mobile({ margin: "3rem 0", display: "none" })}
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
    ${mobile({ fontSize: ".8rem" })}
`;


const user = JSON.parse(localStorage.getItem('mern_crud3_copy_user'))
const Footer = () => {

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleLogOut = () => {
    dispatch({type: LOGOUT})
    window.location.replace("/")
  }

  const allProvinces = provinces.sort(function(a, b) {
    const nameA = a.province.toUpperCase(); // ignore upper and lowercase
    const nameB = b.province.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });


  return (
    <Container>
        <div className="topFooter">
              <button className='footerTopBtn' onClick={()=> {setOpen(!open)}}>{open ? "close" : "Select a Province"}</button>
            <div className={open ? "footerCenter" : "footerCenterNone"}>
              {/* <Link to="/provinces">
              <Button2 outline BtnText='Select a Province' />
              </Link> */}
              <div className={open ? "footerCenterCloseIcon text-danger d-block d-sm-none" : 'd-none'} onClick={handleClose}>
              <i className="fa fa-close" />
              </div>
              {allProvinces.map((data, i)=> (
                <>
                <div key={i} className={open ? "sideBlock" : "none"}>
                  <Link  to={{pathname: `/province`, state: {province: `${data.province}`, chairman: `${data.chairman}`,Secretariat: `${data.Secretariat}`, MeetingDays: `${data.MeetingDays}`, time: `${data.time}`, mapLink: `${data.mapLink}`}}} className="links" id={open ? 'textBlock' : 'textNone'}>
                      <div className="footerHoverItems" onClick={handleClose}>{data.province}</div>
                  </Link>
                </div>
                </>
              ))}
            </div>
        </div>
        <div className="bottomFooter">
            <div className="bottomFooterContent">
                <div className="align-self-start">
                    <div className="logoBox">
                        <img src={PFN} width={200} alt="" />
                        {/* <div className="logoText">
                            <h1>PFN</h1>
                            <h2>Lagos State</h2>
                        </div> */}
                    </div>
                     <h5 className='footerAddress'>5-9 Bode Thomas Road, <br /> Onipanu </h5>
                      <div className="socialBox">
                          <div className="social" style={{cursor: "pointer"}}>
                              <a href="https://www.facebook.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>
                                  <i className="fa fa-facebook footerSocialIcon" aria-hidden="true" />
                              </a>
                              {/* <a href="https://google.com" target="_blank" rel="noreferrer"></a> */}
                              <a href="https://www.twitter.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>
                                  <i className="fa fa-twitter footerSocialIcon" aria-hidden="true" />
                              </a>
                              <a href="https://www.instagram.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>
                                  <i className="fa fa-instagram footerSocialIcon" aria-hidden="true" />
                              </a>
                              <a href="https://www.youtube.com/channel/UChZXqT3Wg8buJkykYI99vCQ" target='_blank' rel="noopener noreferrer nofollow" className='links'>
                                  <i className="fa fa-youtube footerSocialIcon" aria-hidden="true" />
                              </a>
                              <a href="https://wa.link/hd88ub" target='_blank' rel="noopener noreferrer nofollow" className='links'>
                                <i className="fa fa-whatsapp footerSocialIcon" aria-hidden="true" />
                              </a>
                          </div>
                      </div>
                </div>
                <div className="align-self-start">
                  <h6 className='footerQuickLinkListTitle'>Quick Links</h6>
                  <ul className="footerQuickLinkList">
                    <Link to="/what-we-believe"><li className="footerQuickLinksListItems">what we believe</li></Link>
                    <Link to="/our-mission"><li className="footerQuickLinksListItems">our mission</li></Link>
                    <Link to="/past-pfn-chairmen"><li className="footerQuickLinksListItems">past lagos state pfn chairman</li></Link>
                    <Link to="/pfn-executives"><li className="footerQuickLinksListItems">pfn lagos state executives</li></Link>
                    <Link to="/lses"><li className="footerQuickLinksListItems">the executive structure</li></Link>
                    <Link to="/directorate"><li className="footerQuickLinksListItems">directorates</li></Link>
                    <Link to="/prayer"><li className="footerQuickLinksListItems">request for prayer</li></Link>
                    
                    
                    {/* <li className="footerQuickLinksListItems">provinces</li> */}
                    
                  </ul>
                </div>
                <div className="align-self-start d-flex flex-column gap-3">
                  <div className="newsLetterInputContainer">
                      <MailchimpFormContainer />
                  </div>
                  <div className="footerButton">
                      <div className="buttonBox">
                          <button id='btn1'>Give</button>
                          <button id='btn2'>Messages</button>
                      </div>
                  </div>
                </div>
                {/* <div className="footerButton">
                    <div className="buttonBox">
                        <Button BtnText='Messages' />
                        <Button outline BtnText='Give' />
                    </div>
                </div> */}
                <div style={{textAlign: "center"}} className="align-self-start" id='footerIframe'>
                {/* <div className="fb-page" data-href="https://www.facebook.com/pfnlagostate/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/pfnlagostate/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/pfnlagostate/">Pentecostal Fellowship of Nigeria - PFN Lagos State</a></blockquote></div> */}
                <iframe title="pfn lagos facebook page" aria-hidden="true" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpfnlagostate%2F&tabs=none&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style={{border: "none", overflow: "hidden", width: "340px"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                  {/* <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fpfnlagostate&width=450&layout=standard&action=like&size=small&share=true&height=35&appId" style={{border: "none", overflow: "hidden", width: "100%"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;" /> */}
                </div>
            </div>
            {
              user ?
              <div className="eventTime mt-4">
                <div className="authBx">
                  <Link to="/settings" id='links'>
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
                <h6 className="authBxLogout">{user ? "Log out" : <i className="fa fa-lock" aria-hidden="true" />}</h6>
                </Link>
              </div>
            }
        </div>
        {/* <div style={{textAlign: "center"}}>
        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fpfnlagostate&width=450&layout=standard&action=like&size=small&share=true&height=35&appId" width="450" height="35" style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
        </div> */}
        <div className='footerCredits'>
          <Credits>
              &copy; 2022 PFN Lagos. All Rights Reserved.
          </Credits>
          <Credits>
              Designed & Developed by
              &#160;<a href="https://elonatech.com.ng/" target='_blank' rel="noopener noreferrer nofollow" className='links' style={{color: "#990000"}}>Elonatech Nigeria Limited</a>
          </Credits>
        </div>
    </Container>
  )
}

export default Footer