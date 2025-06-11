import React, { useState, useEffect } from 'react';

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [trackingResult, setTrackingResult] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const sampleOrderIds = [
    'SHP123456789',
    'ORD20230515ABC',
    'xxxxyyyy',
    'SHOP20250515XYZ',
    'kiranshoper',
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTrack = () => {
    const trimmedId = orderId.trim();

    if (!trimmedId) {
      setTrackingResult('❌ Please enter a valid Order ID.');
      return;
    }

    if (!sampleOrderIds.includes(trimmedId)) {
      setTrackingResult('❌ Invalid Order ID. Please check and try again.');
      return;
    }

    setTrackingResult(`✅ Order ID ${trimmedId} is currently out for delivery. Expected delivery: within 2 days.`);
  };

  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      padding: '1rem',
      boxSizing: 'border-box',
    },
    container: {
      width: '100%',
      maxWidth: isMobile ? '90%' : '600px',
      backgroundColor: '#fff',
      padding: isMobile ? '2rem' : '3rem',
      borderRadius: '10px',
      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
      textAlign: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
    },
    heading: {
      fontSize: isMobile ? '1.6rem' : '2rem',
      fontWeight: '700',
      marginBottom: '1rem',
    },
    paragraph: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      marginBottom: '2rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      border: '1px solid #ccc',
      borderRadius: '6px',
      marginBottom: '1.5rem',
      boxSizing: 'border-box',
    },
    button: {
      padding: '0.65rem 1.75rem',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background 0.2s',
    },
    result: {
      fontSize: '1.05rem',
      marginTop: '1.25rem',
      color: trackingResult.startsWith('❌') ? '#d00000' : '#007b00',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Track Your Order</h2>
        <p style={styles.paragraph}>Enter your order ID to check the delivery status.</p>
        <input
          type="text"
          placeholder="Enter Order ID"
          style={styles.input}
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button style={styles.button} onClick={handleTrack}>
          Track
        </button>
        {trackingResult && <p style={styles.result}>{trackingResult}</p>}
      </div>
    </div>
  );
}
