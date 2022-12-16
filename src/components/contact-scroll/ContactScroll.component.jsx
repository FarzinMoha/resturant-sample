import React from "react";
import "./ContactScroll.style.scss";
import { FaHome } from "react-icons/fa";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { HiMapPin } from "react-icons/hi2";
import { Link } from "react-router-dom";
const ContactScroll = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const showInMapClicked = () => {
    window.open(
      "https://maps.google.com?q=" + 43.77190464503119 + "," + 11.26154266621772
    );
  };
  return (
    <div className="contact-scroll-container">
      <div className="contact-scroll-icons">
        <div onClick={scrollToTop} className="contact-scroll-icon-container">
          <h1 className="contact-scroll-icon">
            <FaHome />
          </h1>
        </div>
        <div className="contact-scroll-icon-container">
          <a href="tel:+905528819132" className="contact-scroll-icon">
            <BsFillPhoneVibrateFill />
          </a>
        </div>
        <div
          onClick={showInMapClicked}
          className="contact-scroll-icon-container"
        >
          <h1 className="contact-scroll-icon">
            <HiMapPin />
          </h1>
        </div>
        <div className="contact-scroll-icon-container">
          <Link
            to="/new-bridge-sprizza-reserve"
            className="contact-scroll-icon book"
          >
            RESERVE
          </Link>
        </div>
      </div>
      <p className="contact-scroll-address">
        Via dell'Oriuolo, 26/R 50122 FIRENZE
      </p>
    </div>
  );
};

export default ContactScroll;
