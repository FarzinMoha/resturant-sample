import React from "react";
import "./Panuozzi.style.scss";
import panuozzi from "../../image/panuozzi.webp";
import CompScale from "../component-scale/CompScale.component";
import CenterFade from "../fade/CenterFade.component";
import TextAnimation from "../text-anim/TextAnimation.component";
const Panuozzi = ({ scrollPosition }) => {
  return (
    <CompScale
      backgroundImage={"panuozzi"}
      scrollPosition={scrollPosition}
      scroll={20600}
      scroll1={23900}
      TimeScroll1={27960}
      scroll0={29960}
      numberScale={3.9}
      scaleStart={0.3}
      scale1Stop={true}
      height={5000}
    >
      <CenterFade
        scrollPosition={scrollPosition}
        scroll={24356}
        scroll1={24356}
        TimeScroll1={24956}
        scroll0={25106}
        numberScale={35}
        panuozzi={true}
      >
        <img src={panuozzi} alt="backtext" className="image-panuozzi" />
      </CenterFade>
      <TextAnimation
        scrollPosition={scrollPosition}
        scroll={24707}
        scroll0={26707}
        toLeft={true}
      >
        PIZZA MATGARETHA
      </TextAnimation>
      <TextAnimation
        scrollPosition={scrollPosition}
        scroll={24707}
        scroll0={26707}
        toRight={true}
      >
        PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA
      </TextAnimation>
      <CenterFade
        scrollPosition={scrollPosition}
        scroll={25086}
        scroll1={25086}
        TimeScroll1={25686}
        scroll0={25836}
        numberScale={35}
        panuozzi={true}
      >
        <img src={panuozzi} alt="backtext" className="image-panuozzi" />
      </CenterFade>
      <TextAnimation
        scrollPosition={scrollPosition}
        scroll={25431}
        scroll0={27431}
        toLeft={true}
      >
        PIZZA MATGARETHA
      </TextAnimation>
      <TextAnimation
        scrollPosition={scrollPosition}
        scroll={25431}
        scroll0={27431}
        toRight={true}
      >
        PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA
      </TextAnimation>
      <CenterFade
        scrollPosition={scrollPosition}
        scroll={25816}
        scroll1={25816}
        TimeScroll1={26416}
        scroll0={26566}
        numberScale={35}
        panuozzi={true}
      >
        <img src={panuozzi} alt="backtext" className="image-panuozzi" />
      </CenterFade>
      <TextAnimation
        scrollPosition={scrollPosition}
        scroll={26165}
        scroll0={28165}
        toLeft={true}
      >
        PIZZA MATGARETHA
      </TextAnimation>
      <TextAnimation
        scrollPosition={scrollPosition}
        scroll={26165}
        scroll0={28165}
        toRight={true}
      >
        PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA
      </TextAnimation>
      <CenterFade
        scrollPosition={scrollPosition}
        scroll={26546}
        scroll1={26546}
        TimeScroll1={27146}
        scroll0={27296}
        numberScale={35}
        panuozzi={true}
      >
        <img src={panuozzi} alt="backtext" className="image-panuozzi" />
      </CenterFade>
      <TextAnimation
        scrollPosition={scrollPosition}
        scroll={26893}
        scroll0={28893}
        toLeft={true}
      >
        PIZZA MATGARETHA
      </TextAnimation>
      <TextAnimation
        scrollPosition={scrollPosition}
        scroll={26893}
        scroll0={28893}
        toRight={true}
      >
        PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA
      </TextAnimation>
      <CenterFade
        scrollPosition={scrollPosition}
        scroll={27276}
        scroll1={27276}
        TimeScroll1={27876}
        scroll0={28026}
        numberScale={35}
        panuozzi={true}
      >
        <img src={panuozzi} alt="backtext" className="image-panuozzi" />
      </CenterFade>
      <TextAnimation
        scrollPosition={scrollPosition}
        scroll={27624}
        scroll0={29624}
        toLeft={true}
      >
        PIZZA MATGARETHA
      </TextAnimation>
      <TextAnimation
        scrollPosition={scrollPosition}
        scroll={27624}
        scroll0={29624}
        toRight={true}
      >
        PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA PIZZA MATGARETHA
      </TextAnimation>
    </CompScale>
  );
};

export default Panuozzi;
