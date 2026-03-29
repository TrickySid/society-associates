import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/Services.css";
import auditImg from "../img/1.jpg";
import housingImg from "../img/2.jpg";
import socFormImg from "../img/3.jpg";
import conveyanceImg from "../img/4.jpg";
import maintenanceImg from "../img/5.jpg";
import membershipImg from "../img/6.jpg";
import rraImg from "../img/7.jpg";
import electionImg from "../img/8.jpg";

const servicesData = [
  { img: auditImg, title: "Auditing", desc: "We perform Statutory / Internal Audits for housing societies and provide consultancy for miscellaneous issues and day-to-day affairs." },
  { img: housingImg, title: "Society Accounting", desc: "Qualified expert accountants providing reliable monthly billing, receipting, and full accounting services for housing societies." },
  { img: socFormImg, title: "Registration & Handover", desc: "Expert consultancy for the registration process and professional handover of housing societies to management committees." },
  { img: conveyanceImg, title: "Conveyance / Deemed Conveyance", desc: "Legal advice and assistance for executing Conveyance deeds and Deemed Conveyance hassle-free and cost-effectively." },
  { img: maintenanceImg, title: "Maintenance Recovery", desc: "Specialized consultancy for recovering due maintenance from defaulters, including issuance of legal notices and letters." },
  { img: membershipImg, title: "Membership Transfer", desc: "Reliable flat transfer documentation and member transfer consulting services following Maharashtra's legal framework." },
  { img: rraImg, title: "Rent Agreement", desc: "End-to-end services for flat Rent Agreements locally, including statutory police verification procedures." },
  { img: electionImg, title: "Society Election", desc: "Conducting professional elections for Managing Committees, and managing MCM, SGM, AGM, and Share certificate processes." }
];

export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Our Services</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            Providing expert management and legal solutions for residential complexes.
          </p>
        </div>
        <div className="service-grid">
          {servicesData.map((service, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="service-card">
              <div className="service-img-container">
                <img src={service.img} alt={service.title} className="service-img" />
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
