import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../announcement/Announcement'
import { Link } from 'react-router-dom'
import './navbar.css'
import LogoImg from '../../images/PFN4.png'

const Container = styled.div`
    
`
const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
  return (
    <Container id='navbar'>
        {/* <Announcement /> */}
        <div className="top">
            <div className="eventTime">
               <Link to='#' className='links' id='topLinks'> Watch Live: </Link> &nbsp;22: 33: 33
            </div>
            <div className="nav">
                <div className="logo">
                    <img src={LogoImg} width={100} alt="logo" />
                    <div className="logoText">
                        <h1 style={{fontSize: '4rem'}}>PFN</h1>
                        <h3>Lagos State</h3>
                        
                    </div>
                </div>
                <div className="navLinks">
                    <ul className="navList">
                        <li className="navListItems">About
                        <ul className="hover">
                            <Link to='/page1' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                            <Link to='/page2' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                            <Link to='/page3' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                        </ul>
                        </li>
                        <li className="navListItems">Events
                        <ul className="hover">
                            <Link to='/page4' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                            <Link to='/page5' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                            <Link to='#' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                        </ul>
                        </li>
                        <li className="navListItems">Connect
                        <ul className="hover">
                            <Link to='#' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                            <Link to='#' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                            <Link to='#' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                        </ul>
                        </li>
                        <li className="navListItems">Get involved
                        <ul className="hover">
                            <Link to='#' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                            <Link to='#' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                            <Link to='#' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                        </ul>
                        </li>
                        <li className="navListItems">Find help
                        <ul className="hover">
                            <Link to='#' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                            <Link to='#' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                            <Link to='#' className='links'>
                                <li className="hoverItems">Lorem, ipsum dolor.</li>
                            </Link>
                        </ul>
                        </li>
                    </ul>
                </div>
                <div className="navButtons">
                    <div className="leftBtn">
                        <Link to="#" id='leftBtn' className='links'>
                            <h3>Messages</h3>
                        </Link>
                    </div>
                    <div className="rightBtn">
                        <Link to="#" id='rightBtn' className='links'>
                            <h3>Give</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Navbar