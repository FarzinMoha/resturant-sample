import React from "react";
import "./Products.style.scss";
import CompScale from "../component-scale/CompScale.component";
import CenterFade from "../fade/CenterFade.component";
const Products = ({ scrollPosition }) => {
  return (
    <CompScale
      backgroundImage={"Products"}
      scrollPosition={scrollPosition}
      scroll={6000}
      scroll1={6000}
      TimeScroll1={11700}
      scroll0={11750}
      numberScale={1.1}
      scaleStart={0.7}
      height={5750}
    >
      <div className="products-alphabet-container">
        <div
          className="products-alphabet"
          style={{ animation: "2s alphabetRotate1 infinite", zIndex: 2 }}
        >
          <h1 className="products-alphabet">O</h1>
          <h1 className="products-alphabet" style={{ animationDelay: ".3s" }}>
            B
          </h1>
          <h1 className="products-alphabet" style={{ animationDelay: "1s" }}>
            C
          </h1>
          <h1 className="products-alphabet" style={{ animationDelay: ".1s" }}>
            W
          </h1>
        </div>
        <div
          className="products-alphabet"
          style={{
            transform: "rotate(10deg)",
            animation: "4s alphabetRotate2 infinite",
            zIndex: 2,
          }}
        >
          <h1 className="products-alphabet">A</h1>
          <h1 className="products-alphabet" style={{ animationDelay: ".6s" }}>
            E
          </h1>
          <h1 className="products-alphabet" style={{ animationDelay: "1.2s" }}>
            F
          </h1>
        </div>
        <div
          className="products-alphabet"
          style={{ transform: "rotate(-360deg)", zIndex: 2 }}
        >
          <h1 className="products-alphabet">A</h1>
          <h1 className="products-alphabet" style={{ animationDelay: ".9s" }}>
            G
          </h1>
          <h1 className="products-alphabet" style={{ animationDelay: "1.1s" }}>
            H
          </h1>
        </div>
      </div>
      {scrollPosition >= 7900 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={7900}
          scroll1={7900}
          TimeScroll1={8700}
          scroll0={9200}
          numberScale={70}
          text={true}
        >
          <h1>PIZZA</h1>
        </CenterFade>
      ) : null}
      {scrollPosition >= 9100 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={9100}
          scroll1={9100}
          TimeScroll1={9900}
          scroll0={10400}
          numberScale={70}
          text={true}
        >
          <h1>PANUOZZI</h1>
        </CenterFade>
      ) : null}
      {scrollPosition >= 10300 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={10300}
          scroll1={10300}
          TimeScroll1={11100}
          scroll0={11600}
          numberScale={90}
          text={true}
        >
          <h1>BERE</h1>
        </CenterFade>
      ) : null}
    </CompScale>
  );
};
export default Products;
