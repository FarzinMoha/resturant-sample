import React from "react";
import "./Intro.style.scss";
const Intro = ({ scrollPosition }) => {
  const scale = 1 - scrollPosition / 1500;
  return (
    <div className="intro-container">
      <div
        className="image-container"
        style={
          scrollPosition <= 583
            ? { transform: `scale(${scale})` }
            : {
                transform: `scale(.61133333) translateY(-${
                  scrollPosition - 583
                }px)`,
              }
        }
      ></div>
      <div className="intro-text-animation-container">
        <p
          className="bg-txt-anim-right"
          style={{
            transform: `rotate(-5deg) translateX(${100 - scrollPosition / 5}%)`,
          }}
        >
          NEW BRIDGE SPRIZZA <span>NEW BRIDGE SPRIZZA</span> NEW BRIDGE SPRIZZA
          <span>NEW BRIDGE SPRIZZA</span> NEW BRIDGE SPRIZZA
          <span>NEW BRIDGE SPRIZZA</span>
        </p>
        <p
          className="bg-txt-anim-left"
          style={{
            transform: `rotate(-5deg) translateX(${
              -245 + scrollPosition / 5
            }%)`,
          }}
        >
          <span>NEW BRIDGE SPRIZZA</span> NEW BRIDGE SPRIZZA
          <span>NEW BRIDGE SPRIZZA</span> NEW BRIDGE SPRIZZA
          <span>NEW BRIDGE SPRIZZA</span> NEW BRIDGE SPRIZZA
        </p>
        <p
          className="bg-txt-anim-right"
          style={{
            transform: `rotate(-5deg) translateX(${100 - scrollPosition / 5}%)`,
          }}
        >
          NEW BRIDGE SPRIZZA <span>NEW BRIDGE SPRIZZA</span> NEW BRIDGE SPRIZZA
          <span>NEW BRIDGE SPRIZZA</span> NEW BRIDGE SPRIZZA
          <span>NEW BRIDGE SPRIZZA</span>
        </p>
      </div>
      <div
        className="intro-title"
        style={{ transform: `translateY(-${scrollPosition}px)` }}
      >
        <h1 className="intro-title-name1">NEW</h1>
        <h1 className="intro-title-name2">BRIDGE</h1>
        <h1 className="intro-title-name3">SPRIZZA</h1>
      </div>
      <div
        id="element"
        style={{ transform: `translateY(-${scrollPosition}px)` }}
      >
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default Intro;
