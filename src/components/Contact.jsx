import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/Contact.css";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="contact-us">
      <div className="contact-us-heading">Contact Us</div>
      <div className="contact-details">
        <div data-aos="fade-right" className="detail">
          <div className="icon">
            <i className="fa-solid fa-location-dot" />
          </div>
          <p className="title">Address</p>
          <p className="info" style={{ width: "290px" }}>
            303, Bldg 2/A, Rutu Riverside Estate, Gandhare, Near KM Agarwal
            College, Aadharwadi Road, Kalyan (W) - 421301
          </p>
        </div>
        <div data-aos="fade-in" className="detail">
          <div className="icon">
            <i class="fa-solid fa-envelope" />
          </div>
          <p className="title">For Enquiries</p>
          <p className="info">societyassociates22@gmail.com</p>
        </div>
        <div data-aos="fade-left" className="detail">
          <div className="icon">
            <i class="fa-solid fa-phone" />
          </div>
          <p className="title">Give us a Call</p>
          <p className="info">
            +91 98923 72264
            <br />
            +91 99678 74633
          </p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.3836101463276!2d73.13184367411985!3d19.26567714599268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7971c3c5b3e53%3A0xe961986739196ace!2sRutu%20riverside%20estate%20Building%202A!5e0!3m2!1sen!2sin!4v1687759727287!5m2!1sen!2sin"
        className="sa-loc"
        data-aos="fade-in"
        title="sa-location"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <form
        action="https://formspree.io/f/mwkjgrwo"
        method="POST"
        id="contact-form"
        data-aos="fade-up"
      >
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            style={{ height: "150px" }}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-form">
            Submit
          </button>
        </div>
      </form>
      <div className="copyright">© Copyright 2023 Society Associates</div>
    </div>
  );
}