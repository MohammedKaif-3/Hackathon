import React from "react";
import "./Footer.css"; // Import styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & Copyright */}
        <div className="footer-left">
          <h3>MyWebsite</h3>
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
