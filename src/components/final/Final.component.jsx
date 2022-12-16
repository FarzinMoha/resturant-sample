import React from "react";
import "./Final.style.scss";
import CompScale from "../component-scale/CompScale.component";
import CenterFade from "../fade/CenterFade.component";
import ContactScroll from "../contact-scroll/ContactScroll.component";
import Footer from "../footer/Footer.component";
const Final = ({ scrollPosition }) => {
  return (
    <CompScale
      backgroundImage={"final"}
      scrollPosition={scrollPosition}
      scroll={39910}
      scroll1={39910}
      TimeScroll1={50000}
      scroll0={70000}
      numberScale={0.3}
      scaleStart={0.95}
      height={9000}
    >
      {scrollPosition > 39960 && scrollPosition <= 41000 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={39960}
          scroll1={39960}
          TimeScroll1={40460}
          scroll0={40960}
          numberScale={300}
          text={true}
        >
          <h1>Ti</h1>
          <h1>Asspetiamo</h1>
        </CenterFade>
      ) : null}
      {scrollPosition > 40710 && scrollPosition <= 41710 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={40710}
          scroll1={40710}
          TimeScroll1={41210}
          scroll0={41710}
          numberScale={300}
          text={true}
        >
          <h1>DALLE</h1>
          <h1>11:00</h1>
        </CenterFade>
      ) : null}
      {scrollPosition > 41460 && scrollPosition <= 42460 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={41460}
          scroll1={41460}
          TimeScroll1={41960}
          scroll0={42460}
          numberScale={300}
          text={true}
        >
          <h1>ALLE</h1>
          <h1>00:30</h1>
        </CenterFade>
      ) : null}
      {scrollPosition > 42210 && scrollPosition <= 44210 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={42210}
          scroll1={42210}
          TimeScroll1={43210}
          scroll0={44210}
          numberScale={200}
          text={true}
        >
          <h1>NEW</h1>
          <h1>BRIDGE</h1>
          <h1>SPRIZZA</h1>
        </CenterFade>
      ) : null}
      {scrollPosition > 44200 && scrollPosition <= 45200 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={44200}
          scroll1={44200}
          TimeScroll1={44700}
          scroll0={45200}
          numberScale={300}
          text={true}
        >
          <h1>LE NOSTRE</h1>
          <h1>BIRRE</h1>
        </CenterFade>
      ) : null}
      {scrollPosition > 44950 && scrollPosition <= 45950 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={44950}
          scroll1={44950}
          TimeScroll1={45450}
          scroll0={45950}
          numberScale={300}
          text={true}
        >
          <h1>Ichnusa non filtrata</h1>
          <h1>Messina</h1>
          <h1>Moretti</h1>
          <h1>Peroni Gluten Free</h1>
        </CenterFade>
      ) : null}
      {scrollPosition > 45880 && scrollPosition <= 46330 ? (
        <CenterFade
          scrollPosition={scrollPosition}
          scroll={45880}
          scroll1={45880}
          TimeScroll1={46080}
          scroll0={46330}
          numberScale={100}
          text={true}
        >
          <ContactScroll />
        </CenterFade>
      ) : null}
      {scrollPosition >= 46370 ? <ContactScroll /> : null}
      <Footer />
    </CompScale>
  );
};

export default Final;
