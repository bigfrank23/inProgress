import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../../images/gallery/104.jpg'
import Img2 from '../../images/gallery/108.jpg'
import Img3 from '../../images/gallery/107.jpg'
import Img4 from '../../images/gallery/109.jpg'
import Img5 from '../../images/gallery/17.jpg'
import Img6 from '../../images/gallery/24.jpg'

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
        </Slider>
      </div>
    );
  }
}
