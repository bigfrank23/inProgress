import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './navbar.css'
import LogoImg from '../../images/pfnLogo.png'
import Img from '../../images/currentEvents/current1.jpeg'
import Img5 from '../../images/pfnLogo.png'
import { mobile } from '../../responsive'
import Button2 from '../Button/Button2'
import moment from 'moment'
import Button from '../Button/Button'

import { provinces } from '../../teamMembers/provinces'
import { Accordion, Card } from "react-bootstrap";
import useCollapse from 'react-collapsed'
import axios from 'axios'

const Container = styled.nav`
    /* ${mobile({display: 'none'})} */
    user-select: none;
`

function Section(props) {
  const config = {
    defaultExpanded: props.defaultExpanded || true,
    collapsedHeight: props.collapsedHeight || 0,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className="collapsible">
      <div className="main" {...getToggleProps()}>
          {/* <H3 children={props.title} /> */}
        <div className="title">{props.title}</div>
        <div className="icon">
          <i
            className={"chevIcon fa fa-chevron-" + (isExpanded ? "up" : "down")}
          ></i>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="colContent">{props.children}</div>
      </div>
    </div>
  );
}

const user = JSON.parse(localStorage.getItem('mern_crud3_copy_user'))
const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const [closeNav, setCloseNav] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [openMain, setOpenMain] = useState('')
    const [dropdownNav, setDropdownNav] = useState(false)
    const [open, setOpen] = useState(false);
    const [ordList, setOrdList] = useState(false)
    const [ordList2, setOrdList2] = useState(false)
    const [ordList3, setOrdList3] = useState(false)
    const [ordList4, setOrdList4] = useState(false)
    const [ordList5, setOrdList5] = useState(false)
    const [ordList6, setOrdList6] = useState(false)
    const [featured, setFeatured] = useState([])
    const handleClose = () => {
      setOpen(false);
      setOpenMain(false)
    } 


    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 300) {
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
    })

    useEffect(()=> {
      const getFeatured = async () => {
        const res = await axios.get("https://pfn-lagos.herokuapp.com/currentEvent")
        setFeatured(res.data)
        
      }
      getFeatured()
    }, [])

    // console.log(featured);
    let featuredImg = featured.pop()
    console.log(featuredImg?.avatar)

    if (featuredImg?.avatar !== undefined) {
      localStorage.setItem("storeFeatured", featuredImg.avatar)
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
    <Container id="navbar" className={scroll && "activeNavbar"}>
      {/* <Announcement /> */}
      {user?.user?.email === "admin@pfnlagosstate.org" ? 
        <div className='adminLink text-center'>
          <Link to="/admin">
          Go To Dashboard
          </Link> 
        </div>
        : ""
      }
      <div className="top">
        <div className="nav">
          <Link to="/">
            <div className="logo">
              <img src={LogoImg} width={100} alt="logo" />
            </div>
          </Link>
          {/* <span className='text-white align-self-center mobTime'>{moment().format("ddd, h:mmA")}</span> */}
          <div className="navLinks">
          <div className={openMain ? "mainListItems" : "notActiveMain"}>
                  <div className={openMain ? "mainListItemsTop" : "notActiveMain"}>
                    <Link to="/" id='links' onClick={()=> setOpenMain(false)}>
                    <div className="logo"><img src={LogoImg} width={100} alt="logo" /></div>
                    </Link>
                    <div className="time">{moment().format('LLLL')}</div>
                    <div className="closeMenu"  onClick={()=> setOpenMain(false)}> <h3>close</h3></div>
                  </div>
                  <div className={openMain ? "mainListItemsCenter" : "notActiveMain"}>
                    <div className="mainListItemsCenterLeft">
                      <div className="mainListItemsCenterLeftContainer">
                        <h3>Featured Events</h3>
                      </div>
                      <div className={openMain ? "mainListItemsCenterLeftImg" : 'notActiveMainImg'}>
                      <Link to='/current-events' id='links' onClick={()=> setOpenMain(false)}>
                        {openMain ? <img src={localStorage.getItem("storeFeatured")} alt="" /> : <img src={Img5} alt="" />}
                      </Link>
                      </div>
                      <div className="mainListItemsCenterLeftBottomTxt">
                      <Link to='/upcoming-events' id='links' onClick={()=> setOpenMain(false)}>
                        <h4>Upcoming Events</h4>
                      </Link>
                      <Link to='/past-events' id='links' onClick={()=> setOpenMain(false)}>
                        <h4>Past Events</h4>
                      </Link>
                      </div>
                    </div>
                    <div className="mainListItemsCenterRight">
                      <div className="mainListItemsCenterRightTopTxt">
                        <Link to="/" id="links" onClick={()=> setOpenMain(false)}>
                          <h2>Pentecostal Fellowship of Nigeria, Lagos State</h2>
                        </Link>
                        <div className="mainListItemsCenterRightTopPara" onClick={()=> setDropdownNav(!dropdownNav)}>
                          <p>Provinces</p>

                          <div>
                            {!dropdownNav ? <i className="fa fa-angle-down" aria-hidden="true" /> : <i className="fa fa-angle-up" aria-hidden="true" />}
                          <div className="mainListItemsCenterRightTopParaDropdownItem" style={dropdownNav ? {"opacity": "1", position: "absolute", transition: "0.8s"} : {opacity: "0", position: "absolute", transition: "0.8s"}}>
                            
                            <h6 onClick={()=> {setOpen(!open)}}>{open ? "" : "Select a Province"}</h6>
                          </div>
                          <div className={open ? "provinceNavCenter" : "provinceNavCenterNone"} style={dropdownNav ? {display: "flex"} : {display: "none"}}>
                            {allProvinces.map((data, i)=> (
                              <>
                              <div className={open ? "sideBlock" : "none"} key={data.id}>
                                <Link key={i} to={{pathname: `/province/${data.id}`, state: {province: `${data.province}`, chairman: `${data.chairman}`,Secretariat: `${data.Secretariat}`, MeetingDays: `${data.MeetingDays}`, time: `${data.time}`, mapLink: `${data.mapLink}`}}} className="links" id={open ? 'textBlock' : 'textNone'}>
                                    <div className="footerHoverItems" id='footerHoverItems' onClick={handleClose}>{data.province}</div>
                                </Link>
                              </div>
                              </>
                            ))}
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="mainListItemsCenterRightCenter">
                        <hr className='mainListHr' />
                        <div className="mainListItemsCenterRightNavContainer">
                          <ul className="mainListItemsCenterRightList">
                            <li className="mainListItemsCenterRightListItems">Who we are</li>
                            <Link to="/about" id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">About us</li>
                            </Link>
                            <Link to="/history2"id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">History</li>
                            </Link>
                            <Link to="/our-mission"id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Mission</li>
                            </Link>
                            <Link to="/chairman-messages"id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Messages</li>
                            </Link>
                          </ul>
                          <ul className="mainListItemsCenterRightList">
                            <li className="mainListItemsCenterRightListItems">Our Structure</li>
                            <Link to="/directorate" id="links" onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Directorate</li>
                            </Link>
                            <Link to="/the-national" id="links" onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">The National</li>
                            </Link>
                            <Link to="/past-pfn-chairmen" id="links" onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Past PFN Chairmen</li>
                            </Link>
                            <Link to="/pfn-executives" id="links" onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">PFN Lagos State Executives</li>
                            </Link>
                          </ul>
                          <ul className="mainListItemsCenterRightList">
                            <li className="mainListItemsCenterRightListItems">Activities</li>
                            <Link to='/blogs' id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Blog</li>
                            </Link>
                            <Link to='/prayer' id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Prayer Line</li>
                            </Link>
                            <Link to='/upcoming-events' id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Upcoming Events</li>
                            </Link>
                            <Link to='/past-events' id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Past Events</li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                      <div className="mainListItemsCenterRightBottom">
                        <div className="mainListItemsCenterRightSocials">
                        <a href="https://www.facebook.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" id='links'>
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                            <a href="https://www.twitter.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" id='links'>
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                            <a href="https://www.instagram.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" id='links'>
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                            <a href="https://www.youtube.com/channel/UChZXqT3Wg8buJkykYI99vCQ" target='_blank' rel="noopener noreferrer nofollow" id='links'>
                                <i className="fa fa-youtube" aria-hidden="true" />
                            </a>
                            <a href="https://wa.link/hd88ub" target='_blank' rel="noopener noreferrer nofollow" className='links'>
                                <i className="fa fa-whatsapp footerSocialIcon" aria-hidden="true" />
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            <ul className="navList" >
              {/* <Link to="/" className="links" style={{ marginRight: "20px" }}> */}
              <li className="navListItems" onClick={()=> setOpenMain(true)}>
                  Menu
                </li>
              {/* </Link> */}
              <li className="navListItems">
                About
                  <div className="hoverAngleIcon">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </div>
                <ul className="hover">
                  <Link to="/about" className="links" onClick={()=> setCloseNav(true)}>
                    <li className="hoverItems">About PFN</li>
                  </Link>
                  <Link to="/history2" className="links">
                    <li className="hoverItems">History of PFN</li>
                  </Link>
                  <Link to="/what-we-believe" className="links">
                    <li className="hoverItems">What we believe</li>
                  </Link>
                  <Link to="/our-mission" className="links">
                    <li className="hoverItems">Our mission</li>
                  </Link>
                  {/* <Link to="/page2" className="links">
                    <li className="hoverItems">Our team</li>
                  </Link> */}
                </ul>
              </li>
              <li className="navListItems">
                Leadership
                  <div className="hoverAngleIcon">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </div>
                <ul className="hover">
                  <Link to="/the-national" className="links">
                    <li className="hoverItems">The national</li>
                  </Link>
                  <Link to="/past-pfn-chairmen" className="links">
                    <li className="hoverItems">Past Lagos State PFN chairmen</li>
                  </Link>
                  <Link to="/pfn-executives" className="links">
                    <li className="hoverItems">PFN lagos state executives</li>
                  </Link>
                </ul>
              </li>
              <li className="navListItems">
                <div>
                Lagos Structure
                </div>
                  <div className="hoverAngleIcon">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </div>
                <ul className="hover">
                  <Link to="/lses" className="links">
                    <li className="hoverItems">
                      The executive structure
                    </li>
                  </Link>
                  <Link to="/chairman-messages" className="links">
                    <li className="hoverItems">
                      Chairman's Messages
                    </li>
                  </Link>
                </ul>
              </li>
              <li className="navListItems">
                Get involved
                  <div className="hoverAngleIcon">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </div>
                <ul className="hover">
                  <Link to="/directorate" className="links">
                    <li className="hoverItems">Directorates</li>
                  </Link>
                  <Link to="#" className="links">
                    <li className="hoverItems">Outreach</li>
                  </Link>
                </ul>
              </li>
              <li className="navListItems">
                Provinces
                  <div className="hoverAngleIcon">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </div>
                <ul className="hover" id='provincesLink'>
                  {provinces.map((data, i)=> (
                    <Link key={i} to={{pathname: `/province/${data.id}`, state: {province: `${data.province}`, chairman: `${data.chairman}`,Secretariat: `${data.Secretariat}`, MeetingDays: `${data.MeetingDays}`, time: `${data.time}`, mapLink: `${data.mapLink}`, email: `${data.email}`, tel: `${data.tel}`, img: `${data.img}`}}} className="links">
                      <li className="hoverItems">{data.province}</li> <div className="separator">|</div>
                    </Link>
                  ))}
                </ul>
              </li>
              <li className="navListItems">
                Events
                  <div className="hoverAngleIcon">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </div>
                <ul className="hover">
                    <Link to="/all-events" className="links">
                      <li className="hoverItems">All Events</li>
                    </Link>
                    <Link to="/gallery" className="links">
                      <li className="hoverItems">Gallery</li>
                    </Link>
                    <a href="https://www.youtube.com/channel/UChZXqT3Wg8buJkykYI99vCQ" target='_blank' rel="noopener noreferrer nofollow" className='links'>
                    <li className="hoverItems">Watch Live</li>
                    </a>
                    <Link to='/blogs' className='links'>
                    <li className="hoverItems">Blogs</li>
                    </Link>
                    <Link to='/announcement' className='links'>
                    <li className="hoverItems">News Feed</li>
                    </Link>
                </ul>
              </li>
              {/* <Link to="#" className="links"> */}
                <li className="navListItems">Get in Touch
                  <div className="hoverAngleIcon">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </div>
                <ul className="hover">
                    <Link to="/prayer" className="links">
                      <li className="hoverItems">Prayer</li>
                    </Link>
                    <Link to='/contact' className='links'>
                    <li className="hoverItems">Contact us</li>
                    </Link>
                </ul>
                </li>
              {/* </Link> */}
            </ul>
          </div>
          {showNav && (
            <div className={showNav ? "mobileNav" : "mobileNavActive"}>
              <ul className="navList" >
              <Link to="/" className="links" onClick={()=> setShowNav(false)}>
              <li className="navListItems">
                  Menu
                </li>
              </Link>
              <li className="navListItems"
                onClick={()=> setOrdList6(!ordList6)}
                >
                  <div className="d-flex justify-content-between">
                  <div className="navListItemsTxt" style={ordList6 ? {color: "#990000"} : {color: "#fff"}}>
                  About
                  </div>
                    <div className="hoverAngleIcon" style={ordList6 ? {color: "#990000"} : {color: "#fff"}}>
                      <i className={ordList6 ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true" />
                    </div>
                  </div>
                </li>
              <ul className={ordList6 ? 'mobOrdList' : 'hideMobList'} >
                  <Link to="/about" className="links" onClick={()=> setShowNav(false)}>
                    <li className="hoverItems">About PFN</li>
                  </Link>
                  <Link to="/history2" className="links" onClick={()=> setShowNav(false)}>
                    <li className="hoverItems">History of PFN</li>
                  </Link>
                  <Link to="/what-we-believe" className="links" onClick={()=> setShowNav(false)}>
                    <li className="hoverItems">What we believe</li>
                  </Link>
                  <Link to="/our-mission" className="links" onClick={()=> setShowNav(false)}>
                    <li className="hoverItems">Our mission</li>
                  </Link>
              </ul>
              <li className="navListItems"
                {...getToggleProps({
                  onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })} 
                >
                  <div className="d-flex justify-content-between">
                  <div className="navListItemsTxt" style={isExpanded ? {color: "#990000"} : {color: "#fff"}}>
                    Provinces
                  </div>
                    <div className="hoverAngleIcon" style={isExpanded ? {color: "#990000"} : {color: "#fff"}}>
                      <i className={isExpanded ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true" />
                    </div>
                  </div>
                </li>
              <ul className='mobAccordionList pro' {...getCollapseProps()}>
                  {provinces.map((data, i)=> (
                    <Link onClick={()=> setShowNav(false)} key={i} to={{pathname: `/province/${data.id}`, state: {province: `${data.province}`, chairman: `${data.chairman}`,Secretariat: `${data.Secretariat}`, MeetingDays: `${data.MeetingDays}`, time: `${data.time}`, mapLink: `${data.mapLink}`, email: `${data.email}`, tel: `${data.tel}`, img: `${data.img}`}}}>
                      <li className="hoverItems">{data.province}</li>
                    </Link>
                  ))}
              </ul>
              <li className="navListItems"
                onClick={()=> setOrdList5(!ordList5)}
                >
                  <div className="d-flex justify-content-between">
                  <div className="navListItemsTxt" style={ordList5 ? {color: "#990000"} : {color: "#fff"}}>
                  Leadership
                  </div>
                    <div className="hoverAngleIcon" style={ordList5 ? {color: "#990000"} : {color: "#fff"}}>
                      <i className={ordList5 ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true" />
                    </div>
                  </div>
                </li>
              <ul className={ordList5 ? 'mobOrdList' : 'hideMobList'} >
                  <Link to="/the-national" className="links" onClick={()=> setShowNav(false)}>
                    <li className="hoverItems">The national</li>
                  </Link>
                  <Link to="/past-pfn-chairmen" className="links" onClick={()=> setShowNav(false)}>
                    <li className="hoverItems">Past Lagos State PFN chairmen</li>
                  </Link>
                  <Link to="/pfn-executives" className="links" onClick={()=> setShowNav(false)}>
                    <li className="hoverItems">PFN lagos state executives</li>
                  </Link>
              </ul>
              <li className="navListItems"
                onClick={()=> setOrdList4(!ordList4)}
                >
                  <div className="d-flex justify-content-between">
                  <div className="navListItemsTxt" style={ordList4 ? {color: "#990000"} : {color: "#fff"}}>
                  Lagos Structure
                  </div>
                    <div className="hoverAngleIcon" style={ordList4 ? {color: "#990000"} : {color: "#fff"}}>
                      <i className={ordList4 ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true" />
                    </div>
                  </div>
                </li>
              <ul className={ordList4 ? 'mobOrdList' : 'hideMobList'} >
              <Link to="/lses" className="links" onClick={()=> setShowNav(false)}>
                <li className="hoverItems">
                  The executive structure
                </li>
              </Link>
              <Link to="/chairman-messages" className="links" onClick={()=> setShowNav(false)}>
                <li className="hoverItems">
                  Chairman's Messages
                </li>
              </Link>
              </ul>
              <li className="navListItems"
                onClick={()=> setOrdList3(!ordList3)}
                >
                  <div className="d-flex justify-content-between">
                  <div className="navListItemsTxt" style={ordList3 ? {color: "#990000"} : {color: "#fff"}}>
                  Get involved
                  </div>
                    <div className="hoverAngleIcon" style={ordList3 ? {color: "#990000"} : {color: "#fff"}}>
                      <i className={ordList3 ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true" />
                    </div>
                  </div>
                </li>
              <ul className={ordList3 ? 'mobOrdList' : 'hideMobList'} >
                  <Link to="/directorate" className="links" onClick={()=> setShowNav(false)}>
                    <li className="hoverItems">Directorates</li>
                  </Link>
                  <Link to="#" className="links" onClick={()=> setShowNav(false)}>
                    <li className="hoverItems">Outreach</li>
                  </Link>
              </ul>
                <li className="navListItems"
                onClick={()=> setOrdList2(!ordList2)}
                >
                  <div className="d-flex justify-content-between">
                  <div className="navListItemsTxt" style={ordList2 ? {color: "#990000"} : {color: "#fff"}}>
                    Events
                  </div>
                    <div className="hoverAngleIcon" style={ordList2 ? {color: "#990000"} : {color: "#fff"}}>
                      <i className={ordList2 ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true" />
                    </div>
                  </div>
                </li>
              <ul className={ordList2 ? 'mobOrdList' : 'hideMobList'} >
              <Link to="/all-events" className="links" onClick={()=> setShowNav(false)}>
                  <li className="hoverItems">All Events</li>
                </Link>
                <Link to="/gallery" className="links" onClick={()=> setShowNav(false)}>
                  <li className="hoverItems">Gallery</li>
                </Link>
                <a href="https://www.youtube.com/channel/UChZXqT3Wg8buJkykYI99vCQ" target='_blank' rel="noopener noreferrer nofollow" className='links'>
                <li className="hoverItems">Watch Live</li>
                </a>
                <Link to='/blogs' className='links' onClick={()=> setShowNav(false)}>
                <li className="hoverItems">Blogs</li>
                </Link>
                <Link to='/announcement' className='links' onClick={()=> setShowNav(false)}>
                <li className="hoverItems">News Feed</li>
                </Link>
              </ul>
                <li className="navListItems"
                onClick={()=> setOrdList(!ordList)}
                >
                  <div className="d-flex justify-content-between">
                  <div className="navListItemsTxt" style={isExpanded ? {color: "#990000"} : {color: "#fff"}}>
                    Get in Touch
                  </div>
                    <div className="hoverAngleIcon" style={isExpanded ? {color: "#990000"} : {color: "#fff"}}>
                      <i className={ordList ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true" />
                    </div>
                  </div>
                </li>
              <ul className={ordList ? 'mobOrdList' : 'hideMobList'} >
                  <Link to="/prayer" className="links" onClick={()=> setShowNav(false)}>
                    <li className="hoverItems">Prayer</li>
                  </Link>
                  <Link to='/contact' className='links' onClick={()=> setShowNav(false)}>
                  <li className="hoverItems">Contact us</li>
                  </Link>
              </ul>
                
              {/* </Link> */}
            </ul>
            <div className="mainListItemsCenterRightBottom" id='mobSocial'>
                <div className="mainListItemsCenterRightSocials">
                <a href="https://www.facebook.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" id='links'>
                        <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="https://www.twitter.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" id='links'>
                        <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="https://www.instagram.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" id='links'>
                        <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="https://www.youtube.com/channel/UChZXqT3Wg8buJkykYI99vCQ" target='_blank' rel="noopener noreferrer nofollow" id='links'>
                        <i className="fa fa-youtube" aria-hidden="true" />
                    </a>
                    <a href="https://wa.link/hd88ub" target='_blank' rel="noopener noreferrer nofollow" className='links'>
                        <i className="fa fa-whatsapp footerSocialIcon" aria-hidden="true" />
                    </a>
                </div>
              </div>
            </div>
          )}
          <div className='mobileNavFlexBtn text-center'>
            <div className={!scroll ? "mobileNavFlexBtnLinks d-flex gap-2 d-flex gap-2" : "mobileNavFlexBtnLinks d-none"}>
                <Link to='/give' id='links' style={{fontWeight: '900 !important'}}>
                  <Button2 BtnText="Give" />
                </Link>
            </div>
          </div>
          <div className="openLinkBtn" onClick={() => {setShowNav(!showNav); setOrdList(false); setOrdList2(false); setOrdList3(false); setOrdList4(false); setOrdList5(false); setOrdList6(false); setExpanded(false)}}>
            {/* <div onClick={() => setShowNav(!showNav)}> */}
              {showNav ? <>&#10005;</> : <>&#8801;</>}
          </div>
          <div className="navButtons">
            <div className="leftBtn">
              {!scroll ? (
                <Link
                  to="#"
                  // id="leftBtn"
                  className={!scroll ? "links" : "leftBtn"}
                >
                  {/* <h3>Give</h3> */}
                  <Link to='/give' id='links'>
                    <Button BtnText="Give" />
                  </Link>
                  {/* <PaystackButton {...componentProps} /> */}
                </Link>
              ) : (
                <Link to='/give' id='links'>
                  <Button2 BtnText="Give" />
                </Link>
              )}
            </div>

            {/* <div className="rightBtn">
              <Link to="#" id="rightBtn" className="links">
                <h3>Give</h3>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Navbar