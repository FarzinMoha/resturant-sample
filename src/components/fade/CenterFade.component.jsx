import React, { useEffect, useState } from "react";
import "./Fade.style.scss";

const CenterFade = ({
  scrollPosition,
  scroll,
  scroll1,
  TimeScroll1,
  scroll0,
  children,
  numberScale,
  scaleStart,
  scale1Stop,
  text,
  pizza,
  panuozzi,
}) => {
  const scale = scaleStart + (numberScale * (scrollPosition - scroll)) / scroll;
  const [stopIncScale, setStopIncScale] = useState(0);
  useEffect(() => {
    if (scrollPosition <= TimeScroll1) {
      setStopIncScale(scale);
    }
  }, [scale, scrollPosition, TimeScroll1]);
  const scaleDec = stopIncScale - (scrollPosition - TimeScroll1) / 500;
  const scale1Dec = 1 - (scrollPosition - TimeScroll1) / 500;
  const wait = (numberScale * (scrollPosition - scroll)) / 5690;
  if (!scale1Stop && !text && !pizza && !panuozzi) {
    return (
      <div
        className="center-fade"
        style={{
          transform: `scale(${
            scrollPosition <= TimeScroll1
              ? scale
              : scrollPosition >= TimeScroll1 && scaleDec >= 0.8
              ? scaleDec
              : 0.8
          })`,
        }}
      >
        {children}
      </div>
    );
  }
  if (text && !pizza && !panuozzi) {
    return (
      <>
        {scrollPosition >= scroll && scrollPosition < scroll0 ? (
          <div
            className="center-fade"
            style={{
              transform: `scale(${
                (numberScale * (scrollPosition - scroll)) / scroll
              })`,
              opacity:
                scrollPosition >= scroll && scrollPosition <= TimeScroll1
                  ? (scrollPosition - scroll) / (scroll1 - scroll)
                  : 1 -
                    (scrollPosition - TimeScroll1) / (scroll0 - TimeScroll1),
            }}
          >
            {children}
          </div>
        ) : null}
      </>
    );
  }
  if (scale1Stop && !pizza && !panuozzi) {
    return (
      <>
        {scrollPosition >= scroll && scrollPosition < scroll0 ? (
          <div
            className="center-fade"
            style={{
              transform: `scale(${
                scale < 1
                  ? scale
                  : scrollPosition < TimeScroll1 && scale >= 1
                  ? 1
                  : scrollPosition >= TimeScroll1 && scale1Dec >= 0.8
                  ? scale1Dec
                  : 0.8
              })`,
            }}
          >
            {children}
          </div>
        ) : null}
      </>
    );
  }
  if (pizza && !panuozzi) {
    return (
      <>
        {scrollPosition >= scroll && scrollPosition < scroll0 ? (
          <div
            className="center-fade"
            style={{
              transform: `scale(${
                wait < 1
                  ? wait
                  : scrollPosition <= TimeScroll1 && scrollPosition > scroll0
                  ? 1.5 * wait
                  : scrollPosition >= TimeScroll1
                  ? 1 + (scrollPosition - TimeScroll1) / 80
                  : 1
              }) rotate(${
                wait < 1
                  ? (scrollPosition - scroll) * 2
                  : scrollPosition > TimeScroll1
                  ? (scrollPosition - scroll) * 5
                  : (scrollPosition - scroll) * 0.07
              }deg) translate(7px , 15px)`,
              opacity:
                scrollPosition >= scroll && scrollPosition <= TimeScroll1
                  ? (scrollPosition - scroll) / (scroll1 - scroll)
                  : 1 -
                    (scrollPosition - TimeScroll1) / (scroll0 - TimeScroll1),
            }}
          >
            {children}
          </div>
        ) : null}
      </>
    );
  }
  if (panuozzi) {
    return (
      <>
        {scrollPosition >= scroll && scrollPosition < scroll0 ? (
          <div
            className="center-fade"
            style={{
              transform: `scale(${wait <= 2 ? wait : 2 + 0.15 * wait})`,
              opacity: `${
                scrollPosition >= TimeScroll1
                  ? 1 - (scrollPosition - TimeScroll1) / 100
                  : 1
              }`,
            }}
          >
            {children}
          </div>
        ) : null}
      </>
    );
  }
};

export default CenterFade;
