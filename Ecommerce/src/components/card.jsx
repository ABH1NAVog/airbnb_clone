import React from "react";
import HeartButton from "./heartButton";
import "./card.css";

const Card = ({ title, location, price, rating, beds, image }) => {
  return (
    <div className="card-item">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        <HeartButton />
      </div>
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-location">{location}</p>
        <div className="card-info-row">
          <span className="card-beds">₹{price} • {beds} bed{beds > 1 ? "s" : ""}</span>
          <span className="card-rating">★ {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
