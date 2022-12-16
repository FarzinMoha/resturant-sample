import React from "react";
import CenterFade from "../fade/CenterFade.component";
import "./CompScale.style.scss";
const CompScale = ({
  children,
  backgroundImage,
  scrollPosition,
  scroll,
  scroll1,
  TimeScroll1,
  scroll0,
  numberScale,
  scaleStart,
  scale1Stop,
  text,
  height,
}) => {
  return (
    <>
      <div
        className="component-scale-container"
        style={{ height: `${height}px` }}
      >
        <div className="component-scale-image-container">
          <CenterFade
            scrollPosition={scrollPosition}
            scroll={scroll}
            scroll1={scroll1}
            TimeScroll1={TimeScroll1}
            scroll0={scroll0}
            numberScale={numberScale}
            scaleStart={scaleStart}
            scale1Stop={scale1Stop}
            text={text}
          >
            <div
              alt="backtext"
              className={`component-scale-image ${backgroundImage}`}
            />
          </CenterFade>
          {children}
        </div>
      </div>
    </>
  );
};

export default CompScale;
