import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BookingCard from "./BookingCard";
import StepCard from "./StepCard";
import "./booking.css";

const BookingPage = () => {
  const location = useLocation();
  const data = location.state;
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!data) {
    return <h2>No booking data found</h2>;
  }

  const handleLoginComplete = () => {
    setIsLoggedIn(true);
    setActiveStep(2);
  };

  const handlePaymentSuccess = () => {
    setActiveStep(3);
  };

  return (
    <div className="booking-container">
      <div className="booking-left">
        <h1>Request to book</h1>

        <StepCard 
          step="1" 
          title="Log in or sign up" 
          button="Continue" 
          active={activeStep === 1}
          modalType="login"
          onComplete={handleLoginComplete}
          isLoggedIn={isLoggedIn}
        />
        
        <StepCard 
          step="2" 
          title="Add a payment method" 
          button="Select Method"
          active={activeStep === 2}
          modalType="payment"
          onComplete={handlePaymentSuccess}
          onPaymentMethodChange={setPaymentMethod}
          disabled={activeStep < 2}
          isLoggedIn={isLoggedIn}
        />
        
        <StepCard 
          step="3" 
          title="Review your request" 
          button="Complete"
          active={activeStep === 3}
          modalType="success"
          paymentMethod={paymentMethod}
          disabled={activeStep < 3}
        />
      </div>

      <div className="booking-right">
        <BookingCard data={data} />
      </div>
    </div>
  );
};

export default BookingPage;