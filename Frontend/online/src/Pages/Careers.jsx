import React from 'react';

export default function Careers() {
  const containerStyle = {
    padding: '100px',
    maxWidth: '20000px',
    margin: '40px auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#111',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '16px',
    color: '#555',
  };

  const listStyle = {
    textAlign: 'left',
    marginTop: '20px',
    fontSize: '1rem',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Careers at SHOPPER</h2>
      <p style={paragraphStyle}>
        Join our dynamic team and be a part of the future of online shopping! At SHOPPER, we innovate to provide the best shopping experience to millions of customers worldwide.
      </p>
      <p style={paragraphStyle}>
        We offer exciting career opportunities in technology, marketing, logistics, customer service, and product management.
      </p>
      <p style={paragraphStyle}>
        Why work with us?
      </p>
      <ul style={listStyle}>
        <li>Collaborate with passionate professionals in e-commerce and tech.</li>
        <li>Grow your skills with ongoing learning and development programs.</li>
        <li>Work on cutting-edge projects that impact millions of customers.</li>
        <li>Enjoy flexible work hours and a supportive work culture.</li>
      </ul>
      <p style={paragraphStyle}>
        Ready to take the next step in your career? Apply now and become a vital part of the SHOPPER family!
      </p>
    </div>
  );
}
