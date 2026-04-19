import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/hostingModal.css';

export default function HostingModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const hostingOptions = [
    {
      id: 'home',
      title: 'Home',
      icon: '🏠',
      path: '/'
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: '🎈',
      path: '/experiences'
    },
    {
      id: 'service',
      title: 'Service',
      icon: '🔔',
      path: '/services'
    }
  ];

  const handleCardClick = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNextClick = () => {
    if (selectedOption) {
      const selected = hostingOptions.find(opt => opt.id === selectedOption);
      onClose();
      setSelectedOption(null);
      navigate(selected.path);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="hosting-modal-overlay" onClick={onClose}>
      <div className="hosting-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <h2 className="modal-title">What would you like to host?</h2>
        
        <div className="hosting-options">
          {hostingOptions.map((option) => (
            <div
              key={option.id}
              className={`hosting-card ${selectedOption === option.id ? 'selected' : ''}`}
              onClick={() => handleCardClick(option.id)}
            >
              <div className="hosting-icon">{option.icon}</div>
              <h3 className="hosting-title">{option.title}</h3>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <button 
            className="next-btn"
            onClick={handleNextClick}
            disabled={!selectedOption}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
