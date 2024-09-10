import React from 'react';
import Slider from 'react-slick';
import '../styles/ImageSlider.css';
import i1 from '../assets/domino-studio-164_6wVEHfI-unsplash.jpg';

import i3 from '../assets/pexels-mnzoutfits-1598505.jpg';


import i6 from '../assets/patrick-hodskins-B6LFgATILWI-unsplash.jpg';
import i7 from '../assets/maksim-larin-NOpsC3nWTzY-unsplash.jpg';

function ImageSlider() {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping of images
    speed: 500, // Speed of transitions in ms
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Automatically scroll images
    autoplaySpeed: 2000, // Time between each image scroll in ms
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={i1} alt="Image 1" />
        </div>
        <div>
          <img src={i7} alt="Image 2" />
        </div>
        <div>
          <img src={i3} alt="Image 3" />
        </div>
       
       
        <div>
          <img src={i6} alt="Image 5" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;

