import React from "react";
import "./Slider.css";
import cover14 from "./img/cover14.jpg";
import cover15 from "./img/cover15.jpg";
import cover16 from "./img/cover16.jpg";

type Props = {};

const Slider = (props: Props) => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={cover14} className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={cover15} className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={cover16} className="d-block w-100" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
