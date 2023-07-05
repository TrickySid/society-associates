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
    <div id="header">
      <p data-aos="fade-right" className="header-txt">
        <span>
          From Complexity to Clarity:
          <br />
          <span className="header-txt-bold">
            Simplify Your
            <br />
            Society Management Process
          </span>
        </span>
        <AnchorLink href="#contact-form">
          <button className="enquire-now">Enquire Now</button>
        </AnchorLink>
      </p>
    </div>
  );
}
