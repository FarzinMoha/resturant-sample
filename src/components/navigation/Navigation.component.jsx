import React from "react";
import "./Navigation.style.scss";
import { FaHome } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BsFacebook, BsFillPhoneVibrateFill } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import { useState } from "react";
import logo from "../../image/logo.webp";
import { Link } from "react-router-dom";
const Navigation = () => {
  const [show, setShow] = useState(false);
  const showInMapClicked = () => {
    window.open(
      "https://maps.google.com?q=" + 43.77190464503119 + "," + 11.26154266621772
    );
    setShow(false);
  };
  const homeButton = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setShow(false);
  };
  return (
    <>
      <div
        className={!show ? "navigation-container" : "navigation-container show"}
      >
        <RiMenuUnfoldFill
          onClick={() => setShow(!show)}
          className={!show ? "navigation-icon" : "navigation-icon close"}
        />
        <div className="navigation-item-container">
          <img className="navigation-item-logo" src={logo} alt="logo" />
          <Link onClick={homeButton} to="/resturant-sample" className="navigation-item-icon">
            <FaHome />
          </Link>
          <Link
            onClick={() => setShow(false)}
            to="/new-bridge-sprizza-menu"
            className="navigation-item-icon"
          >
            <MdOutlineRestaurantMenu />
          </Link>
          <a
            onClick={() => setShow(false)}
            className="navigation-item-icon"
            href="tel:+905528819132"
          >
            <BsFillPhoneVibrateFill />
          </a>
          <div className="navigation-item-icon" onClick={showInMapClicked}>
            <ImLocation />
          </div>
          <a
            onClick={() => setShow(false)}
            className="navigation-item-icon"
            href="https://www.instagram.com/newbridge_sprizza/"
            target="-blank"
          >
            <RiInstagramFill />
          </a>
          <a
            onClick={() => setShow(false)}
            className="navigation-item-icon"
            href="https://www.facebook.com/Newbridgesprizza"
            target="-blank"
          >
            <BsFacebook />
          </a>
          <Link
            onClick={() => setShow(false)}
            to="/new-bridge-sprizza-reserve"
            className="navigation-item-icon reserve"
          >
            RESERVE
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
