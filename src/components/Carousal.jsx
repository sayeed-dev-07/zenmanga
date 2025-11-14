import React from 'react';
import CarousalCards from './CarousalCards';

import Slider from "react-slick";

const Carousal = ({ data }) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1465,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };
  return (
    <div className='slider-container my-12 w-[90vw] lg:w-[80vw] px-[2%] md:px-[5%] lg:px-[10%]'>
      <Slider {...settings}>
        {data.map(item => <CarousalCards key={item.id} card={item} />)}
      </Slider>
    </div>
  );
};

export default Carousal;