import React from "react";
import "../index.css";
import logo from "../images/Logo.png";
import fbicon from "../images/fbicon.png";
import twicon from "../images/twicon.png";
import yticon from "../images/yticon.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm top-bottom-style py-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown03"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Social Media
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown03">
                <li>
                  <a className="dropdown-item" href="http://facebook.com/">
                    <img className="social-icons" src={fbicon} alt="fb" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="http://twitter.com/">
                    <img className="social-icons" src={twicon} alt="tw" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://www.youtube.com/">
                    <img className="social-icons" src={yticon} alt="yt" />
                    Youtube
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
