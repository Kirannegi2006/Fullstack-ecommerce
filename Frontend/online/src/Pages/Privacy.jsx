import React from 'react';

export default function Privacy() {
  const containerStyle = {
    maxWidth: '2000px',
    margin: '60px auto',
    padding: '100px',
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

  const highlightStyle = {
    fontWeight: '600',
    color: '#007bff',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Privacy Policy</h2>
      <p style={paragraphStyle}>
        At <span style={highlightStyle}>SHOPPER</span>, we are committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy outlines how we collect, use, and protect your information.
      </p>

      <p style={paragraphStyle}>
        <strong>1. Information We Collect:</strong> We may collect personal details such as your name, email, phone number, shipping address, and payment information when you register, place an order, or contact support.
      </p>

      <p style={paragraphStyle}>
        <strong>2. How We Use Your Data:</strong> Your information helps us:
        <ul style={{ marginLeft: '20px' }}>
          <li>Process your orders securely</li>
          <li>Improve our services and website functionality</li>
          <li>Communicate updates, offers, or support</li>
          <li>Personalize your shopping experience</li>
        </ul>
      </p>

      <p style={paragraphStyle}>
        <strong>3. Data Protection:</strong> We implement security measures such as encryption, firewalls, and access controls to keep your personal data safe.
      </p>

      <p style={paragraphStyle}>
        <strong>4. Cookies:</strong> We use cookies to remember your preferences and improve your browsing experience. You can control cookie settings in your browser.
      </p>

      <p style={paragraphStyle}>
        <strong>5. Sharing Information:</strong> We do not sell your personal information. Data is only shared with trusted third parties necessary for payment processing, shipping, and analytics.
      </p>

      <p style={paragraphStyle}>
        <strong>6. Your Rights:</strong> You may review, update, or delete your account information at any time. You can also opt out of marketing emails via the unsubscribe link.
      </p>

      <p style={paragraphStyle}>
        For questions regarding our privacy practices, contact us at <span style={highlightStyle}>privacy@shopper.com</span>.
      </p>
    </div>
  );
}
