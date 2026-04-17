import React, { useState } from "react";
import "../style/Footer.css";
import footerTabs from '../data/footerapi'

const Footer = () => {
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
      "Manjish Agrawal",
      
    ],
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
            {links.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;