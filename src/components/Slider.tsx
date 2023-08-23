import React, { Component } from "react";
import Slider from "react-slick";
import { Hero } from "./Hero";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Hero />
            {/* <div className="mt-12 padding-x padding-y max-width" id="discover">
              <div className="home__text-container">
                <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                <p>Explore the car you might like</p>
              </div>
            </div> */}
          </div>
          <div>
            <Hero />
            {/* <div className="mt-12 padding-x padding-y max-width" id="discover">
              <div className="home__text-container">
                <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                <p>Explore the car you might like</p>
              </div>
            </div> */}
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
