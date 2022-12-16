import React from "react";
import "./Loading.style.scss";
const Loaing = () => {
  return (
    <div className="loader">
      <div id="cupcake" className="box">
        <span className="letter">L</span>
        <div className="cupcakeCircle box">
          <div className="cupcakeInner box">
            <div className="cupcakeCore box"></div>
          </div>
        </div>
        <span className="letter box">A</span>
        <span className="letter box">D</span>
        <span className="letter box">I</span>
        <span className="letter box">N</span>
        <span className="letter box">G</span>
      </div>
      <h1 className="loader-title">NEW BRIDGE SPRIZZA</h1>
    </div>
  );
};

export default Loaing;
