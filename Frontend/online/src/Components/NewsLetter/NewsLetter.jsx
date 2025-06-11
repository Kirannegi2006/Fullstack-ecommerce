import React, { useState } from 'react';
import './NewsLetter.css';

export default function NewsLetter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim() === '') {
      alert('Please enter your email');
    } else if (!email.includes('@') || !email.includes('.')) {
      alert('Invalid email format');
    } else {
      alert(`Subscribed successfully with ${email}`);
      setEmail('');
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder="Your Email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
}
