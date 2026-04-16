import React, { useState } from "react";
import "./booking.css";

const LoginModal = ({ closeModal, onContinue }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!input) {
      setError("Please enter email or phone number");
    } else {
      onContinue?.();
      closeModal();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal animate">

        {/* CLOSE */}
        <span className="close-btn" onClick={closeModal}>✕</span>

        {/* LOGO */}
        <img src="/logo.jpeg" alt="Logo" className="modal-logo" />

        <h2 className="title">Welcome to Your Journey</h2>
        <p className="subtitle">Sign in or create an account to get started</p>

        {/* INPUT */}
        <div className="input-group">
          <label className="input-label">Email or Phone Number</label>
          <input
            type="text"
            placeholder="example@email.com or +1234567890"
            className="input login-input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            autoFocus
          />
          {error && <p className="error">{error}</p>}
        </div>

        {/* BUTTON */}
        <button className="continue-btn" onClick={handleContinue}>
          Continue
        </button>

        <div className="divider">
          <span>or</span>
        </div>

        {/* SOCIAL LOGIN */}
        <div className="social-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="google"
          />
        </div>

        <div className="social-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/0/747.png"
            alt="apple"
          />
        </div>

      </div>
    </div>
  );
};

export default LoginModal;