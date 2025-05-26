import React from 'react';
import styles from './Footer.module.css';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.borderedBox}>
      <div className={`${styles.footerTop} container`}>
  <div className="row">
    {/* Left Column - Social Links */}
    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
      <div className={` ${styles.footerLinks}`}>
        <h4>Useful Links</h4>
        <ul>
          <li><a href="/hero">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
    

    {/* Right Column - Useful Links */}
    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end  align-items-center mb-4 mb-md-0">

      <div className={` ${styles.socialLinks}`}>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="Facebook"><FaFacebook /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
      </div>
    </div>
  </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;
