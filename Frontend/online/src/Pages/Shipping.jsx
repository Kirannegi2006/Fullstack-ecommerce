import React from 'react';

export default function Shipping() {
  const containerStyle = {
    maxWidth: '2000px',
    margin: '1px auto',
    padding: '220px',
    backgroundColor: '#fdfdfd',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    lineHeight: '1.7',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    marginBottom: '25px',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    marginBottom: '18px',
  };

  const listStyle = {
    marginLeft: '20px',
    fontSize: '1.05rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Shipping Information</h2>
      <p style={paragraphStyle}>
        At <strong>SHOPPER</strong>, we aim to deliver your orders quickly, safely, and affordably across India.
      </p>

      <p style={paragraphStyle}>
        <strong>Delivery Time:</strong> 3–7 working days depending on your location.
      </p>

      <p style={paragraphStyle}>
        <strong>Shipping Partners:</strong> We work with trusted logistics providers like Delhivery, Blue Dart, and India Post.
      </p>

      <p style={paragraphStyle}>
        <strong>Shipping Charges:</strong>
      </p>
      <ul style={listStyle}>
        <li>Free shipping on orders above ₹999</li>
        <li>₹49 flat rate for orders below ₹999</li>
      </ul>

      <p style={paragraphStyle}>
        <strong>Order Tracking:</strong> You will receive an email and SMS with tracking details once your order is shipped.
      </p>

      <p style={paragraphStyle}>
        <strong>Delivery Areas:</strong> We currently deliver to all major cities and towns in India. Remote locations may experience slightly longer delivery times.
      </p>

      <p style={paragraphStyle}>
        For questions, contact us at <span style={{ color: '#007bff', fontWeight: '600' }}>shipping@shopper.com</span>.
      </p>
    </div>
  );
}
