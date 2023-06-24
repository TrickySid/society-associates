import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/Clients.css";
import def from "../img/default.jpg";

export default function Clients() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
          <p className="client-name">Deepak Paradise CHS Ltd, Kalyan (West)</p>
        </div>
        <div data-aos="fade-right" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">New Ganga Yamuna CHS Ltd, Kalyan (West)</p>
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
          <p className="client-name">Shubh Nirmaan CHS Ltd, Badlapur (West)</p>
        </div>
        <div data-aos="fade-in" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">
            Rutika CHS Ltd,
            <br />
            Ambarnath (East)
          </p>
        </div>
        <div data-aos="fade-left" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">
            Navoday CHS Ltd,
            <br />
            Dombivli (East)
          </p>
        </div>
        <div data-aos="fade-right" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">
            Vighnaharta CHS Ltd,
            <br />
            Dombivli (East)
          </p>
        </div>
        <div data-aos="fade-in" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">Mauli Darshan CHS Ltd, Dombivli (East)</p>
        </div>
        <div data-aos="fade-left" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">
            Maulidham CHS Ltd,
            <br />
            Dombivli (East)
          </p>
        </div>
        <div data-aos="fade-right" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">
            Om Sai Sadan Bldg No. 03 CHS Ltd, Dombivli (East)
          </p>
        </div>
        <div data-aos="fade-in" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">
            Om Sai Pooja CHS Ltd,
            <br />
            Kalyan (East)
          </p>
        </div>
        <div data-aos="fade-left" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">Om Sai Sankalp CHS Ltd, Dombivli (East)</p>
        </div>
        <div data-aos="fade-right" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">
            Mangalmurti CHS Ltd,
            <br />
            Kalyan (East)
          </p>
        </div>
        <div data-aos="fade-in" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">
            Om Annapurna Darshan CHS Ltd, Dombivli (East)
          </p>
        </div>
        <div data-aos="fade-left" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">
            Siddhivinayak Apartment CHS Ltd, Kalyan (East)
          </p>
        </div>
        <div data-aos="fade-right" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">
            Asha Paradise CHS Ltd,
            <br />
            Dombivli (East)
          </p>
        </div>
        <div data-aos="fade-in" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">
            Rajubhai Apartment CHS Ltd, Dombivli (East)
          </p>
        </div>
        <div data-aos="fade-left" className="client">
          <div className="client-img">
            <img src={def} alt="client" />
          </div>
          <p className="client-name">Devlok CHS Ltd, Dombivli (West)</p>
        </div>
      </div>
    </div>
  );
}
