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
          We, Society Associates, located in Kalyan since 2015, provide
          framework and setup as per the bye laws which helps you to tackle all
          the issues while handling the housing society management. We also
          provide Management Consultancy for legal issues, documentation, fund
          management & internal dispute. We are dedicated Co-operative Housing
          Society Consultancy. We are expertise in the same field in and around
          Kalyan, we provide Monthly / Annual Basis Consultancy to housing
          societies against reasonable and standard charges for concrete
          solution, opinion and consultancy.
        </p>
      </div>
    </div>
  );
}
