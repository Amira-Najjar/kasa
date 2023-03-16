import React, { useState, useEffect } from 'react';
import './carrousel.css';
import chevronLeft from "../../assets/chevronLeft.png"
import chevronRight from "../../assets/chevronRight.png"
const Carousel = ({images}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrow, setArrow] = useState(images);
  useEffect(() => {
    if (images.length === 1) {
        setArrow("arrow-hidden");
    } else {
        setArrow(images)
    }
   }, [images]);
  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  return (
    <div className="carousel-container">
      <div className="carousel-images">
        <img src={images[currentSlide]} alt="Carousel"/>
      </div>
      <button className={`arrow prev ${arrow}`} onClick={prevSlide}>
        <img className="chevronLeft" src={chevronLeft} alt="bouton_précedent"/>
      </button>
      <button className={`arrow next ${arrow}`} onClick={nextSlide}>
        <img className="chevronRight" src={chevronRight} alt="bouton_suivant"/>
      </button>
      <span className={`count-pictures ${arrow}`}>{currentSlide + 1} /{images.length}</span>
    </div>
  );
};

export default Carousel;
