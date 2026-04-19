import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Footer.css";
import footerTabs from '../data/footerapi'

const Footer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Popular");

  const bottomLinks = {
    Support: [
      "Help Centre",
      "Get help with a safety issue",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
    ],
    Hosting: [
      "Airbnb your home",
      "Airbnb your experience",
      "Airbnb your service",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
    ],
    Developers: [
      "Abhinav P",
      "Aashna Grover",
      "Prabhjot Singh",
      "Manjish Kumar",
      "Group"
    ],
  };

  const handleLinkClick = (link) => {
    if (link === "Help Centre") {
      navigate("/help-center");
    }
    
    // Developer GitHub links
    const developerLinks = {
      "Abhinav P": "https://github.com/ABH1NAVog",
      "Aashna Grover": "https://github.com/ashnagrover00-collab",
      "Prabhjot Singh": "https://github.com/Webdev0032",
      "Manjish Kumar": "https://github.com/Manjish24",
      "Group": "https://github.com/ABH1NAVog/airbnb_clone"
    };
    
    if (developerLinks[link]) {
      window.open(developerLinks[link], "_blank");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Inspiration for future getaways</h2>

        <div className="tabs">
          {Object.keys(footerTabs).map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "tab active" : "tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {footerTabs[activeTab].map(([title, subtitle], index) => (
            <div className="location-card" key={index}>
              <h4>{title}</h4>
              <p>{subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        {Object.entries(bottomLinks).map(([section, links]) => (
          <div key={section} className="footer-column">
            <h3>{section}</h3>
            {links.map((link, index) => {
              const isClickable = 
                link === "Help Centre" || 
                ["Abhinav P", "Aashna Grover", "Prabhjot Singh", "Manjish Kumar", "Group"].includes(link);
              
              return (
                <p 
                  key={index} 
                  onClick={() => handleLinkClick(link)}
                  className={isClickable ? "clickable" : ""}
                >
                  {link}
                </p>
              );
            })}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;