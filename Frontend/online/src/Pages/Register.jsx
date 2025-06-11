import React, { useState } from 'react';
import './CSS/Registration.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // const [message, setMessage] = useState('');
 const [message, setMessage] = useState({ text: '', type: '' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:8080/api/auth/register', formData);
setMessage({ text: 'Registration Successful', type: 'success' });
      
    } catch (error) {
     setMessage({
        text: error.response?.data || 'Error registering user',
        type: 'error'
      });
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        {message.text && (
          <p className={`login-message ${message.type}`}>
            {message.text}
          </p>
        )}
      <p className="login-link">
  Already have an account? <Link to="/login">Login here</Link>
</p>
      </div>
</div>


  );
}
