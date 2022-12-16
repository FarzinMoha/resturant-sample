import React from "react";
import "./UpScroll.style.scss";
import { FaArrowUp } from "react-icons/fa";
import { GoUnmute, GoMute } from "react-icons/go";
const UpScroll = ({ mute, setMute, playing, playsong }) => {
  const muteHandler = () => {
    if (playing) {
      setMute(!mute);
    }
    if (!playing) {
      playsong();
      setMute(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="up-scroll-container">
      <div onClick={scrollToTop} className="up-scroll">
        <FaArrowUp className="up-icon" />
      </div>
      <div className="up-scroll-btn" onClick={muteHandler}>
        {!playing ? (
          <GoMute className="song-icon" />
        ) : mute ? (
          <GoMute className="song-icon" />
        ) : (
          <GoUnmute className="song-icon" />
        )}
      </div>
    </div>
  );
};

export default UpScroll;
