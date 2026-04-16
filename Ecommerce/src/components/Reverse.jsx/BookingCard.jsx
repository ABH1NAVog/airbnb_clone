import React from "react";

const BookingCard = ({ data }) => {
  return (
    <div className="booking-card">

      {/* PROPERTY */}
      <div className="property">
        <img src={data.image} alt="property" />

        <div>
          <h3>{data.title}</h3>
          <p>{data.location}</p>
          <span>⭐ 5.0 (5) · Guest favourite</span>
        </div>
      </div>

      <p className="policy">
        This reservation is non-refundable. <b>Full policy</b>
      </p>

      {/* DATES */}
      <div className="info-row">
        <div>
          <p>Dates</p>
          <strong>{data.dates}</strong>
        </div>
        <button>Change</button>
      </div>

      {/* GUESTS */}
      <div className="info-row">
        <div>
          <p>Guests</p>
          <strong>{data.guests} adult</strong>
        </div>
        <button>Change</button>
      </div>

      {/* PRICE */}
      <div className="price">
        <div className="price-row">
          <span>1 night x ₹{data.price} </span>
          <span>₹{data.price}</span>
        </div>

        <div className="price-row">
          <span>Taxes</span>
          <span>₹225</span>
        </div>

        <hr />

        <div className="price-total">
          <strong>Total INR</strong>
          <strong>₹{data.price + 225}</strong>
        </div>

        <p className="breakdown">Price breakdown</p>
      </div>
    </div>
  );
};

export default BookingCard;