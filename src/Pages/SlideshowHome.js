import React from 'react';
import Slider from 'react-slick';

import './SlideshowHomeCSS/slick.css';
import './SlideshowHomeCSS/slick-theme.css';

import skate1 from './PicturesHome/skate1.png';
import skate2 from './PicturesHome/skate2.png';
import pen from './PicturesHome/pen.png';
import table from './PicturesHome/table.png';


// Sample image data
const images = [
  'skate1',
  'skate2',
  'pen',
  'table'
  // Add more image URLs here
];

const Slideshow = () => {
  const settings = {
    
    dots: true, // Display dots for navigation
    infinite: true, // Loop the slideshow
    speed: 600, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplaySpeed: 3000,
    autoplay: true,
    pauseOnHover: true
  };

  return (
    <Slider {...settings}>
        <div>
            <img src={skate1} />        
        </div>
       
        <div>
            <img src={pen} />  
        </div>
              
        <div>
            <img src={skate2} />  
        </div>
        
        <div>
            <img src={table} />   
        </div>
    </Slider>
  );
};

export default Slideshow;
