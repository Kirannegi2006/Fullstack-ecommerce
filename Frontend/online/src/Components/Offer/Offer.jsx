import React from 'react'
import './Offer.css'
import exclucive_image from '../assets/sale-removebg.png'

export default function Offer() {
  return (
    <div className='offers'>
      <div className="offers-left">
            <h1>SHOPPER</h1>
            <h1>SUPER</h1>
            <p>SAVER SALE</p>
            
            {/* <button>Check Now</button> */}

      </div>
      <div className="offers-right">
            <img src={exclucive_image} alt=''/>
            
            </div>

    </div>
  )
}
