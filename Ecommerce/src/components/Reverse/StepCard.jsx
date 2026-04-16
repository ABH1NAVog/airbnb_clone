import React, { useState } from "react";
import LoginModal from "./LoginModal";

const StepCard = ({ step, title, button, active }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={`step-card ${active ? "active" : ""}`}>
        <span>{step}. {title}</span>

        {button && (
          <button
            className="continue-btn"
            onClick={() => setShowModal(true)}
          >
            {button}
          </button>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <LoginModal closeModal={() => setShowModal(false)} />
      )}
    </>
  );
};

export default StepCard;