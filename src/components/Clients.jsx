import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/Clients.css";
import def from "../img/default.jpg";

export default function Clients() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  if (window.innerWidth <= 980) {
    return (
      <div id="clients">
        <div className="clients-heading">Our Clients</div>
        <div className="client-details">
          <div data-aos="fade-right" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Shree Sai Gajanan CHS Ltd, Dombivli (East)
            </p>
          </div>
          <div data-aos="fade-left" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Shrinika Srishti CHS Ltd, Dombivli (East)
            </p>
          </div>
          <div data-aos="fade-right" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Deepak Paradise CHS Ltd, Kalyan (West)
            </p>
          </div>
          <div data-aos="fade-left" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              New Ganga Yamuna CHS Ltd, Kalyan (West)
            </p>
          </div>
          <div data-aos="fade-right" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Sai Anant Darshan CHS Ltd, Dombivli (West)
            </p>
          </div>
          <div data-aos="fade-left" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Yogidham Sydney,
              <br />
              Kalyan (West)
            </p>
          </div>
          <div data-aos="fade-right" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">Shivneri CHS Ltd, Vile Parle</p>
          </div>
          <div data-aos="fade-left" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Shubh Nirmaan CHS Ltd, Badlapur (West)
            </p>
          </div>
          <div data-aos="fade-right" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Rutika CHS Ltd,
              <br />
              Ambarnath (East)
            </p>
          </div>
          <div data-aos="fade-left" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Devlok CHS Ltd,
              <br />
              Dombivli (West)
            </p>
          </div>
          <div data-aos="fade-right" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Riverview Classic Bldg No 6, Kalyan (West)
            </p>
          </div>
          <div data-aos="fade-left" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Chafe Vikas Patpedhi,
              <br />
              Vile Parle
            </p>
          </div>
          <div data-aos="fade-right" className="clientt">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">Shivam Complex, Badlapur</p>
          </div>
        </div>
        <div className="clients-footer">
          <div data-aos="fade-in" className="end-of-clients">
            ....& many more
          </div>
          <div data-aos="fade-in" className="client-msg">
            " Give us a call or Enquire below to avail the Best services for
            your Housing Society
            <br />
            and be one of our Happy Clients! "
          </div>
        </div>
      </div>
    );
  } else if (window.innerWidth > 980) {
    return (
      <div id="clients">
        <div className="clients-heading">Our Clients</div>
        <div className="client-details">
          <div data-aos="fade-right" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Shree Sai Gajanan CHS Ltd, Dombivli (East)
            </p>
          </div>
          <div data-aos="fade-in" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Shrinika Srishti CHS Ltd, Dombivli (East)
            </p>
          </div>
          <div data-aos="fade-left" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Deepak Paradise CHS Ltd, Kalyan (West)
            </p>
          </div>
          <div data-aos="fade-right" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              New Ganga Yamuna CHS Ltd, Kalyan (West)
            </p>
          </div>
          <div data-aos="fade-in" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Sai Anant Darshan CHS Ltd, Dombivli (West)
            </p>
          </div>
          <div data-aos="fade-left" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Yogidham Sydney,
              <br />
              Kalyan (West)
            </p>
          </div>
          <div data-aos="fade-right" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">Shivneri CHS Ltd, Vile Parle</p>
          </div>
          <div data-aos="fade-in" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Shubh Nirmaan CHS Ltd, Badlapur (West)
            </p>
          </div>
          <div data-aos="fade-left" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Rutika CHS Ltd,
              <br />
              Ambarnath (East)
            </p>
          </div>
          <div data-aos="fade-right" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">Devlok CHS Ltd, Dombivli</p>
          </div>
          <div data-aos="fade-in" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">Riverview Classic Bldg No 6, Kalyan</p>
          </div>
          <div data-aos="fade-left" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">Chafe Vikas Patpedhi, Vile Parle</p>
          </div>
          <div data-aos="fade-right" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">Shivam Complex, Badlapur</p>
          </div>
          <div data-aos="fade-in" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Om Sai Sadan E & F Wing CHS Ltd, Dombivli
            </p>
          </div>
          <div data-aos="fade-left" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">
              Rutu Riverside Estate Bldg No. 2 CHS Ltd, Kalyan
            </p>
          </div>
          <div data-aos="fade-right" className="client">
            <div className="client-img">
              <img src={def} alt="client" />
            </div>
            <p className="client-name">Shivam A1 & A2 CHS Ltd, Kon</p>
          </div>
        </div>
        <div className="clients-footer">
          <div data-aos="fade-in" className="end-of-clients">
            ....& many more
          </div>
          <div data-aos="fade-in" className="client-msg">
            " Give us a call or Enquire below to avail the Best services for
            your Housing Society and be one of our Happy Clients! "
          </div>
        </div>
      </div>
    );
  }
}
