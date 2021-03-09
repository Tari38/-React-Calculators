import React from "react";
import "./Footer.css";

const CURRENTYEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <container className="footer-container">
      <a href="https://github.com/Tari38"><i className="fab fa-github"></i></a>
        <p>© {CURRENTYEAR} by Samantha Dorrell</p>
          <a href="https://www.linkedin.com/in/samantha-dorrell-307377188/"><i className="fab fa-linkedin-in"></i></a>
      </container>
    </footer>
  )
};

export default Footer;
