import React from 'react';
import './Footer.css';
import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';
import linkedin_logo from '../assets/linkedin_logo.jpg';
import whatsapp_icon from '../assets/whatsapp_icon.png';

export default function Footer() {
  return (
    <div className='footer'>
      {/* Logo and Name */}
      <div className='footer-logo'>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src={footer_logo} alt='logo' />
          <p>SHOPPER</p>
        </a>
      </div>

      {/* Footer Links Sections */}
      <div className='footer-sections'>

        {/* Company Info */}
        <ul className='footer-link'>
          <h4>Company</h4>
          <li><a href="/about">About Us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/press">Press</a></li>
        </ul>

        {/* Help Section */}
        <ul className='footer-link'>
          <h4>Help</h4>
          <li><a href="/faq">FAQs</a></li>
          <li><a href="/shipping">Shipping</a></li>
          <li><a href="/returns">Returns</a></li>
          <li><a href="/track">Track Order</a></li>
        </ul>

        {/* Policies */}
        <ul className='footer-link'>
          <h4>Policy</h4>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/cookies">Cookies Policy</a></li>
        </ul>

        {/* Contact Info */}
        <ul className='footer-link'>
          <h4>Contact</h4>
          <li>Email: support@shopper.com</li>
          <li>Phone: +91 8973 xxxx xx</li>
          <li>Address: Delhi, India</li>
        </ul>
      </div>

      {/* Social Media */}
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
          <a href="https://www.instagram.com/kirannegi_2006" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt='Instagram' />
          </a>
        </div>
        <div className='footer-icons-container'>
          <a href="https://www.linkedin.com/in/kiran-negi7/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_logo} alt='LinkedIn' />
          </a>
        </div>
        <div className='footer-icons-container'>
          <a href="https://wa.me/7819065133" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_icon} alt='WhatsApp' />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className='footer-bottom'>
        <hr />
        <p>Copyright © 2023 SHOPPER. All Rights Reserved.</p>
      </div>
    </div>
  );
}
