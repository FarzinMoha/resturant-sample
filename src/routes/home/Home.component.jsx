import React, { useEffect, useRef, useState } from "react";
import "./Home.style.scss";
import Menu from "../menu/Menu.component";
import Main from "../../components/main/Main.component";
import Reserve from "../reserve/Reserve.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation.component";
import MusicModal from "../../components/music-modal/MusicModal.component";
import UpScroll from "../../components/up-scroll/UpScroll.component";
import song from '../../song/song.mp3'
const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [playMusic, setPlayMusic] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [mute , setMute] = useState(false)
  const player = useRef();
  const playsong = () => {
    player.current.play()
    setPlaying(true)
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      {playMusic ? (
        <MusicModal
          setPlayMusic={setPlayMusic}
          playsong={playsong}
        />
      ) : null}
      <audio
        style={{ display: "none" }}
        id="1"
        src={song}
        ref={player}
        loop
        muted={mute}
      />
      <Navigation />
      <Routes>
        <Route
          path="/resturant-sample"
          element={<Main scrollPosition={scrollPosition} />}
        >
          <Route
            index
            element={
              scrollPosition > 500 ? (
                <UpScroll
                  mute={mute}
                  setMute = {setMute}
                  playing= {playing}
                  playsong={playsong}
                />
              ) : null
            }
          />
        </Route>
        <Route path="/new-bridge-sprizza-menu" element={<Menu />} />
        <Route path="/new-bridge-sprizza-reserve" element={<Reserve />} />
      </Routes>
    </div>
  );
};

export default Home;
