import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/Contact.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
};

const CONTACT_ENDPOINT = "https://formspree.io/f/mwkjgrwo";

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.company.trim()) {
      setSubmitState({
        status: "success",
        message: "Thanks. Your enquiry has been received.",
      });
      return;
    }

    setSubmitState({
      status: "submitting",
      message: "Sending your enquiry...",
    });

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          submittedAt: new Date().toISOString(),
          source: "societyassociates.in contact form",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      setFormData(initialFormData);
      setSubmitState({
        status: "success",
        message: "Thanks. We have received your enquiry and will get back to you shortly.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message: "We could not send your message right now. Please use email or WhatsApp below.",
      });
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Contact Us</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            Get in touch with us for expert consultancy and professional society management services.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-column" data-aos="fade-right">
            <div className="contact-card">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h3>Our Office</h3>
                  <p>303, Bldg 2/A, Rutu Riverside Estate, Gandhare, Near KM Agarwal College, Aadharwadi Road, Kalyan (W) - 421301</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h3>Email Us</h3>
                  <p><a href="mailto:societyassociates22@gmail.com">societyassociates22@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <h3>Call / WhatsApp</h3>
                  <p>
                    <a href="https://wa.me/919892372264">+91 98923 72264</a><br />
                    <a href="https://wa.me/919967874633">+91 99678 74633</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="map-container" data-aos="zoom-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.3836101463276!2d73.13184367411985!3d19.26567714599268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7971c3c5b3e53%3A0xe961986739196ace!2sRutu%20riverside%20estate%20Building%202A!5e0!3m2!1sen!2sin!4v1687759727287!5m2!1sen!2sin"
                title="Society Associates Location"
                width="100%"
                height="250"
                style={{ border: "0", borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-column" data-aos="fade-left">
            <form className="enquiry-form" id="contact" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ height: "120px" }}
                />
              </div>
              <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={submitState.status === "submitting"}
              >
                {submitState.status === "submitting" ? "Sending..." : "Send Message"}
              </button>
              <p className="contact-form-note">
                Prefer a direct reply? Email us at <a href="mailto:societyassociates22@gmail.com">societyassociates22@gmail.com</a> or message us on WhatsApp.
              </p>
              {submitState.message && (
                <p className={`contact-form-status is-${submitState.status}`} aria-live="polite">
                  {submitState.message}
                </p>
              )}
            </form>
          </div>
        </div>
        
        <footer className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Society Associates. All rights reserved.</p>
        </footer >
      </div>
    </section>
  );
}
