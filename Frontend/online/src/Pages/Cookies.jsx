import React from 'react';

export default function Cookies() {
  const containerStyle = {
    padding: '200px',
    maxWidth: '2000px',
    margin: '10px auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    lineHeight: '1.6',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#222',
    textAlign: 'center',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    marginBottom: '16px',
  };

  const listStyle = {
    marginLeft: '30px',
    marginBottom: '16px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Cookie Policy</h2>
      <p style={paragraphStyle}>
        At SHOPPER, we use cookies to enhance your shopping experience and make our website more user-friendly.
      </p>
      <p style={paragraphStyle}>
        Cookies help us:
      </p>
      <ul style={listStyle}>
        <li>Remember your login and preferences so you don’t have to enter them every time.</li>
        <li>Track your shopping cart and saved items for a seamless checkout process.</li>
        <li>Analyze website traffic and understand how customers use our platform.</li>
        <li>Personalize offers and product recommendations tailored just for you.</li>
        <li>Ensure security by detecting suspicious activity and protecting your account.</li>
      </ul>
      <p style={paragraphStyle}>
        You can manage cookie preferences through your browser settings. Please note that disabling cookies may affect some features of our website.
      </p>
      <p style={paragraphStyle}>
        By continuing to use SHOPPER, you agree to our use of cookies as described in this policy.
      </p>
    </div>
  );
}
