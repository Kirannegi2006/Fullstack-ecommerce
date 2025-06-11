import React, { useState, useContext } from 'react';
import './CSS/LoginSign.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext'; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
      const data = response.data;

      setMessage(`Welcome, ${data.username || email}!`);
      setMessageType("success");

      
      setIsLoggedIn(true);

      
      const productId = 1;
      setTimeout(() => {
        navigate(`/product/${productId}`);
      }, 1000); 
    } catch (error) {
      setMessage(
        error.response ? "Invalid login credentials" : "Server Error, please try again later!"
      );
      setMessageType("error");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p className={`login-message ${messageType}`}>{message}</p>
        </form>
      </div>
    </div>
  );
}
