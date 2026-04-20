import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import Footer from "./Footer";
import "../style/onePlaceRow.css";

const API_URL = "https://api.npoint.io/af4897d50e5bc4479a28";

function OnePlaceRow({ searchCity, searchParams, clearSearch }) {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const allListings = Array.isArray(data)
          ? data.flatMap((city) => city.listings || [])
          : [];
        setListings(allListings);
        
        // If searchCity is provided, filter immediately
        if (searchCity) {
          const filtered = data.find(city => city.city.toLowerCase() === searchCity.toLowerCase());
          setFilteredListings(filtered?.listings || []);
        }
      })
      .catch((err) => {
        console.error("Failed to load listings", err);
      });
  }, [searchCity]);

  // Use filtered listings if searching, otherwise use all listings
  const displayListings = searchCity ? filteredListings : listings;

  const cardsPerRow = 5;
  const maxRows = 5;
  const visibleListings = displayListings.slice(0, cardsPerRow * maxRows);
  const chunkedListings = [];
  for (let i = 0; i < visibleListings.length; i += cardsPerRow) {
    chunkedListings.push(visibleListings.slice(i, i + cardsPerRow));
  }

  return (
    <div className="rows-wrapper">
      {/* Search Results Header */}
      {searchCity && (
        <div className="search-results-header">
          <h2>Results for {searchCity}</h2>
          <p>
            {filteredListings.length} listing{filteredListings.length !== 1 ? "s" : ""} found
            {searchParams?.guests && ` • ${searchParams.guests}`}
            {searchParams?.date && searchParams.date !== 'Any week' && ` • ${searchParams.date}`}
          </p>
          <button 
            onClick={clearSearch}
            className="clear-search-btn"
          >
            ← Back to all listings
          </button>
        </div>
      )}

      {/* Display Message if No Results */}
      {searchCity && filteredListings.length === 0 && (
        <div className="no-results">
          <p>No listings found in {searchCity}</p>
          <button 
            onClick={clearSearch}
            className="clear-search-btn"
          >
            Browse all cities
          </button>
        </div>
      )}

      {/* Listings Grid */}
      {chunkedListings.map((row, index) => (
        <div key={index} className="row-container">
          {row.map((listing) => (
            <Link
              key={listing.id}
              to={`/product-details/${listing.id}`}
              className="row-card-link"
              onClick={(e) => {
                // Check if the clicked element is the heart button or its child
                if (e.target.closest('.heart-btn')) {
                  e.preventDefault();
                }
              }}
            >
              <Card
                title={listing.title}
                location={listing.location}
                price={listing.price}
                rating={listing.rating}
                beds={listing.beds}
                image={listing.images?.[0] || "https://via.placeholder.com/400"}
              />
            </Link>
          ))}
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default OnePlaceRow;