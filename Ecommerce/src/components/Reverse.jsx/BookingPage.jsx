import React from "react";
import { useLocation } from "react-router-dom";
import BookingCard from "./BookingCard";
import StepCard from "./StepCard";
import "./booking.css";

const BookingPage = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return <h2>No booking data found</h2>;
  }

  return (
    <div className="booking-container">
      <div className="booking-left">
        <h1>Request to book</h1>

        <StepCard step="1" title="Log in or sign up" button="Continue" active={true} />
        <StepCard step="2" title="Add a payment method" />
        <StepCard step="3" title="Review your request" />
      </div>

      <div className="booking-right">
        <BookingCard data={data} />
      </div>
    </div>
  );
};

export default BookingPage;