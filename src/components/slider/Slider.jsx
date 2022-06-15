import React, { useEffect, useState } from 'react'
import Slide from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Img from '../../images/splash1.jpg'
import Img2 from '../../images/user.png'
import PFNImg from '../../images/PFN10.png'
import './Slider.css'
import Button2 from './../Button/Button2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const slides = [
  {
    title: "Pentecostal and charismatic revivals in Nigeria",
    description: "",
    p: "Perhaps no single phenomenon has contributed to the growth of the Church in Nigeria like the 20th century revivals. Between 1914 and 1990s, no less than six major revivals occurred, which impacted the Church in Nigeria in no small measure. This is why some argue that the greatest need of the Church now is for revival and reformation. The past revivals brought growth to the Church, but failed to bring about a moral reformation of the society. This was a great shortcoming of the past revivals.",
    img: Img2,
    author: "By Austen C. Ukachi",
    to: '/blog'
  },
  {
    title: "Pentecostal and charismatic revivals in Nigeria",
    description: "",
    p: "Perhaps no single phenomenon has contributed to the growth of the Church in Nigeria like the 20th century revivals. Between 1914 and 1990s, no less than six major revivals occurred, which impacted the Church in Nigeria in no small measure. This is why some argue that the greatest need of the Church now is for revival and reformation. The past revivals brought growth to the Church, but failed to bring about a moral reformation of the society. This was a great shortcoming of the past revivals.",
    img: Img2,
    author: "By Austen C. Ukachi",
    to: '/blog'
  },
  {
    title: "Pentecostal and charismatic revivals in Nigeria",
    description: "",
    p: "Perhaps no single phenomenon has contributed to the growth of the Church in Nigeria like the 20th century revivals. Between 1914 and 1990s, no less than six major revivals occurred, which impacted the Church in Nigeria in no small measure. This is why some argue that the greatest need of the Church now is for revival and reformation. The past revivals brought growth to the Church, but failed to bring about a moral reformation of the society. This was a great shortcoming of the past revivals.",
    img: Img2,
    author: "By Austen C. Ukachi",
    to: '/blog'
  },
];

const Slider = () => {
  const [announcement, setAnnouncement] = useState([])
  useEffect(()=> {
    const getAnnouncement = async () => {
      const res = await axios.get("https://pfn-lagos.herokuapp.com/post")
      setAnnouncement(res.data)
      
    }
    getAnnouncement()
  }, [])
  return (
      <>
        <Slide>
        {announcement.slice(0, 3).map((slide, index) => (
            <div className='slideBx' key={index}>
            <h2 className='slideTitle'>{slide.title}</h2>
            <div>{slide.description}</div>
            <div className="slideBxAuthor">
              <img src={PFNImg} alt="" style={{width: "15%"}} />
            {/* <div className="d-flex gap-2 mt-2"> */}
              <p style={{fontSize: "10px", margin: 0}}>Admin</p>
              <p style={{fontSize: "10px"}}>{moment(slide.createdAt).fromNow()}</p>
            {/* </div> */}
            </div>
            <p>{slide.desc}</p>
            <div className="slideBtn">
              <Link to='/blogs'>
                <Button2 BtnText='View All' />
              </Link>
            </div>
            </div>
        ))}
        </Slide>
      </>
  );
}

export default Slider