// import React from 'react'
// import "../style/product_details.css"
// export default function Product_details() {
//   return (
//     <div className='outer'>
//     <div className='main'>
//       <h3>The real Bnb !</h3>
//       <div className='images'>
//             <div id='img1'><img src="" alt="" /></div>
//             <div id='inner'>
//                 <div id='img2'><img src="" alt="" /></div>
//                 <div id='img3'><img src="" alt="" /></div>
//                 <div id='img4'><img src="" alt="" /></div>
//                 <div id='img5'><img src="" alt="" /></div>

//             </div>
            
//       </div>
//       <div className='separator'>
//         <div className='details'>
//             <h1 className='title'>The best room available</h1>

//             <p className='sub-info'>
//                 2 guests · 1 bedroom · 1 bed · 1 private bathroom
//             </p>

//             <hr />

//             <div className='host'>
//                 <h2>Hosted by Devang</h2>
//                 <p>Superhost · 1 year hosting</p>
//             </div>

//             <hr />

//             <div className='feature'>
//                 <h3>🔑 Great check-in experience</h3>
//                 <p>Recent guests loved the smooth start to this stay</p>
//             </div>

//             <div className='feature'>
//                 <h3>🌙 Peace and quiet</h3>
//                 <p>Guests say this home is in a quiet area</p>
//             </div>

//             <div className='feature'>
//                 <h3>⭐ Devang is a Superhost</h3>
//                 <p>Superhosts are experienced, highly rated hosts</p>
//             </div>

//             <hr />
//         </div>
//         <div className='confirm'>
//             <h1 className='price'>
//                 <span>$9,229</span> for 8 nights
//             </h1>

//             <div className='date-box'>
//                 <div className='date'>
//                     <h6>CHECK-IN</h6>
//                     <p>5/13/2026</p>
//                 </div>

//                 <div className='date'>
//                     <h6>CHECKOUT</h6>
//                     <p>5/21/2026</p>
//                 </div>
//             </div>

//             <div className='guests'>
//                 <h6>GUESTS</h6>
//                 <p>1 guest </p>
//             </div>

//             <div className='cancelation'>
//                 Free cancellation before 12 May
//             </div>

//             <button className='reserve-btn'>Reserve</button>

//             <p className='note'>You won't be charged yet</p>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }


// import React, { useState, useEffect } from 'react';
// import "../style/product_details.css";

// export default function Product_details() {
//   const [listing, setListing] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [checkIn, setCheckIn] = useState('2026-05-13'); // Default in YYYY-MM-DD for input
//   const [checkOut, setCheckOut] = useState('2026-05-21');
//   const [selectedGuests, setSelectedGuests] = useState(1); // Default selected guests

//   useEffect(() => {
//     const controller = new AbortController();

