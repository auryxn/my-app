import React from "react";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo">LOGO</div>
        <div className="social-icons">
          <a href="#" aria-label="Instagram">{/* Instagram SVG */}</a>
          <a href="#" aria-label="Twitter">{/* Twitter SVG */}</a>
          <a href="#" aria-label="WhatsApp">{/* WhatsApp SVG */}</a>
          <a href="#" aria-label="Google">{/* Google SVG */}</a>
          <a href="#" aria-label="Facebook">{/* Facebook SVG */}</a>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-column">
          <p>CUSTOMER SERVICE</p>
          <ul>
            <li><a href="#">Orders and delivery</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <p>COMPANY</p>
          <ul>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <p>OTHER</p>
          <ul>
            <li><a href="#">BLABLABLA</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
