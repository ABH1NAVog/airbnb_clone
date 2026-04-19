import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/helpCenter.css';

export default function HelpCenter() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Guest');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['Guest', 'Home host', 'Experience host', 'Service host', 'Travel admin'];

  const guides = [
    {
      title: 'AirCover for guests',
      description: 'Protection for your reservations',
      image: '🛡️'
    },
    {
      title: 'Essential resources for new hosts',
      description: 'Get started with hosting',
      image: '📚'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="help-center">
      <div className="help-center-header">
        <h1>Hi, how can we help?</h1>
        <form className="search-bar" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search how-tos and more" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <span>🔍</span>
          </button>
        </form>
      </div>

      <div className="help-center-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="help-center-content">
        <div className="help-section">
          <h2>We're here for you</h2>
          <div className="help-box">
            <div className="help-text">
              <p>Log in to get help with your reservations, account, and more.</p>
            </div>
            <button className="login-btn">Log in or sign up</button>
          </div>
        </div>

        <div className="guides-section">
          <div className="guides-header">
            <h2>Guides for getting started</h2>
            <a href="#" className="browse-all">Browse all topics →</a>
          </div>
          <div className="guides-grid">
            {guides.map((guide, index) => (
              <div key={index} className="guide-card">
                <div className="guide-icon">{guide.image}</div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
