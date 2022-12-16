import React, { useEffect, useRef, useState } from "react";
import "../vino/Vino.style.scss";
import video from "../../video/GoodTime-bg.mp4";
import image from "../../image/client.webp";
import CompScale from "../component-scale/CompScale.component";
import CenterFade from "../fade/CenterFade.component";
import RightTopOut from "../scroll/right/out/RightTopOut.component";
import RightBotOut from "../scroll/right/out/RightBotOut.component";
import LeftBotOut from "../scroll/left/out/LeftBotOut.component";
import LeftTopOut from "../scroll/left/out/LeftTopOut.component";
const GoodTime = ({ scrollPosition }) => {
  const [currentTime1, setCurrentTime] = useState(0);
  const vid = useRef();
  const playbackConst = 350;
  async function scrollPlay() {
    setCurrentTime((scrollPosition - 33380) / playbackConst);
    vid.current.currentTime = currentTime1;
  }
  useEffect(() => {
    scrollPlay();
    window.requestAnimationFrame(scrollPlay);
  });
  return (
    <CompScale
      scrollPosition={scrollPosition}
      scroll={33380}
      scroll1={33380}
      TimeScroll1={40000}
      scroll0={42000}
      numberScale={0.2}
      scaleStart={0.3}
      scale1Stop={true}
      height={5900}
    >
      <div className="component-scale-video">
        <video
          ref={vid}
          id="v0"
          tabIndex="0"
          autobuffer="autobuffer"
          preload="preload"
        >
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src={video}
          ></source>
        </video>
      </div>
      <CenterFade
        scrollPosition={scrollPosition}
        scroll={33993}
        scroll1={33993}
        TimeScroll1={37993}
        scroll0={38800}
        numberScale={80}
        text={true}
      >
        <h1>BEST</h1>
        <h1>TIME</h1>
        <h1>WITH</h1>
        <h1>US</h1>
      </CenterFade>
      {scrollPosition > 34122 && scrollPosition < 36122 ? (
        <RightTopOut
          scrollPosition={scrollPosition}
          scroll={34122}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </RightTopOut>
      ) : null}
      {scrollPosition > 34422 && scrollPosition < 36422 ? (
        <LeftBotOut
          scrollPosition={scrollPosition}
          scroll={34422}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </LeftBotOut>
      ) : null}
      {scrollPosition > 34722 && scrollPosition < 36722 ? (
        <LeftTopOut
          scrollPosition={scrollPosition}
          scroll={34722}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </LeftTopOut>
      ) : null}
      {scrollPosition > 35022 && scrollPosition < 37022 ? (
        <RightBotOut
          scrollPosition={scrollPosition}
          scroll={35022}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </RightBotOut>
      ) : null}
      {scrollPosition > 35322 && scrollPosition < 37322 ? (
        <RightTopOut
          scrollPosition={scrollPosition}
          scroll={35322}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </RightTopOut>
      ) : null}
      {scrollPosition > 35622 && scrollPosition < 37622 ? (
        <LeftBotOut
          scrollPosition={scrollPosition}
          scroll={35622}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </LeftBotOut>
      ) : null}
      {scrollPosition > 35922 && scrollPosition < 37922 ? (
        <LeftTopOut
          scrollPosition={scrollPosition}
          scroll={35922}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </LeftTopOut>
      ) : null}
      {scrollPosition > 36222 && scrollPosition < 38222 ? (
        <RightBotOut
          scrollPosition={scrollPosition}
          scroll={36222}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </RightBotOut>
      ) : null}
      {scrollPosition > 36522 && scrollPosition < 38522 ? (
        <RightTopOut
          scrollPosition={scrollPosition}
          scroll={36522}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </RightTopOut>
      ) : null}
      {scrollPosition > 36822 && scrollPosition < 38822 ? (
        <LeftBotOut
          scrollPosition={scrollPosition}
          scroll={36822}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </LeftBotOut>
      ) : null}
      {scrollPosition > 37122 && scrollPosition < 39122 ? (
        <LeftTopOut
          scrollPosition={scrollPosition}
          scroll={37122}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </LeftTopOut>
      ) : null}
      {scrollPosition > 37422 && scrollPosition < 39422 ? (
        <RightBotOut
          scrollPosition={scrollPosition}
          scroll={37422}
          speedScale={1000}
        >
          <img src={image} alt="client" />
        </RightBotOut>
      ) : null}
    </CompScale>
  );
};

export default GoodTime;
