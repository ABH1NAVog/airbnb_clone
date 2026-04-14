import React, { useEffect, useState } from 'react';
import '../style/navbar.css';

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="navbar">

      {/* TOP ROW — full width, logo on far left, actions on far right */}
      <div className="nav-top-row">

        {/* LEFT — Logo sticks to screen edge */}
        <div className="nav-left">
          {/* <img src="https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg" alt="logo" /> */}
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/960px-Airbnb_Logo_B%C3%A9lo.svg.png' alt='logo'></img>
        </div>

        {/* CENTER — Nav links centered in the middle of the screen */}
        {!scrolled && (
          <div className="nav-center">
            <button>🏠 Homes</button>
            <button>🎈 Experiences</button>
            <button>🛎️ Services</button>
          </div>
        )}


        <div className="nav-right">
          <button className="filter-btn">⚙️ Filters</button>
          <button className="host-btn">Become a host</button>
          <div className="menu">☰</div>
        </div>

      </div>

     
      <div className={`nav-bottom ${scrolled ? "compact" : "expanded"}`}>

        <div className="search-section">
          <div className="search-item">
            <span className="search-label">Where</span>
            <span className="search-value">Homes nearby</span>
          </div>
          <span className="divider" />
          <div className="search-item">
            <span className="search-label">When</span>
            <span className="search-value">Any week</span>
          </div>
          <span className="divider" />
          <div className="search-item">
            <span className="search-label">Who</span>
            <span className="search-value">Add guests</span>
          </div>
        </div>

        <button className="search-btn">🔍</button>

      </div>

    </div>
  
    </ >
  );
}