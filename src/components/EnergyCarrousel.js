// src/components/EnergyCarousel.js
import React from "react";
import Slider from "react-slick";
import "../styles/HomePage/energyCarrousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const EnergyCarrousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3, // Cantidad de logos visibles
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return (
    <section className="energy-carrousel">
      <Slider {...settings}>
        <div className="carrousel-logo"><img src="/assets/logo1.png" alt="Solar Capital" /></div>
        <div className="carrousel-logo"><img src="/assets/logo2.png" alt="EBR Energy" /></div>
        <div className="carrousel-logo"><img src="/assets/logo3.png" alt="ENF" /></div>
        <div className="carrousel-logo"><img src="/assets/logo4.png" alt="Advanced Energy" /></div>
      </Slider>
    </section>
  );
};

export default EnergyCarrousel;
