import React from "react";
import "./MusicModal.style.scss";
const MusicModal = ({ playsong, setPlayMusic }) => {
  const play = () => {
    playsong();
    setPlayMusic(false);
  };
  return (
    <div className="music-modal-container">
      <div className="music-modal">
        <div className="music-modal-text-container">
          <p className="music-modal-text">Our website has a Wonderful song.</p>
          <p className="music-modal-text"> Are you ready?</p>
        </div>
        <div className="btn-container">
          <button
            onClick={() => setPlayMusic(false)}
            className="music-modal-btn red"
          >
            Silence
          </button>
          <button onClick={() => play()} className="music-modal-btn green">
            Let's go
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicModal;
