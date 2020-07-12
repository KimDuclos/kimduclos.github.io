import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        If you need a new website, branding package, or another digital project,
        contact me 
        <Link to="./ContactForm"> HERE</Link>!
      </p>
    </div>
  );
};

export default Footer;