//     async function fetchListing() {
//       try {
//         const response = await fetch(
//           "https://api.npoint.io/af4897d50e5bc4479a28",
//           { signal: controller.signal }
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP ${response.status}`);
//         }
//         const data = await response.json();
//         // Assuming we want the first listing from the first city for this detail page
//         const firstCity = data[0];
//         const firstListing = firstCity?.listings?.[0];
//         if (firstListing) {
//           setListing(firstListing);
//           setSelectedGuests(firstListing.guests || 1); // Set default selected guests to max
//         } else {
//           throw new Error("No listings found");
//         }
//       } catch (err) {
//         if (err.name !== "AbortError") {
//           setError(err.message);
//         }
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchListing();
//     return () => controller.abort();
//   }, []);

//   const calculateNights = (start, end) => {
//     const startDate = new Date(start);
//     const endDate = new Date(end);
//     const diffTime = Math.abs(endDate - startDate);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays > 0 ? diffDays : 1; // At least 1 night
//   };

//   const nights = calculateNights(checkIn, checkOut);
//   const totalPrice = listing ? listing.price * nights : 0;

//   if (loading) {
//     return <div className='outer'>Loading...</div>;
//   }

//   if (error) {
//     return <div className='outer'>Error: {error}</div>;
//   }

//   if (!listing) {
//     return <div className='outer'>No listing available.</div>;
//   }

//   // Ensure images is an array, fallback to empty array
//   const images = Array.isArray(listing.images) ? listing.images : [];

//   return (
//     <div className='outer'>
//       <div className='main'>
//         <h3>The real Bnb !</h3>
//         <div className='images'>
//           <div id='img1'>
//             <img src={images[0] || "https://via.placeholder.com/420"} alt={listing.title || "Image 1"} />
//           </div>
//           <div id='inner'>
//             <div id='img2'>
//               <img src={images[1] || "https://via.placeholder.com/420"} alt={listing.title || "Image 2"} />
//             </div>
//             <div id='img3'>
//               <img src={images[2] || "https://via.placeholder.com/420"} alt={listing.title || "Image 3"} />
//             </div>
//             <div id='img4'>
//               <img src={images[3] || "https://via.placeholder.com/420"} alt={listing.title || "Image 4"} />
//             </div>
//             <div id='img5'>
//               <img src={images[4] || "https://via.placeholder.com/420"} alt={listing.title || "Image 5"} />
//             </div>
//           </div>
//         </div>
//         <div className='separator'>
//           <div className='details'>
//             <h1 className='title'>{listing.title}</h1>
//             <p className='sub-info'>
//               {listing.guests} guests · {listing.beds} bedroom · {listing.beds} bed · {listing.bathrooms} private bathroom
//             </p>
//             <hr />
//             <div className='host'>
//               <h2>Hosted by {listing.host?.name}</h2>
//               <p>{listing.isSuperHost ? "Superhost" : "Host"} · {listing.host?.joinedYear ? `${new Date().getFullYear() - listing.host.joinedYear} years hosting` : "1 year hosting"}</p>
//             </div>
//             <hr />
//             <div className='feature'>
//               <h3>🔑 Great check-in experience</h3>
//               <p>Recent guests loved the smooth start to this stay</p>
//             </div>
//             <div className='feature'>
//               <h3>🌙 Peace and quiet</h3>
//               <p>Guests say this home is in a quiet area</p>
//             </div>
//             <div className='feature'>
//               <h3>⭐ {listing.host?.name} is a {listing.isSuperHost ? "Superhost" : "Host"}</h3>
//               <p>{listing.isSuperHost ? "Superhosts are experienced, highly rated hosts" : "Hosts provide great stays"}</p>
//             </div>
//             <hr />
//           </div>
//           <div className='confirm'>
//             <h1 className='price'>
//               <span>${totalPrice}</span> for {nights} nights
//             </h1>
//             <div className='date-box'>
//               <div className='date'>
//                 <h6>CHECK-IN</h6>
//                 <input
//                   type="date"
//                   value={checkIn}
//                   onChange={(e) => setCheckIn(e.target.value)}
//                   style={{ border: 'none', background: 'transparent', fontSize: '14px', padding: '0' }}
//                 />
//               </div>
//               <div className='date'>
//                 <h6>CHECKOUT</h6>
//                 <input
//                   type="date"
//                   value={checkOut}
//                   onChange={(e) => setCheckOut(e.target.value)}
//                   style={{ border: 'none', background: 'transparent', fontSize: '14px', padding: '0' }}
//                 />
//               </div>
//             </div>
//             <div className='guests'>
//               <h6>GUESTS</h6>
//               <input
//                 type="number"
//                 min="1"
//                 max={listing.guests}
//                 value={selectedGuests}
//                 onChange={(e) => setSelectedGuests(Number(e.target.value))}
//                 style={{ border: 'none', background: 'transparent', fontSize: '14px', padding: '0', width: '50px' }}
//               />
//               <span> guest{selectedGuests === 1 ? "" : "s"}</span>
//             </div>
//             <div className='cancelation'>
//               Free cancellation before {new Date(checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//             </div>
//             <button className='reserve-btn'>Reserve</button>
//             <p className='note'>You won't be charged yet</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Add this import
import "../style/product_details.css";

export default function Product_details() {
  const { id } = useParams(); // Get the listing ID from URL
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkIn, setCheckIn] = useState('2026-05-13');
  const [checkOut, setCheckOut] = useState('2026-05-21');
  const [selectedGuests, setSelectedGuests] = useState(1);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchListings() {
      try {
        const response = await fetch(
          "https://api.npoint.io/af4897d50e5bc4479a28",
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        // Flatten all listings
        const allListings = data.flatMap(city => city.listings || []);
        // Find the listing by ID
        const foundListing = allListings.find(listing => listing.id == id); // Use == for string/number comparison
        if (foundListing) {
          setListing(foundListing);
          setSelectedGuests(foundListing.guests || 1);
        } else {
          throw new Error("Listing not found");
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchListings();
    } else {
      setError("No listing ID provided");
      setLoading(false);
    }

    return () => controller.abort();
  }, [id]);

  const calculateNights = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights(checkIn, checkOut);
  const totalPrice = listing ? listing.price * nights : 0;

  if (loading) {
    return <div className='outer'>Loading...</div>;
  }

  if (error) {
    return <div className='outer'>Error: {error}</div>;
  }

  if (!listing) {
    return <div className='outer'>No listing available.</div>;
  }

  const images = Array.isArray(listing.images) ? listing.images : [];

  const handleReserve = () => {
    const bookingData = {
      image: images[0] || "https://via.placeholder.com/420",
      title: listing.title,
      location: listing.location || "Unknown location",
      dates: `${new Date(checkIn).toLocaleDateString()} - ${new Date(checkOut).toLocaleDateString()}`,
      guests: selectedGuests,
      price: listing.price,
      nights: nights,
      totalPrice: totalPrice
    };
    navigate('/booking', { state: bookingData });
  };

  return (
    <div className='outer'>
      <div className='main'>
        <h3>The real Bnb !</h3>
        <div className='images'>
          <div id='img1'>
            <img src={images[0] || "https://via.placeholder.com/420"} alt={listing.title || "Image 1"} />
          </div>
          <div id='inner'>
            <div id='img2'>
              <img src={images[1] || "https://via.placeholder.com/420"} alt={listing.title || "Image 2"} />
            </div>
            <div id='img3'>
              <img src={images[2] || "https://via.placeholder.com/420"} alt={listing.title || "Image 3"} />
            </div>
            <div id='img4'>
              <img src={images[3] || "https://via.placeholder.com/420"} alt={listing.title || "Image 4"} />
            </div>
            <div id='img5'>
              <img src={images[4] || "https://via.placeholder.com/420"} alt={listing.title || "Image 5"} />
            </div>
          </div>
        </div>
        <div className='separator'>
          <div className='details'>
            <h1 className='title'>{listing.title}</h1>
            <p className='sub-info'>
              {listing.guests} guests · {listing.beds} bedroom · {listing.beds} bed · {listing.bathrooms} private bathroom
            </p>
            <hr />
            <div className='host'>
              <h2>Hosted by {listing.host?.name}</h2>
              <p>{listing.isSuperHost ? "Superhost" : "Host"} · {listing.host?.joinedYear ? `${new Date().getFullYear() - listing.host.joinedYear} years hosting` : "1 year hosting"}</p>
            </div>
            <hr />
            <div className='feature'>
              <h3>🔑 Great check-in experience</h3>
              <p>Recent guests loved the smooth start to this stay</p>
            </div>
            <div className='feature'>
              <h3>🌙 Peace and quiet</h3>
              <p>Guests say this home is in a quiet area</p>
            </div>
            <div className='feature'>
              <h3>⭐ {listing.host?.name} is a {listing.isSuperHost ? "Superhost" : "Host"}</h3>
              <p>{listing.isSuperHost ? "Superhosts are experienced, highly rated hosts" : "Hosts provide great stays"}</p>
            </div>
            <hr />
          </div>
          <div className='confirm'>
            <h1 className='price'>
              <span>${totalPrice}</span> for {nights} nights
            </h1>
            <div className='date-box'>
              <div className='date'>
                <h6>CHECK-IN</h6>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  style={{ border: 'none', background: 'transparent', fontSize: '14px', padding: '0' }}
                />
              </div>
              <div className='date'>
                <h6>CHECKOUT</h6>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  style={{ border: 'none', background: 'transparent', fontSize: '14px', padding: '0' }}
                />
              </div>
            </div>
            <div className='guests'>
              <h6>GUESTS</h6>
              <input
                type="number"
                min="1"
                max={listing.guests}
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(Number(e.target.value))}
                style={{ border: 'none', background: 'transparent', fontSize: '14px', padding: '0', width: '50px' }}
              />
              <span> guest{selectedGuests === 1 ? "" : "s"}</span>
            </div>
            <div className='cancelation'>
              Free cancellation before {new Date(checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
            <button className='reserve-btn' onClick={handleReserve}>Reserve</button>
            <p className='note'>You won't be charged yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}