import React, { useEffect, useState } from 'react';
import '../style/navbar.css';

export default function Navbar({ onSearch }) {

  const [scrolled, setScrolled] = useState(false);
  const [searchLocation, setSearchLocation] = useState('Homes nearby');
  const [searchDate, setSearchDate] = useState('Any week');
  const [searchDateRange, setSearchDateRange] = useState({ start: '', end: '' });
  const [searchGuests, setSearchGuests] = useState('Add guests');
  const [activeSearchField, setActiveSearchField] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close search fields
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeSearchField && !e.target.closest('.search-item') && !e.target.closest('.date-picker-popup')) {
        setActiveSearchField(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeSearchField]);

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

  // Handle location changes
  const handleLocationChange = (e) => {
    setSearchLocation(e.target.value);
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

  // Handle search button click
  const handleSearch = () => {
    if (!searchLocation || searchLocation === 'Homes nearby') {
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
          <div className="search-item" onClick={handleLocationClick}>
            <span className="search-label">Where</span>
            <span className="search-value">{searchLocation}</span>
            {activeSearchField === 'location' && (
              <input
                type="text"
                className="search-input"
                value={searchLocation}
                onChange={handleLocationChange}
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

        <button className="search-btn" onClick={handleSearch}>🔍</button>

      </div>

    </div>
  
    </>
  );
}