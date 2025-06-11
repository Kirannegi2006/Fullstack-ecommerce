import React from 'react';

export default function Press() {
  const containerStyle = {
    maxWidth: '2000px',
    margin: '60px auto',
    padding: '100px',
    backgroundColor: '#fdfdfd',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
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
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    marginBottom: '16px',
  };

  const highlightStyle = {
    fontWeight: '600',
    color: '#007bff',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Press & Media</h2>
      <p style={paragraphStyle}>
        Welcome to the official SHOPPER Press page. Stay updated with our latest news, media coverage, and official announcements.
      </p>
      <p style={paragraphStyle}>
        At <span style={highlightStyle}>SHOPPER</span>, we’re transforming the online shopping experience by offering high-quality products, innovative features, and unmatched customer service.
      </p>
      <p style={paragraphStyle}>
        Our journey has been featured in several media outlets and publications. From startup highlights to success stories, we’ve been recognized as one of the fastest-growing eCommerce platforms in the region.
      </p>
      <p style={paragraphStyle}>
        For press inquiries, interviews, or media kits, please contact us at <span style={highlightStyle}>media@shopper.com</span>.
      </p>
      <p style={paragraphStyle}>
        Thank you for your interest in SHOPPER. We appreciate your support in sharing our story with the world.
      </p>
    </div>
  );
}
