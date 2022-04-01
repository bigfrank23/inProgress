import React from 'react'
import styled from 'styled-components'
import Announcement from '../announcement/Announcement'
import { Link } from 'react-router-dom'
import './navbar.css'
import LogoImg from '../../images/PFN4.png'

const Container = styled.div`
    
`
const Navbar = () => {
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
                        <Link to='#' className='links' id='topLinks'>
                        <li className="navListItems">About</li>
                        </Link>
                        <Link to='#' className='links' id='topLinks'>
                        <li className="navListItems">Events</li>
                        </Link>
                        <Link to='#' className='links' id='topLinks'>
                        <li className="navListItems">Connect</li>
                        </Link>
                        <Link to='#' className='links' id='topLinks'>
                        <li className="navListItems">Get Involed</li>
                        </Link>
                        <Link to='#' className='links' id='topLinks'>
                        <li className="navListItems">Find Help</li>
                        </Link>
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