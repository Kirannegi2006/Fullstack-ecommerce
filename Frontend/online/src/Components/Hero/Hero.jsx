import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Hero.css';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/HEro.jpg';

export default function Hero() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to navigate to the NewCollections page
  const onLatestClick = () => {
    navigate('/new-collections');  // Navigate to the NewCollections route
  };

  return (
    <div className="hero">
      {/* Left Section */}
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>

        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="hand icon" />
        </div>

        <p>collection</p>
        <p>for everyone</p>

        <div className="hero-latest-btn" onClick={onLatestClick}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>

      {/* Right Section */}
      <div className="hero-right">
        <img src={hero_image} alt="hero" className="hero-img" />
      </div>
    </div>
  );
}
