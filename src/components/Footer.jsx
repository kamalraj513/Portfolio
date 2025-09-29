import React from 'react'
import './Footer.css'
import { AiOutlineMail } from "react-icons/ai"; 
import { FaLinkedin, FaGithub,FaFileDownload } from "react-icons/fa"; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Kamalraj M Revankar</h3>
        <p className="footer-subtitle">Web Developer | Java | React | SQL</p>

        <div className="footer-links">
          <a href="mailto:kamalrajrevankar@gmail.com" className="footer-link">
            <AiOutlineMail className="footer-icon" />Email</a>
          <a href="https://www.linkedin.com/in/kamalraj5103" target="_blank" rel="noopener noreferrer" className="footer-link"><FaLinkedin className="footer-icon" /> LinkedIn</a>
          <a href="https://github.com/kamalraj513" target="_blank" rel="noopener noreferrer" className="footer-link"> <FaGithub className="footer-icon" />GitHub</a>
          <a href="https://drive.google.com/file/d/1yphrlKAqNdSZ9I9ulUPWv2-RcCx1Rixy/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="footer-link"><FaFileDownload className="footer-icon" />Download CV</a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Kamalraj M Revankar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
