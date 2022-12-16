import React, { useEffect, useRef, useState } from "react";
import "./Vino.style.scss";
import video from "../../video/vino.mp4";
import CompScale from "../component-scale/CompScale.component";
import CenterFade from "../fade/CenterFade.component";
const Vino = ({ scrollPosition }) => {
  const [currentTime1, setCurrentTime] = useState(0);
  const vid = useRef();
  const playbackConst = 150;
  async function scrollPlay() {
    setCurrentTime((scrollPosition - 28950) / playbackConst);
    vid.current.currentTime = currentTime1;
  }
  useEffect(() => {
    scrollPlay();
    window.requestAnimationFrame(scrollPlay);
  });
  return (
    <CompScale
      scrollPosition={scrollPosition}
      scroll={28950}
      scroll1={28950}
      TimeScroll1={30000}
      scroll0={31000}
      numberScale={0.2}
      scaleStart={0.3}
      scale1Stop={true}
      height={5050}
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
      {scrollPosition >= 29780  ? (
            <CenterFade
              scrollPosition={scrollPosition}
              scroll={29780}
              scroll1={29780}
              TimeScroll1={31180}
              scroll0={32617}
              numberScale={200}
              text={true}
            >
              <h1>BERE</h1>
            </CenterFade>
          ) : null}
    </CompScale>
  );
};

export default Vino;
