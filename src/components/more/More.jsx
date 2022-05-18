import React from 'react'
import PlaceholderImg from '../../images/placeholder.png'
import AnnouncementImg from '../../images/announcement1.jpeg'
import MoreImg from '../../images/web.jpg'

import './More.css'
import Slider from '../slider/Slider'
import Slider2 from '../slider/Slider2'

const More = () => {
  return (
    <div className="container-fluid" id='moreContainer'>
        <div className='moreContainerTitle'>
            <h2>Recent Blogs</h2>
            <h2>News Feeds</h2>
        </div>
        <div className="row" id='moreRow'>
            <div className="col-6 bg-light p-3 shadow rounded">
                <div className="blogIndex">
                   <Slider />
                </div>
            </div>
            <div className="col-6 bg-light p-3 shadow rounded">
                <div className="blogIndex">
                    <div className="blogIndexBx">
                        <Slider2 />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default More