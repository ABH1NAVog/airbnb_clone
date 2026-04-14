import React from 'react'
import "../style/product_details.css"
export default function Product_details() {
  return (
    <div className='outer'>
    <div className='main'>
      <h3>The real Bnb !</h3>
      <div className='images'>
            <div id='img1'><img src="" alt="" /></div>
            <div id='inner'>
                <div id='img2'><img src="" alt="" /></div>
                <div id='img3'><img src="" alt="" /></div>
                <div id='img4'><img src="" alt="" /></div>
                <div id='img5'><img src="" alt="" /></div>

            </div>
            
      </div>
      <div className='separator'>
        <div className='details'>
            <h1 className='title'>The best room available</h1>

            <p className='sub-info'>
                2 guests · 1 bedroom · 1 bed · 1 private bathroom
            </p>

            <hr />

            <div className='host'>
                <h2>Hosted by Devang</h2>
                <p>Superhost · 1 year hosting</p>
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
                <h3>⭐ Devang is a Superhost</h3>
                <p>Superhosts are experienced, highly rated hosts</p>
            </div>

            <hr />
        </div>
        <div className='confirm'>
            <h1 className='price'>
                <span>$9,229</span> for 8 nights
            </h1>

            <div className='date-box'>
                <div className='date'>
                    <h6>CHECK-IN</h6>
                    <p>5/13/2026</p>
                </div>

                <div className='date'>
                    <h6>CHECKOUT</h6>
                    <p>5/21/2026</p>
                </div>
            </div>

            <div className='guests'>
                <h6>GUESTS</h6>
                <p>1 guest </p>
            </div>

            <div className='cancelation'>
                Free cancellation before 12 May
            </div>

            <button className='reserve-btn'>Reserve</button>

            <p className='note'>You won't be charged yet</p>
        </div>
      </div>
    </div>
    </div>
  )
}
