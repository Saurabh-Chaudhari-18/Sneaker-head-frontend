import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmazonPay } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import '../styles/Footer.css';


const Footer = () => {
  return (
    <>
   
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-section">
          <h2>FootShop</h2>
          <p>A sneakerhead web page: where enthusiasts unite over sneakers.</p>
          
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        
       
        
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024 | Footshop . Powered by Saurabh.</p>
     
      </div>
    </footer>
    </>
  );
};

export default Footer;
