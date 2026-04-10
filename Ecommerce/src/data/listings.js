// src/api/api.js

const listings = [
  {
    city: "Delhi",
    listings: [
      {
        id: 1,
        title: "Luxury Studio Apartment",
        location: "Connaught Place",
        price: 3200,
        rating: 4.5,
        reviews: 120,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "2 km from center",

        images: [
          "image1_url",
          "image2_url",
          "image3_url"
        ],

        amenities: [
          "WiFi",
          "Air Conditioning",
          "Kitchen",
          "Free Parking"
        ],

        host: {
          name: "Rahul",
          joinedYear: 2020,
          responseRate: "95%"
        }
      },

      {
        id: 2,
        title: "Modern Flat",
        location: "South Delhi",
        price: 2500,
        rating: 4.2,
        reviews: 80,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "5 km from center",

        images: [],
        amenities: [],
        host: {}
      }

      // 👉 add up to 10 listings per city
    ]
  },

  {
    city: "Punjab",
    listings: []
  },

  {
    city: "Chennai",
    listings: []
  },

  {
    city: "Bhopal",
    listings: []
  },

  {
    city: "Lucknow",
    listings: []
  },

  {
    city: "Jaipur",
    listings: []
  },

  {
    city: "Kochi",
    listings: []
  },

  {
    city: "Kolkata",
    listings: []
  },

  {
    city: "Bangalore",
    listings: []
  },

  {
    city: "Hyderabad",
    listings: []
  }
];

export default listings;