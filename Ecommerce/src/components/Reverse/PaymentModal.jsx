import React, { useState } from "react";
import { FaAirbnb } from "react-icons/fa6";

const PaymentModal = ({ closeModal, onPaymentSuccess, isLoggedIn }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirmPayment = () => {
    if (!selectedMethod) {
      alert("Please select a payment method");
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
      closeModal();
    }, 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal animate payment-modal">
        {/* CLOSE */}
        <span className="close-btn" onClick={closeModal}>✕</span>

        {/* LOGO */}
        <FaAirbnb className="logo-icon" />

        {isLoggedIn && (
          <p className="logged-in-badge">✓ Logged in</p>
        )}

        <h2 className="title">Select Payment Method</h2>
        <p className="payment-subtitle">Choose how you'd like to pay</p>

        {/* PAYMENT METHODS */}
        <div className="payment-methods">
          {/* UPI */}
          <div 
            className={`payment-option ${selectedMethod === 'upi' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('upi')}
          >
            <div className="payment-icon">💳</div>
            <div className="payment-details">
              <h3>UPI Payment</h3>
              <p>Google Pay, PhonePe, BHIM</p>
            </div>
            <div className={`radio-btn ${selectedMethod === 'upi' ? 'active' : ''}`}></div>
          </div>

          {/* DEBIT/CREDIT CARD */}
          <div 
            className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('card')}
          >
            <div className="payment-icon">💰</div>
            <div className="payment-details">
              <h3>Debit / Credit Card</h3>
              <p>Visa, Mastercard, RuPay</p>
            </div>
            <div className={`radio-btn ${selectedMethod === 'card' ? 'active' : ''}`}></div>
          </div>
        </div>

        {/* CONFIRM BUTTON */}
        <button 
          className="continue-btn full" 
          onClick={handleConfirmPayment}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Confirm Payment"}
        </button>

        <p className="payment-info">
          ✓ Your payment is secure and encrypted
        </p>
      </div>
    </div>
  );
};

export default PaymentModal;
