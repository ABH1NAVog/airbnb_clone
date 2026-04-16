import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa6";

const PaymentSuccessModal = ({ closeModal, paymentMethod }) => {
  const navigate = useNavigate();

  const handleDone = () => {
    closeModal();
    navigate("/");
  };

  return (
    <div className="modal-overlay">
      <div className="modal animate success-modal success-animation">
        {/* CLOSE */}
        <span className="close-btn" onClick={closeModal}>✕</span>

        {/* SUCCESS ANIMATION BACKGROUND */}
        <div className="success-background-effect"></div>

        {/* SUCCESS ANIMATION */}
        <div className="success-icon-container">
          <div className="success-checkmark">
            <svg viewBox="0 0 52 52" className="checkmark-circle">
              <circle cx="26" cy="26" r="25" fill="none" className="checkmark-circle-bg" />
              <path d="M14.1 27.2l7.1 7.2 16.7-16.6" fill="none" className="checkmark-path" />
            </svg>
          </div>
        </div>

        {/* SUCCESS MESSAGE */}
        <h2 className="title success-title">Payment Successful!</h2>
        
        <div className="success-details">
          <p className="confirmation-text">
            Your booking has been confirmed
          </p>
          <div className="payment-confirmation">
            <div className="confirmation-item">
              <span>Payment Method:</span>
              <strong>{paymentMethod === 'upi' ? 'UPI' : 'Debit/Credit Card'}</strong>
            </div>
            <div className="confirmation-item">
              <span>Status:</span>
              <strong className="status-success">✓ Completed</strong>
            </div>
          </div>
        </div>

        {/* INFO BOXES */}
        <div className="success-info-boxes">
          <div className="info-box">
            <div className="info-icon">📧</div>
            <p>Check your email for confirmation details</p>
          </div>
          <div className="info-box">
            <div className="info-icon">🔔</div>
            <p>You'll receive booking updates on your phone</p>
          </div>
          <div className="info-box">
            <div className="info-icon">🛡️</div>
            <p>Your booking is protected by AirCover</p>
          </div>
        </div>

        {/* DONE BUTTON */}
        <button className="continue-btn full success-btn" onClick={handleDone}>
          Continue Exploring
        </button>

        <p className="support-text">
          Need help? <a href="#support" className="support-link">Contact support</a>
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
