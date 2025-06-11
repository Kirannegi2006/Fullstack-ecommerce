import React from 'react';

export default function Terms() {
  const containerStyle = {
    maxWidth: '2000px',
    margin: '1px auto',
    padding: '200px',
    backgroundColor: '#fefefe',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    lineHeight: '1.7',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
    marginBottom: '25px',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    marginBottom: '16px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Terms of Service</h2>
      <p style={paragraphStyle}>
        By accessing or using SHOPPER, you agree to be bound by these terms. If you disagree with any part of the terms, do not use the website.
      </p>
      <p style={paragraphStyle}>
        All content is the property of SHOPPER. Unauthorized use is prohibited.
      </p>
      <p style={paragraphStyle}>
        You must be at least 18 years old or have parental consent to use our services.
      </p>
      <p style={paragraphStyle}>
        We reserve the right to suspend or terminate accounts that violate our policies.
      </p>
      <p style={paragraphStyle}>
        Prices and availability of products are subject to change without notice.
      </p>
      <p style={paragraphStyle}>
        These terms are governed by the laws of India. Any disputes shall be handled in the jurisdiction of Delhi courts.
      </p>
    </div>
  );
}
