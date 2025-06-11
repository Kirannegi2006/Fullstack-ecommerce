import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  return (
    <div className="logout-container">
      <h2>
        <span style={{ color: 'green', marginRight: '8px', fontSize: '24px' }}>✔️</span>
        You have been logged out successfully.
      </h2>
      <p>Thank you for visiting!</p>

      <div className="logout-buttons">
        <button onClick={() => navigate('/login')}>Login Again</button>
        <button onClick={() => navigate('/')}>Go to Homepage</button>
      </div>
    </div>
  );
};

export default Logout;
