import React from "react";
import { Carousel } from "react-bootstrap";
import Styles from "./Slider.module.css";

const Slider: React.FC = () => {
  
  return (
    <Carousel className={Styles.container}>
      <Carousel className="carousel slide carousel-fade">
        <Carousel className="carousel-inner">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://foundry.mediumra.re/img/cover14.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://foundry.mediumra.re/img/cover15.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://foundry.mediumra.re/img/cover16.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Carousel>
    </Carousel>
  );
};

export default Slider;
