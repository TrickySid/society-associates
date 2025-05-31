import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";
import aboutImg from "../img/about.jpg";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="about-us">
      <img
        data-aos="fade-right"
        alt=""
        src={aboutImg}
        className="about-us-img"
      />
      <div data-aos="fade-left" className="about-us-txt">
        <div className="about-heading">About Us</div>
        <p className="about-txt">
          We, Society Associates, have been operating in Kalyan since 2015, and
          we offer a setup and framework in accordance with the bylaws that
          enables you to handle all concerns that arise when managing a Housing
          Society. For legal matters, documentation, fund management, and
          internal disputes, we also offer Management Consulting Services. We
          are qualified to offer Consulting Services to Co-operative Housing
          Societies. We provide Monthly / Annual Basis Consultancy to Housing
          Societies against reasonable and standard charges for concrete
          solutions, opinions, and consulting.
        </p>
      </div>
    </div>
  );
}
