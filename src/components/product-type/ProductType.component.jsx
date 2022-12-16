import React from "react";
import CompScale from "../component-scale/CompScale.component";
import CenterFade from "../fade/CenterFade.component";
const ProductType = ({ scrollPosition }) => {
  return (
    <CompScale
      backgroundImage={"ProductType"}
      scrollPosition={scrollPosition}
      scroll={350}
      scroll1={1000}
      TimeScroll1={5345}
      scroll0={5440}
      numberScale={0.2}
      scaleStart={0.25}
      height={5550}
    >
      {scrollPosition > 1000 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={1780}
          scroll1={1780}
          TimeScroll1={2500}
          scroll0={2900}
          numberScale={20}
          text={true}
        >
          <h1>SENZA</h1>
          <h1>GLUTTEN</h1>
        </CenterFade>
      ) : null}
      {scrollPosition > 2800 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={2800}
          scroll1={2800}
          TimeScroll1={3600}
          scroll0={4000}
          numberScale={20}
          text={true}
        >
          <h1>SENZA</h1>
          <h1>LATTOSIO</h1>
        </CenterFade>
      ) : null}
      {scrollPosition > 3900 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={3900}
          scroll1={3900}
          TimeScroll1={4700}
          scroll0={5200}
          numberScale={20}
          text={true}
        >
          <h1>VEGETARIANE</h1>
        </CenterFade>
      ) : null}
    </CompScale>
  );
};
export default ProductType;
