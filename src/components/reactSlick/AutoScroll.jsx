import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../../images/gallery/g38.jpg'
import Img2 from '../../images/gallery/g40.jpg'
import Img3 from '../../images/gallery/g39.jpg'
import Img4 from '../../images/gallery/g42.jpg'
import Img5 from '../../images/gallery/g48.jpg'
import Img6 from '../../images/gallery/g24.jpg'
import Img7 from '../../images/gallery/g34.jpg'

import './styles.css'

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="auto">
            <img src={Img1} alt="" />
          </div>
          <div className="auto">
            <img src={Img2} alt="" />
          </div>
          <div className="auto">
            <img src={Img3} alt="" />
          </div>
          <div className="auto">
            <img src={Img4} alt="" />
          </div>
          <div className="auto">
            <img src={Img5} alt="" />
          </div>
          <div className="auto">
            <img src={Img6} alt="" />
          </div>
          <div className="auto">
            <img src={Img7} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
