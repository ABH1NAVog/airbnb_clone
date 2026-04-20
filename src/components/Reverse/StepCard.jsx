import React, { useState } from "react";
import LoginModal from "./LoginModal";
import PaymentModal from "./PaymentModal";
import PaymentSuccessModal from "./PaymentSuccessModal";

const StepCard = ({ 
  step, 
  title, 
  button, 
  active, 
  modalType, 
  onComplete,
  onPaymentMethodChange,
  disabled,
  paymentMethod,
  isLoggedIn
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    if (!disabled) {
      setShowModal(true);
    }
  };

  const handlePaymentSuccess = (method) => {
    onPaymentMethodChange?.(method);
    onComplete?.();
    setShowModal(false);
  };

  return (
    <>
      <div className={`step-card ${active ? "active" : ""} ${disabled ? "disabled" : ""}`}>
        <span>{step}. {title}</span>

        {step === "1" && isLoggedIn && (
          <span className="step-status logged-in">Logged in</span>
        )}

        {button && !disabled && !(step === "1" && isLoggedIn) && (
          <button
            className="continue-btn"
            onClick={handleOpenModal}
          >
            {button}
          </button>
        )}

        {disabled && (
          <span className="step-status">Locked</span>
        )}
      </div>

      {/* MODALS */}
      {showModal && modalType === "login" && (
        <LoginModal 
          closeModal={() => setShowModal(false)} 
          onContinue={onComplete}
        />
      )}

      {showModal && modalType === "payment" && (
        <PaymentModal 
          closeModal={() => setShowModal(false)} 
          onPaymentSuccess={() => handlePaymentSuccess(step)}
          isLoggedIn={isLoggedIn}
        />
      )}

      {active && modalType === "success" && (
        <PaymentSuccessModal 
          closeModal={() => setShowModal(false)} 
          paymentMethod={paymentMethod}
        />
      )}
    </>
  );
};

export default StepCard;