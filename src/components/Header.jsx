import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/Header.css";

export default function Header() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="header" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div data-aos="fade-up" className="hero-text-container">
          <h1 className="hero-title">
            Mastering Housing Society <br />
            <span className="text-accent">Management with Trust</span>
          </h1>
          <p className="hero-subtitle">
            Comprehensive solutions for Auditing, Accounting, and Legal Consultancy 
            tailored for the modern needs of Housing Societies in Maharashtra.
          </p>
          <div className="hero-btns">
            <AnchorLink href="#contact">
              <button className="btn btn-primary">Enquire Now</button>
            </AnchorLink>
            <AnchorLink href="#services">
              <button className="btn btn-secondary">Our Services</button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}
