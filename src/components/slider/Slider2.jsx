import React from 'react'
import Slide from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Img from '../../images/splash1.jpg'
import Img2 from '../../images/user.png'
import AnnouncementImg from '../../images/announcement1.jpeg'
import './Slider.css'
import Button2 from './../Button/Button2';
import { Link } from 'react-router-dom';
import './Slider2.css'

const slides = [
  {
    title: "Get Your PVC Now!",
    // description: "Pentecostal and charismatic revivals in Nigeria",
    // p: "Perhaps no single phenomenon has contributed to the growth of the Church in Nigeria like the 20th century revivals. Between 1914 and 1990s, no less than six major revivals occurred, which impacted the Church in Nigeria in no small measure. This is why some argue that the greatest need of the Church now is for revival and reformation. The past revivals brought growth to the Church, but failed to bring about a moral reformation of the society. This was a great shortcoming of the past revivals.",
    img: AnnouncementImg,
  },
  {
    title: "ANNOUNCEMENT",
    // description: "Pentecostal and charismatic revivals in Nigeria",
    p: "Lagos State Executive meets the last Tuesday of every month at The Secretariat, 5-9 Bode Thomas Road, Onipanu, Lagos. This administration is all inclusive. Every Pentecostal Minister/Church in Lagos State is welcome to join hands with us to advance God’s Kingdom in our lovely State. We look forward to welcoming you in any of our State, Provincial or Chapter’s meetings/fellowship. Thanks and God bless you.",
    // img: Img2,
    to: '/blog'
  },
];

const Slider2 = () => {
  return (
      <>
        <Slide>
        {slides.map((slide, index) => (
            <div className='slideBox' key={index}>
            <h2 className='slideTitle' id='slideTitle'>{slide.title}</h2>
            <div>{slide.description}</div>
            <div className="sliderBoxImg">
            <img src={slide.img} alt="" width={100} />

            </div>
            <p>{slide.p}</p>
            <div className="slideBtn">
              <Link to='/announcement'>
                <Button2 BtnText='View All' />
              </Link>
            </div>
            </div>
        ))}
        </Slide>
      </>
  );
}

export default Slider2