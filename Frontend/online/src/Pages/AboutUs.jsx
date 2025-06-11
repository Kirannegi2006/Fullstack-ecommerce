import React from 'react';

const outerStyle = {
  display: 'flex',
  justifyContent: 'center',       // Center horizontally
  alignItems: 'center',           // Center vertically
  height: '100vh',                // Full viewport height
  backgroundColor: '#f8f9fa',
  padding: '20px',
  boxSizing: 'border-box',
};

const containerStyle = {
  maxWidth: '2000px',
  width: '100%',
  padding: '200px',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: '#333',
  textAlign: 'left',
  boxSizing: 'border-box',
};

const headingStyle = {
  color: '#111111',     
  marginBottom: '24px',
  textAlign: 'center',
  fontWeight: '700',       
  fontSize: '2.5rem',   
};

const paragraphStyle = {
  lineHeight: '1.7',
  marginBottom: '16px',
};

export default function AboutUs() {
  return (
    <div style={outerStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>About Our Company</h2>
        <p style={paragraphStyle}>
          Welcome to SHOPPER! We are passionate about providing you with top-quality products at the most competitive prices. Our journey began with a simple idea: to make premium goods accessible to everyone.
        </p>
        <p style={paragraphStyle}>
          We carefully curate our selection, working with trusted suppliers to ensure that every item meets our high standards of quality and durability. Our team is dedicated to providing exceptional customer service and a seamless shopping experience from start to finish.
        </p>
        <p style={paragraphStyle}>
          At SHOPPER, we believe in more than just selling products. We are building a community of satisfied customers who trust us for their needs. We are constantly evolving, seeking out new and innovative products to add to our offerings.
        </p>
        <p style={paragraphStyle}>
          Thank you for choosing SHOPPER. We appreciate your business and are committed to serving you with excellence.
        </p>
      </div>
    </div>
  );
}


