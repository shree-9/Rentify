import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left Side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="Rentify Logo" width={120} />
          <span className="secondaryText">
            Our vision is to make finding your next home in India
            <br />
            a simple and joyful experience.
          </span>
        </div>

        {/* Right Side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Bandra West, Mumbai, 400050, India</span>
          <div className="flexCenter f-menu">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={25} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={25} />
            </a>
          </div>
        </div>
      </div>

    
      
    </div>
  );
};

export default Footer;