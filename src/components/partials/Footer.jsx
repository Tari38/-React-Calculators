import React from "react";
import Social from "./Social";
import "./Footer.css";

const CURRENTYEAR = new Date().getFullYear();

function Footer() {
  return (
    <>
    <div className="footer">
    <footer>
    <Social />
      <p>© {CURRENTYEAR} by Samantha Dorrell</p>

    </footer>
    </div>
    </>
  )
};

export default Footer;
