import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/Clients.css";

const clientsData = [
  "Shree Sai Gajanan CHS Ltd, Dombivli (East)",
  "Shrinika Srishti CHS Ltd, Dombivli (East)",
  "Deepak Paradise CHS Ltd, Kalyan (West)",
  "New Ganga Yamuna CHS Ltd, Kalyan (West)",
  "Sai Anant Darshan CHS Ltd, Dombivli (West)",
  "Yogidham Sydney, Kalyan (West)",
  "Shivneri CHS Ltd, Vile Parle",
  "Shubh Nirmaan CHS Ltd, Badlapur (West)",
  "Rutika CHS Ltd, Ambarnath (East)",
  "Devlok CHS Ltd, Dombivli (West)",
  "Riverview Classic Bldg No 6, Kalyan (West)",
  "Chafe Vikas Patpedhi, Vile Parle",
  "Shivam Complex, Badlapur",
  "Om Sai Sadan E & F Wing CHS Ltd, Dombivli",
  "Rutu Riverside Estate Bldg No. 2 CHS Ltd, Kalyan",
  "Shivam A1 & A2 CHS Ltd, Kon"
];

export default function Clients() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="clients" className="section-padding">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Our Valued Clients</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            Trusted by numerous Housing Societies and associations across Thane District and Mumbai.
          </p>
        </div>
        <div className="client-grid">
          {clientsData.map((name, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 50} className="client-item">
              <div className="client-icon-box">
                <i className="fas fa-building client-icon"></i>
              </div>
              <p className="client-name-text">{name}</p>
            </div>
          ))}
        </div>
        <div className="clients-footer" data-aos="fade-up">
          <p className="many-more">...and many more</p>
          <div className="client-cta-box">
            <p className="client-cta-text">
              "Join our network of satisfied Housing Societies. Experience professional management today."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
