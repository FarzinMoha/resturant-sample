import React from "react";
import "./TextAnimation.style.scss";
const TextAnimation = ({
  scrollPosition,
  scroll,
  children,
  toLeft,
  toRight,
  scroll0,
}) => {
  if (toLeft) {
    return (
      <>
        {scrollPosition >= scroll && scrollPosition <= scroll0 ? (
          <p
            className="text-animation-to-left"
            style={{
              transform: `translateX(${
                100 - (scrollPosition - scroll) / 1.2
              }%)`,
            }}
          >
            {children}
          </p>
        ) : null}
      </>
    );
  }
  if (toRight) {
    return (
      <>
        {scrollPosition >= scroll && scrollPosition <= scroll0 ? (
          <p
            className="text-animation-to-right"
            style={{
              transform: `translateX(${-100 + (scrollPosition - scroll)}%)`,
            }}
          >
            {children}
          </p>
        ) : null}
      </>
    );
  }
};
export default TextAnimation;
