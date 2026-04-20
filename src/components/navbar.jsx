import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HostingModal from './HostingModal';
import LoginModal from './Reverse/LoginModal';
import '../style/navbar.css';

export default function Navbar({ onSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showHostingModal, setShowHostingModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchDate, setSearchDate] = useState('Any week');
  const [searchDateRange, setSearchDateRange] = useState({ start: '', end: '' });
  const [searchGuests, setSearchGuests] = useState('Add guests');
  const [activeSearchField, setActiveSearchField] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close search fields and menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeSearchField && !e.target.closest('.search-item') && !e.target.closest('.date-picker-popup')) {
        setActiveSearchField(null);
      }
      if (showMenu && !e.target.closest('.menu') && !e.target.closest('.dropdown-menu')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeSearchField, showMenu]);

  // Get today's date
  const getDateString = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Get date preset values
  const getThisWeekend = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilFriday = (5 - dayOfWeek + 7) % 7 || 7;
    const friday = new Date(today);
    friday.setDate(friday.getDate() + daysUntilFriday);
    
    const sunday = new Date(friday);
    sunday.setDate(sunday.getDate() + 2);
    
    return { start: getDateString(friday), end: getDateString(sunday) };
  };

  const getNextMonth = () => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(1);
    start.setMonth(start.getMonth() + 1);
    
    const end = new Date(start);
    end.setDate(end.getDate() + 30);
    
    return { start: getDateString(start), end: getDateString(end) };
  };

  // Handle search field clicks
  const handleLocationClick = () => {
    setActiveSearchField(activeSearchField === 'location' ? null : 'location');
  };

  const handleDateClick = () => {
    setActiveSearchField(activeSearchField === 'date' ? null : 'date');
  };

  const handleGuestClick = () => {
    setActiveSearchField(activeSearchField === 'guest' ? null : 'guest');
  };

  // Handle menu toggle
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  // Close menu when navigating
  const handleMenuItemClick = (callback) => {
    setShowMenu(false);
    if (callback) callback();
  };
  const handleLocationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  // Handle Enter key on location input
  const handleLocationKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle date range changes
  const handleStartDateChange = (e) => {
    const startDate = e.target.value;
    setSearchDateRange({ ...searchDateRange, start: startDate });
    
    if (startDate && searchDateRange.end) {
      const start = new Date(startDate);
      const end = new Date(searchDateRange.end);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setSearchDate(days > 0 ? `${days} night${days > 1 ? 's' : ''}` : 'Invalid range');
    }
  };

  const handleEndDateChange = (e) => {
    const endDate = e.target.value;
    setSearchDateRange({ ...searchDateRange, end: endDate });
    
    if (searchDateRange.start && endDate) {
      const start = new Date(searchDateRange.start);
      const end = new Date(endDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setSearchDate(days > 0 ? `${days} night${days > 1 ? 's' : ''}` : 'Invalid range');
    }
  };

  // Handle date presets
  const handleDatePreset = (preset) => {
    if (preset === 'flexible') {
      setSearchDate('Flexible');
      setSearchDateRange({ start: '', end: '' });
    } else if (preset === 'weekend') {
      const range = getThisWeekend();
      setSearchDateRange(range);
      setSearchDate('This weekend');
    } else if (preset === 'month') {
      const range = getNextMonth();
      setSearchDateRange(range);
      setSearchDate('Next month');
    }
  };

  // Handle guest count changes
  const handleGuestChange = (e) => {
    const count = e.target.value;
    setSearchGuests(count === '0' ? 'Add guests' : `${count} guest${count !== '1' ? 's' : ''}`);
  };

  // Handle search
  const handleSearch = () => {
    if (!searchLocation) {
      alert('Please enter a location to search');
      return;
    }

    const searchData = {
      location: searchLocation,
      date: searchDate,
      dateRange: searchDateRange,
      guests: searchGuests,
    };
    
    console.log('Search Parameters:', searchData);
    
    // Call the onSearch callback to pass data to App component
    if (onSearch) {
      onSearch(searchLocation, searchData);
    }

    setActiveSearchField(null);
  };

  // Close search fields when clicking outside
  const handleCloseSearch = () => {
    setActiveSearchField(null);
  };

  return (
    <>
    <div className="navbar">

      {/* TOP ROW — full width, logo on far left, actions on far right */}
      <div className="nav-top-row">

        {/* LEFT — Logo sticks to screen edge */}
        <div className="nav-left" onClick={() => navigate('/')}>
          {/* <img src="https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg" alt="logo" /> */}
          {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/960px-Airbnb_Logo_B%C3%A9lo.svg.png' alt='logo'></img> */}
          <img src='/logo.jpeg' alt='logo'></img>
        </div>

        {/* CENTER — Nav links centered in the middle of the screen */}
        {!scrolled && (
          <div className="nav-center">
            <button className={location.pathname === '/' ? 'active' : ''} onClick={() => navigate('/')}>🏠 Homes</button>
            <button className={location.pathname === '/experiences' ? 'active' : ''} onClick={() => navigate('/experiences')}>🎈 Experiences</button>
            <button className={location.pathname === '/services' ? 'active' : ''} onClick={() => navigate('/services')}>🛎️ Services</button>
          </div>
        )}


        <div className="nav-right">
          <button className="host-btn" onClick={() => setShowHostingModal(true)}>Become a host</button>
          <div className="menu" onClick={handleMenuToggle}>
            ☰
            {showMenu && (
              <div className="dropdown-menu">
                <div className="menu-item" onClick={() => handleMenuItemClick(() => navigate('/help-center'))}>
                  <span className="menu-icon">❓</span>
                  <span className="menu-text">Help Centre</span>
                </div>
                <div className="menu-divider"></div>
                <div className="menu-item" onClick={() => handleMenuItemClick(() => navigate('/experiences'))}>
                  <span className="menu-icon">🎈</span>
                  <span className="menu-text">Experiences</span>
                </div>
                <div className="menu-item" onClick={() => handleMenuItemClick(() => navigate('/services'))}>
                  <span className="menu-icon">🛎️</span>
                  <span className="menu-text">Services</span>
                </div>
                <div className="menu-divider"></div>
                <div className="menu-item" onClick={() => handleMenuItemClick(() => navigate('/'))}>
                  <span className="menu-icon">🏠</span>
                  <div className="menu-item-content">
                    <span className="menu-text-bold">Become a host</span>
                    <span className="menu-text-small">It's easy to start hosting and earn extra income.</span>
                  </div>
                </div>
                <div className="menu-item">
                  <span className="menu-icon">🔗</span>
                  <span className="menu-text">Refer a host</span>
                </div>
                <div className="menu-item">
                  <span className="menu-icon">👥</span>
                  <span className="menu-text">Find a co-host</span>
                </div>
                <div className="menu-divider"></div>
                <div className="menu-item" onClick={() => {
                  setShowMenu(false);
                  setShowLoginModal(true);
                }}>
                  <span className="menu-text">Log in or sign up</span>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      <div className={`nav-bottom ${scrolled ? "compact" : "expanded"}`}>

        <div className="search-section">
          <div className="search-item" onClick={handleLocationClick}>
            <span className="search-label">Where</span>
            <span className="search-value">{searchLocation || 'Homes nearby'}</span>
            {activeSearchField === 'location' && (
              <input
                type="text"
                className="search-input"
                value={searchLocation}
                onChange={handleLocationChange}
                onKeyPress={handleLocationKeyPress}
                placeholder="Enter location"
                autoFocus
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
          <span className="divider" />
          <div className="search-item" onClick={handleDateClick}>
            <span className="search-label">When</span>
            <span className="search-value">{searchDate}</span>
            {activeSearchField === 'date' && (
              <div className="date-picker-popup" onClick={(e) => e.stopPropagation()}>
                <div className="date-presets">
                  <button 
                    className={`preset-btn ${searchDate === 'Flexible' ? 'active' : ''}`}
                    onClick={() => handleDatePreset('flexible')}
                  >
                    🔄 Flexible
                  </button>
                  <button 
                    className={`preset-btn ${searchDate === 'This weekend' ? 'active' : ''}`}
                    onClick={() => handleDatePreset('weekend')}
                  >
                    🏖️ This weekend
                  </button>
                  <button 
                    className={`preset-btn ${searchDate === 'Next month' ? 'active' : ''}`}
                    onClick={() => handleDatePreset('month')}
                  >
                    📅 Next month
                  </button>
                </div>
                
                <div className="date-range-picker">
                  <div className="date-input-group">
                    <label>Check-in</label>
                    <input
                      type="date"
                      className="date-input"
                      value={searchDateRange.start}
                      onChange={handleStartDateChange}
                      placeholder="Start date"
                    />
                  </div>
                  <div className="date-input-group">
                    <label>Check-out</label>
                    <input
                      type="date"
                      className="date-input"
                      value={searchDateRange.end}
                      onChange={handleEndDateChange}
                      placeholder="End date"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <span className="divider" />
          <div className="search-item" onClick={handleGuestClick}>
            <span className="search-label">Who</span>
            <span className="search-value">{searchGuests}</span>
            {activeSearchField === 'guest' && (
              <input
                type="number"
                className="search-input"
                min="0"
                max="16"
                placeholder="Number of guests"
                onChange={handleGuestChange}
                autoFocus
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>

        <button className="search-btn" onClick={handleSearch}>
          🔍
        </button>

      </div>

    </div>
    
    <HostingModal isOpen={showHostingModal} onClose={() => setShowHostingModal(false)} />    {showLoginModal && (
      <LoginModal 
        closeModal={() => setShowLoginModal(false)} 
        onContinue={() => setShowLoginModal(false)}
      />
    )}  
    </>
  );
}