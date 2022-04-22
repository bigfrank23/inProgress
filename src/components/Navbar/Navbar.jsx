import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../announcement/Announcement'
import { Link } from 'react-router-dom'
import './navbar.css'
import LogoImg from '../../images/pfnLogo.png'
import Img from '../../images/splash2.jpg'
import { mobile } from '../../responsive'
import Button2 from '../Button/Button2'

const Container = styled.nav`
    /* ${mobile({display: 'none'})} */
`
const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const [closeNav, setCloseNav] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [openMain, setOpenMain] = useState(false)

    

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 300) {
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
    })
  return (
    <Container id="navbar" className={scroll && "activeNavbar"}>
      {/* <Announcement /> */}
      <div className="top">
        <div className="eventTime">
          <Link to="#" className="links" id="topLinks">
            {" "}
            Watch Live:{" "}
          </Link>{" "}
          &nbsp;22: 33: 33
        </div>
        <div className="nav">
          <div className="logo">
            <img src={LogoImg} width={100} alt="logo" />
          </div>
          <div className="navLinks">
            <ul className="navList">
              {/* <Link to="/" className="links" style={{ marginRight: "20px" }}> */}
              <li className="navListItems" onClick={()=> setOpenMain(!openMain)}>
                  Menu
                <ul className={openMain ? "mainListItems" : "notActiveMain"}>
                  <div className={openMain ? "mainListItemsTop" : "notActiveMain"}>
                    <div className="logo"><img src={LogoImg} width={100} alt="logo" /></div>
                    <div className="time">10:30am</div>
                    <div className="closeMenu" > <h3 onClick={()=> setOpenMain(false)}>close</h3></div>
                  </div>
                  <div className={openMain ? "mainListItemsCenter" : "notActiveMain"}>
                    <div className="mainListItemsCenterLeft">
                      <div className="mainListItemsCenterLeftContainer">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                      </div>
                      <div className="mainListItemsCenterLeftImg">
                        <img src={Img} alt="" />
                      </div>
                      <div className="mainListItemsCenterLeftBottomTxt">
                        <h4>Lorem ipsum dolor sit.</h4>
                        <h4>Lorem ipsum</h4>
                      </div>
                    </div>
                    <div className="mainListItemsCenterRight">
                      <div className="mainListItemsCenterRightTopTxt">
                        <h2>Lorem ipsum dolor sit.</h2>
                        <div className="mainListItemsCenterRightTopPara">
                          <p>Lorem.</p>
                          <i className="fa fa-angle-down" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="mainListItemsCenterRightCenter">
                        <hr className='mainListHr' />
                        <div className="mainListItemsCenterRightNavContainer">
                          <ul className="mainListItemsCenterRightList">
                            <li className="mainListItemsCenterRightListItems">what we believe</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                          </ul>
                          <ul className="mainListItemsCenterRightList">
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                          </ul>
                          <ul className="mainListItemsCenterRightList">
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                            <li className="mainListItemsCenterRightListItems">Lorem, ipsum.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mainListItemsCenterRightBottom">
                        <div className="mainListItemsCenterRightSocials">
                          <i className="fa fa-facebook" aria-hidden="true" />
                          <i className="fa fa-twitter" aria-hidden="true" />
                          <i className="fa fa-instagram" aria-hidden="true" />
                          <i className="fa fa-youtube" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
                </li>
              {/* </Link> */}
              <li className="navListItems">
                About
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
                  <Link to="#" className="links">
                    <li className="hoverItems">Our mission</li>
                  </Link>
                  {/* <Link to="/page2" className="links">
                    <li className="hoverItems">Our team</li>
                  </Link> */}
                </ul>
              </li>
              <li className="navListItems">
                Leadership
                <ul className="hover">
                  <Link to="/the-national" className="links">
                    <li className="hoverItems">The national</li>
                  </Link>
                  <Link to="/past-pfn-chairmen" className="links">
                    <li className="hoverItems">Past PFN chairmen</li>
                  </Link>
                  <Link to="/pfn-executives" className="links">
                    <li className="hoverItems">PFN lagos state executives</li>
                  </Link>
                </ul>
              </li>
              <li className="navListItems">
                Lagos state structure
                <ul className="hover">
                  <Link to="/lses" className="links">
                    <li className="hoverItems">
                      The executive structure
                    </li>
                  </Link>
                </ul>
              </li>
              <li className="navListItems">
                Get involved
                <ul className="hover">
                  <Link to="#" className="links">
                    <li className="hoverItems">The Provinces</li>
                    <li className="hoverItems">Volunteers</li>
                    <li className="hoverItems">Outreach</li>
                  </Link>
                </ul>
              </li>
              <li className="navListItems">
                Events
                <ul className="hover">
                  <Link to="#" className="links">
                    <Link to="/gallery" className="links">
                      <li className="hoverItems">Gallery</li>
                    </Link>
                    <li className="hoverItems">Watch Live</li>
                    <li className="hoverItems">Past Events</li>
                    <li className="hoverItems">Upcoming Events</li>
                  </Link>
                </ul>
              </li>
              <Link to="/blogs" className="links">
                <li className="navListItems">Blogs</li>
              </Link>
            </ul>
          </div>
          {showNav && (
            <div className="mobileNav">
              <ul className="navList">
                <Link to="/" className="links" onClick={()=> setShowNav(false)}>
                  <li className="navListItems">Menu</li>
                </Link>
                <li className="navListItems">
                  About
                  <ul className="hover">
                    <Link to="/about" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">About PFN</li>
                    </Link>
                    <Link to="/history2" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">History of PFN</li>
                    </Link>
                    <Link to="/what-we-believe" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">What we believe</li>
                    </Link>
                    <Link to="#" className="links" >
                      <li className="hoverItems">Our mission</li>
                    </Link>
                  </ul>
                </li>
                <li className="navListItems">
                  Leadership
                  <ul className="hover">
                    <Link to="/the-national" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">The national president</li>
                    </Link>
                    <Link to="/past-pfn-chairmen" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">Past PFN chairmen</li>
                    </Link>
                    <Link to="/pfn-executives" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">PFN lagos state executives</li>
                    </Link>
                  </ul>
                </li>
                <li className="navListItems">
                  PFN lagos state structure
                  <ul className="hover">
                    <Link to="/lses" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">
                        The lagos state executive structure
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="navListItems">
                  Get involved
                  <ul className="hover">
                    <Link to="#" className="links">
                      <li className="hoverItems">The Provinces</li>
                      <li className="hoverItems">Volunteers</li>
                      <li className="hoverItems">Outreach</li>
                    </Link>
                  </ul>
                </li>
                <li className="navListItems">
                  Events
                  <ul className="hover">
                    <Link to="#" className="links">
                      <Link to="/gallery" className='links' onClick={()=> setShowNav(false)}>
                        <li className="hoverItems">Gallery</li>
                      </Link>
                      <li className="hoverItems">Watch Live</li>
                      <li className="hoverItems">Past Events</li>
                      <li className="hoverItems">Upcoming Events</li>
                    </Link>
                  </ul>
                </li>
                <Link to="/blogs" className="links" onClick={()=> setShowNav(false)}>
                  <li className="navListItems">Blogs</li>
                </Link>
              </ul>
            </div>
          )}
          <div className="openLinkBtn" onClick={() => setShowNav(!showNav)}>
            {showNav ? <>&#10005;</> : <>&#8801;</>}
          </div>
          <div className="navButtons">
            <div className="leftBtn">
              {!scroll ? (
                <Link
                  to="#"
                  id="leftBtn"
                  className={!scroll ? "links" : "leftBtn"}
                >
                  <h3>Give</h3>
                </Link>
              ) : (
                <Button2 BtnText="Give" />
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