import React from 'react'
import PlaceholderImg from '../../images/placeholder.png'
import AnnouncementImg from '../../images/announcement1.jpeg'
import MoreImg from '../../images/web.jpg'

import './More.css'

const More = () => {
  return (
    <div className="container-fluid" id='moreContainer'>
        <div className="row" id='moreRow'>
            <div className="col-4 bg-light p-3 shadow rounded">
                <div className="blogIndex">
                    <div className="blogIndexBx">
                        <div className="blogIndexTitle">
                            <h3>Recent Blog</h3>
                        </div>
                        {/* <div className="blogIndexTitle2"><h5>lorem</h5></div> */}
                        {/* <div className="blogIndexImg"> */}
                            {/* <img src={MoreImg} alt="" /> */}
                        {/* </div> */}
                        <div className="blogIndexPara">
                            <p>Perhaps no single phenomenon has contributed to the growth of the Church in Nigeria like the 20th century revivals.
                                Between 1914 and 1990s, no less than six major revivals occurred, which impacted the Church in Nigeria in no small measure.
                                This is why some argue that the greatest need of the Church now is for revival and reformation.
                            </p>
                        </div>
                    </div>
                        <div className="blogIndexReadmore"><h6>read more</h6></div>
                </div>
            </div>
            <div className="col-4 bg-light p-3 shadow rounded">
                <div className="blogIndex">
                    <div className="blogIndexBx">
                        <div className="blogIndexTitle">
                            <h3>Announcement</h3>
                        </div>
                        
                        <div className="blogIndexImg">
                            <img src={AnnouncementImg} alt="" />
                        </div>
                        {/* <div className="blogIndexTitle2"><h5>lorem</h5></div> */}
                        {/* <div className="blogIndexPara">
                            <p>Lagos State Executive meets the last Tuesday of every month at The Secretariat, 5-9 Bode Thomas Road, Onipanu, Lagos.
                                 This administration is all inclusive. Every Pentecostal Minister/Church in Lagos State is welcome to join hands with us to advance God’s Kingdom in our lovely State. Kindly pray fervently for this new administration. We look forward to welcoming you in any of our State, Provincial or Chapter’s meetings/fellowship. Thanks and God bless you.</p>
                        </div> */}
                    </div>
                        {/* <div className="blogIndexReadmore"><h6>read more</h6></div> */}
                </div>
            </div>
            <div className="col-4 bg-light p-3 shadow rounded">
                <div className="blogIndex">
                    <div className="blogIndexBx">
                        <div className="blogIndexTitle">
                            <h3>News Feed</h3>
                        </div>
                        {/* <div className="blogIndexTitle2"><h5>lorem</h5></div> */}
                        <div className="blogIndexImg">
                            <img src={PlaceholderImg} alt="" />
                        </div>
                        <div className="blogIndexPara">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dignissimos nesciunt fuga distinctio quasi reiciendis dolor, temporibus ipsam asperiores maiores.</p>
                        </div>
                    </div>
                        <div className="blogIndexReadmore"><h6>read more</h6></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default More