import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import saLogo from "../img/logo.jpg";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-content flex-row-vcenter">
        <div style={{ textDecoration: "none" }}>
          <a href="/" className="sa-info flex-row-vcenter">
            <img src={saLogo} className="sa-logo" alt="sa-logo" />
            <p className="sa-name">SOCIETY ASSOCIATES</p>
          </a>
        </div>
        <div className="nav-opt flex-row-vcenter">
          <div>
            <AnchorLink href="#services">
              <button className="nav-items">SERVICES</button>
            </AnchorLink>
          </div>
          <div>
            <AnchorLink href="#about-us">
              <button className="nav-items">ABOUT US</button>
            </AnchorLink>
          </div>
          <div>
            <AnchorLink href="#clients">
              <button className="nav-items">OUR CLIENTS</button>
            </AnchorLink>
          </div>
          <div>
            <AnchorLink href="#contact-us">
              <button className="nav-items">CONTACT US</button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
}
