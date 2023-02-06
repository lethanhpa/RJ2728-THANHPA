import React, { useState } from "react";
import "./Slider.css";
import cover14 from "./img/cover14.jpg";
import cover15 from "./img/cover15.jpg";
import cover16 from "./img/cover16.jpg";

type Props = {};

const Slider = (props: Props) => {
  const [user, setUser] = useState([
    {
      name: "Jeannette Weissnat",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/374.jpg",
      city: "Port Beatricecester",
      id: "3",
    },
    {
      name: "Ms. Irene Grimes",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg",
      city: "East Honolulu",
      id: "4",
    },
    {
      name: "Dominic Farrell",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/773.jpg",
      city: "Orange",
      id: "5",
    },
  ]);

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
