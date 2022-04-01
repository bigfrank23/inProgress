import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import './announcement.css'

const Container = styled.div`
    background-color: green;
    padding: 15px 0;
    text-align: center;
`
const TextAnnouncement = styled.p`
    color: #fff;
    font-weight: 900;
    text-decoration: none;
`

const Announcement = () => {
  return (
    <Container>
        <Link className='links' to="#">
            <TextAnnouncement>
            Stay connected with current events »
            </TextAnnouncement>
        </Link>
    </Container>
  )
}

export default Announcement