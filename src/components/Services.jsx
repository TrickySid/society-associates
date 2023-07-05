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

export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  if (window.innerWidth <= 1280) {
    return (
      <div id="services">
        <div className="services-heading">Services</div>
        <div className="service-cards">
          <div data-aos="fade-right" className="card">
            <div className="img-box">
              <img alt="" src={auditImg} />
            </div>
            <div className="content">
              <h2>Auditing</h2>
              <p>
                We perform Statutory / Internal Audits for housing societies, as
                well as provide consultancy for miscellaneous issues and day to
                day affairs of the society.
              </p>
            </div>
          </div>
          <div data-aos="fade-in" className="card">
            <div className="img-box">
              <img alt="" src={housingImg} />
            </div>
            <div className="content">
              <h2>Society Accounting</h2>
              <p>
                We are qualified and expert accountants, and we provide reliable
                Accounting Services with Monthly Billing & Receipt for housing
                societies.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="card">
            <div className="img-box">
              <img alt="" src={socFormImg} />
            </div>
            <div className="content">
              <h2 style={{ marginTop: "20px" }}>
                Society Registration & Handover
              </h2>
              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                We are qualified and expert consultants, and we provide reliable
                Consulting Services for Registration and Handover process of
                housing societies.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="card">
            <div className="img-box">
              <img alt="" src={conveyanceImg} />
            </div>
            <div className="content">
              <h2 style={{ marginTop: "20px" }}>
                Conveyance / Deemed Conveyance
              </h2>
              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                We provide proper legal advice and assistance to society members
                to execute Conveyance deeds and Deemed Conveyance hassle-free
                and cost-effectively.
              </p>
            </div>
          </div>
          <div data-aos="fade-in" className="card">
            <div className="img-box">
              <img alt="" src={maintenanceImg} />
            </div>
            <div className="content">
              <h2 style={{ fontSize: "22px" }}>Maintenance Recovery</h2>
              <p>
                We provide basic consultancy for Recovery of due Maintenance
                from defaulter members of the society i.e. issuance of Notices /
                Letters to him / her.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="card">
            <div className="img-box">
              <img alt="" src={membershipImg} />
            </div>
            <div className="content">
              <h2>Membership Transfer</h2>
              <p>
                We provide reliable consulting services for Membership Transfer
                process of housing societies along with flat Transfer
                Documentation.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="card">
            <div className="img-box">
              <img alt="" src={rraImg} />
            </div>
            <div className="content">
              <h2>Rent Agreement</h2>
              <p>
                We provide services for flat Rent Agreement with police
                verification.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="card">
            <div className="img-box">
              <img alt="" src={electionImg} />
            </div>
            <div className="content">
              <h2>Society Election</h2>
              <p>
                We conduct Election of Managing Committee as well as various
                meetings i.e. MCM, SGM, AGM, and procedure of issuance of Share
                certificate.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (window.innerWidth > 1280) {
    return (
      <div id="services">
        <div className="services-heading">Services</div>
        <div className="service-cards">
          <div data-aos="fade-right" className="card">
            <div className="img-box">
              <img alt="" src={auditImg} />
            </div>
            <div className="content">
              <h2>Auditing</h2>
              <p>
                We perform Statutory / Internal Audits for housing societies, as
                well as provide consultancy for miscellaneous issues and day to
                day affairs of the society.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="card">
            <div className="img-box">
              <img alt="" src={housingImg} />
            </div>
            <div className="content">
              <h2>Society Accounting</h2>
              <p>
                We are qualified and expert accountants, and we provide reliable
                Accounting Services with Monthly Billing & Receipt for housing
                societies.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="card">
            <div className="img-box">
              <img alt="" src={socFormImg} />
            </div>
            <div className="content">
              <h2 style={{ marginTop: "20px" }}>
                Society Registration & Handover
              </h2>
              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                We are qualified and expert consultants, and we provide reliable
                Consulting Services for Registration and Handover process of
                housing societies.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="card">
            <div className="img-box">
              <img alt="" src={conveyanceImg} />
            </div>
            <div className="content">
              <h2 style={{ marginTop: "20px" }}>
                Conveyance / Deemed Conveyance
              </h2>
              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                We provide proper legal advice and assistance to society members
                to execute Conveyance deeds and Deemed Conveyance hassle-free
                and cost-effectively.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="card">
            <div className="img-box">
              <img alt="" src={maintenanceImg} />
            </div>
            <div className="content">
              <h2 style={{ fontSize: "22px" }}>Maintenance Recovery</h2>
              <p>
                We provide basic consultancy for Recovery of due Maintenance
                from defaulter members of the society i.e. issuance of Notices /
                Letters to him / her.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="card">
            <div className="img-box">
              <img alt="" src={membershipImg} />
            </div>
            <div className="content">
              <h2>Membership Transfer</h2>
              <p>
                We provide reliable consulting services for Membership Transfer
                process of housing societies along with flat Transfer
                Documentation.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="card">
            <div className="img-box">
              <img alt="" src={rraImg} />
            </div>
            <div className="content">
              <h2>Rent Agreement</h2>
              <p>
                We provide services for flat Rent Agreement with police
                verification.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="card">
            <div className="img-box">
              <img alt="" src={electionImg} />
            </div>
            <div className="content">
              <h2>Society Election</h2>
              <p>
                We conduct Election of Managing Committee as well as various
                meetings i.e. MCM, SGM, AGM, and procedure of issuance of Share
                certificate.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
