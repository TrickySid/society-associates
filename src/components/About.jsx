import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";
import aboutImg from "../img/about-modern.png";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="about-us" className="section-padding bg-alt">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-img-box" data-aos="fade-right">
            <img src={aboutImg} alt="Society Associates Professional Consulting" className="about-img" />
            <div className="about-accent-box">
              <span className="years-exp">9+</span>
              <span className="years-txt">Years of Excellence</span>
            </div>
          </div>
          <div className="about-text-content" data-aos="fade-left">
            <div className="section-header-left">
              <h2 className="section-title">About Society Associates</h2>
              <div className="section-underline-left"></div>
            </div>
            <p className="about-description">
              Since 2015, <strong>Society Associates</strong> has been a trusted partner for Housing Societies in Kalyan and across Mumbai. 
              We offer a robust framework and setup in accordance with cooperative bylaws, enabling committees to manage their societies with professional precision and complete transparency.
            </p>
            <p className="about-description">
              Our expertise spans across complex legal matters, comprehensive documentation, fund management, and internal dispute resolution. 
              We are dedicated to providing concrete solutions, professional opinions, and monthly/annual consultancy that empowers residential communities to thrive.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <i className="fas fa-check-circle feature-icon"></i>
                <span>Expert Legal Compliance</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle feature-icon"></i>
                <span>Transparent Accounting</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle feature-icon"></i>
                <span>Professional Handover Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
