import React from 'react';

export default function FAQ() {
  const containerStyle = {
    maxWidth: '2000px',
    margin: '1px auto',
    padding: '230px',
    backgroundColor: '#fefefe',
    borderRadius: '10px',
    boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    lineHeight: 1.6,
    boxSizing: 'border-box',
    textAlign: 'left',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#222',
    textAlign: 'center',
  };

  const questionStyle = {
    fontWeight: '600',
    fontSize: '1.2rem',
    marginTop: '20px',
    marginBottom: '8px',
    color: '#111',
  };

  const answerStyle = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '12px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Frequently Asked Questions</h2>
      <p style={{fontSize: '1.1rem', color: '#555', textAlign: 'center'}}>
        Find answers to commonly asked questions about our products and services.
      </p>

      <div>
        <h3 style={questionStyle}>1. How can I track my order?</h3>
        <p style={answerStyle}>You can track your order by logging into your account and visiting the 'Orders' section. There you will find real-time updates on your shipment status.</p>

        <h3 style={questionStyle}>2. What payment methods do you accept?</h3>
        <p style={answerStyle}>We accept all major credit/debit cards, net banking, UPI, and popular digital wallets for safe and convenient checkout.</p>

        <h3 style={questionStyle}>3. Can I return or exchange a product?</h3>
        <p style={answerStyle}>Yes, we offer easy returns and exchanges within 15 days of delivery, provided the product is unused and in its original packaging.</p>

        <h3 style={questionStyle}>4. How do you ensure product quality?</h3>
        <p style={answerStyle}>All products undergo strict quality checks with trusted suppliers before being listed on our platform to ensure you receive the best.</p>

        <h3 style={questionStyle}>5. How do I contact customer support?</h3>
        <p style={answerStyle}>You can reach out to our support team via email at support@shopper.com or call us at +91 89276 54321 during business hours.</p>

      </div>
    </div>
  );
}
