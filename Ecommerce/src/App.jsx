
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add these imports
import Navbar from './components/navbar';
import OnePlaceRow from './components/Row';
import Product_details from './components/product_details';
import BookingPage from './components/Reverse/BookingPage';
import Experiences from './components/experience';
import Service from './components/Services';

export default function App() {
  const [searchCity, setSearchCity] = useState(null);
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (city, searchData) => {
    setSearchCity(city);
    setSearchParams(searchData);
  };

  const clearSearch = () => {
    setSearchCity(null);
    setSearchParams(null);
  };

  return (
    <Router> {/* Wrap everything in Router */}
      <Navbar onSearch={handleSearch} /> {/* Navbar stays on all pages */}
      <Routes>
        <Route path="/" element={<OnePlaceRow searchCity={searchCity} searchParams={searchParams} clearSearch={clearSearch} />} /> {/* Home page */}
        <Route path="/product-details/:id" element={<Product_details />} /> {/* Details page */}
        <Route path="/booking" element={<BookingPage />} /> {/* Booking page */}
        <Route path="/experiences" element={<Experiences />} /> {/* Experiences page */}
        <Route path="/services" element={<Service />} /> {/* Services page */}
      </Routes>
    </Router>
  );
}