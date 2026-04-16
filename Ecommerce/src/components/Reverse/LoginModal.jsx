import React, { useState } from "react";
import "./booking.css";
import { FaAirbnb } from "react-icons/fa6";

const LoginModal = ({ closeModal }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!input) {
      setError("Please enter email or phone number");
    } else {
      alert("Logged in successfully!");
      closeModal();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal animate">

        {/* CLOSE */}
        <span className="close-btn" onClick={closeModal}>✕</span>

        {/* LOGO */}
       <FaAirbnb className="logo-icon" />


        <h2 className="title">Log in or sign up</h2>

        {/* INPUT */}
        <input
          type="text"
          placeholder="Phone number or email"
          className="input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
        />

        {error && <p className="error">{error}</p>}

        {/* BUTTON */}
        <button className="continue-btn full" onClick={handleContinue}>
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