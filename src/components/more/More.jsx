import React, { useEffect, useState } from 'react'
// import PlaceholderImg from '../../images/placeholder.png'
// import AnnouncementImg from '../../images/announcement1.jpeg'
// import MoreImg from '../../images/web.jpg'

import './More.css'
import Slider from '../slider/Slider'
import Slider2 from '../slider/Slider2'

const More = () => {
    const [title, setTitle] = useState(false)
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight, });
      // console.log(dimensions);
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight, });
      }
      useEffect(() => {
        window.addEventListener("resize", handleResize, false);
      }, []);

  return (
    <div className="container-fluid" id='moreContainer'>
        <div className='moreContainerTitle'>
            {dimensions.width < 600 ? <h2> Blogs & News Feeds </h2> : <><h2>Recent Blogs</h2>
            <h2>News Feeds</h2></> }
        </div>
        <div className="row" id='moreRow'>
            <div className="col-md-6 col-sm-12 bg-light p-3 shadow rounded">
                <div className="blogIndex">
                   <Slider />
                </div>
            </div>
            <div className="col-md-6 col-sm-12 bg-light p-3 shadow rounded" id="moreGap">
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