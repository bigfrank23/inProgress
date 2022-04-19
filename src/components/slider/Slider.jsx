import React from 'react'
import Slide from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Img from '../../images/splash1.jpg'
import Img2 from '../../images/user.png'
import './Slider.css'
import Button2 from './../Button/Button2';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: "By Austen C. Ukachi",
    description: "Pentecostal and charismatic revivals in Nigeria",
    p: "Perhaps no single phenomenon has contributed to the growth of the Church in Nigeria like the 20th century revivals. Between 1914 and 1990s, no less than six major revivals occurred, which impacted the Church in Nigeria in no small measure. This is why some argue that the greatest need of the Church now is for revival and reformation. The past revivals brought growth to the Church, but failed to bring about a moral reformation of the society. This was a great shortcoming of the past revivals.",
    img: Img2,
  },
  { title: "View All" },
];

const Slider = () => {
  return (
      <>
        <Slide>
        {slides.map((slide, index) => (
            <div className='slideBx' key={index}>
            <h2 className='slideTitle'>{slide.title}</h2>
            <div>{slide.description}</div>
            <img src={slide.img} alt="" style={{width: "10%"}} />
            <p>{slide.p}</p>
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