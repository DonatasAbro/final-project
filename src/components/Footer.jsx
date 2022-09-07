import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer className="top-bottom-style py-3">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="/tos" className="nav-link px-2 text-muted">
            Terms of Service
          </a>
        </li>
        <li className="nav-item">
          <a href="/policy" className="nav-link px-2 text-muted">
            Privacy Policy
          </a>
        </li>
        <li className="nav-item">
          <a href="/location" className="nav-link px-2 text-muted">
            Find us
          </a>
        </li>
        <li className="nav-item">
          <a href="/faq" className="nav-link px-2 text-muted">
            FAQs
          </a>
        </li>
      </ul>
      <p className="text-center text-muted">© 2022 Lorem ipsum, Inc</p>
    </footer>
  );
};

export default Footer;
