import React from 'react';

export default function Returns() {
  const containerStyle = {
    maxWidth: '2000px',
    margin: '1px auto',
    padding: '200px',
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
      <h2 style={headingStyle}>Returns & Refund Policy</h2>
      <p style={paragraphStyle}>
        At <strong>SHOPPER</strong>, we want you to love your purchase. If you're not fully satisfied, you may return most items within <strong>7 days of delivery</strong>.
      </p>

      <p style={paragraphStyle}>
        <strong>Eligibility for Returns:</strong>
      </p>
      <ul style={listStyle}>
        <li>Item must be unused and in original packaging</li>
        <li>Must include original invoice or proof of purchase</li>
        <li>Return request should be raised within 7 days</li>
      </ul>

      <p style={paragraphStyle}>
        <strong>Non-returnable items:</strong> Gift cards, downloadable software, and certain hygiene products cannot be returned.
      </p>

      <p style={paragraphStyle}>
        <strong>Refund Process:</strong> Once we receive and inspect the returned item, your refund will be processed within 5–7 business days to your original payment method.
      </p>

      <p style={paragraphStyle}>
        <strong>Return Shipping:</strong> Return shipping charges may apply unless the item was defective or incorrect.
      </p>

      <p style={paragraphStyle}>
        For return requests, please contact us at <span style={{ color: '#007bff', fontWeight: '600' }}>returns@shopper.com</span>.
      </p>
    </div>
  );
}
