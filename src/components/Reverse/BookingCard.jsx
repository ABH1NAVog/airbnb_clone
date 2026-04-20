import React from "react";

const BookingCard = ({ data }) => {
  const serviceFee = Math.round(data.totalPrice * 0.12); // 12% service fee
  const taxes = 225;
  const finalTotal = data.totalPrice + serviceFee + taxes;

  return (
    <div className="booking-card">
      {/* PROPERTY HEADER */}
      <div className="property-header">
        <div className="property-image">
          <img src={data.image} alt="property" />
        </div>
        <div className="property-info">
          <h3 className="property-title">{data.title}</h3>
          <p className="property-location">{data.location}</p>
          <div className="property-rating">
            <span className="star">⭐</span>
            <span>5.0 (5 reviews)</span>
            <span className="favorite">· Guest favourite</span>
          </div>
        </div>
      </div>

      {/* BOOKING DETAILS */}
      <div className="booking-details">
        <div className="detail-section">
          <div className="detail-header">
            <h4>Your trip</h4>
          </div>

          <div className="detail-row">
            <div className="detail-content">
              <div className="detail-label">Dates</div>
              <div className="detail-value">{data.dates}</div>
            </div>
            <button className="change-btn">Change</button>
          </div>

          <div className="detail-row">
            <div className="detail-content">
              <div className="detail-label">Guests</div>
              <div className="detail-value">{data.guests} guest{data.guests > 1 ? 's' : ''}</div>
            </div>
            <button className="change-btn">Change</button>
          </div>
        </div>

        {/* PRICE BREAKDOWN */}
        <div className="price-breakdown">
          <div className="detail-header">
            <h4>Price details</h4>
          </div>

          <div className="price-item">
            <span className="price-label">
              ₹{data.price} × {data.nights} night{data.nights > 1 ? 's' : ''}
            </span>
            <span className="price-amount">₹{data.totalPrice}</span>
          </div>

          <div className="price-item">
            <span className="price-label">Service fee</span>
            <span className="price-amount">₹{serviceFee}</span>
          </div>

          <div className="price-item">
            <span className="price-label">Taxes</span>
            <span className="price-amount">₹{taxes}</span>
          </div>

          <hr className="price-divider" />

          <div className="price-total">
            <span className="total-label">Total (INR)</span>
            <span className="total-amount">₹{finalTotal}</span>
          </div>
        </div>
      </div>

      {/* POLICY */}
      <div className="policy-notice">
        <div className="policy-icon">🛡️</div>
        <div className="policy-text">
          <strong>Free cancellation</strong> before check-in. After that, this reservation is non-refundable.
          <button className="policy-link">Full policy</button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;